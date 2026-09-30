import fs from 'node:fs/promises';
import { discoverProject } from './discover.js';
import { checkIds } from './rules/ids.js';
import { checkLinks } from './rules/links.js';
import { checkEvidenceConfidence } from './rules/evidence.js';
import { checkSecrets } from './rules/secrets.js';

export async function runCheck(projectDir) {
  const discovered = await discoverProject(projectDir);
  const results = [];

  if (discovered.missingRequired.length > 0) {
    for (const missing of discovered.missingRequired) {
      results.push({
        level: 'error',
        code: 'Z000',
        message: `Required file missing: ${missing}`
      });
    }
    return buildReport(discovered, results);
  }

  const zassFile = discovered.files.find((file) => file.name === 'ZASS.md');
  const zassContent = await fs.readFile(zassFile.path, 'utf8');

  results.push({ level: 'pass', code: 'Z000', message: 'ZASS.md found' });
  results.push(...checkIds(zassContent));
  results.push(...await checkLinks(discovered.root, discovered.files));
  results.push(...checkEvidenceConfidence(zassContent));
  results.push(...await checkSecrets(discovered.root, discovered.files));

  return buildReport(discovered, results);
}

function buildReport(discovered, results) {
  const errorCount = results.filter((result) => result.level === 'error').length;
  const warningCount = results.filter((result) => result.level === 'warning').length;

  return {
    projectRoot: discovered.root,
    files: discovered.files.map((file) => file.name),
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
