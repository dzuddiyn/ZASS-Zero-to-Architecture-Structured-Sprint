export const GITIGNORE_CONTENT = `.env
.env.*
!.env.example
.secrets/
*.key
*.pem
`;

function buildEnglishReadme({ projectName, methodLabel, methodFile }) {
  return `# ${projectName}

This project uses **${methodLabel}**.

- **Language:** English
- **Active method file:** \`${methodFile}\`

## Start

Open \`${methodFile}\` with your AI and start with that method.

## Safety

Never place passwords, API keys, tokens, or sensitive personal data inside tracked ZASS Markdown files.
`;
}

function buildMalayReadme({ projectName, methodLabel, methodFile }) {
  return `# ${projectName}

Projek ini menggunakan **${methodLabel}**.

- **Bahasa:** Bahasa Melayu
- **Fail method aktif:** \`${methodFile}\`

## Mula

Buka \`${methodFile}\` dengan AI anda dan mulakan dengan method tersebut.

## Keselamatan

Jangan letakkan kata laluan, API key, token, atau data peribadi sensitif di dalam fail Markdown ZASS yang dijejak.
`;
}

export function buildProjectReadme({
  projectName,
  methodLabel,
  methodFile,
  language
}) {
  if (language === 'en') {
    return buildEnglishReadme({ projectName, methodLabel, methodFile });
  }

  if (language === 'my') {
    return buildMalayReadme({ projectName, methodLabel, methodFile });
  }

  throw new Error(`Unsupported README language: ${language}`);
}
