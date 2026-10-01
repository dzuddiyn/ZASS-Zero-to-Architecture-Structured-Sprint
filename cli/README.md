# ZASS CLI — v0.2 validator

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

## v0.1 + v0.2 rules

| Code | Check | Severity |
|---|---|---|
| Z000 | Required `ZASS.md` discovery | ERROR when missing |
| Z001 | Duplicate recognized record IDs in `ZASS.md` | ERROR |
| Z002 | Malformed recognized record IDs in record-definition positions | ERROR |
| Z003 | Broken relative Markdown/file references in discovered project files | ERROR |
| Z004 | Evidence Confidence pairing at Full-ZASS architecture assessment points | WARNING |
| Z005 | High-signal possible secret/sensitive-value patterns | WARNING |
| Z100 | Git history unavailable / no committed ZASS baseline | WARNING |
| Z101 | Silent LOCKED-decision modification/removal | ERROR |

Z100/Z101 are the CR-010 v0.2 Git-aware drift checks. They compare the current `ZASS.md` with the version at Git `HEAD` without modifying the worktree. An explicit `Supersedes: D-xxx` relation may authorize a replacement path when the old decision record is preserved.

Warnings do not fail the command. Validation errors return exit code `1`; CLI/runtime misuse returns `2`.

## Intentionally deferred

v0.2 does not implement npm publication, `zass status`, `zass diff`, ACTION_PLAN snapshot drift, remote URL checking, `.zass/schema.yml`, GitHub Actions, dashboards, SaaS services, or AI semantic comparison.

See [`../docs/CR010_ZASS_CHECK_SPEC.md`](../docs/CR010_ZASS_CHECK_SPEC.md) for the locked implementation plan.

For the recommended local verification sequence, see [`../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md`](../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md).
