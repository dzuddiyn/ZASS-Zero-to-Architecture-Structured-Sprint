import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { runCheck } from '../src/check.js';

async function makeProject(zass, actionPlan = null) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-action-plan-'));
  await fs.writeFile(path.join(dir, 'ZASS.md'), zass, 'utf8');
  if (actionPlan != null) {
    await fs.writeFile(path.join(dir, 'ACTION_PLAN.md'), actionPlan, 'utf8');
  }
  return dir;
}

function has(report, level, code, text = '') {
  return report.results.some((item) =>
    item.level === level && item.code === code && item.message.includes(text)
  );
}

function baseZass({
  progress = '70',
  status = 'READY FOR DRAFT ARCH',
  version = '0.3.9',
  blockerLine = '**Critical blockers:** R-001'
} = {}) {
  return `# Project

**ZASS method:** v${version}

## R-001 — Current critical blocker

Risk body.

## E-001 — Architecture experiment

Experiment body.

${blockerLine}

## Canonical ZERO → ARCHITECTURE assessment

**ZERO → ARCHITECTURE score:**
[███████░░░] ${progress}% — ${status}
`;
}

function baseActionPlan({
  progress = '70',
  status = 'READY FOR DRAFT ARCH',
  version = '0.3.9',
  blockers = 'R-001',
  related = 'E-001, R-001'
} = {}) {
  return `# ACTION PLAN

## 🏗️ ZERO → ARCHITECTURE SNAPSHOT

- **Progress:** [███████░░░] ${progress}%
- **Status:** ${status}
- **Source:** \`ZASS_Kerani_Core.md\` v${version} — same Git commit
- **Critical blockers:** ${blockers}

## Work

- **Related ZASS:** ${related}
`;
}

test('CR-010 v0.3 Z200 passes when ACTION_PLAN is absent', async (t) => {
  const dir = await makeProject(baseZass());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z200', 'not present'));
});

test('CR-010 v0.3 matching ACTION_PLAN snapshot passes Z200-Z205', async (t) => {
  const dir = await makeProject(baseZass(), baseActionPlan());
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  for (const code of ['Z200', 'Z201', 'Z202', 'Z203', 'Z204', 'Z205']) {
    assert.ok(has(report, 'pass', code), `expected PASS ${code}`);
  }
});

test('CR-010 v0.3 Z201 errors on stale readiness progress', async (t) => {
  const dir = await makeProject(baseZass({ progress: '85' }), baseActionPlan({ progress: '70' }));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z201', 'stale'));
});

test('CR-010 v0.3 Z202 errors on readiness status mismatch', async (t) => {
  const dir = await makeProject(
    baseZass({ status: 'DRAFT ARCH UNDER REVIEW' }),
    baseActionPlan({ status: 'READY FOR DRAFT ARCH' })
  );
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z202', 'does not match'));
});

test('CR-010 v0.3 Z203 errors on stale ZASS source version', async (t) => {
  const dir = await makeProject(baseZass({ version: '0.3.9' }), baseActionPlan({ version: '0.3.8' }));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z203', 'stale ZASS version'));
});

test('CR-010 v0.3 Z204 errors on an explicitly referenced missing ZASS ID', async (t) => {
  const dir = await makeProject(baseZass(), baseActionPlan({ related: 'E-001, D-999' }));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 1);
  assert.ok(has(report, 'error', 'Z204', 'D-999'));
});

test('CR-010 v0.3 accepts shared valid E-xxx identity', async (t) => {
  const dir = await makeProject(baseZass(), baseActionPlan({ related: 'E-001' }));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'pass', 'Z204'));
});

test('CR-010 v0.3 Z205 warns when ACTION_PLAN says no blockers but ZASS has blocker IDs', async (t) => {
  const dir = await makeProject(baseZass(), baseActionPlan({ blockers: 'None currently identified' }));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'warning', 'Z205', 'R-001'));
});

test('CR-010 v0.3 Z200 warns when ACTION_PLAN exists without canonical snapshot', async (t) => {
  const dir = await makeProject(baseZass(), '# ACTION PLAN\n\nNo snapshot yet.\n');
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);
  assert.equal(report.exitCode, 0);
  assert.ok(has(report, 'warning', 'Z200', 'snapshot was not found'));
});
