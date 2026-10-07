import test from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../src/index.js';

const EXPECTED_PUBLIC_EXPORTS = [
  'CORE_CONTRACT_VERSION',
  'LANGUAGE_CHOICES',
  'METHOD_CHOICES',
  'buildBootstrapPlan',
  'validateBootstrapInput',
  'validateBootstrapPlan',
  'verifyBootstrapSnapshot'
];

test('Core root exposes only the intended provisional consumer surface', () => {
  assert.deepEqual(Object.keys(core).sort(), EXPECTED_PUBLIC_EXPORTS.sort());
});

test('public buildBootstrapPlan has one explicit input parameter', () => {
  assert.equal(core.buildBootstrapPlan.length, 1);
});

test('extra template-injection argument cannot override public plan content', async () => {
  let called = false;
  const input = {
    projectName: 'deterministic-demo',
    method: 'zassimple',
    language: 'en'
  };

  const canonical = await core.buildBootstrapPlan(input);
  const attemptedOverride = await core.buildBootstrapPlan(input, {
    loadTemplate: async () => {
      called = true;
      return '# TAMPERED TEMPLATE\n';
    }
  });

  assert.equal(called, false);
  assert.deepEqual(attemptedOverride, canonical);
  assert.doesNotMatch(attemptedOverride.files[0].content, /TAMPERED TEMPLATE/);
});

test('low-level catalog/template/helpers are not root exports', () => {
  for (const name of [
    'getBootstrapDescriptor',
    'getLanguageDescriptor',
    'getMethodDescriptor',
    'isSupportedLanguage',
    'isSupportedMethod',
    'GITIGNORE_CONTENT',
    'buildProjectReadme',
    'loadBootstrapTemplate',
    'isSafeArtifactPath',
    'validateProjectName'
  ]) {
    assert.equal(Object.hasOwn(core, name), false, `${name} should not be public`);
  }
});
