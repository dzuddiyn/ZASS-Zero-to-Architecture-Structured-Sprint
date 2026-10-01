import { readGitBaseline } from '../git.js';
import { extractDecisionState, sameDecisionContent } from '../parser.js';

function hasExplicitSupersedingPath(currentState, oldId) {
  for (const [newId, supersededId] of currentState.supersedes.entries()) {
    if (supersededId !== oldId || newId === oldId) continue;
    const replacement = currentState.decisions.get(newId);
    if (replacement) return true;
  }
  return false;
}

export async function checkLockedDrift(projectRoot, currentContent) {
  const baseline = await readGitBaseline(projectRoot);

  if (!baseline.available) {
    return [{
      level: 'warning',
      code: 'Z100',
      message: baseline.reason
    }];
  }

  const historical = extractDecisionState(baseline.content);
  const current = extractDecisionState(currentContent);
  const errors = [];

  for (const oldId of historical.lockedIds) {
    const oldRecord = historical.decisions.get(oldId);
    if (!oldRecord) continue;

    const currentRecord = current.decisions.get(oldId);
    const supersedingPath = hasExplicitSupersedingPath(current, oldId);

    if (!currentRecord) {
      errors.push({
        level: 'error',
        code: 'Z101',
        message: `LOCKED decision removed: ${oldId}`,
        file: 'ZASS.md'
      });
      continue;
    }

    if (!sameDecisionContent(oldRecord, currentRecord)) {
      errors.push({
        level: 'error',
        code: 'Z101',
        message: `LOCKED decision modified: ${oldId}`,
        file: 'ZASS.md',
        line: currentRecord.line
      });
      continue;
    }

    if (!currentRecord.locked && !supersedingPath) {
      errors.push({
        level: 'error',
        code: 'Z101',
        message: `LOCKED state removed without explicit Supersedes relation: ${oldId}`,
        file: 'ZASS.md',
        line: currentRecord.line
      });
    }
  }

  if (errors.length > 0) return errors;

  return [{
    level: 'pass',
    code: 'Z101',
    message: 'No silent LOCKED-decision drift detected'
  }];
}
