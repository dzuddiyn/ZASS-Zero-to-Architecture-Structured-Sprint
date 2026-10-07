import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runStatus, formatStatus } from '../src/status.js';

const here = path.dirname(fileURLToPath(import.meta.url));

function git(cwd, ...args) {
  const result = spawnSync('git', ['-C', cwd, ...args], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
  return result.stdout;
}

async function makeRepo({ zass = '# Test project\n', actionPlan = null, architecture = null } = {}) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-status-'));
  git(dir, 'init');
  git(dir, 'config', 'user.name', 'ZASS Test');
  git(dir, 'config', 'user.email', 'zass-test@example.invalid');
  await fs.writeFile(path.join(dir, 'ZASS.md'), zass, 'utf8');

  if (actionPlan !== null) {
    await fs.writeFile(path.join(dir, 'ACTION_PLAN.md'), actionPlan, 'utf8');
  }

  if (architecture !== null) {
    await fs.writeFile(path.join(dir, 'ARCHITECTURE.md'), architecture, 'utf8');
  }

  git(dir, 'add', '.');
  git(dir, 'commit', '-m', 'baseline');
  return dir;
}

function fileState(report, name) {
  return report.files.find((file) => file.name === name)?.state;
}

test('CR-010 v0.4a detects a Full ZASS project and all primary files', async (t) => {
  const dir = await makeRepo({
    actionPlan: '# ACTION PLAN\n',
    architecture: '# ARCHITECTURE\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runStatus(dir);

  assert.equal(report.project, 'DETECTED');
  assert.equal(report.surface, 'FULL ZASS');
  assert.equal(fileState(report, 'ZASS.md'), 'FOUND');
  assert.equal(fileState(report, 'ACTION_PLAN.md'), 'FOUND');
  assert.equal(fileState(report, 'ARCHITECTURE.md'), 'FOUND');
  assert.equal(report.validation.state, 'PASS');
  assert.equal(report.validation.errorCount, 0);
  assert.equal(report.validation.warningCount, 0);
  assert.equal(report.git.state, 'CLEAN');
  assert.equal(report.git.baseline, 'HEAD');
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4a reports optional files as MISSING without failing', async (t) => {
  const dir = await makeRepo();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runStatus(dir);

  assert.equal(fileState(report, 'ZASS.md'), 'FOUND');
  assert.equal(fileState(report, 'ACTION_PLAN.md'), 'MISSING');
  assert.equal(fileState(report, 'ARCHITECTURE.md'), 'MISSING');
  assert.equal(report.validation.state, 'PASS');
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4a reports NOT_DETECTED and validation ERROR when ZASS.md is missing', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-status-missing-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runStatus(dir);

  assert.equal(report.project, 'NOT_DETECTED');
  assert.equal(report.surface, null);
  assert.equal(fileState(report, 'ZASS.md'), 'MISSING');
  assert.equal(report.validation.state, 'ERROR');
  assert.equal(report.validation.errorCount, 1);
  assert.equal(report.exitCode, 1);
});

test('CR-010 v0.4a summarizes warnings without failing', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-status-warning-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), '# Test project\n', 'utf8');

  const report = await runStatus(dir);

  assert.equal(report.validation.state, 'WARNING');
  assert.equal(report.validation.errorCount, 0);
  assert.ok(report.validation.warningCount >= 1);
  assert.equal(report.git.state, 'UNKNOWN');
  assert.equal(report.git.baseline, 'N/A');
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4a summarizes validation errors', async (t) => {
  const zass = `# Project

## D-001 — First

## D-001 — Duplicate
`;
  const dir = await makeRepo({ zass });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runStatus(dir);

  assert.equal(report.validation.state, 'ERROR');
  assert.ok(report.validation.errorCount >= 1);
  assert.equal(report.exitCode, 1);
});

test('CR-010 v0.4a reports Git CHANGED for tracked or untracked changes', async (t) => {
  const dir = await makeRepo();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'notes.txt'), 'untracked\n', 'utf8');

  const report = await runStatus(dir);

  assert.equal(report.git.state, 'CHANGED');
  assert.equal(report.git.baseline, 'HEAD');
});

test('CR-010 v0.4a keeps Git UNKNOWN non-fatal outside Git', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-status-no-git-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'ZASS.md'), '# Test project\n', 'utf8');

  const report = await runStatus(dir);

  assert.equal(report.git.state, 'UNKNOWN');
  assert.equal(report.git.baseline, 'N/A');
  assert.equal(report.exitCode, 0);
});

test('CR-010 v0.4a format is compact and factual', async (t) => {
  const dir = await makeRepo();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const output = formatStatus(await runStatus(dir));

  assert.match(output, /^ZASS STATUS/m);
  assert.match(output, /Project:\s+DETECTED/);
  assert.match(output, /Surface:\s+FULL ZASS/);
  assert.match(output, /ZASS\.md\s+FOUND/);
  assert.match(output, /ACTION_PLAN\.md\s+MISSING/);
  assert.match(output, /Validation:\s+PASS/);
  assert.match(output, /Git:\s+CLEAN/);
  assert.match(output, /Baseline:\s+HEAD/);
  assert.doesNotMatch(output, /progress|next action|lifecycle/i);
});

test('CR-010 v0.4a is read-only for a clean project', async (t) => {
  const dir = await makeRepo({
    actionPlan: '# ACTION PLAN\n',
    architecture: '# ARCHITECTURE\n'
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const beforeStatus = git(dir, 'status', '--porcelain=v1', '--untracked-files=all');
  const beforeZass = await fs.readFile(path.join(dir, 'ZASS.md'), 'utf8');
  const beforeAction = await fs.readFile(path.join(dir, 'ACTION_PLAN.md'), 'utf8');
  const beforeArchitecture = await fs.readFile(path.join(dir, 'ARCHITECTURE.md'), 'utf8');

  await runStatus(dir);

  const afterStatus = git(dir, 'status', '--porcelain=v1', '--untracked-files=all');
  assert.equal(afterStatus, beforeStatus);
  assert.equal(await fs.readFile(path.join(dir, 'ZASS.md'), 'utf8'), beforeZass);
  assert.equal(await fs.readFile(path.join(dir, 'ACTION_PLAN.md'), 'utf8'), beforeAction);
  assert.equal(await fs.readFile(path.join(dir, 'ARCHITECTURE.md'), 'utf8'), beforeArchitecture);
});

test('CLI zass status returns factual output and exit code 0', async (t) => {
  const dir = await makeRepo();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'status'], {
    cwd: dir,
    encoding: 'utf8'
  });

  assert.equal(result.status, 0);
  assert.match(result.stdout, /ZASS STATUS/);
  assert.match(result.stdout, /Project:\s+DETECTED/);
  assert.match(result.stdout, /Git:\s+CLEAN/);
});

test('CLI zass status rejects arguments with exit code 2', async (t) => {
  const dir = await makeRepo();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const cli = path.join(here, '..', 'bin', 'zass.js');
  const result = spawnSync(process.execPath, [cli, 'status', '--baseline', 'HEAD'], {
    cwd: dir,
    encoding: 'utf8'
  });

  assert.equal(result.status, 2);
  assert.match(result.stderr, /zass status/);
});
