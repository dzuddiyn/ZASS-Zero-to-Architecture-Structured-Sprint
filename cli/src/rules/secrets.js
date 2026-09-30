import fs from 'node:fs/promises';
import path from 'node:path';

const PATTERNS = [
  { name: 'private key block', regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g },
  { name: 'GitHub token', regex: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/g },
  { name: 'OpenAI-style API key', regex: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { name: 'Google API key', regex: /\bAIza[0-9A-Za-z_-]{30,}\b/g },
  { name: 'AWS access key', regex: /\bAKIA[0-9A-Z]{16}\b/g }
];

export async function checkSecrets(projectRoot, projectFiles) {
  const results = [];
  let matches = 0;

  for (const file of projectFiles) {
    const content = await fs.readFile(file.path, 'utf8');
    for (const pattern of PATTERNS) {
      pattern.regex.lastIndex = 0;
      let match;
      while ((match = pattern.regex.exec(content)) !== null) {
        matches += 1;
        const line = content.slice(0, match.index).split(/\r?\n/).length;
        results.push({
          level: 'warning',
          code: 'Z005',
          message: `Possible ${pattern.name} detected; value redacted`,
          file: path.relative(projectRoot, file.path),
          line
        });
      }
    }
  }

  if (matches === 0) {
    results.push({ level: 'pass', code: 'Z005', message: 'No high-signal secret patterns detected' });
  }

  return results;
}
