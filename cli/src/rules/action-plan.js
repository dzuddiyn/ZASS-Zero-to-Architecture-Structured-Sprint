import {
  extractActionPlanSnapshot,
  extractZassProjectSnapshot
} from '../parser.js';

function sameNumber(a, b) {
  return Number.isFinite(a) && Number.isFinite(b) && a === b;
}

export function checkActionPlanConsistency(zassContent, actionPlanContent) {
  if (actionPlanContent == null) {
    return [{
      level: 'pass',
      code: 'Z200',
      message: 'ACTION_PLAN.md not present; consistency checks skipped'
    }];
  }

  const zass = extractZassProjectSnapshot(zassContent);
  const action = extractActionPlanSnapshot(actionPlanContent);
  const results = [];

  if (!action.found) {
    results.push({
      level: 'warning',
      code: 'Z200',
      message: 'ACTION_PLAN.md found but ZERO → ARCHITECTURE snapshot was not found; snapshot comparisons skipped',
      file: 'ACTION_PLAN.md'
    });
  } else {
    results.push({
      level: 'pass',
      code: 'Z200',
      message: 'ACTION_PLAN ZERO → ARCHITECTURE snapshot found'
    });
  }

  if (action.found && zass.progress != null && action.progress != null) {
    if (!sameNumber(zass.progress, action.progress)) {
      results.push({
        level: 'error',
        code: 'Z201',
        message: `ACTION_PLAN readiness snapshot is stale: ZASS ${zass.progress}% vs ACTION_PLAN ${action.progress}%`,
        file: 'ACTION_PLAN.md'
      });
    } else {
      results.push({
        level: 'pass',
        code: 'Z201',
        message: 'ACTION_PLAN readiness progress matches ZASS'
      });
    }
  }

  if (action.found && zass.status && action.status) {
    if (zass.status !== action.status) {
      results.push({
        level: 'error',
        code: 'Z202',
        message: `ACTION_PLAN readiness status does not match ZASS: ${action.status} vs ${zass.status}`,
        file: 'ACTION_PLAN.md'
      });
    } else {
      results.push({
        level: 'pass',
        code: 'Z202',
        message: 'ACTION_PLAN readiness status matches ZASS'
      });
    }
  }

  if (action.found && zass.version && action.source?.version) {
    if (zass.version !== action.source.version) {
      results.push({
        level: 'error',
        code: 'Z203',
        message: `ACTION_PLAN references stale ZASS version: v${action.source.version}; current ZASS is v${zass.version}`,
        file: 'ACTION_PLAN.md'
      });
    } else {
      results.push({
        level: 'pass',
        code: 'Z203',
        message: `ACTION_PLAN ZASS source version matches v${zass.version}`
      });
    }
  }

  const missingIds = [...action.relatedIds].filter((id) => !zass.ids.has(id));
  for (const id of missingIds) {
    results.push({
      level: 'error',
      code: 'Z204',
      message: `ACTION_PLAN references missing ZASS ID: ${id}`,
      file: 'ACTION_PLAN.md'
    });
  }
  if (missingIds.length === 0) {
    results.push({
      level: 'pass',
      code: 'Z204',
      message: action.relatedIds.size > 0
        ? 'All explicit ACTION_PLAN ZASS ID references resolve'
        : 'No explicit ACTION_PLAN ZASS ID references require validation'
    });
  }

  if (action.found && action.blockersNone && zass.criticalBlockerIds.size > 0) {
    results.push({
      level: 'warning',
      code: 'Z205',
      message: `ACTION_PLAN says no blockers while ZASS has open critical blockers: ${[...zass.criticalBlockerIds].join(', ')}`,
      file: 'ACTION_PLAN.md'
    });
  } else if (action.found) {
    results.push({
      level: 'pass',
      code: 'Z205',
      message: 'No conservative blocker inconsistency detected'
    });
  }

  return results;
}
