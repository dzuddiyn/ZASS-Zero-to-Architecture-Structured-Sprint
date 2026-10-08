import test from 'node:test';
import assert from 'node:assert/strict';
import {
  EVIDENCE_CLASSES,
  EVIDENCE_RECEIPT_VERSION,
  FEEDBACK_CATEGORIES,
  MAX_FEEDBACK_LENGTH,
  PROJECT_SHAPES,
  RATING_TARGETS,
  TRACK_E_QUESTIONS,
  validateEvidenceReceipt
} from '../src/evidence/index.js';

function canonicalReceipt(recordOverrides = {}, rootOverrides = {}) {
  return {
    receiptVersion: EVIDENCE_RECEIPT_VERSION,
    receiptId: 'r-01JABCDEF123',
    createdAt: '2026-10-08T19:10:00+08:00',
    source: 'zass-cli',
    records: [
      {
        evidenceId: 'e-001',
        evidenceClass: 'AUTOMATED',
        questions: ['Q4', 'Q8'],
        result: 'PASS',
        os: 'windows',
        zassCliVersion: '0.4.0',
        projectShape: 'full-zass-single-file',
        method: 'zass',
        language: 'my',
        machineMetadataState: 'VALID',
        command: 'check',
        exitCode: 0,
        diagnosticCodes: ['Z003'],
        ...recordOverrides
      }
    ],
    ...rootOverrides
  };
}

test('E3-T02 frozen evidence constants match Track E v0.1 contracts', () => {
  assert.equal(EVIDENCE_RECEIPT_VERSION, '0.1');
  assert.deepEqual(EVIDENCE_CLASSES, [
    'AUTOMATED',
    'FIELD-OBSERVED',
    'USER-RATED',
    'USER-FEEDBACK',
    'CASE-STUDY',
    'INFERRED'
  ]);
  assert.deepEqual(TRACK_E_QUESTIONS, [
    'Q1', 'Q2', 'Q3', 'Q4', 'Q5',
    'Q6', 'Q7', 'Q8', 'Q9', 'Q10'
  ]);
  assert.ok(PROJECT_SHAPES.includes('experimental-scale-out'));
  assert.deepEqual(RATING_TARGETS, [
    'overall-workflow',
    'tooling',
    'continuation-handoff',
    'scale-out-experiment'
  ]);
  assert.ok(FEEDBACK_CATEGORIES.includes('friction-ceremony'));
  assert.equal(MAX_FEEDBACK_LENGTH, 500);
});

test('E3-T02 validator accepts canonical AUTOMATED receipt', () => {
  const result = validateEvidenceReceipt(canonicalReceipt());
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
});

test('E3-T02 validator accepts the other frozen evidence-class shapes', () => {
  const records = [
    {
      evidenceId: 'e-field',
      evidenceClass: 'FIELD-OBSERVED',
      questions: ['Q5', 'Q8'],
      result: 'FRICTION',
      observationCode: 'navigation-repeat',
      severity: 'MEDIUM',
      reproducible: 'YES'
    },
    {
      evidenceId: 'e-rating',
      evidenceClass: 'USER-RATED',
      questions: ['Q9'],
      result: 4,
      ratingTarget: 'overall-workflow',
      consent: true
    },
    {
      evidenceId: 'e-feedback',
      evidenceClass: 'USER-FEEDBACK',
      questions: ['Q5', 'Q9'],
      result: 'Helpful overall, but navigation took extra steps.',
      feedbackCategory: 'friction-ceremony',
      relatedRatingEvidenceId: 'e-rating',
      consent: true
    },
    {
      evidenceId: 'e-case',
      evidenceClass: 'CASE-STUDY',
      questions: ['Q10'],
      result: 'REVIEWED',
      evidenceRefs: ['e-field', 'e-rating']
    },
    {
      evidenceId: 'e-inferred',
      evidenceClass: 'INFERRED',
      questions: ['Q10'],
      result: 'Repeated navigation friction may justify documentation review.',
      evidenceRefs: ['e-field']
    }
  ];

  const receipt = canonicalReceipt();
  receipt.records = records;

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
});

test('E3-T02 validator rejects unsupported receipt version, source and question', () => {
  const receipt = canonicalReceipt(
    { questions: ['Q11'] },
    { receiptVersion: '0.2', source: 'remote-agent' }
  );

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => /receiptVersion/.test(error)));
  assert.ok(result.errors.some((error) => /source is not supported/.test(error)));
  assert.ok(result.errors.some((error) => /unsupported question: Q11/.test(error)));
});

test('E3-T02 validator rejects unknown/private fields by strict allow-list', () => {
  const receipt = canonicalReceipt(
    { projectName: 'secret-project' },
    { repoUrl: 'https://example.invalid/private.git' }
  );

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, false);
  assert.ok(result.errors.includes('unsupported field: repoUrl'));
  assert.ok(result.errors.includes('records[0].unsupported field: projectName'));
});

test('E3-T02 validator rejects class-specific fields on the wrong evidence class', () => {
  const receipt = canonicalReceipt({
    consent: true,
    ratingTarget: 'overall-workflow'
  });

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, false);
  assert.ok(result.errors.includes('records[0].unsupported field: consent'));
  assert.ok(result.errors.includes('records[0].unsupported field: ratingTarget'));
});

test('E3-T02 validator enforces explicit USER-RATED consent, Q9 and 1-5 integer result', () => {
  const receipt = canonicalReceipt({
    evidenceClass: 'USER-RATED',
    questions: ['Q1'],
    result: 6,
    ratingTarget: 'overall-workflow',
    consent: false
  });

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => /integer from 1 to 5/.test(error)));
  assert.ok(result.errors.some((error) => /consent must be true/.test(error)));
  assert.ok(result.errors.some((error) => /must include Q9/.test(error)));
});

test('E3-T02 validator enforces feedback consent/category and 500-character cap', () => {
  const receipt = canonicalReceipt({
    evidenceClass: 'USER-FEEDBACK',
    questions: ['Q9'],
    result: 'x'.repeat(MAX_FEEDBACK_LENGTH + 1),
    feedbackCategory: 'secret-category',
    consent: false
  });

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => /at most 500 characters/.test(error)));
  assert.ok(result.errors.some((error) => /consent must be true/.test(error)));
  assert.ok(result.errors.some((error) => /feedbackCategory is not supported/.test(error)));
});

test('E3-T02 validator requires evidence references for CASE-STUDY and INFERRED', () => {
  const caseReceipt = canonicalReceipt({
    evidenceClass: 'CASE-STUDY',
    questions: ['Q10'],
    result: 'REVIEWED',
    evidenceRefs: []
  });
  const inferredReceipt = canonicalReceipt({
    evidenceClass: 'INFERRED',
    questions: ['Q10'],
    result: 'A reviewer interpretation',
    evidenceRefs: []
  });

  const caseResult = validateEvidenceReceipt(caseReceipt);
  const inferredResult = validateEvidenceReceipt(inferredReceipt);

  assert.equal(caseResult.valid, false);
  assert.equal(inferredResult.valid, false);
  assert.ok(caseResult.errors.some((error) => /at least one evidence reference/.test(error)));
  assert.ok(inferredResult.errors.some((error) => /at least one evidence reference/.test(error)));
});

test('E3-T02 validator is pure and does not mutate the receipt', () => {
  const receipt = canonicalReceipt();
  const before = structuredClone(receipt);

  validateEvidenceReceipt(receipt);

  assert.deepEqual(receipt, before);
});
