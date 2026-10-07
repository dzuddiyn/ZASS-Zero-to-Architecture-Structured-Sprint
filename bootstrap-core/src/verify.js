import { validateBootstrapPlan, isSafeArtifactPath } from './validation.js';

function issue(code, message, artifactPath) {
  return artifactPath ? { code, message, path: artifactPath } : { code, message };
}

export function verifyBootstrapSnapshot(plan, snapshot) {
  const errors = [];
  const planValidation = validateBootstrapPlan(plan);

  if (!planValidation.ok) {
    errors.push(...planValidation.errors);
    return { ok: false, errors };
  }

  if (!snapshot || !Array.isArray(snapshot.files)) {
    return {
      ok: false,
      errors: [issue('B200', 'Bootstrap snapshot files must be an array')]
    };
  }

  const expected = new Map(plan.files.map((file) => [file.path, file.content]));
  const seen = new Set();

  for (const file of snapshot.files) {
    if (!file || typeof file !== 'object') {
      errors.push(issue('B201', 'Snapshot artifact must be an object'));
      continue;
    }

    if (!isSafeArtifactPath(file.path)) {
      errors.push(issue('B202', `Unsafe snapshot artifact path: ${String(file.path)}`, file.path));
      continue;
    }

    if (seen.has(file.path)) {
      errors.push(issue('B203', `Duplicate snapshot artifact: ${file.path}`, file.path));
      continue;
    }
    seen.add(file.path);

    if (!expected.has(file.path)) {
      errors.push(issue('B204', `Unexpected materialized artifact: ${file.path}`, file.path));
      continue;
    }

    if (file.content !== expected.get(file.path)) {
      errors.push(issue('B205', `Materialized content mismatch: ${file.path}`, file.path));
    }
  }

  for (const expectedPath of expected.keys()) {
    if (!seen.has(expectedPath)) {
      errors.push(issue('B206', `Missing materialized artifact: ${expectedPath}`, expectedPath));
    }
  }

  return { ok: errors.length === 0, errors };
}
