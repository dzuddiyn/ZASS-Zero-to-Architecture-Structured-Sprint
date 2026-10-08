import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, '..', 'bin', 'create-zass.js');

test('CLI creates an explicit non-interactive project with exit 0', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-cli-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));
  const target = path.join(parent, 'demo');

  const result = spawnSync(
    process.execPath,
    [cli, target, '--method', 'zasselection', '--lang', 'my'],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ZASS project created/);
  assert.match(result.stdout, /Method:\s+ZASSELECTION/);
  assert.match(result.stdout, /Language:\s+Bahasa Melayu/);
  assert.match(result.stdout, /Git:\s+not initialized/);
  assert.match(result.stdout, /GitHub:\s+not connected/);
  assert.match(result.stdout, /CrossAI:\s+not registered/);
  assert.deepEqual(
    (await fs.readdir(target)).sort(),
    ['.gitignore', '.zass', 'README.md', 'ZASSELECTION_MY.md'].sort()
  );
  const metadata = JSON.parse(
    await fs.readFile(path.join(target, '.zass', 'project.json'), 'utf8')
  );
  assert.equal(metadata.schemaVersion, '0.1');
  assert.equal(metadata.project.method, 'zasselection');
  assert.equal(metadata.project.language, 'my');
});

test('CLI refuses an existing target with exit 1 and no overwrite', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-cli-existing-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));
  const target = path.join(parent, 'demo');
  await fs.mkdir(target);
  await fs.writeFile(path.join(target, 'sentinel.txt'), 'keep\n', 'utf8');

  const result = spawnSync(
    process.execPath,
    [cli, target, '--method', 'zassimple', '--lang', 'en'],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 1);
  assert.match(result.stderr, /REFUSED/);
  assert.match(result.stderr, /Target already exists/);
  assert.equal(
    await fs.readFile(path.join(target, 'sentinel.txt'), 'utf8'),
    'keep\n'
  );
});

test('CLI non-interactive mode requires method and language', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-cli-missing-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));

  const missingMethod = spawnSync(
    process.execPath,
    [cli, path.join(parent, 'a'), '--lang', 'en'],
    { encoding: 'utf8' }
  );
  assert.equal(missingMethod.status, 2);
  assert.match(missingMethod.stderr, /Method required/);

  const missingLanguage = spawnSync(
    process.execPath,
    [cli, path.join(parent, 'b'), '--method', 'zassimple'],
    { encoding: 'utf8' }
  );
  assert.equal(missingLanguage.status, 2);
  assert.match(missingLanguage.stderr, /Language required/);
});

test('CLI rejects invalid method and language with exit 2', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-cli-invalid-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));

  const badMethod = spawnSync(
    process.execPath,
    [cli, path.join(parent, 'a'), '--method', 'wrong', '--lang', 'en'],
    { encoding: 'utf8' }
  );
  assert.equal(badMethod.status, 2);
  assert.match(badMethod.stderr, /Invalid method/);

  const badLanguage = spawnSync(
    process.execPath,
    [cli, path.join(parent, 'b'), '--method', 'zass', '--lang', 'xx'],
    { encoding: 'utf8' }
  );
  assert.equal(badLanguage.status, 2);
  assert.match(badLanguage.stderr, /Invalid language/);
});
