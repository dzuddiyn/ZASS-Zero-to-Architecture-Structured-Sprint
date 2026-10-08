# ZASS SYSTEM — Distribution & Version Truth at Final Freeze

**Status:** LOCKED FREEZE SNAPSHOT  
**Date:** 2026-10-08

## Public / source truth

| Surface | Freeze truth |
|---|---|
| ZASS SYSTEM | v0.2.1 |
| Full ZASS | v0.3.10 |
| ZASSIMPLE | v0.3.2 |
| ZASSELECTION | v0.2.4 |
| ZASSPILL | v1.0.0 |
| zass-cli | public npm v0.4.0 |
| create-zass-project public npm latest | v0.1.0 |
| create-zass-project repository source | v0.2.0 candidate — NOT PUBLISHED |
| Bootstrap Core repository source | v0.2.0 / contract 0.2 |
| CR-011 machine metadata schema | v0.1 FROZEN |
| Track E evidence recorder | internal/repo-local only |

## Publication decisions

This freeze does NOT authorize:

- publication of `create-zass-project@0.2.0`;
- a new `zass-cli` version;
- a public `zass evidence` command;
- a separate evidence package;
- network telemetry/submission.

Public package truth remains:

```text
npm create zass-project@latest
→ create-zass-project@0.1.0
```

Repository-source truth remains:

```text
create-zass-project@0.2.0
→ source candidate with CR-011 metadata integration
→ not npm latest
```

## Authority rule

Version divergence between public bootstrap v0.1.0 and repository-source v0.2.0 is intentional and documented.

Do not publish merely to make the numbers match.

A later release requires a separate explicit release decision and fresh packaging/registry verification.
