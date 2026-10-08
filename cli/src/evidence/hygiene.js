import fs from 'node:fs/promises';
import path from 'node:path';

export const EVIDENCE_GITIGNORE_ENTRY = '.zass/evidence/';

function normalizeLineEndings(value) {
  return value.replace(/\r\n/g, '\n');
}

export async function ensureEvidenceGitIgnore(projectDir) {
  const root = path.resolve(projectDir);
  const gitignorePath = path.join(root, '.gitignore');

  let original = '';
  let existed = true;

  try {
    original = await fs.readFile(gitignorePath, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    existed = false;
  }

  const normalized = normalizeLineEndings(original);
  const lines = normalized.split('\n');
  const alreadyPresent = lines.some(
    (line) => line.trim() === EVIDENCE_GITIGNORE_ENTRY
  );

  if (alreadyPresent) {
    return {
      state: 'UNCHANGED',
      changed: false,
      path: gitignorePath,
      entry: EVIDENCE_GITIGNORE_ENTRY,
      existed
    };
  }

  let next = normalized;
  if (next.length > 0 && !next.endsWith('\n')) next += '\n';
  next += `${EVIDENCE_GITIGNORE_ENTRY}\n`;

  await fs.writeFile(gitignorePath, next, 'utf8');

  return {
    state: existed ? 'UPDATED' : 'CREATED',
    changed: true,
    path: gitignorePath,
    entry: EVIDENCE_GITIGNORE_ENTRY,
    existed
  };
}
