import test from 'node:test';
import assert from 'node:assert/strict';
import { Readable, Writable } from 'node:stream';
import { METHOD_CHOICES, LANGUAGE_CHOICES } from '../src/options.js';
import { promptChoice } from '../src/prompts.js';

function captureWritable(store) {
  return new Writable({
    write(chunk, encoding, callback) {
      store.push(chunk.toString());
      callback();
    }
  });
}

test('interactive method prompt visibly offers all four methods with no default', async () => {
  const output = [];
  const selected = await promptChoice(
    'Which ZASS method do you want to start with?',
    METHOD_CHOICES,
    {
      input: Readable.from(['4\n']),
      output: captureWritable(output)
    }
  );

  assert.equal(selected, 'zass');
  const text = output.join('');
  assert.match(text, /ZASSPILL/);
  assert.match(text, /ZASSELECTION/);
  assert.match(text, /ZASSIMPLE/);
  assert.match(text, /FULL ZASS/);
  assert.doesNotMatch(text, /default/i);
});

test('interactive language prompt offers English and Bahasa Melayu', async () => {
  const output = [];
  const selected = await promptChoice('Choose language:', LANGUAGE_CHOICES, {
    input: Readable.from(['2\n']),
    output: captureWritable(output)
  });

  assert.equal(selected, 'my');
  const text = output.join('');
  assert.match(text, /English/);
  assert.match(text, /Bahasa Melayu/);
});
