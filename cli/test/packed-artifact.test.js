import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const testDir = dirname(fileURLToPath(import.meta.url));
const cliDir = resolve(testDir, '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(command, args, cwd, options = {}) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    shell: options.shell ?? false
  });

  assert.equal(
    result.status,
    0,
    [
      `command failed: ${command} ${args.join(' ')}`,
      `cwd: ${cwd}`,
      `stdout:\n${result.stdout ?? ''}`,
      `stderr:\n${result.stderr ?? ''}`
    ].join('\n')
  );

  return result;
}

function runInstalledZass(binPath, args, cwd) {
  return run(binPath, args, cwd, {
    shell: process.platform === 'win32'
  });
}

test('packed artifact installs cleanly and exposes standalone zass commands', { timeout: 120_000 }, () => {
  const root = mkdtempSync(join(tmpdir(), 'zass-packed-artifact-'));
  const packDir = join(root, 'pack');
  const consumerDir = join(root, 'consumer');

  mkdirSync(packDir);
  mkdirSync(consumerDir);

  const packed = run(
    npmCommand,
    ['pack', '--json', '--pack-destination', packDir],
    cliDir,
    { shell: process.platform === 'win32' }
  );

  const packReport = JSON.parse(packed.stdout);
  assert.equal(packReport.length, 1);

  const artifact = packReport[0];
  assert.equal(artifact.name, 'zass-cli');
  assert.equal(artifact.version, '0.4.0');

  const payload = artifact.files.map((file) => file.path);

  assert.ok(payload.includes('package.json'));
  assert.ok(payload.includes('README.md'));
  assert.ok(payload.includes('LICENSE'));
  assert.ok(payload.includes('bin/zass.js'));
  assert.ok(payload.some((path) => path.startsWith('src/')));

  for (const path of payload) {
    assert.ok(
      path === 'package.json' ||
        path === 'README.md' ||
        path === 'LICENSE' ||
        path.startsWith('bin/') ||
        path.startsWith('src/'),
      `unexpected packed payload entry: ${path}`
    );

    assert.ok(!path.startsWith('test/'), `test payload leaked into package: ${path}`);
    assert.ok(!path.includes('..'), `parent traversal leaked into package: ${path}`);
  }

  const tarball = join(packDir, artifact.filename);
  assert.ok(existsSync(tarball), `packed artifact missing: ${tarball}`);

  writeFileSync(
    join(consumerDir, 'package.json'),
    JSON.stringify({ name: 'zass-packed-smoke-consumer', private: true }, null, 2)
  );

  run(
    npmCommand,
    ['install', tarball, '--no-audit', '--no-fund'],
    consumerDir,
    { shell: process.platform === 'win32' }
  );

  writeFileSync(
    join(consumerDir, 'ZASS.md'),
    `# ZASS — Packed artifact smoke

| ID | Item |
|---|---|
| I-001 | Standalone packed-artifact smoke |
| Q-001 | Does the installed CLI run outside the monorepo? |

## D-001 — Distribution boundary

**Decision:** Exercise the installed package only.

## E-001 — Packed artifact smoke

**Status:** PLANNED

**ZERO → ARCHITECTURE:** 72% — READY FOR DRAFT ARCH
**Evidence Confidence:** LOW — packed-artifact smoke is the bounded evidence.

See [notes](notes.md).
`
  );

  writeFileSync(join(consumerDir, 'notes.md'), '# Notes\n\nExternal consumer fixture.\n');

  run('git', ['init'], consumerDir);
  run('git', ['config', 'user.email', 'zass-ci@example.invalid'], consumerDir);
  run('git', ['config', 'user.name', 'ZASS CI'], consumerDir);
  run('git', ['add', 'ZASS.md', 'notes.md'], consumerDir);
  run('git', ['commit', '-m', 'packed artifact fixture'], consumerDir);

  const binPath =
    process.platform === 'win32'
      ? join(consumerDir, 'node_modules', '.bin', 'zass.cmd')
      : join(consumerDir, 'node_modules', '.bin', 'zass');

  assert.ok(existsSync(binPath), `installed zass executable missing: ${binPath}`);

  const check = runInstalledZass(binPath, ['check'], consumerDir);
  assert.match(check.stdout, /ZASS CHECK/);

  const status = runInstalledZass(binPath, ['status'], consumerDir);
  assert.match(status.stdout, /ZASS STATUS/);

  const diff = runInstalledZass(binPath, ['diff'], consumerDir);
  assert.match(diff.stdout, /ZASS DIFF/);
});
