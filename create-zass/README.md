# create-zass

Local-first ZASS project bootstrapper.

Status: v0.1 implementation package. It is intentionally private and not published to npm yet.

Target npm UX:

```bash
npm create zass@latest my-project
```

Local development:

```bash
node bin/create-zass.js my-project --method zassimple --lang en
npm test
```

Supported methods:

- `zasspill`
- `zasselection`
- `zassimple`
- `zass` (Full ZASS)

Supported languages:

- `en`
- `my`

Shared project semantics come from the repository's private frozen `bootstrap-core/` module. For npm distribution, `create-zass` carries a byte-for-byte vendored runtime snapshot under `vendor/bootstrap-core/`; repository tests enforce synchronization with canonical Core `src/` and `templates/`. This CLI still owns only terminal/argv behavior plus local filesystem materialization, refusal, cleanup and factual console receipts.

The bootstrap is create-new-only and does not initialize Git, connect GitHub, register CrossAI, install dependencies, or download templates at runtime.
