import { extractRecordDefinitions } from '../parser.js';

export function checkIds(zassContent) {
  const results = [];
  const { records, malformed } = extractRecordDefinitions(zassContent);
  const seen = new Map();

  for (const record of records) {
    if (seen.has(record.id)) {
      results.push({
        level: 'error',
        code: 'Z001',
        message: `Duplicate ID: ${record.id}`,
        file: 'ZASS.md',
        line: record.line
      });
    } else {
      seen.set(record.id, record.line);
    }
  }

  for (const record of malformed) {
    results.push({
      level: 'error',
      code: 'Z002',
      message: `Malformed ID: ${record.id}`,
      file: 'ZASS.md',
      line: record.line
    });
  }

  if (!results.some((result) => result.code === 'Z001')) {
    results.push({ level: 'pass', code: 'Z001', message: 'No duplicate record IDs found' });
  }
  if (!results.some((result) => result.code === 'Z002')) {
    results.push({ level: 'pass', code: 'Z002', message: 'No malformed record IDs found' });
  }

  return results;
}
