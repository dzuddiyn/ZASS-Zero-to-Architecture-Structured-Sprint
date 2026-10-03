#!/usr/bin/env node

import { runCheck, formatResults } from '../src/check.js';

const [, , command, ...args] = process.argv;

function parseCheckArgs(values) {
  if (values.length === 0) return {};

  if (
    values.length === 2 &&
    values[0] === '--baseline' &&
    values[1] &&
    !values[1].startsWith('-')
  ) {
    return { baselineRef: values[1] };
  }

  return null;
}

const options = command === 'check' ? parseCheckArgs(args) : null;

if (command !== 'check' || options === null) {
  console.error('Usage: zass check [--baseline <git-ref>]');
  process.exitCode = 2;
} else {
  try {
    const report = await runCheck(process.cwd(), options);
    console.log(formatResults(report));
    process.exitCode = report.exitCode;
  } catch (error) {
    console.error(`ZASS CHECK\n\nERROR Z999 — ${error.message}`);
    process.exitCode = 2;
  }
}
