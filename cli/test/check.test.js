import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runCheck, formatResults } from '../src/check.js';
import { extractDecisionState, extractRecordDefinitions } from '../src/parser.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const fixture = (name) => path.join(here, 'fixtures', name);

function codes(report, level) {
  return report.results.filter((item) => !level || item.level === level).map((item) => item.code);
}



test('CR-010 v0.2 field compatibility ignores bold list index/reference entries for Z001 definitions', () => {
  const markdown = `# Real-project shaped fixture

## R-027 — Client-side entitlement bypass

Risk body.

## D-028 — Client-Owned External API Accounts / Billing

**Status:** LOCKED by owner on 2026-09-28

Decision body.

# Risk summary

- **R-027:** Client-side entitlement bypass summary.

# Decision ledger

- **D-028:** Client-Owned External API Accounts / Billing summary.

# 11A. LOCKED RECORDS — D → L

- **L-002 → D-028:** Client-owned API accounts.
`;

  const parsed = extractRecordDefinitions(markdown);
  assert.deepEqual(parsed.records.map((record) => record.id), ['R-027', 'D-028']);
  assert.deepEqual(parsed.malformed, []);
});

test('CR-010 v0.2 field compatibility recognizes compound DECIDED / LOCKED status', () => {
  const state = extractDecisionState(`# Project

## D-037 — Provider-Agnostic Finance Bridge

**Status:** DECIDED / LOCKED

**Decision:** Use a provider-agnostic bridge.
`);

  assert.equal(state.lockedIds.has('D-037'), true);
  assert.equal(state.decisions.get('D-037').locked, true);
});

test('CR-010 v0.2 field compatibility does not infer current-decision authority from status prose about other IDs', () => {
  const state = extractDecisionState(`# Project

## D-001 — Review note

**Status:** D-028 to D-031 remain LOCKED. D-027 is SUPERSEDED.

This status line summarizes other records.
`);

  assert.equal(state.lockedIds.has('D-001'), false);
  assert.equal(state.supersededIds.has('D-001'), false);
});

test('CR-010 v0.2 field compatibility recognizes explicit LOCKED RECORDS D references', () => {
  const state = extractDecisionState(`# Project

## D-001 — Storage

**Decision:** Use local storage.

# 11A. LOCKED RECORDS — D → L

- **L-001 → D-001:** Storage is locked.
`);

  assert.equal(state.lockedIds.has('D-001'), true);
  assert.equal(state.decisions.get('D-001').locked, true);
});

test('CR-010 v0.2 field compatibility recognizes Locks D-xxx inside explicit LOCKED RECORDS section', () => {
  const state = extractDecisionState(`# Project

## D-001 — Storage

**Decision:** Use local storage.

## Locked records (canonical D → L references)

- **L-001:** Locks D-001 — local storage.
`);

  assert.equal(state.lockedIds.has('D-001'), true);
  assert.equal(state.decisions.get('D-001').locked, true);
});

test('QA-003 keeps a shorter inner fence inside a longer fenced block hidden', () => {
  const markdown = [
    '````markdown',
    '## D-001 — Example',
    'Status: LOCKED',
    '```',
    '## D-002 — Still inside outer block',
    'Status: LOCKED',
    '````'
  ].join('\n');

  const parsed = extractRecordDefinitions(markdown);
  assert.deepEqual(parsed.records, []);
  assert.deepEqual(parsed.malformed, []);
});

test('QA-003 resolves a valid local Markdown link containing balanced parentheses', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-link-parens-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.mkdir(path.join(dir, 'docs'));
  await fs.writeFile(path.join(dir, 'docs', 'file_(draft).md'), '# Draft\n', 'utf8');
  await fs.writeFile(
    path.join(dir, 'ZASS.md'),
    '# Test project\n\nSee [the draft](docs/file_(draft).md).\n',
    'utf8'
  );

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(!codes(report, 'error').includes('Z003'));
  assert.ok(codes(report, 'pass').includes('Z003'));
});

test('QA-007 detects a broken explicit reference-style local Markdown link', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-link-reference-broken-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.writeFile(
    path.join(dir, 'ZASS.md'),
    '# Test project\n\nSee [documentation][design].\n\n[design]: docs/missing.md\n',
    'utf8'
  );

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(codes(report, 'error').includes('Z003'));
});

test('QA-007 resolves a valid explicit reference-style local Markdown link', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-link-reference-valid-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.mkdir(path.join(dir, 'docs'));
  await fs.writeFile(path.join(dir, 'docs', 'design.md'), '# Design\n', 'utf8');
  await fs.writeFile(
    path.join(dir, 'ZASS.md'),
    '# Test project\n\nSee [documentation][design].\n\n[design]: docs/design.md\n',
    'utf8'
  );

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(!codes(report, 'error').includes('Z003'));
  assert.ok(codes(report, 'pass').includes('Z003'));
});

test('QA-007 resolves a valid shortcut reference-style local Markdown link', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-link-reference-shortcut-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  await fs.mkdir(path.join(dir, 'docs'));
  await fs.writeFile(path.join(dir, 'docs', 'design.md'), '# Design\n', 'utf8');
  await fs.writeFile(
    path.join(dir, 'ZASS.md'),
    '# Test project\n\nSee [design].\n\n[design]: docs/design.md\n',
    'utf8'
  );

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(!codes(report, 'error').includes('Z003'));
  assert.ok(codes(report, 'pass').includes('Z003'));
});

test('valid fixture passes all v0.1 checks', async () => {
  const report = await runCheck(fixture('valid'));
  assert.equal(report.exitCode, 0);
  assert.equal(report.errorCount, 0);
  assert.equal(report.warningCount, 0);
});

test('Z001 detects duplicate record IDs', async () => {
  const report = await runCheck(fixture('duplicate-id'));
  assert.equal(report.exitCode, 1);
  assert.ok(codes(report, 'error').includes('Z001'));
});

test('Z002 detects malformed record IDs conservatively', async () => {
  const report = await runCheck(fixture('malformed-id'));
  assert.equal(report.exitCode, 1);
  assert.ok(codes(report, 'error').includes('Z002'));
});

test('Z003 detects broken local Markdown references', async () => {
  const report = await runCheck(fixture('broken-reference'));
  assert.equal(report.exitCode, 1);
  assert.ok(codes(report, 'error').includes('Z003'));
});

test('Z004 warns when a current readiness score lacks Evidence Confidence', async () => {
  const report = await runCheck(fixture('missing-evidence'));
  assert.equal(report.exitCode, 0);
  assert.ok(codes(report, 'warning').includes('Z004'));
});

test('Z005 warns on high-signal secret patterns without printing the value', async () => {
  const report = await runCheck(fixture('possible-secret'));
  const output = formatResults(report);
  assert.equal(report.exitCode, 0);
  assert.ok(codes(report, 'warning').includes('Z005'));
  assert.ok(!output.includes('sk-THISISASYNTHETICKEY123456789'));
});

test('CLI returns exit code 1 for validation errors', () => {
  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'check'], {
    cwd: fixture('duplicate-id'),
    encoding: 'utf8'
  });
  assert.equal(result.status, 1);
  assert.match(result.stdout, /ERROR Z001/);
});

test('CLI returns exit code 2 for unsupported usage', () => {
  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'status'], {
    cwd: fixture('valid'),
    encoding: 'utf8'
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Usage: zass check/);
});

test('file discovery requires ZASS.md', async () => {
  const report = await runCheck(fixture('missing-zass'));
  assert.equal(report.exitCode, 1);
  assert.ok(codes(report, 'error').includes('Z000'));
});

test('plain ID references are not counted as duplicate record definitions', async () => {
  const report = await runCheck(fixture('valid'));
  assert.ok(!codes(report, 'error').includes('Z001'));
});
