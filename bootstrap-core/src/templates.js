import fs from 'node:fs/promises';
import { getBootstrapDescriptor } from './catalog.js';

export async function loadBootstrapTemplate(method, language) {
  const descriptor = getBootstrapDescriptor(method, language);
  if (!descriptor) {
    throw new Error(`Unsupported bootstrap template: ${method}/${language}`);
  }

  const url = new URL(`../templates/${descriptor.template}`, import.meta.url);
  return fs.readFile(url, 'utf8');
}


export async function loadFullZassArchitectureStandard() {
  const url = new URL(
    '../templates/shared/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md',
    import.meta.url
  );
  return fs.readFile(url, 'utf8');
}
