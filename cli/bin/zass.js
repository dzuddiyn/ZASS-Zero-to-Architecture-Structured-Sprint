#!/usr/bin/env node

import { runCheck, formatResults } from '../src/check.js';

const [, , command, ...args] = process.argv;

if (command !== 'check' || args.length > 0) {
  console.error('Usage: zass check');
  process.exitCode = 2;
} else {
  try {
    const report = await runCheck(process.cwd());
    console.log(formatResults(report));
    process.exitCode = report.exitCode;
  } catch (error) {
    console.error(`ZASS CHECK\n\nERROR Z999 — ${error.message}`);
    process.exitCode = 2;
  }
}
