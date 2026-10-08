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

test('package metadata is publication-ready', async () => {
  const metadata = JSON.parse(
    await fs.readFile(path.join(packageDir, 'package.json'), 'utf8')
  );

  assert.equal(metadata.name, 'create-zass-project');
  assert.equal(metadata.version, '0.2.0');
  assert.equal(metadata.private, undefined);
  assert.deepEqual(metadata.bin, { 'create-zass-project': 'bin/create-zass.js' });
  assert.equal(
    metadata.repository?.url,
    'git+https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint.git'
  );
  assert.equal(metadata.repository?.directory, 'create-zass');
  assert.equal(metadata.publishConfig?.registry, 'https://registry.npmjs.org/');
  assert.equal(metadata.publishConfig?.access, 'public');
  assert.ok(Array.isArray(metadata.keywords) && metadata.keywords.includes('zass'));
});

test('packed create-zass-project installs and executes without monorepo sibling Core', async (t) => {
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

  const npmEnv = { ...process.env };
  delete npmEnv.npm_config_dry_run;
  delete npmEnv.NPM_CONFIG_DRY_RUN;

  const runNpm = (args, cwd) =>
    spawnSync('npm', args, {
      cwd,
      encoding: 'utf8',
      env: npmEnv,
      shell: process.platform === 'win32'
    });

  const packed = runNpm(
    ['pack', '--json', '--pack-destination', packDir],
    packageDir
  );
  assert.equal(packed.status, 0, packed.stderr);

  const packResult = JSON.parse(packed.stdout);
  assert.equal(packResult.length, 1);
  const filePaths = new Set(packResult[0].files.map((file) => file.path));
  assert.ok(filePaths.has('vendor/bootstrap-core/src/index.js'));
  assert.ok(filePaths.has('vendor/bootstrap-core/templates/zassimple/en.md'));
  assert.ok(filePaths.has('vendor/bootstrap-core/templates/zass/my.md'));

  const allowedTopLevel = new Set([
    'LICENSE',
    'README.md',
    'package.json'
  ]);
  for (const file of filePaths) {
    const allowed =
      allowedTopLevel.has(file) ||
      file.startsWith('bin/') ||
      file.startsWith('src/') ||
      file.startsWith('vendor/');
    assert.equal(allowed, true, `unexpected packed artifact: ${file}`);
    assert.equal(file.startsWith('test/'), false, `test file leaked into package: ${file}`);
  }

  const tarball = path.join(packDir, packResult[0].filename);
  const installed = runNpm(
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      tarball
    ],
    consumerDir
  );
  assert.equal(installed.status, 0, installed.stderr);

  await assert.rejects(
    fs.stat(path.join(consumerDir, 'node_modules', 'bootstrap-core')),
    (error) => error.code === 'ENOENT'
  );

  const installedCli = path.join(
    consumerDir,
    'node_modules',
    'create-zass-project',
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
    ['.gitignore', '.zass', 'README.md', 'ZASSIMPLE_EN.md'].sort()
  );
  assert.equal(
    JSON.parse(await fs.readFile(path.join(target, '.zass', 'project.json'), 'utf8')).schemaVersion,
    '0.1'
  );

  const execTarget = path.join(temp, 'generated-via-npm-exec');
  const invoked = runNpm(
    [
      'exec',
      '--yes',
      '--package',
      tarball,
      '--',
      'create-zass-project',
      execTarget,
      '--method',
      'zass',
      '--lang',
      'my'
    ],
    consumerDir
  );

  assert.equal(invoked.status, 0, invoked.stderr);
  assert.match(invoked.stdout, /ZASS project created/);
  assert.deepEqual(
    (await fs.readdir(execTarget)).sort(),
    ['.gitignore', '.zass', 'README.md', 'ZASS.md'].sort()
  );
});
