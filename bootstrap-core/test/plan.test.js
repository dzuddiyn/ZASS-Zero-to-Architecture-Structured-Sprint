import test from 'node:test';
import assert from 'node:assert/strict';
import * as bootstrapCore from '../src/index.js';
import { buildBootstrapPlan } from '../src/index.js';

const CASES = [
  ['zasspill', 'en', 'ZASSPILL_EN.md'],
  ['zasspill', 'my', 'ZASSPILL_MY.md'],
  ['zasselection', 'en', 'ZASSELECTION_EN.md'],
  ['zasselection', 'my', 'ZASSELECTION_MY.md'],
  ['zassimple', 'en', 'ZASSIMPLE_EN.md'],
  ['zassimple', 'my', 'ZASSIMPLE_MY.md'],
  ['zass', 'en', 'ZASS.md'],
  ['zass', 'my', 'ZASS.md']
];

for (const [method, language, methodFile] of CASES) {
  test(`Core builds deterministic ${method}/${language} plan`, async () => {
    const input = { projectName: 'demo-project', method, language };
    const first = await buildBootstrapPlan(input);
    const second = await buildBootstrapPlan(input);

    assert.deepEqual(first, second);
    assert.equal(first.contractVersion, '0.1');
    assert.deepEqual(first.project, {
      name: 'demo-project',
      method,
      language,
      methodFile
    });
    assert.deepEqual(
      first.files.map((file) => [file.path, file.role]),
      [
        [methodFile, 'method'],
        ['README.md', 'readme'],
        ['.gitignore', 'gitignore']
      ]
    );
    assert.ok(first.files[0].content.trim().length > 0);
  });
}

test('Core README is English for en and consumer-neutral', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zassimple',
    language: 'en'
  });
  const readme = plan.files.find((file) => file.path === 'README.md').content;

  assert.match(readme, /This project uses \*\*ZASSIMPLE\*\*/);
  assert.match(readme, /Language:.*English/);
  assert.match(readme, /ZASSIMPLE_EN\.md/);
  assert.doesNotMatch(readme, /Git is not initialized/);
  assert.doesNotMatch(readme, /CrossAI/);
  assert.doesNotMatch(readme, /Google Drive/);
});

test('Core README is Bahasa Melayu for my and consumer-neutral', async () => {
  const plan = await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zasselection',
    language: 'my'
  });
  const readme = plan.files.find((file) => file.path === 'README.md').content;

  assert.match(readme, /Projek ini menggunakan \*\*ZASSELECTION\*\*/);
  assert.match(readme, /Bahasa:.*Bahasa Melayu/);
  assert.match(readme, /ZASSELECTION_MY\.md/);
  assert.doesNotMatch(readme, /Git is not initialized/);
  assert.doesNotMatch(readme, /CrossAI/);
});

test('Core rejects invalid project inputs', async () => {
  await assert.rejects(
    buildBootstrapPlan({ projectName: '', method: 'zassimple', language: 'en' }),
    /Project name/
  );
  await assert.rejects(
    buildBootstrapPlan({ projectName: 'bad\nname', method: 'zassimple', language: 'en' }),
    /single line/
  );
  await assert.rejects(
    buildBootstrapPlan({ projectName: 'demo', method: 'other', language: 'en' }),
    /Unsupported method/
  );
  await assert.rejects(
    buildBootstrapPlan({ projectName: 'demo', method: 'zassimple', language: 'xx' }),
    /Unsupported language/
  );
});


test('Core public export surface is explicit', () => {
  assert.deepEqual(
    Object.keys(bootstrapCore).sort(),
    [
      'CORE_CONTRACT_VERSION',
      'LANGUAGE_CHOICES',
      'METHOD_CHOICES',
      'buildBootstrapPlan',
      'getBootstrapDescriptor',
      'verifyBootstrapSnapshot'
    ].sort()
  );
});
