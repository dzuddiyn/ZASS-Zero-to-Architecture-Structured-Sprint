import { UsageError } from './errors.js';

export const METHOD_CHOICES = Object.freeze([
  { value: 'zasspill', label: 'ZASSPILL', description: 'capture / continuity' },
  { value: 'zasselection', label: 'ZASSELECTION', description: 'compare / decide' },
  { value: 'zassimple', label: 'ZASSIMPLE', description: 'design / execute' },
  { value: 'zass', label: 'FULL ZASS', description: 'governed architecture' }
]);

export const LANGUAGE_CHOICES = Object.freeze([
  { value: 'en', label: 'English' },
  { value: 'my', label: 'Bahasa Melayu' }
]);

const METHODS = new Set(METHOD_CHOICES.map((choice) => choice.value));
const LANGUAGES = new Set(LANGUAGE_CHOICES.map((choice) => choice.value));

export function parseArgs(argv) {
  let target;
  let method;
  let language;

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === '--method' || value === '--lang') {
      const next = argv[index + 1];
      if (!next || next.startsWith('-')) {
        throw new UsageError(`Missing value for ${value}`);
      }

      if (value === '--method') {
        if (method !== undefined) throw new UsageError('Duplicate --method');
        method = next;
      } else {
        if (language !== undefined) throw new UsageError('Duplicate --lang');
        language = next;
      }

      index += 1;
      continue;
    }

    if (value.startsWith('-')) {
      throw new UsageError(`Unsupported option: ${value}`);
    }

    if (target !== undefined) {
      throw new UsageError('Exactly one project target is required');
    }

    target = value;
  }

  if (!target) {
    throw new UsageError('Project target is required');
  }

  return { target, method, language };
}

function validateMethod(method) {
  if (!METHODS.has(method)) {
    throw new UsageError(
      `Invalid method: ${method}. Expected one of: ${[...METHODS].join(', ')}`
    );
  }
}

function validateLanguage(language) {
  if (!LANGUAGES.has(language)) {
    throw new UsageError(
      `Invalid language: ${language}. Expected one of: ${[...LANGUAGES].join(', ')}`
    );
  }
}

export async function resolveSelections(
  parsed,
  { interactive = false, prompt } = {}
) {
  let { method, language } = parsed;

  if (method !== undefined) validateMethod(method);
  if (language !== undefined) validateLanguage(language);

  if (method === undefined) {
    if (!interactive) {
      throw new UsageError('Method required in non-interactive mode; use --method');
    }
    if (typeof prompt !== 'function') {
      throw new UsageError('Interactive method prompt is unavailable');
    }
    method = await prompt('method', METHOD_CHOICES);
    validateMethod(method);
  }

  if (language === undefined) {
    if (!interactive) {
      throw new UsageError('Language required in non-interactive mode; use --lang');
    }
    if (typeof prompt !== 'function') {
      throw new UsageError('Interactive language prompt is unavailable');
    }
    language = await prompt('language', LANGUAGE_CHOICES);
    validateLanguage(language);
  }

  return { ...parsed, method, language };
}
