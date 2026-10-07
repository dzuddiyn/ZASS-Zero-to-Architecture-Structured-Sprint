import fs from 'node:fs/promises';
import path from 'node:path';
import { constants } from 'node:fs';
import {
  buildBootstrapPlan,
  getBootstrapDescriptor,
  verifyBootstrapSnapshot
} from '../../bootstrap-core/src/index.js';
import { BootstrapRefusalError } from './errors.js';

async function pathExists(target) {
  try {
    await fs.lstat(target);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function readBootstrapSnapshot(projectDir) {
  const entries = await fs.readdir(projectDir);
  const files = [];

  for (const name of entries) {
    const fullPath = path.join(projectDir, name);
    const stat = await fs.stat(fullPath);
    if (!stat.isFile()) {
      files.push({ path: name, content: null });
      continue;
    }

    files.push({
      path: name,
      content: await fs.readFile(fullPath, 'utf8')
    });
  }

  return { files };
}

export async function bootstrapProject(
  { target, method, language },
  dependencies = {}
) {
  const projectDir = path.resolve(target);
  const parentDir = path.dirname(projectDir);
  const projectName = path.basename(projectDir);
  const writeFile = dependencies.writeFile ?? fs.writeFile;
  const planBuilder = dependencies.buildPlan ?? buildBootstrapPlan;

  if (await pathExists(projectDir)) {
    throw new BootstrapRefusalError(`Target already exists: ${projectDir}`);
  }

  let parentStat;
  try {
    parentStat = await fs.stat(parentDir);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new BootstrapRefusalError(`Parent directory does not exist: ${parentDir}`);
    }
    throw error;
  }

  if (!parentStat.isDirectory()) {
    throw new BootstrapRefusalError(`Parent path is not a directory: ${parentDir}`);
  }

  try {
    await fs.access(parentDir, constants.W_OK);
  } catch {
    throw new BootstrapRefusalError(`Parent directory is not writable: ${parentDir}`);
  }

  const plan = await planBuilder({ projectName, method, language });
  const descriptor = getBootstrapDescriptor(method, language);
  let created = false;

  try {
    try {
      await fs.mkdir(projectDir);
      created = true;
    } catch (error) {
      if (error.code === 'EEXIST') {
        throw new BootstrapRefusalError(`Target already exists: ${projectDir}`);
      }
      throw error;
    }

    for (const file of plan.files) {
      await writeFile(path.join(projectDir, file.path), file.content, 'utf8');
    }

    const snapshot = await readBootstrapSnapshot(projectDir);
    const verification = verifyBootstrapSnapshot(plan, snapshot);

    if (!verification.ok) {
      throw new Error(
        `Materialized bootstrap verification failed: ${verification.errors
          .map((entry) => entry.message)
          .join('; ')}`
      );
    }

    return {
      ok: true,
      projectName,
      projectDir,
      target,
      method,
      language,
      methodFile: plan.project.methodFile,
      methodLabel: descriptor.methodLabel,
      languageLabel: descriptor.languageLabel,
      createdFiles: plan.files.map((file) => file.path)
    };
  } catch (error) {
    if (created) {
      await fs.rm(projectDir, { recursive: true, force: true });
    }
    throw error;
  }
}

export function formatSuccess(report) {
  return [
    'ZASS project created.',
    '',
    `Project:  ${report.projectName}`,
    `Method:   ${report.methodLabel}`,
    `Language: ${report.languageLabel}`,
    '',
    'Created:',
    ...report.createdFiles.map((name) => `  ${name}`),
    '',
    'Git:      not initialized',
    'GitHub:   not connected',
    'CrossAI:  not registered',
    '',
    'Next:',
    `  cd "${report.target}"`,
    `  open ${report.methodFile} with your AI`
  ].join('\n');
}
