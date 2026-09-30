import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT_FILES = [
  { name: 'ZASS.md', required: true },
  { name: 'ACTION_PLAN.md', required: false },
  { name: 'ARCHITECTURE.md', required: false }
];

export async function discoverProject(projectDir) {
  const root = path.resolve(projectDir);
  const files = [];
  const missingRequired = [];

  for (const entry of PROJECT_FILES) {
    const absolutePath = path.join(root, entry.name);
    try {
      const stat = await fs.stat(absolutePath);
      if (stat.isFile()) {
        files.push({ ...entry, path: absolutePath });
      } else if (entry.required) {
        missingRequired.push(entry.name);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        if (entry.required) missingRequired.push(entry.name);
      } else {
        throw error;
      }
    }
  }

  return { root, files, missingRequired };
}
