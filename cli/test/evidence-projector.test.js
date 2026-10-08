import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  buildEvidenceReceipt,
  generateEvidenceId,
  projectEvidence,
  readAndProjectEvidence,
  readEvidenceReceipts,
  writeEvidenceReceipt
} from '../src/evidence/index.js';

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-evidence-projector-'));
}

function automatedRecord(overrides = {}) {
  return {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'AUTOMATED',
    questions: ['Q4', 'Q8'],
    result: 'PASS',
    os: 'windows',
    runtimeVersion: '20.0.0',
    zassCliVersion: '0.4.0',
    projectShape: 'full-zass-single-file',
    method: 'zass',
    language: 'my',
    diagnosticCodes: ['Z003'],
    ...overrides
  };
}

function ratingRecord(value, target = 'overall-workflow') {
  return {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'USER-RATED',
    questions: ['Q9'],
    result: value,
    ratingTarget: target,
    consent: true
  };
}

function feedbackRecord(category) {
  return {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'USER-FEEDBACK',
    questions: ['Q5', 'Q9'],
    result: 'Short optional feedback.',
    feedbackCategory: category,
    consent: true
  };
}

test('E3-T04 reader returns empty complete coverage when evidence directory is absent', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = await readEvidenceReceipts(dir);

  assert.equal(result.considered, 0);
  assert.deepEqual(result.included, []);
  assert.deepEqual(result.excluded, []);
  assert.equal(result.incompleteCoverage, false);
});

test('E3-T04 reader includes only canonical evidence filenames and sorts deterministically', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const first = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'r-b',
    createdAt: '2026-10-08T20:00:00+08:00'
  });
  const second = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'r-a',
    createdAt: '2026-10-08T20:01:00+08:00'
  });

  await writeEvidenceReceipt(dir, first);
  await writeEvidenceReceipt(dir, second);

  const evidenceDir = path.join(dir, '.zass', 'evidence');
  await fs.writeFile(path.join(evidenceDir, 'notes.txt'), 'ignore me', 'utf8');
  await fs.writeFile(path.join(evidenceDir, 'other.json'), '{}', 'utf8');

  const result = await readEvidenceReceipts(dir);

  assert.equal(result.considered, 2);
  assert.deepEqual(
    result.included.map((item) => item.filename),
    ['zass-evidence-r-a.json', 'zass-evidence-r-b.json']
  );
  assert.equal(result.excluded.length, 0);
});

test('E3-T04 reader isolates malformed and contract-invalid receipts with incomplete coverage', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const valid = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'r-valid',
    createdAt: '2026-10-08T20:00:00+08:00'
  });
  await writeEvidenceReceipt(dir, valid);

  const evidenceDir = path.join(dir, '.zass', 'evidence');
  await fs.writeFile(
    path.join(evidenceDir, 'zass-evidence-r-malformed.json'),
    '{broken',
    'utf8'
  );
  await fs.writeFile(
    path.join(evidenceDir, 'zass-evidence-r-invalid.json'),
    JSON.stringify({
      receiptVersion: '0.1',
      receiptId: 'r-invalid',
      createdAt: '2026-10-08T20:00:00+08:00',
      source: 'field-runner',
      records: []
    }),
    'utf8'
  );

  const result = await readEvidenceReceipts(dir);

  assert.equal(result.considered, 3);
  assert.equal(result.included.length, 1);
  assert.equal(result.excluded.length, 2);
  assert.equal(result.incompleteCoverage, true);
  assert.deepEqual(
    result.excluded.map((item) => item.reason).sort(),
    ['INVALID_RECEIPT', 'MALFORMED_JSON']
  );
});

test('E3-T04 projector derives deterministic factual counts and rating statistics only', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    receiptId: 'r-summary',
    createdAt: '2026-10-08T20:00:00+08:00',
    records: [
      automatedRecord({
        evidenceId: 'e-auto-1',
        result: 'PASS',
        diagnosticCodes: ['Z003', 'Z300']
      }),
      {
        evidenceId: 'e-field-1',
        evidenceClass: 'FIELD-OBSERVED',
        questions: ['Q5', 'Q8'],
        result: 'FRICTION',
        observationCode: 'navigation-repeat',
        severity: 'MEDIUM',
        reproducible: 'YES',
        projectShape: 'experimental-scale-out'
      },
      ratingRecord(4),
      ratingRecord(5, 'tooling'),
      feedbackRecord('friction-ceremony')
    ]
  });

  await writeEvidenceReceipt(dir, receipt);

  const { readResult, projection } = await readAndProjectEvidence(dir);
  const again = projectEvidence(readResult);

  assert.deepEqual(again, projection);
  assert.equal(projection.coverage.receiptsConsidered, 1);
  assert.equal(projection.coverage.validReceiptsIncluded, 1);
  assert.equal(projection.coverage.invalidOrUnreadableReceiptsExcluded, 0);
  assert.equal(projection.coverage.evidenceRecordsIncluded, 5);
  assert.equal(projection.coverage.incompleteCoverage, false);

  assert.equal(projection.evidenceClassCounts.AUTOMATED, 1);
  assert.equal(projection.evidenceClassCounts['FIELD-OBSERVED'], 1);
  assert.equal(projection.evidenceClassCounts['USER-RATED'], 2);
  assert.equal(projection.evidenceClassCounts['USER-FEEDBACK'], 1);
  assert.equal(projection.questionCoverage.Q9, 3);

  assert.equal(projection.resultCounts.PASS, 1);
  assert.equal(projection.resultCounts.FRICTION, 1);
  assert.equal('Short optional feedback.' in projection.resultCounts, false);

  assert.equal(projection.diagnosticCodeCounts.Z003, 1);
  assert.equal(projection.diagnosticCodeCounts.Z300, 1);
  assert.equal(projection.observationCodeCounts['navigation-repeat'], 1);
  assert.equal(projection.environmentCoverage.os.windows, 1);
  assert.equal(projection.projectCoverage.projectShape['experimental-scale-out'], 1);
  assert.equal(projection.severityCounts.MEDIUM, 1);
  assert.equal(projection.reproducibilityCounts.YES, 1);

  assert.equal(projection.ratings.sampleSize, 2);
  assert.equal(projection.ratings.distribution['4'], 1);
  assert.equal(projection.ratings.distribution['5'], 1);
  assert.equal(projection.ratings.median, 4.5);
  assert.equal(projection.ratings.mean, 4.5);
  assert.equal(projection.ratings.byTarget['overall-workflow'], 1);
  assert.equal(projection.ratings.byTarget.tooling, 1);
  assert.equal(projection.ratings.feedbackCategoryCounts['friction-ceremony'], 1);

  assert.equal('confidence' in projection, false);
  assert.equal('finding' in projection, false);
  assert.equal('outcome' in projection, false);
});

test('E3-T04 projection surfaces excluded receipt coverage without inventing evidence', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const evidenceDir = path.join(dir, '.zass', 'evidence');
  await fs.mkdir(evidenceDir, { recursive: true });
  await fs.writeFile(
    path.join(evidenceDir, 'zass-evidence-r-bad.json'),
    '{not-json',
    'utf8'
  );

  const { projection } = await readAndProjectEvidence(dir);

  assert.equal(projection.coverage.receiptsConsidered, 1);
  assert.equal(projection.coverage.validReceiptsIncluded, 0);
  assert.equal(projection.coverage.invalidOrUnreadableReceiptsExcluded, 1);
  assert.equal(projection.coverage.incompleteCoverage, true);
  assert.deepEqual(projection.coverage.excludedReceipts, [
    {
      filename: 'zass-evidence-r-bad.json',
      reason: 'MALFORMED_JSON'
    }
  ]);
  assert.equal(projection.coverage.evidenceRecordsIncluded, 0);
  assert.equal(projection.ratings.sampleSize, 0);
  assert.equal(projection.ratings.mean, null);
  assert.equal(projection.ratings.median, null);
});
