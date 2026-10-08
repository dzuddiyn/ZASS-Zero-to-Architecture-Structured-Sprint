import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runCheck } from '../src/check.js';
import { loadMachineMetadata } from '../src/machine-metadata.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const fixture = (name) => path.join(here, 'fixtures', 'machine', name);

function errorCodes(report) {
  return report.results
    .filter((item) => item.level === 'error')
    .map((item) => item.code);
}

test('A5-T04 fixture: legacy project without .zass remains valid', async () => {
  const report = await runCheck(fixture('legacy'));
  assert.equal(report.machineMetadata.state, 'ABSENT');
  assert.equal(report.exitCode, 0);
  assert.deepEqual(errorCodes(report), []);
});

test('A5-T04 fixture: valid v0.1 machine metadata passes', async () => {
  const metadata = await loadMachineMetadata(fixture('valid'));
  const report = await runCheck(fixture('valid'));

  assert.equal(metadata.state, 'VALID');
  assert.equal(report.exitCode, 0);
  assert.deepEqual(errorCodes(report), []);
});

test('A5-T04 fixture: malformed metadata fails factually', async () => {
  const metadata = await loadMachineMetadata(fixture('malformed'));
  const report = await runCheck(fixture('malformed'));

  assert.equal(metadata.state, 'MALFORMED');
  assert.equal(report.exitCode, 1);
  assert.ok(errorCodes(report).includes('Z300'));
});

test('A5-T04 fixture: unsupported schema fails factually', async () => {
  const metadata = await loadMachineMetadata(fixture('unsupported-schema'));
  const report = await runCheck(fixture('unsupported-schema'));

  assert.equal(metadata.state, 'UNSUPPORTED_SCHEMA');
  assert.equal(report.exitCode, 1);
  assert.ok(errorCodes(report).includes('Z301'));
});

test('A5-T04 fixture: unambiguous method conflict fails', async () => {
  const metadata = await loadMachineMetadata(fixture('method-conflict'));
  const report = await runCheck(fixture('method-conflict'));

  assert.equal(metadata.state, 'VALID');
  assert.equal(report.exitCode, 1);
  assert.ok(errorCodes(report).includes('Z304'));
});

test('A5-T04 fixture: Full ZASS Bahasa Melayu metadata is not falsely rejected', async () => {
  const metadata = await loadMachineMetadata(fixture('full-zass-my'));
  const report = await runCheck(fixture('full-zass-my'));

  assert.equal(metadata.state, 'VALID');
  assert.equal(report.exitCode, 0);
  assert.deepEqual(errorCodes(report), []);
});

test('A5-T04 machine metadata path is portable under win32 path semantics', () => {
  assert.equal(
    path.win32.join('C:\\work\\demo', '.zass', 'project.json'),
    'C:\\work\\demo\\.zass\\project.json'
  );
});
