#!/usr/bin/env node

import {
  buildEvidenceReceipt,
  buildUserFeedbackRecord,
  buildUserRatingRecord,
  generateEvidenceId,
  ensureEvidenceGitIgnore,
  readAndProjectEvidence,
  writeEvidenceReceipt
} from '../../cli/src/evidence/index.js';

function parseArgs(values) {
  const options = {};
  const positional = [];

  for (let i = 0; i < values.length; i += 1) {
    const value = values[i];
    if (!value.startsWith('--')) {
      positional.push(value);
      continue;
    }

    const key = value.slice(2);
    const next = values[i + 1];

    if (next === undefined || next.startsWith('--')) {
      options[key] = true;
      continue;
    }

    options[key] = next;
    i += 1;
  }

  return { positional, options };
}

function usage() {
  return [
    'Track E field runner (repo-local / test-only)',
    '',
    'Usage:',
    '  node tools/track-e/runner.js automated --project <dir> --result <PASS|FAIL|WARN|NOT_APPLICABLE> --questions <Q4,Q8> [metadata flags]',
    '  node tools/track-e/runner.js observed --project <dir> --result <PASS|FAIL|FRICTION|OBSERVED> --questions <Q5,Q8> [observation flags]',
    '  node tools/track-e/runner.js rate --project <dir> --rating <1-5> --consent true [--target <ratingTarget>] [--questions <Q9>]',
    '  node tools/track-e/runner.js feedback --project <dir> --feedback <text> --consent true [--category <feedbackCategory>] [--questions <Q9>]',
    '  node tools/track-e/runner.js project --project <dir>',
    '  node tools/track-e/runner.js prepare --project <dir>',
    '',
    'This runner is not a public zass CLI command and performs no network activity.'
  ].join('\n');
}

function required(options, key) {
  const value = options[key];
  if (value === undefined || value === true || value === '') {
    throw new TypeError(`--${key} is required`);
  }
  return value;
}

function parseQuestions(value, fallback) {
  const source = value === undefined ? fallback : value;
  if (typeof source !== 'string') {
    throw new TypeError('--questions must be a comma-separated string');
  }
  const questions = source.split(',').map((item) => item.trim()).filter(Boolean);
  if (questions.length === 0) {
    throw new TypeError('--questions must contain at least one question');
  }
  return questions;
}

function explicitConsent(value) {
  if (value !== 'true') {
    throw new TypeError('--consent true is required for user-submitted evidence');
  }
  return true;
}

function optionalInteger(options, key) {
  if (options[key] === undefined) return undefined;
  const value = Number(options[key]);
  if (!Number.isInteger(value)) {
    throw new TypeError(`--${key} must be an integer`);
  }
  return value;
}

function optionalNumber(options, key) {
  if (options[key] === undefined) return undefined;
  const value = Number(options[key]);
  if (!Number.isFinite(value)) {
    throw new TypeError(`--${key} must be a finite number`);
  }
  return value;
}

function addIfDefined(target, key, value) {
  if (value !== undefined) target[key] = value;
}

function commonMetadata(options) {
  const metadata = {};
  for (const key of [
    'os',
    'runtimeVersion',
    'zassCliVersion',
    'createZassVersion',
    'method',
    'language',
    'projectShape',
    'machineMetadataState',
    'command'
  ]) {
    addIfDefined(metadata, key, options[key]);
  }

  addIfDefined(metadata, 'exitCode', optionalInteger(options, 'exitCode'));
  addIfDefined(metadata, 'durationMs', optionalNumber(options, 'durationMs'));

  if (options.diagnosticCodes !== undefined) {
    metadata.diagnosticCodes = String(options.diagnosticCodes)
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return metadata;
}

async function saveSingleRecord(projectDir, record) {
  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    records: [record]
  });
  return writeEvidenceReceipt(projectDir, receipt);
}

function automatedRecord(options) {
  return {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'AUTOMATED',
    questions: parseQuestions(required(options, 'questions')),
    result: required(options, 'result'),
    ...commonMetadata(options)
  };
}

function observedRecord(options) {
  const record = {
    evidenceId: generateEvidenceId(),
    evidenceClass: 'FIELD-OBSERVED',
    questions: parseQuestions(required(options, 'questions')),
    result: required(options, 'result'),
    ...commonMetadata(options)
  };

  addIfDefined(record, 'observationCode', options.observationCode);
  addIfDefined(record, 'severity', options.severity);
  addIfDefined(record, 'reproducible', options.reproducible);
  return record;
}

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  const { positional, options } = parseArgs(rest);

  if (!command || positional.length > 0) {
    process.stderr.write(`${usage()}\n`);
    process.exitCode = 2;
    return;
  }

  try {
    const projectDir = required(options, 'project');

    if (command === 'automated') {
      const result = await saveSingleRecord(projectDir, automatedRecord(options));
      printJson(result);
      process.exitCode = result.saved ? 0 : 1;
      return;
    }

    if (command === 'observed') {
      const result = await saveSingleRecord(projectDir, observedRecord(options));
      printJson(result);
      process.exitCode = result.saved ? 0 : 1;
      return;
    }

    if (command === 'rate') {
      const record = buildUserRatingRecord({
        rating: Number(required(options, 'rating')),
        ratingTarget: options.target ?? 'overall-workflow',
        questions: parseQuestions(options.questions, 'Q9'),
        consent: explicitConsent(options.consent)
      });
      const result = await saveSingleRecord(projectDir, record);
      printJson(result);
      process.exitCode = result.saved ? 0 : 1;
      return;
    }

    if (command === 'feedback') {
      const record = buildUserFeedbackRecord({
        feedback: required(options, 'feedback'),
        feedbackCategory: options.category,
        relatedRatingEvidenceId: options.relatedRatingEvidenceId,
        questions: parseQuestions(options.questions, 'Q9'),
        consent: explicitConsent(options.consent)
      });
      const result = await saveSingleRecord(projectDir, record);
      printJson(result);
      process.exitCode = result.saved ? 0 : 1;
      return;
    }

    if (command === 'project') {
      const { projection } = await readAndProjectEvidence(projectDir);
      printJson(projection);
      process.exitCode = 0;
      return;
    }

    if (command === 'prepare') {
      const result = await ensureEvidenceGitIgnore(projectDir);
      printJson(result);
      process.exitCode = 0;
      return;
    }

    throw new TypeError(`unknown command: ${command}`);
  } catch (error) {
    printJson({
      state: 'ERROR',
      saved: false,
      errors: [error.message]
    });
    process.exitCode = 2;
  }
}

await main();
