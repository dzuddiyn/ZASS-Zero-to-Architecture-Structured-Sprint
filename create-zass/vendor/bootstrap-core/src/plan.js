import { CORE_CONTRACT_VERSION, getBootstrapDescriptor } from './catalog.js';
import { buildProjectReadme, GITIGNORE_CONTENT } from './readme.js';
import { loadBootstrapTemplate, loadFullZassArchitectureStandard } from './templates.js';
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
  const fullZassArchitectureStandard =
    method === 'zass' ? await loadFullZassArchitectureStandard() : null;

  const readmeContent = buildProjectReadme({
    projectName,
    methodLabel: descriptor.methodLabel,
    methodFile: descriptor.methodFile,
    language
  });

  const machineMetadataContent = JSON.stringify(
    {
      schemaVersion: '0.1',
      project: {
        name: projectName,
        method,
        language,
        methodFile: descriptor.methodFile
      }
    },
    null,
    2
  ) + '\n';

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
      },
      {
        path: '.zass/project.json',
        role: 'machine-metadata',
        content: machineMetadataContent
      },
      ...(method === 'zass'
        ? [{
            path: 'docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md',
            role: 'method-dependency',
            content: fullZassArchitectureStandard
          }]
        : [])
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
