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
  let gitPrefix;
  let head;
  let baseline;

  if (typeof baselineRef !== 'string' || baselineRef.length === 0 || baselineRef.startsWith('-')) {
    return { available: false, reason: 'Invalid Git baseline ref; LOCKED drift check skipped' };
  }

  try {
    gitRoot = (await git(['rev-parse', '--show-toplevel'], projectDir)).stdout.trim();
    gitPrefix = (await git(['rev-parse', '--show-prefix'], projectDir)).stdout.trim();
    head = (await git(['rev-parse', 'HEAD'], projectDir)).stdout.trim();
    baseline = (await git(['rev-parse', '--verify', `${baselineRef}^{commit}`], projectDir)).stdout.trim();
  } catch {
    return {
      available: false,
      reason: `Git history or baseline ref unavailable (${baselineRef}); LOCKED drift check skipped`
    };
  }

  const relativeZass = `${gitPrefix}ZASS.md`;

  if (!relativeZass || relativeZass.startsWith('../') || path.posix.isAbsolute(relativeZass)) {
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


export async function readGitWorkingState(projectDir) {
  try {
    await git(['rev-parse', '--show-toplevel'], projectDir);
    await git(['rev-parse', 'HEAD'], projectDir);
    const status = await git(
      ['status', '--porcelain=v1', '--untracked-files=all'],
      projectDir
    );

    return {
      available: true,
      state: status.stdout.length === 0 ? 'CLEAN' : 'CHANGED',
      baseline: 'HEAD'
    };
  } catch {
    return {
      available: false,
      state: 'UNKNOWN',
      baseline: 'N/A'
    };
  }
}


export async function readGitProjectBaselineFiles(projectDir, fileNames, baselineRef = 'HEAD') {
  if (
    typeof baselineRef !== 'string' ||
    baselineRef.length === 0 ||
    baselineRef.startsWith('-') ||
    !Array.isArray(fileNames)
  ) {
    return {
      available: false,
      baseline: 'N/A',
      reason: 'Local Git HEAD unavailable'
    };
  }

  let gitRoot;
  let gitPrefix;
  let baseline;

  try {
    gitRoot = (await git(['rev-parse', '--show-toplevel'], projectDir)).stdout.trim();
    gitPrefix = (await git(['rev-parse', '--show-prefix'], projectDir)).stdout.trim();
    await git(['rev-parse', 'HEAD'], projectDir);
    baseline = (await git(['rev-parse', '--verify', `${baselineRef}^{commit}`], projectDir)).stdout.trim();
  } catch {
    return {
      available: false,
      baseline: 'N/A',
      reason: 'Local Git HEAD unavailable'
    };
  }

  const files = {};

  for (const name of fileNames) {
    const normalizedName = path.posix.normalize(String(name).replaceAll('\\', '/'));
    const relativePath = `${gitPrefix}${normalizedName}`;

    if (
      !normalizedName ||
      normalizedName === '..' ||
      normalizedName.startsWith('../') ||
      path.posix.isAbsolute(normalizedName) ||
      !relativePath ||
      relativePath.startsWith('../') ||
      path.posix.isAbsolute(relativePath)
    ) {
      return {
        available: false,
        baseline: 'N/A',
        reason: 'Project files are outside the Git repository'
      };
    }

    try {
      const historical = await git(['show', `${baseline}:${relativePath}`], projectDir);
      files[name] = historical.stdout;
    } catch {
      files[name] = null;
    }
  }

  return {
    available: true,
    baseline: 'HEAD',
    baselineSha: baseline,
    gitRoot,
    files
  };
}
