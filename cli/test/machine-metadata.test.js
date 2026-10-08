import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  MACHINE_METADATA_RELATIVE_PATH,
  MACHINE_METADATA_SCHEMA_VERSION,
  expectedMethodFile,
  loadMachineMetadata
} from '../src/machine-metadata.js';

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-machine-metadata-'));
}

async function writeMetadata(dir, value) {
  const file = path.join(dir, MACHINE_METADATA_RELATIVE_PATH);
  await fs.mkdir(path.dirname(file), { recursive: true });
  const content = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  await fs.writeFile(file, content, 'utf8');
  return file;
}

function validMetadata(overrides = {}) {
  return {
    schemaVersion: MACHINE_METADATA_SCHEMA_VERSION,
    project: {
      name: 'demo-project',
      method: 'zassimple',
      language: 'en',
      methodFile: 'ZASSIMPLE_EN.md',
      ...(overrides.project ?? {})
    },
    ...Object.fromEntries(
      Object.entries(overrides).filter(([key]) => key !== 'project')
    )
  };
}

test('CR-011 loader returns ABSENT when .zass/project.json does not exist', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'ABSENT');
  assert.equal(result.data, null);
  assert.deepEqual(result.errors, []);
  assert.equal(result.path, path.join(dir, '.zass', 'project.json'));
});

test('CR-011 loader returns VALID for canonical v0.1 metadata', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const metadata = validMetadata();
  await writeMetadata(dir, metadata);

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'VALID');
  assert.deepEqual(result.data, metadata);
  assert.deepEqual(result.errors, []);
});

test('CR-011 loader returns MALFORMED for invalid JSON', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await writeMetadata(dir, '{"schemaVersion":"0.1",');

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'MALFORMED');
  assert.equal(result.data, null);
  assert.match(result.errors[0], /not valid JSON/);
});

test('CR-011 loader returns MALFORMED when JSON root is not an object', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await writeMetadata(dir, '[]');

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'MALFORMED');
  assert.deepEqual(result.data, []);
  assert.match(result.errors[0], /root must be a JSON object/);
});

test('CR-011 loader returns UNSUPPORTED_SCHEMA for any schema other than 0.1', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await writeMetadata(dir, validMetadata({ schemaVersion: '0.2' }));

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'UNSUPPORTED_SCHEMA');
  assert.match(result.errors[0], /0\.2/);
});

test('CR-011 loader returns INVALID for missing or invalid required project values', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await writeMetadata(
    dir,
    validMetadata({
      project: {
        name: '',
        method: 'unknown',
        language: 'xx',
        methodFile: ''
      }
    })
  );

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'INVALID');
  assert.ok(result.errors.some((error) => /project\.name/.test(error)));
  assert.ok(result.errors.some((error) => /project\.method/.test(error)));
  assert.ok(result.errors.some((error) => /project\.language/.test(error)));
  assert.ok(result.errors.some((error) => /project\.methodFile/.test(error)));
});

test('CR-011 loader returns INVALID for unsupported fields', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const metadata = validMetadata();
  metadata.runtime = { gitSha: 'abc' };
  metadata.project.extra = true;
  await writeMetadata(dir, metadata);

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'INVALID');
  assert.ok(result.errors.includes('unsupported top-level field: runtime'));
  assert.ok(result.errors.includes('unsupported project field: extra'));
});

test('CR-011 loader returns INVALID when methodFile conflicts with method/language mapping', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await writeMetadata(
    dir,
    validMetadata({
      project: {
        method: 'zasspill',
        language: 'my',
        methodFile: 'ZASSPILL_EN.md'
      }
    })
  );

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'INVALID');
  assert.ok(
    result.errors.some((error) => /ZASSPILL_MY\.md for zasspill \+ my/.test(error))
  );
});

test('CR-011 method mapping is deterministic for all four methods and both languages', () => {
  assert.equal(expectedMethodFile('zasspill', 'en'), 'ZASSPILL_EN.md');
  assert.equal(expectedMethodFile('zasspill', 'my'), 'ZASSPILL_MY.md');
  assert.equal(expectedMethodFile('zasselection', 'en'), 'ZASSELECTION_EN.md');
  assert.equal(expectedMethodFile('zasselection', 'my'), 'ZASSELECTION_MY.md');
  assert.equal(expectedMethodFile('zassimple', 'en'), 'ZASSIMPLE_EN.md');
  assert.equal(expectedMethodFile('zassimple', 'my'), 'ZASSIMPLE_MY.md');
  assert.equal(expectedMethodFile('zass', 'en'), 'ZASS.md');
  assert.equal(expectedMethodFile('zass', 'my'), 'ZASS.md');
  assert.equal(expectedMethodFile('unknown', 'en'), null);
});

test('CR-011 loader is read-only', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const file = await writeMetadata(dir, validMetadata());
  const before = await fs.readFile(file, 'utf8');

  const result = await loadMachineMetadata(dir);

  assert.equal(result.state, 'VALID');
  assert.equal(await fs.readFile(file, 'utf8'), before);
});
