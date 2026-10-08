import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  EVIDENCE_DIRECTORY_RELATIVE_PATH,
  buildEvidenceReceipt,
  evidenceReceiptPath,
  generateEvidenceId,
  generateReceiptId,
  writeEvidenceReceipt
} from '../src/evidence/index.js';

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-evidence-store-'));
}

function automatedRecord() {
  return {
    evidenceId: generateEvidenceId(),
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
    diagnosticCodes: ['Z003']
  };
}

test('E3-T03 generated receipt/evidence IDs are opaque safe tokens', () => {
  const receiptId = generateReceiptId();
  const evidenceId = generateEvidenceId();

  assert.match(receiptId, /^r-[0-9a-f-]+$/);
  assert.match(evidenceId, /^e-[0-9a-f-]+$/);
  assert.equal(receiptId.includes(os.userInfo().username), false);
});

test('E3-T03 buildEvidenceReceipt generates v0.1 envelope without project identity', () => {
  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()]
  });

  assert.equal(receipt.receiptVersion, '0.1');
  assert.match(receipt.receiptId, /^r-/);
  assert.ok(Number.isFinite(Date.parse(receipt.createdAt)));
  assert.equal(receipt.source, 'field-runner');
  assert.equal('projectName' in receipt, false);
  assert.equal('repoUrl' in receipt, false);
});

test('E3-T03 valid receipt writes exactly once to .zass/evidence', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'r-test-write-once',
    createdAt: '2026-10-08T20:00:00+08:00'
  });

  const result = await writeEvidenceReceipt(dir, receipt);
  const expectedPath = evidenceReceiptPath(dir, receipt.receiptId);

  assert.equal(result.state, 'SAVED');
  assert.equal(result.saved, true);
  assert.equal(result.path, expectedPath);
  assert.deepEqual(result.errors, []);

  const stored = JSON.parse(await fs.readFile(expectedPath, 'utf8'));
  assert.deepEqual(stored, receipt);

  const second = await writeEvidenceReceipt(dir, receipt);
  assert.equal(second.state, 'COLLISION');
  assert.equal(second.saved, false);

  const after = JSON.parse(await fs.readFile(expectedPath, 'utf8'));
  assert.deepEqual(after, receipt);
});

test('E3-T03 invalid receipt writes nothing and does not create evidence directory', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'invalid receipt id',
    createdAt: '2026-10-08T20:00:00+08:00'
  });

  const result = await writeEvidenceReceipt(dir, receipt);

  assert.equal(result.state, 'INVALID');
  assert.equal(result.saved, false);
  assert.equal(result.path, null);
  assert.ok(result.errors.length > 0);

  await assert.rejects(
    fs.stat(path.join(dir, EVIDENCE_DIRECTORY_RELATIVE_PATH)),
    (error) => error.code === 'ENOENT'
  );
});

test('E3-T03 write failure never reports SAVED and does not modify semantic files', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const zassPath = path.join(dir, 'ZASS.md');
  const zassBefore = '# Semantic authority\n\nLOCKED.\n';
  await fs.writeFile(zassPath, zassBefore, 'utf8');

  await fs.writeFile(path.join(dir, '.zass'), 'blocking-file', 'utf8');

  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    records: [automatedRecord()],
    receiptId: 'r-write-failure',
    createdAt: '2026-10-08T20:00:00+08:00'
  });

  const result = await writeEvidenceReceipt(dir, receipt);

  assert.equal(result.state, 'WRITE_FAILED');
  assert.equal(result.saved, false);
  assert.ok(result.errors.some((error) => /cannot create evidence directory/.test(error)));
  assert.equal(await fs.readFile(zassPath, 'utf8'), zassBefore);
});

test('E3-T03 receipt path is always beneath explicit project root', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const receiptId = 'r-bounded-path';
  const receiptPath = evidenceReceiptPath(dir, receiptId);
  const evidenceDir = path.resolve(dir, EVIDENCE_DIRECTORY_RELATIVE_PATH);

  assert.equal(path.dirname(receiptPath), evidenceDir);
  assert.equal(path.basename(receiptPath), 'zass-evidence-r-bounded-path.json');
});
