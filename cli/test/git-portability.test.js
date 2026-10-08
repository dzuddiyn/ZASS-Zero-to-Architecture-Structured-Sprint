import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  readGitBaseline,
  readGitProjectBaselineFiles
} from '../src/git.js';

function git(args, cwd) {
  return execFileSync('git', ['-C', cwd, ...args], {
    encoding: 'utf8',
    windowsHide: true
  });
}

async function makeNestedProject() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'zass-git-portability-'));
  const project = path.join(root, 'nested', 'project');
  await fs.mkdir(project, { recursive: true });

  await fs.writeFile(path.join(project, 'ZASS.md'), '# ZASS\n', 'utf8');
  await fs.writeFile(path.join(project, 'ACTION_PLAN.md'), '# Action Plan\n', 'utf8');

  git(['init'], root);
  git(['config', 'user.email', 'zass-ci@example.invalid'], root);
  git(['config', 'user.name', 'ZASS CI'], root);
  git(['add', '.'], root);
  git(['commit', '-m', 'fixture'], root);

  return { root, project };
}

test('E3-T09 Git baseline uses Git-relative prefix for nested project files', async (t) => {
  const { root, project } = await makeNestedProject();
  t.after(() => fs.rm(root, { recursive: true, force: true }));

  const baseline = await readGitBaseline(project);
  assert.equal(baseline.available, true);
  assert.equal(baseline.relativeZass, 'nested/project/ZASS.md');
  assert.equal(baseline.content, '# ZASS\n');

  const files = await readGitProjectBaselineFiles(
    project,
    ['ZASS.md', 'ACTION_PLAN.md']
  );

  assert.equal(files.available, true);
  assert.equal(files.files['ZASS.md'], '# ZASS\n');
  assert.equal(files.files['ACTION_PLAN.md'], '# Action Plan\n');
});

test('E3-T09 Git baseline rejects parent traversal names', async (t) => {
  const { root, project } = await makeNestedProject();
  t.after(() => fs.rm(root, { recursive: true, force: true }));

  const result = await readGitProjectBaselineFiles(project, ['../outside.md']);

  assert.equal(result.available, false);
  assert.match(result.reason, /outside the Git repository/);
});
