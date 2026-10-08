import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { runCheck } from '../src/check.js';
import { runStatus, formatStatus } from '../src/status.js';
import { runDiff } from '../src/diff.js';

function git(cwd, ...args) {
  const result = spawnSync('git', ['-C', cwd, ...args], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
}

async function makeFullZass({ metadata = null, extraFiles = {} } = {}) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-machine-validation-'));
  await fs.writeFile(path.join(dir, 'ZASS.md'), '# Test project\n', 'utf8');

  for (const [name, content] of Object.entries(extraFiles)) {
    await fs.writeFile(path.join(dir, name), content, 'utf8');
  }

  if (metadata !== null) {
    await fs.mkdir(path.join(dir, '.zass'), { recursive: true });
    const content = typeof metadata === 'string'
      ? metadata
      : JSON.stringify(metadata, null, 2);
    await fs.writeFile(path.join(dir, '.zass', 'project.json'), content, 'utf8');
  }

  git(dir, 'init');
  git(dir, 'config', 'user.name', 'ZASS Test');
  git(dir, 'config', 'user.email', 'zass-test@example.invalid');
  git(dir, 'add', '.');
  git(dir, 'commit', '-m', 'baseline');
  return dir;
}

function validFullMetadata(overrides = {}) {
  return {
    schemaVersion: '0.1',
    project: {
      name: 'demo',
      method: 'zass',
      language: 'en',
      methodFile: 'ZASS.md',
      ...overrides
    }
  };
}

function errors(report, code) {
  return report.results.filter((item) => item.level === 'error' && item.code === code);
}

test('A5-T03 legacy Full ZASS without .zass remains valid', async (t) => {
  const dir = await makeFullZass();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'ABSENT');
  assert.equal(report.exitCode, 0);
  assert.equal(report.errorCount, 0);
});

test('A5-T03 valid v0.1 metadata passes and is shared by status', async (t) => {
  const dir = await makeFullZass({ metadata: validFullMetadata() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const check = await runCheck(dir);
  const status = await runStatus(dir);

  assert.equal(check.machineMetadata.state, 'VALID');
  assert.equal(check.exitCode, 0);
  assert.equal(status.machineMetadata.state, 'VALID');
  assert.equal(status.validation.state, 'PASS');
  assert.equal(status.exitCode, 0);
  assert.match(formatStatus(status), /Machine:\s+VALID/);
});

test('A5-T03 malformed metadata is a factual validation error', async (t) => {
  const dir = await makeFullZass({ metadata: '{"schemaVersion":"0.1",' });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'MALFORMED');
  assert.equal(report.exitCode, 1);
  assert.equal(errors(report, 'Z300').length, 1);
});

test('A5-T03 unsupported schema is a factual validation error', async (t) => {
  const metadata = validFullMetadata();
  metadata.schemaVersion = '0.2';
  const dir = await makeFullZass({ metadata });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'UNSUPPORTED_SCHEMA');
  assert.equal(report.exitCode, 1);
  assert.equal(errors(report, 'Z301').length, 1);
});

test('A5-T03 invalid v0.1 metadata produces deterministic Z302 errors', async (t) => {
  const dir = await makeFullZass({
    metadata: validFullMetadata({ language: 'xx', methodFile: 'WRONG.md' })
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'INVALID');
  assert.equal(report.exitCode, 1);
  assert.ok(errors(report, 'Z302').length >= 1);
});

test('A5-T03 valid metadata errors when declared method file is missing', async (t) => {
  const dir = await makeFullZass({
    metadata: {
      schemaVersion: '0.1',
      project: {
        name: 'demo',
        method: 'zassimple',
        language: 'en',
        methodFile: 'ZASSIMPLE_EN.md'
      }
    }
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'VALID');
  assert.equal(report.exitCode, 1);
  assert.equal(errors(report, 'Z303').length, 1);
  assert.equal(errors(report, 'Z304').length, 1);
});

test('A5-T03 detects unambiguous method conflict even when declared method file exists', async (t) => {
  const dir = await makeFullZass({
    metadata: {
      schemaVersion: '0.1',
      project: {
        name: 'demo',
        method: 'zassimple',
        language: 'en',
        methodFile: 'ZASSIMPLE_EN.md'
      }
    },
    extraFiles: {
      'ZASSIMPLE_EN.md': '# ZASSIMPLE\n'
    }
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'VALID');
  assert.equal(report.exitCode, 1);
  assert.equal(errors(report, 'Z303').length, 0);
  assert.equal(errors(report, 'Z304').length, 1);
});

test('A5-T03 does not infer Full-ZASS language conflict from ZASS.md prose', async (t) => {
  const dir = await makeFullZass({
    metadata: validFullMetadata({ language: 'my' })
  });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const report = await runCheck(dir);

  assert.equal(report.machineMetadata.state, 'VALID');
  assert.equal(report.exitCode, 0);
  assert.equal(report.errorCount, 0);
});

test('A5-T03 zass diff ignores machine metadata-only edits as semantic drift', async (t) => {
  const dir = await makeFullZass({ metadata: validFullMetadata() });
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const metadataPath = path.join(dir, '.zass', 'project.json');
  const changed = validFullMetadata();
  changed.project.name = 'renamed-display-only';
  await fs.writeFile(metadataPath, JSON.stringify(changed, null, 2), 'utf8');

  const report = await runDiff(dir);

  assert.equal(report.state, 'NO_CHANGE');
  assert.equal(report.exitCode, 0);
});
