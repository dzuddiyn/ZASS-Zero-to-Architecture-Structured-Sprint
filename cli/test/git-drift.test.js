import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { runCheck } from '../src/check.js';
import { extractDecisionState } from '../src/parser.js';

function git(cwd, ...args) {
  const result = spawnSync('git', ['-C', cwd, ...args], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
  return result.stdout.trim();
}

async function makeRepo(initialZass, { commitZass = true } = {}) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-drift-'));
  git(dir, 'init');
  git(dir, 'config', 'user.name', 'ZASS Test');
  git(dir, 'config', 'user.email', 'zass-test@example.invalid');
  await fs.writeFile(path.join(dir, 'ZASS.md'), initialZass, 'utf8');

  if (commitZass) {
    git(dir, 'add', 'ZASS.md');
    git(dir, 'commit', '-m', 'baseline');
  } else {
    await fs.writeFile(path.join(dir, 'README.md'), '# fixture\n', 'utf8');
    git(dir, 'add', 'README.md');
    git(dir, 'commit', '-m', 'baseline without ZASS');
  }

  return dir;
}

function baseline(decision = 'Use local storage.') {
  return `# Test project

## D-001 — Storage

**Decision:** ${decision}
**Drivers:** Keep the system simple.
**Consequence:** Data stays on-device.

# LOCKED DECISIONS

- **L-001 / D-001 — LOCKED:** local storage.
`;
}

function has(report, level, code, text = '') {
  return report.results.some((item) =>
    item.level === level && item.code === code && item.message.includes(text)
  );
}


test('QA-001 ignores explanatory LOCKED/SUPERSEDED prose as authority state', () => {
  const state = extractDecisionState(`# Test project

## D-001 — Storage

**Decision:** Use local storage.
**Drivers:** Keep the system simple.

# Notes

D-001 is LOCKED in an old example.
> Historical note: D-001 was SUPERSEDED in another project.
`);

  assert.equal(state.lockedIds.has('D-001'), false);
  assert.equal(state.supersededIds.has('D-001'), false);
  assert.equal(state.decisions.get('D-001').locked, false);
  assert.equal(state.decisions.get('D-001').superseded, false);
});

test('QA-001 preserves canonical LOCKED and SUPERSEDED section records', () => {
  const locked = extractDecisionState(`# Test project

## D-001 — Storage

**Decision:** Use local storage.

# 13. LOCKED DECISIONS

- **L-001 / D-001 — LOCKED:** local storage.
`);
  assert.equal(locked.lockedIds.has('D-001'), true);
  assert.equal(locked.decisions.get('D-001').locked, true);

  const superseded = extractDecisionState(`# Test project

## D-001 — Storage

**Decision:** Use local storage.

# SUPERSEDED DECISIONS

- **L-001 / D-001 — SUPERSEDED:** replaced by D-002.
`);
  assert.equal(superseded.supersededIds.has('D-001'), true);
  assert.equal(superseded.decisions.get('D-001').superseded, true);
});

test('QA-001 preserves explicit decision Status metadata', () => {
  const locked = extractDecisionState(`# Test project

## D-001 — Storage

**Status:** LOCKED
**Decision:** Use local storage.
`);
  assert.equal(locked.lockedIds.has('D-001'), true);
  assert.equal(locked.decisions.get('D-001').locked, true);
});

test('QA-001 regression: explanatory LOCKED prose does not trigger Z101', async (t) => {
  const initial = `# Test project

## D-001 — Storage

**Decision:** Use local storage.
**Drivers:** Keep the system simple.

# Notes

The following sentence is explanatory only: D-001 is LOCKED in an old example.
`;
  const dir = await makeRepo(initial);
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const current = initial.replace('Use local storage.', 'Use cloud storage.');
  await fs.writeFile(path.join(dir, 'ZASS.md'), current, 'utf8');

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z101'));
});

test('v0.2 passes an unchanged LOCKED decision', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z101'));
});

test('v0.2 ignores formatting-only decision changes', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const formatted = baseline().replace('**Decision:** Use local storage.  ', 'Decision:   Use local storage.');
  await fs.writeFile(path.join(dir, 'ZASS.md'), formatted, 'utf8');
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z101'));
});

test('v0.2 errors when a LOCKED decision is modified', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), baseline('Use cloud storage.'), 'utf8');
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z101', 'modified: D-001'));
});

test('v0.2 errors when a LOCKED decision record is removed', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), '# Test project\n\n# LOCKED DECISIONS\n', 'utf8');
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z101', 'removed: D-001'));
});

test('v0.2 accepts an explicit Supersedes relation when old content is preserved', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const current = `# Test project

## D-001 — Storage

**Decision:** Use local storage.
**Drivers:** Keep the system simple.
**Consequence:** Data stays on-device.

## D-002 — Storage replacement

**Decision:** Use encrypted cloud sync.
**Supersedes:** D-001

# SUPERSEDED DECISIONS

- **L-001 / D-001 — SUPERSEDED:** replaced by D-002.
`;
  await fs.writeFile(path.join(dir, 'ZASS.md'), current, 'utf8');
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z101'));
});

test('v0.2 warns and keeps v0.1 checks running outside Git', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-no-git-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), '# Test project\n', 'utf8');
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'warning', 'Z100'));
  assert.ok(has(report, 'pass', 'Z001'));
});

test('v0.2 warns when Git HEAD has no committed ZASS.md', async (t) => {
  const dir = await makeRepo('# Uncommitted ZASS\n', { commitZass: false });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'warning', 'Z100', 'HEAD has no committed ZASS.md'));
});


test('v0.2.1 detects committed LOCKED drift against an explicit baseline ref', async (t) => {
  const dir = await makeRepo(baseline());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const baselineSha = git(dir, 'rev-parse', 'HEAD');
  await fs.writeFile(path.join(dir, 'ZASS.md'), baseline('Use cloud storage.'), 'utf8');
  git(dir, 'add', 'ZASS.md');
  git(dir, 'commit', '-m', 'change locked decision');

  const defaultReport = await runCheck(dir);
  assert.equal(defaultReport.exitCode, 0);
  assert.ok(has(defaultReport, 'pass', 'Z101'));

  const ciReport = await runCheck(dir, { baselineRef: baselineSha });
  assert.equal(ciReport.exitCode, 1);
  assert.ok(has(ciReport, 'error', 'Z101', 'modified: D-001'));
});
