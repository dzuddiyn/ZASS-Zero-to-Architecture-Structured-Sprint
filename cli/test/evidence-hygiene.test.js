import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EVIDENCE_GITIGNORE_ENTRY,
  buildEvidenceReceipt,
  ensureEvidenceGitIgnore,
  generateEvidenceId,
  writeEvidenceReceipt
} from '../src/evidence/index.js';

const runnerPath = fileURLToPath(
  new URL('../../tools/track-e/runner.js', import.meta.url)
);

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-evidence-hygiene-'));
}

function run(args) {
  return spawnSync(process.execPath, [runnerPath, ...args], {
    encoding: 'utf8'
  });
}

function parseStdout(result) {
  assert.notEqual(result.stdout.trim(), '');
  return JSON.parse(result.stdout);
}

function receipt() {
  return buildEvidenceReceipt({
    source: 'field-runner',
    receiptId: 'r-retention-check',
    createdAt: '2026-10-08T21:00:00+08:00',
    records: [{
      evidenceId: generateEvidenceId(),
      evidenceClass: 'AUTOMATED',
      questions: ['Q4'],
      result: 'PASS'
    }]
  });
}

test('E3-T08 helper creates .gitignore with evidence entry when absent', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = await ensureEvidenceGitIgnore(dir);

  assert.equal(result.state, 'CREATED');
  assert.equal(result.changed, true);
  assert.equal(result.entry, EVIDENCE_GITIGNORE_ENTRY);

  const content = await fs.readFile(path.join(dir, '.gitignore'), 'utf8');
  assert.equal(content, '.zass/evidence/\n');
});

test('E3-T08 helper preserves existing .gitignore content and appends once', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const gitignore = path.join(dir, '.gitignore');
  await fs.writeFile(gitignore, 'node_modules/\n.env\n', 'utf8');

  const first = await ensureEvidenceGitIgnore(dir);
  const second = await ensureEvidenceGitIgnore(dir);
  const content = await fs.readFile(gitignore, 'utf8');

  assert.equal(first.state, 'UPDATED');
  assert.equal(first.changed, true);
  assert.equal(second.state, 'UNCHANGED');
  assert.equal(second.changed, false);
  assert.equal(content, 'node_modules/\n.env\n.zass/evidence/\n');
  assert.equal(
    content.split('\n').filter((line) => line === '.zass/evidence/').length,
    1
  );
});

test('E3-T08 helper recognizes existing trimmed evidence entry without duplication', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const gitignore = path.join(dir, '.gitignore');
  await fs.writeFile(gitignore, 'dist/\n  .zass/evidence/  \n', 'utf8');

  const result = await ensureEvidenceGitIgnore(dir);
  const content = await fs.readFile(gitignore, 'utf8');

  assert.equal(result.state, 'UNCHANGED');
  assert.equal(result.changed, false);
  assert.equal(content, 'dist/\n  .zass/evidence/  \n');
});

test('E3-T08 prepare command is explicit and idempotent', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const first = run(['prepare', '--project', dir]);
  assert.equal(first.status, 0, first.stderr || first.stdout);
  assert.equal(parseStdout(first).state, 'CREATED');

  const second = run(['prepare', '--project', dir]);
  assert.equal(second.status, 0, second.stderr || second.stdout);
  assert.equal(parseStdout(second).state, 'UNCHANGED');
});

test('E3-T08 recording evidence does not auto-edit .gitignore', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = run([
    'automated',
    '--project', dir,
    '--result', 'PASS',
    '--questions', 'Q4'
  ]);
  assert.equal(result.status, 0, result.stderr || result.stdout);

  await assert.rejects(
    fs.stat(path.join(dir, '.gitignore')),
    (error) => error.code === 'ENOENT'
  );
});

test('E3-T08 helper performs no receipt cleanup or deletion', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const written = await writeEvidenceReceipt(dir, receipt());
  assert.equal(written.state, 'SAVED');
  const before = await fs.readFile(written.path, 'utf8');

  await ensureEvidenceGitIgnore(dir);
  const after = await fs.readFile(written.path, 'utf8');

  assert.equal(after, before);
});

test('E3-T08 evidence directory is not required for project validity or prepare', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await ensureEvidenceGitIgnore(dir);

  await assert.rejects(
    fs.stat(path.join(dir, '.zass', 'evidence')),
    (error) => error.code === 'ENOENT'
  );
});
