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

The repository source for the next initializer line is `create-zass-project@0.2.0` (not yet published as npm `latest`).

ZASSPILL, ZASSELECTION and ZASSIMPLE source-generated projects create:

- one selected ZASS method file;
- `README.md`;
- `.gitignore`;
- `.zass/project.json`.

Full ZASS source-generated projects create those artifacts plus:

- `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md`.

For Full ZASS, the project authority file is always `ZASS.md`, including when Bahasa Melayu is selected. The extra docs artifact closes the canonical local Markdown dependency so a fresh project remains self-contained for `zass check`.

`.zass/project.json` is machine metadata only; it does not replace or override the selected Markdown method file.

## Safety and side effects

Current source behavior remains create-new-only. If the target already exists, `create-zass-project` refuses to overwrite or merge it.

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

Project semantics come from the repository's versioned private Bootstrap Core. The historical v0.1 contract remains frozen; current CR-011 source work uses Core contract `0.2`. The npm package carries a byte-for-byte vendored runtime snapshot under `vendor/bootstrap-core/`, and repository tests enforce synchronization with canonical Core `src/` and `templates/`.

## Development

Published npm release: `create-zass-project@0.1.0` (`latest` at the time of this documentation).

Repository source candidate: `create-zass-project@0.2.0` — not yet published.

The repository implementation directory remains `create-zass/`.

From this repository:

```bash
node create-zass/bin/create-zass.js my-project --method zassimple --lang en
npm --prefix create-zass test
```

## Issues

Report issues in the ZASS repository issue tracker.

CR-011 metadata and migration guide: [`../docs/CR011_MACHINE_METADATA_GUIDE.md`](../docs/CR011_MACHINE_METADATA_GUIDE.md).

## License

MIT
