import fs from 'node:fs/promises';

const METHODS = Object.freeze({
  zasspill: {
    label: 'ZASSPILL',
    files: { en: 'zasspill/en.md', my: 'zasspill/my.md' },
    output: { en: 'ZASSPILL_EN.md', my: 'ZASSPILL_MY.md' }
  },
  zasselection: {
    label: 'ZASSELECTION',
    files: { en: 'zasselection/en.md', my: 'zasselection/my.md' },
    output: { en: 'ZASSELECTION_EN.md', my: 'ZASSELECTION_MY.md' }
  },
  zassimple: {
    label: 'ZASSIMPLE',
    files: { en: 'zassimple/en.md', my: 'zassimple/my.md' },
    output: { en: 'ZASSIMPLE_EN.md', my: 'ZASSIMPLE_MY.md' }
  },
  zass: {
    label: 'FULL ZASS',
    files: { en: 'zass/en.md', my: 'zass/my.md' },
    output: { en: 'ZASS.md', my: 'ZASS.md' }
  }
});

const LANGUAGE_LABELS = Object.freeze({
  en: 'English',
  my: 'Bahasa Melayu'
});

export function getTemplateDescriptor(method, language) {
  const config = METHODS[method];
  const template = config?.files?.[language];
  const methodFile = config?.output?.[language];

  if (!config || !template || !methodFile) {
    throw new Error(`Unsupported bootstrap template: ${method}/${language}`);
  }

  return {
    method,
    language,
    methodLabel: config.label,
    languageLabel: LANGUAGE_LABELS[language],
    template,
    methodFile
  };
}

export async function loadTemplate(method, language) {
  const descriptor = getTemplateDescriptor(method, language);
  const url = new URL(`../templates/${descriptor.template}`, import.meta.url);
  return fs.readFile(url, 'utf8');
}
