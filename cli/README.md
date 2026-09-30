# ZASS CLI — v0.1 validator

This directory contains the first productized ZASS validator.

## Local development

```bash
cd cli
npm test
npm link
```

Then run from a ZASS project directory:

```bash
zass check
```

Direct execution also works without global linking:

```bash
node /path/to/repo/cli/bin/zass.js check
```

## v0.1 rules

| Code | Check | Severity |
|---|---|---|
| Z000 | Required `ZASS.md` discovery | ERROR when missing |
| Z001 | Duplicate recognized record IDs in `ZASS.md` | ERROR |
| Z002 | Malformed recognized record IDs in record-definition positions | ERROR |
| Z003 | Broken relative Markdown/file references in discovered project files | ERROR |
| Z004 | Evidence Confidence pairing at Full-ZASS architecture assessment points | WARNING |
| Z005 | High-signal possible secret/sensitive-value patterns | WARNING |

Warnings do not fail the command. Validation errors return exit code `1`; CLI/runtime misuse returns `2`.

## Intentionally deferred

v0.1 does not implement npm publication, `zass status`, `zass diff`, Git-aware LOCKED drift, ACTION_PLAN snapshot drift, remote URL checking, `.zass/schema.yml`, GitHub Actions, dashboards, or SaaS services.

See [`../docs/CR010_ZASS_CHECK_SPEC.md`](../docs/CR010_ZASS_CHECK_SPEC.md) for the locked implementation plan.
