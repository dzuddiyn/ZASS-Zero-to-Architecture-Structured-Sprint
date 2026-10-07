import { CORE_CONTRACT_VERSION, getBootstrapDescriptor } from './catalog.js';
import { buildProjectReadme, GITIGNORE_CONTENT } from './readme.js';
import { loadBootstrapTemplate } from './templates.js';
import { validateBootstrapInput, validateBootstrapPlan } from './validation.js';

export async function buildBootstrapPlan({ projectName, method, language }) {
  const input = validateBootstrapInput({ projectName, method, language });
  if (!input.ok) {
    const error = new Error(input.errors.map((entry) => entry.message).join('; '));
    error.name = 'BootstrapCoreInputError';
    error.errors = input.errors;
    throw error;
  }

  const descriptor = getBootstrapDescriptor(method, language);
  const methodContent = await loadBootstrapTemplate(method, language);
  const readmeContent = buildProjectReadme({
    projectName,
    methodLabel: descriptor.methodLabel,
    methodFile: descriptor.methodFile,
    language
  });

  const plan = {
    contractVersion: CORE_CONTRACT_VERSION,
    project: {
      name: projectName,
      method,
      language,
      methodFile: descriptor.methodFile
    },
    files: [
      {
        path: descriptor.methodFile,
        role: 'method',
        content: methodContent
      },
      {
        path: 'README.md',
        role: 'readme',
        content: readmeContent
      },
      {
        path: '.gitignore',
        role: 'gitignore',
        content: GITIGNORE_CONTENT
      }
    ]
  };

  const validation = validateBootstrapPlan(plan);
  if (!validation.ok) {
    const error = new Error(
      `Generated bootstrap plan failed validation: ${validation.errors
        .map((entry) => entry.message)
        .join('; ')}`
    );
    error.name = 'BootstrapCorePlanError';
    error.errors = validation.errors;
    throw error;
  }

  return plan;
}
