# create-zass-project

Bootstrap a new local ZASS project from one explicitly selected official method and language.

## Requirements

- Node.js 20 or newer
- npm

## Quick start

Interactive:

```bash
npm create zass-project@latest my-project
```

Non-interactive:

```bash
npm create zass-project@latest my-project -- --method zassimple --lang en
```

Supported methods:

- `zasspill`
- `zasselection`
- `zassimple`
- `zass` — Full ZASS

Supported languages:

- `en` — English
- `my` — Bahasa Melayu

No method or language is silently selected. In a non-interactive environment, both `--method` and `--lang` are required.

## What it creates

A successful bootstrap creates exactly:

- one selected ZASS method file;
- `README.md`;
- `.gitignore`.

For Full ZASS, the project authority file is always `ZASS.md`, including when Bahasa Melayu is selected.

## Safety and side effects

v0.1 is create-new-only. If the target already exists, `create-zass-project` refuses to overwrite or merge it.

It does **not**:

- initialize Git;
- create or connect a GitHub repository;
- register CrossAI;
- call Google Drive or an AI API;
- send telemetry;
- install dependencies inside the generated project;
- download ZASS method templates at runtime.

Generated `.gitignore` includes a baseline for common secret files. Do not put passwords, API keys, tokens, or sensitive personal data into tracked ZASS Markdown files.

## Package architecture

Project semantics come from the repository's frozen private Bootstrap Core. The npm package carries a byte-for-byte vendored runtime snapshot under `vendor/bootstrap-core/`, and repository tests enforce synchronization with canonical Core `src/` and `templates/`.

## Development

Public npm package candidate: `create-zass-project@0.1.0`.

The repository implementation directory remains `create-zass/`.

From this repository:

```bash
node create-zass/bin/create-zass.js my-project --method zassimple --lang en
npm --prefix create-zass test
```

## Issues

Report issues in the ZASS repository issue tracker.

## License

MIT
