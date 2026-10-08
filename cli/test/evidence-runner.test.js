import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const runnerPath = fileURLToPath(
  new URL('../../tools/track-e/runner.js', import.meta.url)
);

async function makeProject() {
  return fs.mkdtemp(path.join(os.tmpdir(), 'zass-track-e-runner-'));
}

function run(args) {
  return spawnSync(process.execPath, [runnerPath, ...args], {
    encoding: 'utf8'
  });
}

function parseStdout(result) {
  assert.notEqual(result.stdout.trim(), '');
  return JSON.parse(result.stdout);
}

test('E3-T06 runner records AUTOMATED and FIELD-OBSERVED evidence locally', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const automated = run([
    'automated',
    '--project', dir,
    '--result', 'PASS',
    '--questions', 'Q4,Q8',
    '--command', 'check',
    '--exitCode', '0',
    '--diagnosticCodes', 'Z003,Z300',
    '--projectShape', 'full-zass-single-file'
  ]);
  assert.equal(automated.status, 0, automated.stderr || automated.stdout);
  assert.equal(parseStdout(automated).state, 'SAVED');

  const observed = run([
    'observed',
    '--project', dir,
    '--result', 'FRICTION',
    '--questions', 'Q5,Q8',
    '--observationCode', 'navigation-repeat',
    '--severity', 'MEDIUM',
    '--reproducible', 'YES',
    '--projectShape', 'experimental-scale-out'
  ]);
  assert.equal(observed.status, 0, observed.stderr || observed.stdout);
  assert.equal(parseStdout(observed).state, 'SAVED');

  const files = await fs.readdir(path.join(dir, '.zass', 'evidence'));
  assert.equal(files.length, 2);
  assert.ok(files.every((name) => /^zass-evidence-r-.*\.json$/.test(name)));
});

test('E3-T06 runner requires literal explicit consent for rating and feedback', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const noConsentRating = run([
    'rate',
    '--project', dir,
    '--rating', '4'
  ]);
  assert.equal(noConsentRating.status, 2);
  const ratingError = parseStdout(noConsentRating);
  assert.equal(ratingError.state, 'ERROR');
  assert.match(ratingError.errors[0], /--consent true is required/);

  const falseConsentFeedback = run([
    'feedback',
    '--project', dir,
    '--feedback', 'ordinary text',
    '--consent', 'false'
  ]);
  assert.equal(falseConsentFeedback.status, 2);
  const feedbackError = parseStdout(falseConsentFeedback);
  assert.equal(feedbackError.state, 'ERROR');
  assert.match(feedbackError.errors[0], /--consent true is required/);

  await assert.rejects(
    fs.stat(path.join(dir, '.zass', 'evidence')),
    (error) => error.code === 'ENOENT'
  );
});

test('E3-T06 runner explicitly records USER-RATED and USER-FEEDBACK events', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const rated = run([
    'rate',
    '--project', dir,
    '--rating', '4',
    '--consent', 'true',
    '--target', 'tooling',
    '--questions', 'Q4,Q9'
  ]);
  assert.equal(rated.status, 0, rated.stderr || rated.stdout);
  assert.equal(parseStdout(rated).state, 'SAVED');

  const feedback = run([
    'feedback',
    '--project', dir,
    '--feedback', 'Tooling worked, but setup wording was unclear.',
    '--consent', 'true',
    '--category', 'documentation-onboarding',
    '--questions', 'Q5,Q9'
  ]);
  assert.equal(feedback.status, 0, feedback.stderr || feedback.stdout);
  assert.equal(parseStdout(feedback).state, 'SAVED');

  const projected = run(['project', '--project', dir]);
  assert.equal(projected.status, 0, projected.stderr || projected.stdout);
  const summary = parseStdout(projected);

  assert.equal(summary.coverage.validReceiptsIncluded, 2);
  assert.equal(summary.evidenceClassCounts['USER-RATED'], 1);
  assert.equal(summary.evidenceClassCounts['USER-FEEDBACK'], 1);
  assert.equal(summary.ratings.sampleSize, 1);
  assert.equal(summary.ratings.distribution['4'], 1);
  assert.equal(summary.ratings.byTarget.tooling, 1);
  assert.equal(
    summary.ratings.feedbackCategoryCounts['documentation-onboarding'],
    1
  );
});

test('E3-T06 runner surfaces validation failure factually and writes nothing', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = run([
    'automated',
    '--project', dir,
    '--result', 'NOT_REAL',
    '--questions', 'Q4'
  ]);

  assert.equal(result.status, 1);
  const output = parseStdout(result);
  assert.equal(output.state, 'INVALID');
  assert.equal(output.saved, false);
  assert.ok(output.errors.some((error) => /result is not supported/.test(error)));

  await assert.rejects(
    fs.stat(path.join(dir, '.zass', 'evidence')),
    (error) => error.code === 'ENOENT'
  );
});

test('E3-T06 runner project command on empty project prints zero factual coverage', async (t) => {
  const dir = await makeProject();
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const result = run(['project', '--project', dir]);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const summary = parseStdout(result);
  assert.equal(summary.coverage.receiptsConsidered, 0);
  assert.equal(summary.coverage.validReceiptsIncluded, 0);
  assert.equal(summary.coverage.incompleteCoverage, false);
  assert.equal(summary.ratings.sampleSize, 0);
});

test('E3-T06 runner is not registered as public npm bin', async () => {
  const packagePath = fileURLToPath(new URL('../package.json', import.meta.url));
  const packageJson = JSON.parse(await fs.readFile(packagePath, 'utf8'));

  assert.deepEqual(packageJson.bin, {
    zass: 'bin/zass.js'
  });
});
