# ZASS CLI — v0.2.1 validator

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

For CI or another commit-to-commit comparison, provide the historical Git baseline explicitly:

```bash
zass check --baseline <git-ref>
```

The default remains `HEAD`, preserving the existing local working-tree behavior. `--baseline` changes only the historical source used by the existing Z101 LOCKED-drift rule; it does not introduce a second rule engine.

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
| Z003 | Broken relative inline or reference-style Markdown/file references in discovered project files | ERROR |
| Z004 | Evidence Confidence pairing at Full-ZASS architecture assessment points | WARNING |
| Z005 | High-signal possible secret/sensitive-value patterns | WARNING |
| Z100 | Git history unavailable / no committed ZASS baseline | WARNING |
| Z101 | Silent LOCKED-decision modification/removal | ERROR |

Z100/Z101 are the CR-010 v0.2 Git-aware drift checks. They compare the current `ZASS.md` with the version at Git `HEAD` without modifying the worktree. For a LOCKED decision, the semantic heading/title and normalized body are authority-bearing; presentation-only formatting is normalized. An explicit `Supersedes: D-xxx` relation may authorize a replacement path when the old decision record is preserved.

Warnings do not fail the command. Validation errors return exit code `1`; CLI/runtime misuse returns `2`.

## Intentionally deferred

v0.2.1 does not implement npm publication, `zass status`, `zass diff`, ACTION_PLAN snapshot drift, remote URL checking, `.zass/schema.yml`, dashboards, SaaS services, or AI semantic comparison. GitHub Actions orchestration is now provided by the repository workflow, while validator semantics remain in this CLI.

See [`../docs/CR010_ZASS_CHECK_SPEC.md`](../docs/CR010_ZASS_CHECK_SPEC.md) for the locked implementation plan.

For the recommended local verification sequence, see [`../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md`](../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md).
