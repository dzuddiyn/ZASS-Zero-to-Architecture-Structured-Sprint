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

export async function readGitBaseline(projectDir, baselineRef = 'HEAD') {
  let gitRoot;
  let head;
  let baseline;

  if (typeof baselineRef !== 'string' || baselineRef.length === 0 || baselineRef.startsWith('-')) {
    return { available: false, reason: 'Invalid Git baseline ref; LOCKED drift check skipped' };
  }

  try {
    gitRoot = (await git(['rev-parse', '--show-toplevel'], projectDir)).stdout.trim();
    head = (await git(['rev-parse', 'HEAD'], projectDir)).stdout.trim();
    baseline = (await git(['rev-parse', '--verify', `${baselineRef}^{commit}`], projectDir)).stdout.trim();
  } catch {
    return {
      available: false,
      reason: `Git history or baseline ref unavailable (${baselineRef}); LOCKED drift check skipped`
    };
  }

  const zassPath = path.join(projectDir, 'ZASS.md');
  const relativeZass = path.relative(gitRoot, zassPath).split(path.sep).join('/');

  if (!relativeZass || relativeZass.startsWith('../') || path.isAbsolute(relativeZass)) {
    return { available: false, reason: 'Project ZASS.md is outside the Git repository; LOCKED drift check skipped' };
  }

  try {
    const historical = await git(['show', `${baseline}:${relativeZass}`], projectDir);
    return {
      available: true,
      gitRoot,
      head,
      baseline,
      baselineRef,
      relativeZass,
      content: historical.stdout
    };
  } catch {
    return {
      available: false,
      gitRoot,
      head,
      baseline,
      baselineRef,
      relativeZass,
      reason: `Baseline ${baselineRef} has no committed ZASS.md; LOCKED drift check skipped`
    };
  }
}
