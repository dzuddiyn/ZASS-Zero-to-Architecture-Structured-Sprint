import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildEvidenceReceipt,
  buildUserFeedbackRecord,
  buildUserRatingRecord,
  generateEvidenceId,
  readAndProjectEvidence,
  validateEvidenceReceipt,
  writeEvidenceReceipt
} from '../src/evidence/index.js';

const runnerPath = fileURLToPath(
  new URL('../../tools/track-e/runner.js', import.meta.url)
);

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-evidence-regression-'));
}

function automatedRecord(overrides = {}) {
  return {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'AUTOMATED',
    questions: ['Q4'],
    result: 'PASS',
    ...overrides
  };
}

function receiptWith(record, overrides = {}) {
  return buildEvidenceReceipt({
    source: 'field-runner',
    records: [record],
    receiptId: 'r-regression',
    createdAt: '2026-10-08T20:45:00+08:00',
    ...overrides
  });
}

function runRunner(args) {
  return spawnSync(process.execPath, [runnerPath, ...args], {
    encoding: 'utf8'
  });
}

function parseStdout(result) {
  assert.notEqual(result.stdout.trim(), '');
  return JSON.parse(result.stdout);
}

test('E3-T07 rejects unknown evidence class and unknown bounded result', () => {
  const unknownClass = receiptWith({
    evidenceId: 'e-unknown-class',
    evidenceClass: 'SECRET-CLASS',
    questions: ['Q4'],
    result: 'PASS'
  });
  const unknownResult = receiptWith({
    evidenceId: 'e-unknown-result',
    evidenceClass: 'AUTOMATED',
    questions: ['Q4'],
    result: 'MAYBE'
  });

  const classResult = validateEvidenceReceipt(unknownClass);
  const resultResult = validateEvidenceReceipt(unknownResult);

  assert.equal(classResult.valid, false);
  assert.ok(classResult.errors.some((error) => /evidenceClass is not supported/.test(error)));

  assert.equal(resultResult.valid, false);
  assert.ok(resultResult.errors.some((error) => /result is not supported/.test(error)));
});

test('E3-T07 rejects duplicate questions and invalid optional factual metadata', () => {
  const receipt = receiptWith(automatedRecord({
    questions: ['Q4', 'Q4'],
    exitCode: '0',
    durationMs: -1,
    diagnosticCodes: ['bad code']
  }));

  const result = validateEvidenceReceipt(receipt);

  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => /duplicate question: Q4/.test(error)));
  assert.ok(result.errors.some((error) => /exitCode must be an integer/.test(error)));
  assert.ok(result.errors.some((error) => /durationMs must be a non-negative/.test(error)));
  assert.ok(result.errors.some((error) => /diagnosticCodes contains invalid code/.test(error)));
});

test('E3-T07 minimal valid evidence requires no ZASS Markdown or raw semantic content', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const receipt = receiptWith(automatedRecord({
    evidenceId: 'e-minimal'
  }), {
    receiptId: 'r-minimal'
  });

  const written = await writeEvidenceReceipt(dir, receipt);
  assert.equal(written.state, 'SAVED');

  await assert.rejects(
    fs.stat(path.join(dir, 'ZASS.md')),
    (error) => error.code === 'ENOENT'
  );

  const { projection } = await readAndProjectEvidence(dir);
  assert.equal(projection.coverage.validReceiptsIncluded, 1);
  assert.equal(projection.coverage.evidenceRecordsIncluded, 1);
  assert.equal(projection.evidenceClassCounts.AUTOMATED, 1);
});

test('E3-T07 valid receipt survives beside malformed and contract-invalid receipts', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const valid = receiptWith(automatedRecord({
    evidenceId: 'e-valid'
  }), {
    receiptId: 'r-valid'
  });
  assert.equal((await writeEvidenceReceipt(dir, valid)).state, 'SAVED');

  const evidenceDir = path.join(dir, '.zass', 'evidence');
  await fs.writeFile(
    path.join(evidenceDir, 'zass-evidence-r-malformed.json'),
    '{broken',
    'utf8'
  );
  await fs.writeFile(
    path.join(evidenceDir, 'zass-evidence-r-invalid.json'),
    JSON.stringify({
      receiptVersion: '9.9',
      receiptId: 'r-invalid',
      createdAt: '2026-10-08T20:45:00+08:00',
      source: 'field-runner',
      records: [automatedRecord({ evidenceId: 'e-invalid' })]
    }),
    'utf8'
  );

  const { projection } = await readAndProjectEvidence(dir);

  assert.equal(projection.coverage.receiptsConsidered, 3);
  assert.equal(projection.coverage.validReceiptsIncluded, 1);
  assert.equal(projection.coverage.invalidOrUnreadableReceiptsExcluded, 2);
  assert.equal(projection.coverage.incompleteCoverage, true);
  assert.equal(projection.coverage.evidenceRecordsIncluded, 1);
  assert.equal(projection.evidenceClassCounts.AUTOMATED, 1);
});

test('E3-T07 duplicate receipt collision preserves original bytes exactly', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const original = receiptWith(automatedRecord({
    evidenceId: 'e-original'
  }), {
    receiptId: 'r-collision-regression'
  });

  const first = await writeEvidenceReceipt(dir, original);
  assert.equal(first.state, 'SAVED');

  const before = await fs.readFile(first.path, 'utf8');

  const replacement = structuredClone(original);
  replacement.records[0].result = 'FAIL';

  const second = await writeEvidenceReceipt(dir, replacement);
  assert.equal(second.state, 'COLLISION');
  assert.equal(second.saved, false);

  const after = await fs.readFile(first.path, 'utf8');
  assert.equal(after, before);
});

test('E3-T07 explicit user signal builders fail closed on absent consent and invalid references', () => {
  assert.throws(
    () => buildUserRatingRecord({ rating: 5, consent: false }),
    /explicit consent=true/
  );
  assert.throws(
    () => buildUserFeedbackRecord({
      feedback: 'Feedback',
      consent: false
    }),
    /explicit consent=true/
  );

  const feedback = buildUserFeedbackRecord({
    feedback: 'Feedback',
    consent: true,
    relatedRatingEvidenceId: 'invalid id with spaces',
    evidenceId: 'e-feedback-invalid-ref'
  });
  const result = validateEvidenceReceipt(receiptWith(feedback));

  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => /relatedRatingEvidenceId/.test(error)));
});

test('E3-T07 runner unknown command and invalid user signals write nothing', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const unknown = runRunner([
    'unknown-command',
    '--project', dir
  ]);
  assert.equal(unknown.status, 2);
  assert.equal(parseStdout(unknown).state, 'ERROR');

  const invalidRating = runRunner([
    'rate',
    '--project', dir,
    '--rating', '9',
    '--consent', 'true'
  ]);
  assert.equal(invalidRating.status, 2);
  assert.equal(parseStdout(invalidRating).state, 'ERROR');

  const tooLongFeedback = runRunner([
    'feedback',
    '--project', dir,
    '--feedback', 'x'.repeat(501),
    '--consent', 'true'
  ]);
  assert.equal(tooLongFeedback.status, 2);
  assert.equal(parseStdout(tooLongFeedback).state, 'ERROR');

  await assert.rejects(
    fs.stat(path.join(dir, '.zass', 'evidence')),
    (error) => error.code === 'ENOENT'
  );
});

test('E3-T07 privacy attempts fail closed without semantic-file mutation', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const zassPath = path.join(dir, 'ZASS.md');
  const semantic = '# ZASS\n\nLOCKED decision remains unchanged.\n';
  await fs.writeFile(zassPath, semantic, 'utf8');

  const receipt = receiptWith({
    evidenceId: 'e-private',
    evidenceClass: 'AUTOMATED',
    questions: ['Q4'],
    result: 'PASS',
    providerMemory: 'should never be stored'
  }, {
    receiptId: 'r-private-attempt'
  });

  const written = await writeEvidenceReceipt(dir, receipt);

  assert.equal(written.state, 'INVALID');
  assert.equal(written.saved, false);
  assert.ok(written.errors.some((error) => /prohibited privacy field: providerMemory/.test(error)));
  assert.equal(await fs.readFile(zassPath, 'utf8'), semantic);
});
