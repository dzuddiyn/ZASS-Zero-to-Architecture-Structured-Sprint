import { UsageError } from './errors.js';
import {
  LANGUAGE_CHOICES,
  METHOD_CHOICES
} from '../../bootstrap-core/src/index.js';

export { LANGUAGE_CHOICES, METHOD_CHOICES };

function includesChoice(choices, value) {
  return choices.some((choice) => choice.value === value);
}

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
  if (!includesChoice(METHOD_CHOICES, method)) {
    throw new UsageError(
      `Invalid method: ${method}. Expected one of: ${METHOD_CHOICES.map((choice) => choice.value).join(', ')}`
    );
  }
}

function validateLanguage(language) {
  if (!includesChoice(LANGUAGE_CHOICES, language)) {
    throw new UsageError(
      `Invalid language: ${language}. Expected one of: ${LANGUAGE_CHOICES.map((choice) => choice.value).join(', ')}`
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
