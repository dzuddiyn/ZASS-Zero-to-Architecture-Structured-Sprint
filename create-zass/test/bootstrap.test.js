import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  buildBootstrapPlan,
  GITIGNORE_CONTENT
} from '../../bootstrap-core/src/index.js';
import { bootstrapProject } from '../src/bootstrap.js';

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
  test(`v0.1 materializes Core ${method}/${language} plan`, async (t) => {
    const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-'));
    t.after(() => fs.rm(parent, { recursive: true, force: true }));
    const target = path.join(parent, `${method}-${language}`);

    const report = await bootstrapProject({ target, method, language });
    const plan = await buildBootstrapPlan({
      projectName: path.basename(target),
      method,
      language
    });

    assert.equal(report.ok, true);
    assert.equal(report.methodFile, methodFile);
    assert.deepEqual(
      (await fs.readdir(target)).sort(),
      plan.files.map((file) => file.path).sort()
    );

    for (const file of plan.files) {
      assert.equal(
        await fs.readFile(path.join(target, file.path), 'utf8'),
        file.content
      );
    }

    const readme = await fs.readFile(path.join(target, 'README.md'), 'utf8');
    assert.match(readme, new RegExp(methodFile.replace('.', '\\.')));
    assert.match(readme, /passwords|kata laluan/);
    assert.doesNotMatch(readme, /Git is not initialized/);
    assert.doesNotMatch(readme, /CrossAI/);

    assert.equal(
      await fs.readFile(path.join(target, '.gitignore'), 'utf8'),
      GITIGNORE_CONTENT
    );

    assert.equal((await fs.readdir(target)).includes('.git'), false);
    assert.equal((await fs.readdir(target)).includes('package.json'), false);
  });
}

test('v0.1 refuses any existing target without invoking Core materialization', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-existing-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));
  const target = path.join(parent, 'existing');
  await fs.mkdir(target);
  await fs.writeFile(path.join(target, 'sentinel.txt'), 'keep\n', 'utf8');
  let built = false;

  await assert.rejects(
    bootstrapProject(
      { target, method: 'zassimple', language: 'en' },
      {
        buildPlan: async () => {
          built = true;
          return buildBootstrapPlan({
            projectName: 'existing',
            method: 'zassimple',
            language: 'en'
          });
        }
      }
    ),
    /Target already exists/
  );

  assert.equal(built, false);
  assert.equal(
    await fs.readFile(path.join(target, 'sentinel.txt'), 'utf8'),
    'keep\n'
  );
  assert.deepEqual(await fs.readdir(target), ['sentinel.txt']);
});

test('v0.1 cleans up a partial target created by the current run', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-cleanup-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));
  const target = path.join(parent, 'partial');
  let writes = 0;

  await assert.rejects(
    bootstrapProject(
      { target, method: 'zasspill', language: 'en' },
      {
        writeFile: async (...args) => {
          writes += 1;
          if (writes === 2) throw new Error('synthetic write failure');
          return fs.writeFile(...args);
        }
      }
    ),
    /synthetic write failure/
  );

  await assert.rejects(
    fs.stat(target),
    (error) => error.code === 'ENOENT'
  );
});

test('v0.1 refuses a missing parent rather than creating parent trees', async (t) => {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'create-zass-parent-'));
  t.after(() => fs.rm(parent, { recursive: true, force: true }));
  const target = path.join(parent, 'missing-parent', 'project');

  await assert.rejects(
    bootstrapProject({ target, method: 'zass', language: 'en' }),
    /Parent directory does not exist/
  );

  assert.equal(
    await fs
      .stat(path.join(parent, 'missing-parent'))
      .then(() => true)
      .catch((error) => {
        if (error.code === 'ENOENT') return false;
        throw error;
      }),
    false
  );
});
