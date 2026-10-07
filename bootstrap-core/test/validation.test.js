import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildBootstrapPlan,
  validateBootstrapPlan,
  verifyBootstrapSnapshot
} from '../src/index.js';

function clone(value) {
  return structuredClone(value);
}

test('plan validator accepts a generated plan', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zasspill',
    language: 'en'
  });
  assert.deepEqual(validateBootstrapPlan(plan), { ok: true, errors: [] });
});

test('plan validator rejects unsafe and duplicate artifact paths', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zassimple',
    language: 'en'
  });
  const bad = clone(plan);
  bad.files[0].path = '../ZASSIMPLE_EN.md';
  bad.files[1].path = '../ZASSIMPLE_EN.md';

  const result = validateBootstrapPlan(bad);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'B105'));
  assert.ok(result.errors.some((entry) => entry.code === 'B106'));
});

test('plan validator rejects missing/unexpected artifacts and wrong method filename', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zass',
    language: 'my'
  });
  const bad = clone(plan);
  bad.project.methodFile = 'ZASS_MY.md';
  bad.files.pop();
  bad.files.push({ path: 'EXTRA.md', role: 'other', content: 'x' });

  const result = validateBootstrapPlan(bad);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'B102'));
  assert.ok(result.errors.some((entry) => entry.code === 'B108'));
  assert.ok(result.errors.some((entry) => entry.code === 'B109'));
});

test('plan validator rejects empty method, stale README and incomplete gitignore', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zasselection',
    language: 'my'
  });
  const bad = clone(plan);
  bad.files.find((file) => file.role === 'method').content = '';
  bad.files.find((file) => file.role === 'readme').content = '# wrong\n';
  bad.files.find((file) => file.role === 'gitignore').content = '.env\n';

  const result = validateBootstrapPlan(bad);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'B112'));
  assert.ok(result.errors.some((entry) => entry.code === 'B113'));
  assert.ok(result.errors.some((entry) => entry.code === 'B114'));
});

test('snapshot verifier accepts exact read-back artifacts', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zassimple',
    language: 'en'
  });
  const snapshot = {
    files: plan.files.map(({ path, content }) => ({ path, content }))
  };

  assert.deepEqual(verifyBootstrapSnapshot(plan, snapshot), {
    ok: true,
    errors: []
  });
});

test('snapshot verifier rejects missing, unexpected and changed artifacts', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zasspill',
    language: 'my'
  });

  const snapshot = {
    files: [
      {
        path: plan.files[0].path,
        content: plan.files[0].content + '\nchanged'
      },
      {
        path: 'README.md',
        content: plan.files[1].content
      },
      {
        path: 'EXTRA.md',
        content: 'unexpected'
      }
    ]
  };

  const result = verifyBootstrapSnapshot(plan, snapshot);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'B205'));
  assert.ok(result.errors.some((entry) => entry.code === 'B204'));
  assert.ok(result.errors.some((entry) => entry.code === 'B206'));
});
