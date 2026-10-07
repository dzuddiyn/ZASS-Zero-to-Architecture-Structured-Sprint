import fs from 'node:fs/promises';
import path from 'node:path';
import { constants } from 'node:fs';
import { BootstrapRefusalError } from './errors.js';
import { getTemplateDescriptor, loadTemplate } from './templates.js';

export const GITIGNORE_CONTENT = `.env
.env.*
!.env.example
.secrets/
*.key
*.pem
`;

function buildReadme({ projectName, descriptor }) {
  return `# ${projectName}

This project uses **${descriptor.methodLabel}**.

- **Language:** ${descriptor.languageLabel}
- **Active method file:** \`${descriptor.methodFile}\`

## Start

Open \`${descriptor.methodFile}\` with your AI and start with that method.

## Safety

Never place passwords, API keys, tokens, or sensitive personal data inside tracked ZASS Markdown files.

## Local-first state

This bootstrap creates local project files only. Git is not initialized, GitHub is not connected, and CrossAI is not registered.
`;
}

async function pathExists(target) {
  try {
    await fs.lstat(target);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function validateGeneratedProject(projectDir, methodFile) {
  const expected = ['.gitignore', 'README.md', methodFile].sort();
  const actual = (await fs.readdir(projectDir)).sort();

  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `Generated project structure mismatch. Expected ${expected.join(', ')}; got ${actual.join(', ')}`
    );
  }

  for (const name of expected) {
    const stat = await fs.stat(path.join(projectDir, name));
    if (!stat.isFile()) {
      throw new Error(`Generated entry is not a file: ${name}`);
    }
  }

  const methodContent = await fs.readFile(path.join(projectDir, methodFile), 'utf8');
  if (methodContent.trim().length === 0) {
    throw new Error(`Generated method file is empty: ${methodFile}`);
  }
}

export async function bootstrapProject(
  { target, method, language },
  dependencies = {}
) {
  const projectDir = path.resolve(target);
  const parentDir = path.dirname(projectDir);
  const projectName = path.basename(projectDir);
  const descriptor = getTemplateDescriptor(method, language);
  const templateLoader = dependencies.loadTemplate ?? loadTemplate;
  const writeFile = dependencies.writeFile ?? fs.writeFile;

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

  const methodContent = await templateLoader(method, language);
  const readmeContent = buildReadme({ projectName, descriptor });
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

    await writeFile(
      path.join(projectDir, descriptor.methodFile),
      methodContent,
      'utf8'
    );
    await writeFile(path.join(projectDir, 'README.md'), readmeContent, 'utf8');
    await writeFile(path.join(projectDir, '.gitignore'), GITIGNORE_CONTENT, 'utf8');

    await validateGeneratedProject(projectDir, descriptor.methodFile);

    return {
      ok: true,
      projectName,
      projectDir,
      target,
      method,
      language,
      methodFile: descriptor.methodFile,
      methodLabel: descriptor.methodLabel,
      languageLabel: descriptor.languageLabel,
      createdFiles: [descriptor.methodFile, 'README.md', '.gitignore']
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
