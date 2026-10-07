#!/usr/bin/env node

import { runCheck, formatResults } from '../src/check.js';
import { runStatus, formatStatus } from '../src/status.js';
import { runDiff, formatDiff } from '../src/diff.js';

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

function usage() {
  return [
    'Usage:',
    '  zass check [--baseline <git-ref>]',
    '  zass status',
    '  zass diff'
  ].join('\n');
}

async function main() {
  if (command === 'check') {
    const options = parseCheckArgs(args);
    if (options === null) {
      console.error(usage());
      process.exitCode = 2;
      return;
    }

    try {
      const report = await runCheck(process.cwd(), options);
      console.log(formatResults(report));
      process.exitCode = report.exitCode;
    } catch (error) {
      console.error(`ZASS CHECK\n\nERROR Z999 — ${error.message}`);
      process.exitCode = 2;
    }
    return;
  }

  if (command === 'status') {
    if (args.length !== 0) {
      console.error(usage());
      process.exitCode = 2;
      return;
    }

    try {
      const report = await runStatus(process.cwd());
      console.log(formatStatus(report));
      process.exitCode = report.exitCode;
    } catch (error) {
      console.error(`ZASS STATUS\n\nERROR Z999 — ${error.message}`);
      process.exitCode = 2;
    }
    return;
  }

  if (command === 'diff') {
    if (args.length !== 0) {
      console.error(usage());
      process.exitCode = 2;
      return;
    }

    try {
      const report = await runDiff(process.cwd());
      console.log(formatDiff(report));
      process.exitCode = report.exitCode;
    } catch (error) {
      console.error(`ZASS DIFF\n\nERROR Z999 — ${error.message}`);
      process.exitCode = 2;
    }
    return;
  }

  console.error(usage());
  process.exitCode = 2;
}

await main();
