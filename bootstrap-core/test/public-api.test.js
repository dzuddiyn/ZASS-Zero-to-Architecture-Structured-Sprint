import test from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../src/index.js';

const PUBLIC_EXPORTS = [
  'CORE_CONTRACT_VERSION',
  'LANGUAGE_CHOICES',
  'METHOD_CHOICES',
  'buildBootstrapPlan',
  'getBootstrapDescriptor',
  'verifyBootstrapSnapshot'
];

test('root module exposes only the stable-candidate consumer surface', () => {
  assert.deepEqual(Object.keys(core).sort(), PUBLIC_EXPORTS.sort());
});

test('public buildBootstrapPlan cannot override the canonical template loader', async () => {
  const input = {
    projectName: 'deterministic-demo',
    method: 'zassimple',
    language: 'en'
  };

  const canonical = await core.buildBootstrapPlan(input);
  const attemptedOverride = await core.buildBootstrapPlan(input, {
    loadTemplate: async () => '# NON-CANONICAL TEMPLATE\n'
  });

  assert.deepEqual(attemptedOverride, canonical);
  assert.notEqual(
    attemptedOverride.files.find((file) => file.role === 'method').content,
    '# NON-CANONICAL TEMPLATE\n'
  );
});
