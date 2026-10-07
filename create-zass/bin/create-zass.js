#!/usr/bin/env node

import { bootstrapProject, formatSuccess } from '../src/bootstrap.js';
import { UsageError } from '../src/errors.js';
import { parseArgs, resolveSelections } from '../src/options.js';
import { defaultPrompt } from '../src/prompts.js';

const USAGE = [
  'Usage:',
  '  create-zass <project> [--method <zasspill|zasselection|zassimple|zass>] [--lang <en|my>]'
].join('\n');

async function main() {
  try {
    const parsed = parseArgs(process.argv.slice(2));
    const interactive = Boolean(process.stdin.isTTY && process.stdout.isTTY);
    const resolved = await resolveSelections(parsed, {
      interactive,
      prompt: (kind, choices) => defaultPrompt(kind, choices)
    });

    const report = await bootstrapProject(resolved);
    console.log(formatSuccess(report));
    process.exitCode = 0;
  } catch (error) {
    const refusal = error.exitCode === 1;
    console.error('CREATE ZASS');
    console.error('');
    console.error(`${refusal ? 'REFUSED' : 'ERROR'} — ${error.message}`);
    if (error instanceof UsageError) {
      console.error('');
      console.error(USAGE);
    }
    process.exitCode = error.exitCode ?? 2;
  }
}

await main();
