import { visibleMarkdownLines } from '../parser.js';

function hasEvidenceConfidence(text) {
  return /Evidence\s+Confidence\s*:\s*(?:\*\*)?\s*(?:UNVALIDATED|LOW|MEDIUM|HIGH)\b/i.test(text);
}

function hasRealReadinessScore(lines) {
  return lines.some(({ text }) =>
    /ZERO\s*(?:→|->)\s*ARCHITECTURE/i.test(text) && /\b\d{1,3}%/.test(text)
  );
}

function hasDraftReadinessGate(lines) {
  return lines.some(({ text }) =>
    /(?:Architecture\s+Readiness|Readiness\s+gate|Current\s+status)\s*:/i.test(text) &&
    /DRAFT\s+ARCH/i.test(text)
  );
}

function hasBuildArchitectureGate(lines) {
  return lines.some(({ text }) =>
    /(?:Architecture\s+gate|Current\s+gate|Current\s+status|Architecture\s+status)\s*:/i.test(text) &&
    /BUILD\s+ARCHITECTURE/i.test(text)
  );
}

function confirmedWithOpenValidation(lines) {
  const joined = lines.map(({ text }) => text).join('\n');
  const confirmed = /ARCHITECTURE\s+CONFIRMED/i.test(joined);
  if (!confirmed) return false;

  const openExperiment = lines.some(({ text }) =>
    /\bE-\d{3}\b/.test(text) && /\b(?:PLANNED|READY|RUNNING|INCONCLUSIVE|BLOCKED)\b/i.test(text)
  );
  const openValidation = /(?:open|remaining|planned)\s+(?:validation|experiment|experiments|validation loops?)/i.test(joined);
  return openExperiment || openValidation;
}

export function checkEvidenceConfidence(zassContent) {
  const lines = visibleMarkdownLines(zassContent);
  const visibleText = lines.map(({ text }) => text).join('\n');
  const trigger =
    hasRealReadinessScore(lines) ||
    hasDraftReadinessGate(lines) ||
    hasBuildArchitectureGate(lines) ||
    confirmedWithOpenValidation(lines);

  if (!trigger) {
    return [{ level: 'pass', code: 'Z004', message: 'No current architecture assessment requires Evidence Confidence' }];
  }

  if (hasEvidenceConfidence(visibleText)) {
    return [{ level: 'pass', code: 'Z004', message: 'Evidence Confidence is paired with architecture assessment' }];
  }

  return [{
    level: 'warning',
    code: 'Z004',
    message: 'Architecture assessment detected but Evidence Confidence is missing',
    file: 'ZASS.md'
  }];
}
