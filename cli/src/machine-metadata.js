import fs from 'node:fs/promises';
import path from 'node:path';

export const MACHINE_METADATA_RELATIVE_PATH = path.join('.zass', 'project.json');
export const MACHINE_METADATA_SCHEMA_VERSION = '0.1';

const METHOD_FILES = Object.freeze({
  zasspill: Object.freeze({
    en: 'ZASSPILL_EN.md',
    my: 'ZASSPILL_MY.md'
  }),
  zasselection: Object.freeze({
    en: 'ZASSELECTION_EN.md',
    my: 'ZASSELECTION_MY.md'
  }),
  zassimple: Object.freeze({
    en: 'ZASSIMPLE_EN.md',
    my: 'ZASSIMPLE_MY.md'
  }),
  zass: Object.freeze({
    en: 'ZASS.md',
    my: 'ZASS.md'
  })
});

const ROOT_KEYS = new Set(['schemaVersion', 'project']);
const PROJECT_KEYS = new Set(['name', 'method', 'language', 'methodFile']);

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function unknownKeys(value, allowed) {
  return Object.keys(value).filter((key) => !allowed.has(key));
}

function validProjectName(value) {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    !/[\u0000\r\n]/.test(value)
  );
}

function validateV01(data) {
  const errors = [];

  for (const key of unknownKeys(data, ROOT_KEYS)) {
    errors.push(`unsupported top-level field: ${key}`);
  }

  if (!isPlainObject(data.project)) {
    errors.push('project must be an object');
    return errors;
  }

  for (const key of unknownKeys(data.project, PROJECT_KEYS)) {
    errors.push(`unsupported project field: ${key}`);
  }

  const project = data.project;

  if (!validProjectName(project.name)) {
    errors.push('project.name must be a non-empty single-line string');
  }

  if (typeof project.method !== 'string' || !(project.method in METHOD_FILES)) {
    errors.push('project.method is not supported');
  }

  if (project.language !== 'en' && project.language !== 'my') {
    errors.push('project.language is not supported');
  }

  if (typeof project.methodFile !== 'string' || project.methodFile.length === 0) {
    errors.push('project.methodFile must be a non-empty string');
  }

  const expectedMethodFile =
    typeof project.method === 'string' &&
    project.method in METHOD_FILES &&
    (project.language === 'en' || project.language === 'my')
      ? METHOD_FILES[project.method][project.language]
      : null;

  if (
    expectedMethodFile !== null &&
    typeof project.methodFile === 'string' &&
    project.methodFile !== expectedMethodFile
  ) {
    errors.push(
      `project.methodFile must be ${expectedMethodFile} for ${project.method} + ${project.language}`
    );
  }

  return errors;
}

function result(state, metadataPath, extra = {}) {
  return {
    state,
    path: metadataPath,
    ...extra
  };
}

export async function loadMachineMetadata(projectDir) {
  const root = path.resolve(projectDir);
  const metadataPath = path.join(root, MACHINE_METADATA_RELATIVE_PATH);

  let source;
  try {
    source = await fs.readFile(metadataPath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return result('ABSENT', metadataPath, { data: null, errors: [] });
    }
    throw error;
  }

  let data;
  try {
    data = JSON.parse(source);
  } catch {
    return result('MALFORMED', metadataPath, {
      data: null,
      errors: ['project.json is not valid JSON']
    });
  }

  if (!isPlainObject(data)) {
    return result('MALFORMED', metadataPath, {
      data,
      errors: ['project.json root must be a JSON object']
    });
  }

  if (data.schemaVersion !== MACHINE_METADATA_SCHEMA_VERSION) {
    return result('UNSUPPORTED_SCHEMA', metadataPath, {
      data,
      errors: [
        `unsupported schemaVersion: ${typeof data.schemaVersion === 'string' ? data.schemaVersion : String(data.schemaVersion)}`
      ]
    });
  }

  const errors = validateV01(data);
  if (errors.length > 0) {
    return result('INVALID', metadataPath, { data, errors });
  }

  return result('VALID', metadataPath, { data, errors: [] });
}

export function expectedMethodFile(method, language) {
  return METHOD_FILES[method]?.[language] ?? null;
}
