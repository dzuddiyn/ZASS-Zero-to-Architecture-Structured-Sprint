export const CORE_CONTRACT_VERSION = '0.2';

export const METHOD_CHOICES = Object.freeze([
  Object.freeze({ value: 'zasspill', label: 'ZASSPILL', description: 'capture / continuity' }),
  Object.freeze({ value: 'zasselection', label: 'ZASSELECTION', description: 'compare / decide' }),
  Object.freeze({ value: 'zassimple', label: 'ZASSIMPLE', description: 'design / execute' }),
  Object.freeze({ value: 'zass', label: 'FULL ZASS', description: 'governed architecture' })
]);

export const LANGUAGE_CHOICES = Object.freeze([
  Object.freeze({ value: 'en', label: 'English' }),
  Object.freeze({ value: 'my', label: 'Bahasa Melayu' })
]);

const METHODS = Object.freeze({
  zasspill: Object.freeze({
    value: 'zasspill',
    label: 'ZASSPILL',
    templates: Object.freeze({ en: 'zasspill/en.md', my: 'zasspill/my.md' }),
    outputs: Object.freeze({ en: 'ZASSPILL_EN.md', my: 'ZASSPILL_MY.md' })
  }),
  zasselection: Object.freeze({
    value: 'zasselection',
    label: 'ZASSELECTION',
    templates: Object.freeze({ en: 'zasselection/en.md', my: 'zasselection/my.md' }),
    outputs: Object.freeze({ en: 'ZASSELECTION_EN.md', my: 'ZASSELECTION_MY.md' })
  }),
  zassimple: Object.freeze({
    value: 'zassimple',
    label: 'ZASSIMPLE',
    templates: Object.freeze({ en: 'zassimple/en.md', my: 'zassimple/my.md' }),
    outputs: Object.freeze({ en: 'ZASSIMPLE_EN.md', my: 'ZASSIMPLE_MY.md' })
  }),
  zass: Object.freeze({
    value: 'zass',
    label: 'FULL ZASS',
    templates: Object.freeze({ en: 'zass/en.md', my: 'zass/my.md' }),
    outputs: Object.freeze({ en: 'ZASS.md', my: 'ZASS.md' })
  })
});

const LANGUAGES = Object.freeze({
  en: Object.freeze({ value: 'en', label: 'English' }),
  my: Object.freeze({ value: 'my', label: 'Bahasa Melayu' })
});

export function isSupportedMethod(method) {
  return Object.hasOwn(METHODS, method);
}

export function isSupportedLanguage(language) {
  return Object.hasOwn(LANGUAGES, language);
}

export function getMethodDescriptor(method) {
  return METHODS[method] ?? null;
}

export function getLanguageDescriptor(language) {
  return LANGUAGES[language] ?? null;
}

export function getBootstrapDescriptor(method, language) {
  const methodDescriptor = getMethodDescriptor(method);
  const languageDescriptor = getLanguageDescriptor(language);
  const template = methodDescriptor?.templates?.[language];
  const methodFile = methodDescriptor?.outputs?.[language];

  if (!methodDescriptor || !languageDescriptor || !template || !methodFile) {
    return null;
  }

  return Object.freeze({
    method,
    language,
    methodLabel: methodDescriptor.label,
    languageLabel: languageDescriptor.label,
    template,
    methodFile
  });
}
