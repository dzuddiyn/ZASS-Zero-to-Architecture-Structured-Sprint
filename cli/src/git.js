import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

async function git(args, cwd) {
  return execFileAsync('git', ['-C', cwd, ...args], {
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 1024 * 1024
  });
}

export async function readGitBaseline(projectDir) {
  let gitRoot;
  let head;

  try {
    gitRoot = (await git(['rev-parse', '--show-toplevel'], projectDir)).stdout.trim();
    head = (await git(['rev-parse', 'HEAD'], projectDir)).stdout.trim();
  } catch {
    return { available: false, reason: 'Git history unavailable; LOCKED drift check skipped' };
  }

  const zassPath = path.join(projectDir, 'ZASS.md');
  const relativeZass = path.relative(gitRoot, zassPath).split(path.sep).join('/');

  if (!relativeZass || relativeZass.startsWith('../') || path.isAbsolute(relativeZass)) {
    return { available: false, reason: 'Project ZASS.md is outside the Git repository; LOCKED drift check skipped' };
  }

  try {
    const historical = await git(['show', `HEAD:${relativeZass}`], projectDir);
    return { available: true, gitRoot, head, relativeZass, content: historical.stdout };
  } catch {
    return {
      available: false,
      gitRoot,
      head,
      relativeZass,
      reason: 'HEAD has no committed ZASS.md; LOCKED drift check skipped'
    };
  }
}
