import {
  AUTOMATED_RESULTS,
  CASE_STUDY_RESULTS,
  EVIDENCE_CLASSES,
  EVIDENCE_RECEIPT_VERSION,
  EVIDENCE_SOURCES,
  FEEDBACK_CATEGORIES,
  FIELD_OBSERVED_RESULTS,
  FIELD_SEVERITIES,
  LANGUAGES,
  MACHINE_METADATA_STATES,
  MAX_FEEDBACK_LENGTH,
  METHODS,
  PROJECT_SHAPES,
  RATING_TARGETS,
  REPRODUCIBILITY_VALUES,
  TRACK_E_QUESTIONS
} from './constants.js';

const ROOT_FIELDS = new Set([
  'receiptVersion',
  'receiptId',
  'createdAt',
  'source',
  'notes',
  'records'
]);

const BASE_RECORD_FIELDS = new Set([
  'evidenceId',
  'evidenceClass',
  'questions',
  'result'
]);

const COMMON_METADATA_FIELDS = new Set([
  'os',
  'runtimeVersion',
  'zassCliVersion',
  'createZassVersion',
  'method',
  'language',
  'projectShape',
  'machineMetadataState',
  'command',
  'exitCode',
  'diagnosticCodes',
  'durationMs'
]);

const CLASS_FIELDS = Object.freeze({
  AUTOMATED: new Set(),
  'FIELD-OBSERVED': new Set([
    'observationCode',
    'severity',
    'reproducible'
  ]),
  'USER-RATED': new Set([
    'consent',
    'ratingTarget'
  ]),
  'USER-FEEDBACK': new Set([
    'consent',
    'feedbackCategory',
    'relatedRatingEvidenceId'
  ]),
  'CASE-STUDY': new Set(['evidenceRefs']),
  INFERRED: new Set(['evidenceRefs'])
});

const OPAQUE_ID = /^[A-Za-z][A-Za-z0-9._:-]{0,127}$/;
const TOKEN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
const DIAGNOSTIC_CODE = /^[A-Z][A-Z0-9_-]{0,31}$/;

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function hasOwn(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function addUnknownFieldErrors(value, allowed, prefix, errors) {
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) {
      errors.push(`${prefix}unsupported field: ${key}`);
    }
  }
}

function validateOpaqueId(value, label, errors) {
  if (typeof value !== 'string' || !OPAQUE_ID.test(value)) {
    errors.push(`${label} must be a non-empty opaque identifier using safe token characters`);
  }
}

function validateNonEmptyString(value, label, errors) {
  if (typeof value !== 'string' || value.length === 0) {
    errors.push(`${label} must be a non-empty string`);
  }
}

function validateOptionalToken(record, key, label, errors) {
  if (!hasOwn(record, key)) return;
  if (typeof record[key] !== 'string' || !TOKEN.test(record[key])) {
    errors.push(`${label} must be a bounded token string`);
  }
}

function validateEnum(value, allowed, label, errors) {
  if (!allowed.includes(value)) {
    errors.push(`${label} is not supported`);
  }
}

function validateQuestions(value, label, errors) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${label} must contain at least one Track E question`);
    return;
  }

  const seen = new Set();
  for (const question of value) {
    if (!TRACK_E_QUESTIONS.includes(question)) {
      errors.push(`${label} contains unsupported question: ${String(question)}`);
      continue;
    }
    if (seen.has(question)) {
      errors.push(`${label} contains duplicate question: ${question}`);
    }
    seen.add(question);
  }
}

function validateEvidenceRefs(value, label, errors) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${label} must contain at least one evidence reference`);
    return;
  }

  for (const ref of value) {
    if (typeof ref !== 'string' || !OPAQUE_ID.test(ref)) {
      errors.push(`${label} contains invalid evidence reference`);
    }
  }
}

function validateCommonMetadata(record, label, errors) {
  validateOptionalToken(record, 'os', `${label}.os`, errors);
  validateOptionalToken(record, 'runtimeVersion', `${label}.runtimeVersion`, errors);
  validateOptionalToken(record, 'zassCliVersion', `${label}.zassCliVersion`, errors);
  validateOptionalToken(record, 'createZassVersion', `${label}.createZassVersion`, errors);
  validateOptionalToken(record, 'command', `${label}.command`, errors);

  if (hasOwn(record, 'method')) {
    validateEnum(record.method, METHODS, `${label}.method`, errors);
  }

  if (hasOwn(record, 'language')) {
    validateEnum(record.language, LANGUAGES, `${label}.language`, errors);
  }

  if (hasOwn(record, 'projectShape')) {
    validateEnum(record.projectShape, PROJECT_SHAPES, `${label}.projectShape`, errors);
  }

  if (hasOwn(record, 'machineMetadataState')) {
    validateEnum(
      record.machineMetadataState,
      MACHINE_METADATA_STATES,
      `${label}.machineMetadataState`,
      errors
    );
  }

  if (hasOwn(record, 'exitCode') && !Number.isInteger(record.exitCode)) {
    errors.push(`${label}.exitCode must be an integer`);
  }

  if (
    hasOwn(record, 'durationMs') &&
    (!Number.isFinite(record.durationMs) || record.durationMs < 0)
  ) {
    errors.push(`${label}.durationMs must be a non-negative finite number`);
  }

  if (hasOwn(record, 'diagnosticCodes')) {
    if (!Array.isArray(record.diagnosticCodes)) {
      errors.push(`${label}.diagnosticCodes must be an array`);
    } else {
      for (const code of record.diagnosticCodes) {
        if (typeof code !== 'string' || !DIAGNOSTIC_CODE.test(code)) {
          errors.push(`${label}.diagnosticCodes contains invalid code`);
        }
      }
    }
  }
}

function validateClassSpecific(record, label, errors) {
  switch (record.evidenceClass) {
    case 'AUTOMATED':
      validateEnum(record.result, AUTOMATED_RESULTS, `${label}.result`, errors);
      break;

    case 'FIELD-OBSERVED':
      validateEnum(record.result, FIELD_OBSERVED_RESULTS, `${label}.result`, errors);
      validateOptionalToken(record, 'observationCode', `${label}.observationCode`, errors);
      if (hasOwn(record, 'severity')) {
        validateEnum(record.severity, FIELD_SEVERITIES, `${label}.severity`, errors);
      }
      if (hasOwn(record, 'reproducible')) {
        validateEnum(
          record.reproducible,
          REPRODUCIBILITY_VALUES,
          `${label}.reproducible`,
          errors
        );
      }
      break;

    case 'USER-RATED':
      if (!Number.isInteger(record.result) || record.result < 1 || record.result > 5) {
        errors.push(`${label}.result must be an integer from 1 to 5`);
      }
      if (record.consent !== true) {
        errors.push(`${label}.consent must be true`);
      }
      validateEnum(record.ratingTarget, RATING_TARGETS, `${label}.ratingTarget`, errors);
      if (Array.isArray(record.questions) && !record.questions.includes('Q9')) {
        errors.push(`${label}.questions must include Q9 for USER-RATED evidence`);
      }
      break;

    case 'USER-FEEDBACK':
      if (
        typeof record.result !== 'string' ||
        record.result.length === 0 ||
        record.result.length > MAX_FEEDBACK_LENGTH
      ) {
        errors.push(
          `${label}.result must be non-empty feedback of at most ${MAX_FEEDBACK_LENGTH} characters`
        );
      }
      if (record.consent !== true) {
        errors.push(`${label}.consent must be true`);
      }
      if (hasOwn(record, 'feedbackCategory')) {
        validateEnum(
          record.feedbackCategory,
          FEEDBACK_CATEGORIES,
          `${label}.feedbackCategory`,
          errors
        );
      }
      if (hasOwn(record, 'relatedRatingEvidenceId')) {
        validateOpaqueId(
          record.relatedRatingEvidenceId,
          `${label}.relatedRatingEvidenceId`,
          errors
        );
      }
      break;

    case 'CASE-STUDY':
      validateEnum(record.result, CASE_STUDY_RESULTS, `${label}.result`, errors);
      validateEvidenceRefs(record.evidenceRefs, `${label}.evidenceRefs`, errors);
      break;

    case 'INFERRED':
      validateNonEmptyString(record.result, `${label}.result`, errors);
      validateEvidenceRefs(record.evidenceRefs, `${label}.evidenceRefs`, errors);
      break;

    default:
      break;
  }
}

function validateRecord(record, index, errors) {
  const label = `records[${index}]`;

  if (!isPlainObject(record)) {
    errors.push(`${label} must be an object`);
    return;
  }

  const evidenceClass = record.evidenceClass;
  const classFields = CLASS_FIELDS[evidenceClass] ?? new Set();
  const allowedFields = new Set([
    ...BASE_RECORD_FIELDS,
    ...COMMON_METADATA_FIELDS,
    ...classFields
  ]);
  addUnknownFieldErrors(record, allowedFields, `${label}.`, errors);

  validateOpaqueId(record.evidenceId, `${label}.evidenceId`, errors);
  validateEnum(evidenceClass, EVIDENCE_CLASSES, `${label}.evidenceClass`, errors);
  validateQuestions(record.questions, `${label}.questions`, errors);

  if (!hasOwn(record, 'result')) {
    errors.push(`${label}.result is required`);
  }

  validateCommonMetadata(record, label, errors);

  if (EVIDENCE_CLASSES.includes(evidenceClass)) {
    validateClassSpecific(record, label, errors);
  }
}

export function validateEvidenceReceipt(value) {
  const errors = [];

  if (!isPlainObject(value)) {
    return {
      valid: false,
      errors: ['receipt root must be a JSON object']
    };
  }

  addUnknownFieldErrors(value, ROOT_FIELDS, '', errors);

  if (value.receiptVersion !== EVIDENCE_RECEIPT_VERSION) {
    errors.push(`receiptVersion must be exactly ${EVIDENCE_RECEIPT_VERSION}`);
  }

  validateOpaqueId(value.receiptId, 'receiptId', errors);

  if (
    typeof value.createdAt !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T/.test(value.createdAt) ||
    !Number.isFinite(Date.parse(value.createdAt))
  ) {
    errors.push('createdAt must be a valid ISO-8601 timestamp string');
  }

  validateEnum(value.source, EVIDENCE_SOURCES, 'source', errors);

  if (hasOwn(value, 'notes') && typeof value.notes !== 'string') {
    errors.push('notes must be a string when present');
  }

  if (!Array.isArray(value.records) || value.records.length === 0) {
    errors.push('records must contain at least one evidence record');
  } else {
    value.records.forEach((record, index) => validateRecord(record, index, errors));
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
