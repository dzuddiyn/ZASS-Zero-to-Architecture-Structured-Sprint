import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LANGUAGE_CHOICES,
  METHOD_CHOICES,
  parseArgs,
  resolveSelections
} from '../src/options.js';

test('v0.1 exposes exactly four official methods and two languages', () => {
  assert.deepEqual(
    METHOD_CHOICES.map((choice) => choice.value),
    ['zasspill', 'zasselection', 'zassimple', 'zass']
  );
  assert.deepEqual(
    LANGUAGE_CHOICES.map((choice) => choice.value),
    ['en', 'my']
  );
});

test('v0.1 parses explicit non-interactive flags', async () => {
  const parsed = parseArgs([
    'project-a',
    '--method',
    'zasselection',
    '--lang',
    'my'
  ]);
  const resolved = await resolveSelections(parsed, { interactive: false });

  assert.deepEqual(resolved, {
    target: 'project-a',
    method: 'zasselection',
    language: 'my'
  });
});

test('v0.1 interactive resolver asks only for missing choices', async () => {
  const calls = [];
  const resolved = await resolveSelections(
    { target: 'project-b' },
    {
      interactive: true,
      prompt: async (kind, choices) => {
        calls.push({ kind, choices: choices.map((choice) => choice.value) });
        return kind === 'method' ? 'zass' : 'my';
      }
    }
  );

  assert.equal(resolved.method, 'zass');
  assert.equal(resolved.language, 'my');
  assert.deepEqual(calls, [
    {
      kind: 'method',
      choices: ['zasspill', 'zasselection', 'zassimple', 'zass']
    },
    { kind: 'language', choices: ['en', 'my'] }
  ]);
});

test('v0.1 rejects missing method in non-interactive mode', async () => {
  await assert.rejects(
    resolveSelections(
      { target: 'project-c', language: 'en' },
      { interactive: false }
    ),
    /Method required/
  );
});

test('v0.1 rejects missing language in non-interactive mode', async () => {
  await assert.rejects(
    resolveSelections(
      { target: 'project-c', method: 'zassimple' },
      { interactive: false }
    ),
    /Language required/
  );
});

test('v0.1 rejects invalid method and language', async () => {
  await assert.rejects(
    resolveSelections(
      { target: 'x', method: 'other', language: 'en' },
      { interactive: false }
    ),
    /Invalid method/
  );
  await assert.rejects(
    resolveSelections(
      { target: 'x', method: 'zassimple', language: 'xx' },
      { interactive: false }
    ),
    /Invalid language/
  );
});

test('v0.1 rejects unsupported or ambiguous CLI usage', () => {
  assert.throws(() => parseArgs([]), /Project target is required/);
  assert.throws(() => parseArgs(['a', 'b']), /Exactly one project target/);
  assert.throws(() => parseArgs(['a', '--force']), /Unsupported option/);
  assert.throws(
    () => parseArgs(['a', '--method', 'zassimple', '--method', 'zass']),
    /Duplicate --method/
  );
});
