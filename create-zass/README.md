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

Shared project semantics now come from the repository's private `bootstrap-core/` module. This CLI owns only terminal/argv behavior plus local filesystem materialization, refusal, cleanup and factual console receipts.

The bootstrap is create-new-only and does not initialize Git, connect GitHub, register CrossAI, install dependencies, or download templates at runtime.
