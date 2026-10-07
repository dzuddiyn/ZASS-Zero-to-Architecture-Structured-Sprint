import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runDiff, formatDiff } from '../src/diff.js';

const here = path.dirname(fileURLToPath(import.meta.url));

function git(cwd, ...args) {
  const result = spawnSync('git', ['-C', cwd, ...args], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
  return result.stdout;
}

async function initRepo(files = {}) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-diff-'));
  git(dir, 'init');
  git(dir, 'config', 'user.name', 'ZASS Test');
  git(dir, 'config', 'user.email', 'zass-test@example.invalid');

  for (const [name, content] of Object.entries(files)) {
    await fs.writeFile(path.join(dir, name), content, 'utf8');
  }

  git(dir, 'add', '.');
  git(dir, 'commit', '-m', 'baseline');
  return dir;
}

function state(report, name) {
  return report.files.find((file) => file.name === name)?.state;
}

function baseZass({
  progress = '70',
  status = 'READY FOR DRAFT ARCH',
  version = '0.3.9',
  blocker = 'R-003',
  decisionStatus = 'LOCKED',
  decisionId = 'D-004'
} = {}) {
  return `# Project

**ZASS method:** v${version}

## R-003 — Existing blocker

Risk body.

## ${decisionId} — Storage

**Status:** ${decisionStatus}
**Decision:** Use local storage.

**Critical blockers:** ${blocker}

## Canonical ZERO → ARCHITECTURE assessment

**ZERO → ARCHITECTURE score:**
[███████░░░] ${progress}% — ${status}
`;
}

test('CR-010 v0.4b reports NO_CHANGE for an unchanged Full ZASS project', async (t) => {
  const dir = await initRepo({
    'ZASS.md': baseZass(),
    'ACTION_PLAN.md': '# ACTION PLAN\n',
    'ARCHITECTURE.md': '# ARCHITECTURE\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runDiff(dir);

  assert.equal(report.state, 'NO_CHANGE');
  assert.equal(report.baseline, 'HEAD');
  assert.equal(state(report, 'ZASS.md'), 'UNCHANGED');
  assert.equal(state(report, 'ACTION_PLAN.md'), 'UNCHANGED');
  assert.equal(state(report, 'ARCHITECTURE.md'), 'UNCHANGED');
  assert.deepEqual(report.ids.added, []);
  assert.deepEqual(report.ids.removed, []);
  assert.equal(report.showReadiness, false);
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4b distinguishes MODIFIED, DELETED and ADDED primary files', async (t) => {
  const dir = await initRepo({
    'ZASS.md': baseZass(),
    'ACTION_PLAN.md': '# ACTION PLAN\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.appendFile(path.join(dir, 'ZASS.md'), '\nChanged note.\n', 'utf8');
  await fs.rm(path.join(dir, 'ACTION_PLAN.md'));
  await fs.writeFile(path.join(dir, 'ARCHITECTURE.md'), '# ARCHITECTURE\n', 'utf8');

  const report = await runDiff(dir);

  assert.equal(report.state, 'CHANGED');
  assert.equal(state(report, 'ZASS.md'), 'MODIFIED');
  assert.equal(state(report, 'ACTION_PLAN.md'), 'DELETED');
  assert.equal(state(report, 'ARCHITECTURE.md'), 'ADDED');
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4b reports canonical ZASS IDs added and removed', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const current = baseZass()
    .replace('## R-003 — Existing blocker\n\nRisk body.\n\n', '')
    .replace(
      '## D-004 — Storage',
      '## D-004 — Storage\n\n## D-014 — New decision\n\n**Decision:** New path.\n\n## R-009 — New blocker'
    );
  await fs.writeFile(path.join(dir, 'ZASS.md'), current, 'utf8');

  const report = await runDiff(dir);

  assert.deepEqual(report.ids.added, ['D-014', 'R-009']);
  assert.deepEqual(report.ids.removed, ['R-003']);
});

test('CR-010 v0.4b reports LOCKED and SUPERSEDED state-set deltas without validation judgement', async (t) => {
  const before = `# Project

## D-004 — Existing

**Status:** LOCKED
**Decision:** Existing path.

## D-008 — Legacy

**Decision:** Legacy path.
`;
  const dir = await initRepo({ 'ZASS.md': before });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const after = `# Project

## D-004 — Existing

**Decision:** Existing path.

## D-008 — Legacy

**Status:** SUPERSEDED
**Decision:** Legacy path.

## D-014 — New

**Status:** LOCKED
**Decision:** New path.
`;
  await fs.writeFile(path.join(dir, 'ZASS.md'), after, 'utf8');

  const report = await runDiff(dir);

  assert.deepEqual(report.decisions.locked.added, ['D-014']);
  assert.deepEqual(report.decisions.locked.removed, ['D-004']);
  assert.deepEqual(report.decisions.superseded.added, ['D-008']);
  assert.deepEqual(report.decisions.superseded.removed, []);
});

test('CR-010 v0.4b reports declared readiness and critical blocker deltas', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const current = baseZass({
    progress: '80',
    status: 'DRAFT ARCH UNDER REVIEW',
    version: '0.4.0',
    blocker: 'R-009'
  }).replace('## R-003 — Existing blocker', '## R-009 — New blocker');
  await fs.writeFile(path.join(dir, 'ZASS.md'), current, 'utf8');

  const report = await runDiff(dir);

  assert.equal(report.readiness.progress, '70% → 80%');
  assert.equal(report.readiness.status, 'READY FOR DRAFT ARCH → DRAFT ARCH UNDER REVIEW');
  assert.equal(report.readiness.version, '0.3.9 → 0.4.0');
  assert.deepEqual(report.readiness.blockersAdded, ['R-009']);
  assert.deepEqual(report.readiness.blockersRemoved, ['R-003']);
  assert.equal(report.showReadiness, true);
});

test('CR-010 v0.4b renders N/A for a readiness scalar absent on one side', async (t) => {
  const dir = await initRepo({ 'ZASS.md': '# Project\n' });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.writeFile(path.join(dir, 'ZASS.md'), baseZass(), 'utf8');
  const report = await runDiff(dir);

  assert.equal(report.readiness.progress, 'N/A → 70%');
  assert.equal(report.readiness.status, 'N/A → READY FOR DRAFT ARCH');
  assert.equal(report.readiness.version, 'N/A → 0.3.9');
});

test('CR-010 v0.4b supports a newly added ZASS.md when HEAD did not contain it', async (t) => {
  const dir = await initRepo({ 'README.md': '# Baseline\n' });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.writeFile(path.join(dir, 'ZASS.md'), baseZass(), 'utf8');
  const report = await runDiff(dir);

  assert.equal(report.state, 'CHANGED');
  assert.equal(state(report, 'ZASS.md'), 'ADDED');
  assert.equal(report.exitCode, 0);
  assert.ok(report.ids.added.includes('D-004'));
});

test('CR-010 v0.4b supports deletion of current ZASS.md when HEAD contains it', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.rm(path.join(dir, 'ZASS.md'));
  const report = await runDiff(dir);

  assert.equal(report.state, 'CHANGED');
  assert.equal(state(report, 'ZASS.md'), 'DELETED');
  assert.equal(report.exitCode, 0);
  assert.ok(report.ids.removed.includes('D-004'));
});

test('CR-010 v0.4b reports NOT_APPLICABLE when no ZASS surface exists on either side', async (t) => {
  const dir = await initRepo({ 'README.md': '# Baseline\n' });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runDiff(dir);

  assert.equal(report.state, 'NOT_APPLICABLE');
  assert.equal(report.baseline, 'HEAD');
  assert.match(report.reason, /No Full ZASS surface/);
  assert.equal(report.exitCode, 1);
});

test('CR-010 v0.4b reports UNAVAILABLE when local Git HEAD is absent', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-diff-no-git-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), baseZass(), 'utf8');

  const report = await runDiff(dir);

  assert.equal(report.state, 'UNAVAILABLE');
  assert.equal(report.baseline, 'N/A');
  assert.match(report.reason, /Local Git HEAD unavailable/);
  assert.equal(report.exitCode, 2);
});

test('CR-010 v0.4b is read-only', async (t) => {
  const dir = await initRepo({
    'ZASS.md': baseZass(),
    'ACTION_PLAN.md': '# ACTION PLAN\n',
    'ARCHITECTURE.md': '# ARCHITECTURE\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.appendFile(path.join(dir, 'ZASS.md'), '\nWorking change.\n', 'utf8');
  const beforeStatus = git(dir, 'status', '--porcelain=v1', '--untracked-files=all');
  const before = await fs.readFile(path.join(dir, 'ZASS.md'), 'utf8');

  await runDiff(dir);

  const afterStatus = git(dir, 'status', '--porcelain=v1', '--untracked-files=all');
  const after = await fs.readFile(path.join(dir, 'ZASS.md'), 'utf8');
  assert.equal(afterStatus, beforeStatus);
  assert.equal(after, before);
});

test('CR-010 v0.4b formatter is ZASS-aware and does not print raw patch content', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.appendFile(path.join(dir, 'ZASS.md'), '\nSECRET-LIKE-NOTE-THAT-MUST-NOT-BE-ECHOED\n', 'utf8');
  const output = formatDiff(await runDiff(dir));

  assert.match(output, /^ZASS DIFF/m);
  assert.match(output, /Diff:\s+CHANGED/);
  assert.match(output, /ZASS\.md\s+MODIFIED/);
  assert.match(output, /ZASS IDs:/);
  assert.match(output, /Decision state:/);
  assert.doesNotMatch(output, /SECRET-LIKE-NOTE-THAT-MUST-NOT-BE-ECHOED/);
  assert.doesNotMatch(output, /^@@|^\+\+\+|^---/m);
});

test('CLI zass diff returns exit code 0 for a successful comparison', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'diff'], {
    cwd: dir,
    encoding: 'utf8'
  });

  assert.equal(result.status, 0);
  assert.match(result.stdout, /ZASS DIFF/);
  assert.match(result.stdout, /Diff:\s+NO_CHANGE/);
});

test('CLI zass diff rejects arguments with exit code 2', async (t) => {
  const dir = await initRepo({ 'ZASS.md': baseZass() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'diff', '--baseline', 'HEAD'], {
    cwd: dir,
    encoding: 'utf8'
  });

  assert.equal(result.status, 2);
  assert.match(result.stderr, /zass diff/);
});


test('CR-010 v0.4b field regression ignores CRLF/LF representation differences', async (t) => {
  const dir = await initRepo({
    'ZASS.md': baseZass(),
    'ACTION_PLAN.md': '# ACTION PLAN\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const zass = await fs.readFile(path.join(dir, 'ZASS.md'), 'utf8');
  const action = await fs.readFile(path.join(dir, 'ACTION_PLAN.md'), 'utf8');
  await fs.writeFile(path.join(dir, 'ZASS.md'), zass.replace(/\n/g, '\r\n'), 'utf8');
  await fs.writeFile(path.join(dir, 'ACTION_PLAN.md'), action.replace(/\n/g, '\r\n'), 'utf8');

  const report = await runDiff(dir);

  assert.equal(report.state, 'NO_CHANGE');
  assert.equal(state(report, 'ZASS.md'), 'UNCHANGED');
  assert.equal(state(report, 'ACTION_PLAN.md'), 'UNCHANGED');
});
