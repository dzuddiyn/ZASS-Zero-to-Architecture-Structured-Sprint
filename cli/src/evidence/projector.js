import fs from 'node:fs/promises';
import path from 'node:path';
import {
  EVIDENCE_CLASSES,
  TRACK_E_QUESTIONS
} from './constants.js';
import {
  EVIDENCE_DIRECTORY_RELATIVE_PATH,
  EVIDENCE_FILENAME_PREFIX
} from './store.js';
import { validateEvidenceReceipt } from './validator.js';

function increment(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

function mapToSortedObject(map) {
  return Object.fromEntries(
    [...map.entries()].sort(([a], [b]) => String(a).localeCompare(String(b)))
  );
}

function emptyCountMap(keys) {
  return new Map(keys.map((key) => [key, 0]));
}

function median(values) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle];
  return (sorted[middle - 1] + sorted[middle]) / 2;
}

function ratingSummary(values, byTarget, byFeedbackCategory) {
  const distribution = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]);
  for (const value of values) increment(distribution, value);

  return {
    sampleSize: values.length,
    distribution: mapToSortedObject(distribution),
    median: median(values),
    mean: values.length === 0
      ? null
      : values.reduce((sum, value) => sum + value, 0) / values.length,
    byTarget: mapToSortedObject(byTarget),
    feedbackCategoryCounts: mapToSortedObject(byFeedbackCategory)
  };
}

function createAccumulator() {
  return {
    evidenceClassCounts: emptyCountMap(EVIDENCE_CLASSES),
    questionCoverage: emptyCountMap(TRACK_E_QUESTIONS),
    resultCounts: new Map(),
    diagnosticCodeCounts: new Map(),
    observationCodeCounts: new Map(),
    osCounts: new Map(),
    runtimeVersionCounts: new Map(),
    zassCliVersionCounts: new Map(),
    createZassVersionCounts: new Map(),
    projectShapeCounts: new Map(),
    methodCounts: new Map(),
    languageCounts: new Map(),
    severityCounts: new Map(),
    reproducibilityCounts: new Map(),
    ratingValues: [],
    ratingTargetCounts: new Map(),
    feedbackCategoryCounts: new Map()
  };
}

function accumulateRecord(acc, record) {
  increment(acc.evidenceClassCounts, record.evidenceClass);

  for (const question of record.questions) {
    increment(acc.questionCoverage, question);
  }

  if (typeof record.result === 'string' && record.evidenceClass !== 'USER-FEEDBACK' && record.evidenceClass !== 'INFERRED') {
    increment(acc.resultCounts, record.result);
  }

  for (const code of record.diagnosticCodes ?? []) {
    increment(acc.diagnosticCodeCounts, code);
  }

  if (record.observationCode) increment(acc.observationCodeCounts, record.observationCode);
  if (record.os) increment(acc.osCounts, record.os);
  if (record.runtimeVersion) increment(acc.runtimeVersionCounts, record.runtimeVersion);
  if (record.zassCliVersion) increment(acc.zassCliVersionCounts, record.zassCliVersion);
  if (record.createZassVersion) increment(acc.createZassVersionCounts, record.createZassVersion);
  if (record.projectShape) increment(acc.projectShapeCounts, record.projectShape);
  if (record.method) increment(acc.methodCounts, record.method);
  if (record.language) increment(acc.languageCounts, record.language);
  if (record.severity) increment(acc.severityCounts, record.severity);
  if (record.reproducible) increment(acc.reproducibilityCounts, record.reproducible);

  if (record.evidenceClass === 'USER-RATED') {
    acc.ratingValues.push(record.result);
    increment(acc.ratingTargetCounts, record.ratingTarget);
  }

  if (
    record.evidenceClass === 'USER-FEEDBACK' &&
    record.feedbackCategory
  ) {
    increment(acc.feedbackCategoryCounts, record.feedbackCategory);
  }
}

export async function readEvidenceReceipts(projectDir) {
  const root = path.resolve(projectDir);
  const evidenceDir = path.join(root, EVIDENCE_DIRECTORY_RELATIVE_PATH);

  let entries;
  try {
    entries = await fs.readdir(evidenceDir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        directory: evidenceDir,
        considered: 0,
        included: [],
        excluded: [],
        incompleteCoverage: false
      };
    }
    throw error;
  }

  const candidates = entries
    .filter((entry) =>
      entry.isFile() &&
      entry.name.startsWith(EVIDENCE_FILENAME_PREFIX) &&
      entry.name.endsWith('.json')
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const included = [];
  const excluded = [];

  for (const filename of candidates) {
    const filePath = path.join(evidenceDir, filename);
    let source;

    try {
      source = await fs.readFile(filePath, 'utf8');
    } catch (error) {
      excluded.push({
        filename,
        reason: 'READ_FAILED',
        errors: [error.message]
      });
      continue;
    }

    let receipt;
    try {
      receipt = JSON.parse(source);
    } catch {
      excluded.push({
        filename,
        reason: 'MALFORMED_JSON',
        errors: ['receipt is not valid JSON']
      });
      continue;
    }

    const validation = validateEvidenceReceipt(receipt);
    if (!validation.valid) {
      excluded.push({
        filename,
        reason: 'INVALID_RECEIPT',
        errors: validation.errors
      });
      continue;
    }

    included.push({
      filename,
      receipt
    });
  }

  return {
    directory: evidenceDir,
    considered: candidates.length,
    included,
    excluded,
    incompleteCoverage: excluded.length > 0
  };
}

export function projectEvidence(readResult) {
  const acc = createAccumulator();
  let evidenceRecordCount = 0;

  for (const item of readResult.included) {
    for (const record of item.receipt.records) {
      evidenceRecordCount += 1;
      accumulateRecord(acc, record);
    }
  }

  return {
    coverage: {
      receiptsConsidered: readResult.considered,
      validReceiptsIncluded: readResult.included.length,
      invalidOrUnreadableReceiptsExcluded: readResult.excluded.length,
      evidenceRecordsIncluded: evidenceRecordCount,
      incompleteCoverage: readResult.incompleteCoverage,
      excludedReceipts: readResult.excluded.map(({ filename, reason }) => ({
        filename,
        reason
      }))
    },
    evidenceClassCounts: mapToSortedObject(acc.evidenceClassCounts),
    questionCoverage: mapToSortedObject(acc.questionCoverage),
    resultCounts: mapToSortedObject(acc.resultCounts),
    diagnosticCodeCounts: mapToSortedObject(acc.diagnosticCodeCounts),
    observationCodeCounts: mapToSortedObject(acc.observationCodeCounts),
    environmentCoverage: {
      os: mapToSortedObject(acc.osCounts),
      runtimeVersion: mapToSortedObject(acc.runtimeVersionCounts),
      zassCliVersion: mapToSortedObject(acc.zassCliVersionCounts),
      createZassVersion: mapToSortedObject(acc.createZassVersionCounts)
    },
    projectCoverage: {
      projectShape: mapToSortedObject(acc.projectShapeCounts),
      method: mapToSortedObject(acc.methodCounts),
      language: mapToSortedObject(acc.languageCounts)
    },
    severityCounts: mapToSortedObject(acc.severityCounts),
    reproducibilityCounts: mapToSortedObject(acc.reproducibilityCounts),
    ratings: ratingSummary(
      acc.ratingValues,
      acc.ratingTargetCounts,
      acc.feedbackCategoryCounts
    )
  };
}

export async function readAndProjectEvidence(projectDir) {
  const readResult = await readEvidenceReceipts(projectDir);
  return {
    readResult,
    projection: projectEvidence(readResult)
  };
}
