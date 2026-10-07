import { discoverProject } from './discover.js';
import { runCheck } from './check.js';
import { readGitWorkingState } from './git.js';

const STATUS_FILES = ['ZASS.md', 'ACTION_PLAN.md', 'ARCHITECTURE.md'];

function validationState(report) {
  if (report.errorCount > 0) return 'ERROR';
  if (report.warningCount > 0) return 'WARNING';
  return 'PASS';
}

export async function runStatus(projectDir) {
  const discovered = await discoverProject(projectDir);
  const validation = await runCheck(projectDir);
  const git = await readGitWorkingState(projectDir);
  const found = new Set(discovered.files.map((file) => file.name));
  const detected = discovered.missingRequired.length === 0;

  return {
    projectRoot: discovered.root,
    project: detected ? 'DETECTED' : 'NOT_DETECTED',
    surface: detected ? 'FULL ZASS' : null,
    files: STATUS_FILES.map((name) => ({
      name,
      state: found.has(name) ? 'FOUND' : 'MISSING'
    })),
    validation: {
      state: validationState(validation),
      errorCount: validation.errorCount,
      warningCount: validation.warningCount
    },
    git: {
      state: git.state,
      baseline: git.baseline
    },
    exitCode: validation.exitCode
  };
}

export function formatStatus(report) {
  const lines = ['ZASS STATUS', ''];

  lines.push(`Project:     ${report.project}`);
  if (report.surface) {
    lines.push(`Surface:     ${report.surface}`);
  }

  lines.push('', 'Files:');
  for (const file of report.files) {
    lines.push(`  ${file.name.padEnd(18)} ${file.state}`);
  }

  lines.push(
    '',
    `Validation:  ${report.validation.state}`,
    `Errors:      ${report.validation.errorCount}`,
    `Warnings:    ${report.validation.warningCount}`,
    '',
    `Git:         ${report.git.state}`,
    `Baseline:    ${report.git.baseline}`
  );

  return lines.join('\n');
}
