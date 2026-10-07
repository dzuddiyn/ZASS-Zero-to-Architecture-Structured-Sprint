import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageDir = path.resolve(here, '..');
const canonicalCore = path.resolve(packageDir, '..', 'bootstrap-core');
const vendoredCore = path.join(packageDir, 'vendor', 'bootstrap-core');

async function walkFiles(root) {
  const output = [];

  async function visit(relative = '') {
    const absolute = path.join(root, relative);
    const entries = await fs.readdir(absolute, { withFileTypes: true });

    for (const entry of entries) {
      const next = path.join(relative, entry.name);
      if (entry.isDirectory()) {
        await visit(next);
      } else if (entry.isFile()) {
        output.push(next.split(path.sep).join('/'));
      }
    }
  }

  await visit();
  return output.sort();
}

test('vendored Bootstrap Core runtime is byte-for-byte synchronized', async () => {
  for (const subtree of ['src', 'templates']) {
    const canonicalRoot = path.join(canonicalCore, subtree);
    const vendorRoot = path.join(vendoredCore, subtree);
    const canonicalFiles = await walkFiles(canonicalRoot);
    const vendorFiles = await walkFiles(vendorRoot);

    assert.deepEqual(vendorFiles, canonicalFiles, `${subtree} file set drifted`);

    for (const relative of canonicalFiles) {
      const [canonical, vendor] = await Promise.all([
        fs.readFile(path.join(canonicalRoot, relative)),
        fs.readFile(path.join(vendorRoot, relative))
      ]);
      assert.deepEqual(vendor, canonical, `${subtree}/${relative} drifted`);
    }
  }
});

test('packed create-zass installs and executes without monorepo sibling Core', async (t) => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-package-boundary-'));
  t.after(() => fs.rm(temp, { recursive: true, force: true }));

  const packDir = path.join(temp, 'pack');
  const consumerDir = path.join(temp, 'consumer');
  const target = path.join(temp, 'generated');
  await fs.mkdir(packDir);
  await fs.mkdir(consumerDir);
  await fs.writeFile(
    path.join(consumerDir, 'package.json'),
    JSON.stringify({ name: 'create-zass-boundary-smoke', private: true }, null, 2)
  );

  const npmCli = process.env.npm_execpath;
  assert.ok(npmCli, 'npm_execpath is required for package-boundary smoke test');

  const packed = spawnSync(
    process.execPath,
    [npmCli, 'pack', '--json', '--pack-destination', packDir],
    { cwd: packageDir, encoding: 'utf8' }
  );
  assert.equal(packed.status, 0, packed.stderr);

  const packResult = JSON.parse(packed.stdout);
  assert.equal(packResult.length, 1);
  const filePaths = new Set(packResult[0].files.map((file) => file.path));
  assert.ok(filePaths.has('vendor/bootstrap-core/src/index.js'));
  assert.ok(filePaths.has('vendor/bootstrap-core/templates/zassimple/en.md'));
  assert.ok(filePaths.has('vendor/bootstrap-core/templates/zass/my.md'));

  const tarball = path.join(packDir, packResult[0].filename);
  const installed = spawnSync(
    process.execPath,
    [
      npmCli,
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      tarball
    ],
    { cwd: consumerDir, encoding: 'utf8' }
  );
  assert.equal(installed.status, 0, installed.stderr);

  await assert.rejects(
    fs.stat(path.join(consumerDir, 'node_modules', 'bootstrap-core')),
    (error) => error.code === 'ENOENT'
  );

  const installedCli = path.join(
    consumerDir,
    'node_modules',
    'create-zass',
    'bin',
    'create-zass.js'
  );
  const result = spawnSync(
    process.execPath,
    [installedCli, target, '--method', 'zassimple', '--lang', 'en'],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ZASS project created/);
  assert.deepEqual(
    (await fs.readdir(target)).sort(),
    ['.gitignore', 'README.md', 'ZASSIMPLE_EN.md'].sort()
  );
});
