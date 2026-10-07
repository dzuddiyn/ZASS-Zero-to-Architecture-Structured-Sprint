import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { buildBootstrapPlan } from '../src/index.js';

test('Core planning does not materialize files or directories', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-core-boundary-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));

  const before = await fs.readdir(dir);
  await buildBootstrapPlan({
    projectName: 'demo',
    method: 'zassimple',
    language: 'en'
  });
  const after = await fs.readdir(dir);

  assert.deepEqual(before, []);
  assert.deepEqual(after, []);
});
