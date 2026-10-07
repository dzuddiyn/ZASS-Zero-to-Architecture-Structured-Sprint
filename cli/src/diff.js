import fs from 'node:fs/promises';
import path from 'node:path';
import { readGitProjectBaselineFiles } from './git.js';
import {
  extractDecisionState,
  extractZassProjectSnapshot
} from './parser.js';

const PRIMARY_FILES = ['ZASS.md', 'ACTION_PLAN.md', 'ARCHITECTURE.md'];

async function readCurrentFile(projectDir, name) {
  try {
    return await fs.readFile(path.join(projectDir, name), 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function fileState(before, after) {
  if (before == null && after == null) return 'UNCHANGED';
  if (before == null) return 'ADDED';
  if (after == null) return 'DELETED';
  return before === after ? 'UNCHANGED' : 'MODIFIED';
}

function setDelta(before, after) {
  return {
    added: [...after].filter((value) => !before.has(value)).sort(),
    removed: [...before].filter((value) => !after.has(value)).sort()
  };
}

function valueLabel(value, suffix = '') {
  if (value == null) return 'N/A';
  return `${value}${suffix}`;
}

function scalarDelta(before, after, suffix = '') {
  if (before === after) return null;
  return `${valueLabel(before, suffix)} → ${valueLabel(after, suffix)}`;
}

function snapshot(content) {
  return extractZassProjectSnapshot(content ?? '');
}

function decisionSnapshot(content) {
  return extractDecisionState(content ?? '');
}

function hasAny(items) {
  return items.length > 0;
}

export async function runDiff(projectDir) {
  const baseline = await readGitProjectBaselineFiles(projectDir, PRIMARY_FILES, 'HEAD');

  if (!baseline.available) {
    return {
      state: 'UNAVAILABLE',
      baseline: 'N/A',
      reason: baseline.reason || 'Local Git HEAD unavailable',
      exitCode: 2
    };
  }

  const currentFiles = {};
  for (const name of PRIMARY_FILES) {
    currentFiles[name] = await readCurrentFile(projectDir, name);
  }

  const files = PRIMARY_FILES.map((name) => ({
    name,
    state: fileState(baseline.files[name], currentFiles[name])
  }));

  const baselineZass = baseline.files['ZASS.md'];
  const currentZass = currentFiles['ZASS.md'];

  if (baselineZass == null && currentZass == null) {
    return {
      state: 'NOT_APPLICABLE',
      baseline: 'HEAD',
      reason: 'No Full ZASS surface found in baseline or current project state',
      files,
      exitCode: 1
    };
  }

  const beforeProject = snapshot(baselineZass);
  const afterProject = snapshot(currentZass);
  const ids = setDelta(beforeProject.ids, afterProject.ids);
  const blockers = setDelta(
    beforeProject.criticalBlockerIds,
    afterProject.criticalBlockerIds
  );

  const beforeDecisions = decisionSnapshot(baselineZass);
  const afterDecisions = decisionSnapshot(currentZass);
  const locked = setDelta(beforeDecisions.lockedIds, afterDecisions.lockedIds);
  const superseded = setDelta(
    beforeDecisions.supersededIds,
    afterDecisions.supersededIds
  );

  const readiness = {
    progress: scalarDelta(beforeProject.progress, afterProject.progress, '%'),
    status: scalarDelta(beforeProject.status, afterProject.status),
    version: scalarDelta(beforeProject.version, afterProject.version),
    blockersAdded: blockers.added,
    blockersRemoved: blockers.removed
  };

  const changed = files.some((file) => file.state !== 'UNCHANGED');

  return {
    state: changed ? 'CHANGED' : 'NO_CHANGE',
    baseline: 'HEAD',
    files,
    ids,
    decisions: {
      locked,
      superseded
    },
    readiness,
    showReadiness:
      readiness.progress !== null ||
      readiness.status !== null ||
      readiness.version !== null ||
      hasAny(readiness.blockersAdded) ||
      hasAny(readiness.blockersRemoved),
    exitCode: 0
  };
}

function list(values) {
  return values.length > 0 ? values.join(', ') : 'NONE';
}

export function formatDiff(report) {
  const lines = ['ZASS DIFF', '', `Diff:        ${report.state}`, `Baseline:    ${report.baseline}`];

  if (report.reason) {
    lines.push(`Reason:      ${report.reason}`);
    return lines.join('\n');
  }

  lines.push('', 'Files:');
  for (const file of report.files) {
    lines.push(`  ${file.name.padEnd(18)} ${file.state}`);
  }

  lines.push(
    '',
    'ZASS IDs:',
    `  Added:           ${list(report.ids.added)}`,
    `  Removed:         ${list(report.ids.removed)}`,
    '',
    'Decision state:',
    `  LOCKED added:        ${list(report.decisions.locked.added)}`,
    `  LOCKED removed:      ${list(report.decisions.locked.removed)}`,
    `  SUPERSEDED added:    ${list(report.decisions.superseded.added)}`,
    `  SUPERSEDED removed:  ${list(report.decisions.superseded.removed)}`
  );

  if (report.showReadiness) {
    lines.push('', 'Declared readiness:');
    if (report.readiness.progress !== null) {
      lines.push(`  Progress:          ${report.readiness.progress}`);
    }
    if (report.readiness.status !== null) {
      lines.push(`  Status:            ${report.readiness.status}`);
    }
    if (report.readiness.version !== null) {
      lines.push(`  Version:           ${report.readiness.version}`);
    }
    lines.push(
      `  Blockers added:    ${list(report.readiness.blockersAdded)}`,
      `  Blockers removed:  ${list(report.readiness.blockersRemoved)}`
    );
  }

  return lines.join('\n');
}
