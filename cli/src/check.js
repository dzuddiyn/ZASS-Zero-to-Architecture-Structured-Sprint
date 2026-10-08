import fs from 'node:fs/promises';
import path from 'node:path';
import { discoverProject } from './discover.js';
import { loadMachineMetadata } from './machine-metadata.js';
import { checkIds } from './rules/ids.js';
import { checkLinks } from './rules/links.js';
import { checkEvidenceConfidence } from './rules/evidence.js';
import { checkSecrets } from './rules/secrets.js';
import { checkLockedDrift } from './rules/drift.js';
import { checkActionPlanConsistency } from './rules/action-plan.js';

async function fileExists(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function checkMachineMetadata(discovered, metadata) {
  if (metadata.state === 'ABSENT') return [];

  if (metadata.state === 'MALFORMED') {
    return [{
      level: 'error',
      code: 'Z300',
      message: `Machine metadata malformed: ${metadata.errors.join('; ')}`,
      file: '.zass/project.json'
    }];
  }

  if (metadata.state === 'UNSUPPORTED_SCHEMA') {
    return [{
      level: 'error',
      code: 'Z301',
      message: `Machine metadata schema unsupported: ${metadata.errors.join('; ')}`,
      file: '.zass/project.json'
    }];
  }

  if (metadata.state === 'INVALID') {
    return metadata.errors.map((message) => ({
      level: 'error',
      code: 'Z302',
      message: `Machine metadata invalid: ${message}`,
      file: '.zass/project.json'
    }));
  }

  const results = [{
    level: 'pass',
    code: 'Z300',
    message: 'Machine metadata v0.1 valid',
    file: '.zass/project.json'
  }];

  const { project } = metadata.data;
  const methodFilePath = path.join(discovered.root, project.methodFile);
  if (!await fileExists(methodFilePath)) {
    results.push({
      level: 'error',
      code: 'Z303',
      message: `Declared method file missing: ${project.methodFile}`,
      file: '.zass/project.json'
    });
  }

  const fullZassDetected = discovered.missingRequired.length === 0;
  if (fullZassDetected && project.method !== 'zass') {
    results.push({
      level: 'error',
      code: 'Z304',
      message: `Machine metadata declares method ${project.method}, but current CLI project surface is unambiguously Full ZASS`,
      file: '.zass/project.json'
    });
  }

  return results;
}

export async function runCheck(projectDir, options = {}) {
  const discovered = await discoverProject(projectDir);
  const machineMetadata = await loadMachineMetadata(projectDir);
  const results = [];

  results.push(...await checkMachineMetadata(discovered, machineMetadata));

  if (discovered.missingRequired.length > 0) {
    for (const missing of discovered.missingRequired) {
      results.push({
        level: 'error',
        code: 'Z000',
        message: `Required file missing: ${missing}`
      });
    }
    return buildReport(discovered, results, machineMetadata);
  }

  const zassFile = discovered.files.find((file) => file.name === 'ZASS.md');
  const actionPlanFile = discovered.files.find((file) => file.name === 'ACTION_PLAN.md');
  const zassContent = await fs.readFile(zassFile.path, 'utf8');
  const actionPlanContent = actionPlanFile
    ? await fs.readFile(actionPlanFile.path, 'utf8')
    : null;

  results.push({ level: 'pass', code: 'Z000', message: 'ZASS.md found' });
  results.push(...checkIds(zassContent));
  results.push(...await checkLinks(discovered.root, discovered.files));
  results.push(...checkEvidenceConfidence(zassContent));
  results.push(...await checkSecrets(discovered.root, discovered.files));
  results.push(...await checkLockedDrift(discovered.root, zassContent, options.baselineRef));
  results.push(...checkActionPlanConsistency(zassContent, actionPlanContent));

  return buildReport(discovered, results, machineMetadata);
}

function buildReport(discovered, results, machineMetadata) {
  const errorCount = results.filter((result) => result.level === 'error').length;
  const warningCount = results.filter((result) => result.level === 'warning').length;

  return {
    projectRoot: discovered.root,
    files: discovered.files.map((file) => file.name),
    machineMetadata: {
      state: machineMetadata.state,
      path: machineMetadata.path
    },
    results,
    errorCount,
    warningCount,
    exitCode: errorCount > 0 ? 1 : 0
  };
}

export function formatResults(report) {
  const lines = ['ZASS CHECK', ''];

  for (const result of report.results) {
    const prefix = result.level === 'pass' ? 'PASS' : result.level === 'warning' ? 'WARNING' : 'ERROR';
    const location = result.file
      ? ` (${result.file}${result.line ? `:${result.line}` : ''})`
      : '';
    lines.push(`${prefix} ${result.code} — ${result.message}${location}`);
  }

  lines.push('');
  lines.push(`${report.errorCount} error(s), ${report.warningCount} warning(s)`);
  return lines.join('\n');
}
