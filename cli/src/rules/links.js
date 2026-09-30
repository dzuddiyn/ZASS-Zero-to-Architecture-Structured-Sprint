import fs from 'node:fs/promises';
import path from 'node:path';
import { extractMarkdownLinks } from '../parser.js';

function normalizeLocalTarget(target) {
  if (!target) return null;
  if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target)) return null;
  if (target.startsWith('#') || target.startsWith('//') || target.startsWith('/')) return null;

  const withoutAnchor = target.split('#', 1)[0].split('?', 1)[0];
  if (!withoutAnchor) return null;

  try {
    return decodeURIComponent(withoutAnchor);
  } catch {
    return withoutAnchor;
  }
}

export async function checkLinks(projectRoot, projectFiles) {
  const results = [];
  let broken = 0;

  for (const file of projectFiles) {
    const markdown = await fs.readFile(file.path, 'utf8');
    const baseDir = path.dirname(file.path);

    for (const link of extractMarkdownLinks(markdown)) {
      const localTarget = normalizeLocalTarget(link.target);
      if (!localTarget) continue;

      const resolved = path.resolve(baseDir, localTarget);
      const relativeToRoot = path.relative(projectRoot, resolved);
      if (relativeToRoot.startsWith('..') || path.isAbsolute(relativeToRoot)) continue;

      try {
        await fs.access(resolved);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        broken += 1;
        results.push({
          level: 'error',
          code: 'Z003',
          message: `Broken local reference: ${link.target}`,
          file: path.relative(projectRoot, file.path),
          line: link.line
        });
      }
    }
  }

  if (broken === 0) {
    results.push({ level: 'pass', code: 'Z003', message: 'Local Markdown references resolve' });
  }

  return results;
}
