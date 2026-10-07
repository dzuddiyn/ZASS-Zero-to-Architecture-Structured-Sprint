# ZASS CLI — v0.4.0

This directory contains the first productized ZASS validator/tooling surface.

**CR-010 is CLOSED at zass-cli v0.4.0.** npm publication/bootstrap remains separate future productization work.

## Local development

```bash
cd cli
npm test
npm link
```

Then run from a Full ZASS project directory:

```bash
zass check
zass status
zass diff
```

Command boundaries:

```text
zass check  → validate the current project under ZASS rules
zass status → show a compact factual current-state summary
zass diff   → show a ZASS-aware working-tree delta against local HEAD
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
| Z001 | Duplicate primary record definitions in `ZASS.md` | ERROR |
| Z002 | Malformed recognized record IDs in record-definition positions | ERROR |
| Z003 | Broken relative inline or reference-style Markdown/file references in discovered project files | ERROR |
| Z004 | Evidence Confidence pairing at Full-ZASS architecture assessment points | WARNING |
| Z005 | High-signal possible secret/sensitive-value patterns | WARNING |
| Z100 | Git history unavailable / no committed ZASS baseline | WARNING |
| Z101 | Silent LOCKED-decision modification/removal | ERROR |
| Z200 | ACTION_PLAN discovery / canonical snapshot availability | PASS or WARNING |
| Z201 | ACTION_PLAN readiness progress mismatch | ERROR |
| Z202 | ACTION_PLAN readiness status mismatch | ERROR |
| Z203 | ACTION_PLAN stale ZASS source version | ERROR |
| Z204 | Missing explicitly referenced ZASS ID | ERROR |
| Z205 | Conservative blocker inconsistency | WARNING |

Z001 treats canonical headings and table-row ID positions as primary record definitions. Bold list entries used as summaries, ledgers, indexes, or D→L references do not become duplicate definitions merely by repeating an existing ID; decision authority is parsed separately from explicit Status/LOCKED-record structures.

Z100/Z101 are the CR-010 v0.2 Git-aware drift checks. They compare the current `ZASS.md` with the version at Git `HEAD` without modifying the worktree. For a LOCKED decision, the semantic heading/title and normalized body are authority-bearing; presentation-only formatting is normalized. An explicit `Supersedes: D-xxx` relation may authorize a replacement path when the old decision record is preserved.

Z200–Z205 are the CR-010 v0.3 ACTION_PLAN consistency checks. `ZASS.md` remains authoritative; `ACTION_PLAN.md` is optional and is treated only as an execution/readiness snapshot. v0.3 compares explicit snapshot fields and explicit ZASS-ID relationships; it does not recalculate architecture readiness or infer semantic equivalence.

Warnings do not fail the command. Validation errors return exit code `1`; CLI/runtime misuse returns `2`.

## v0.4 status / diff

CR-010 v0.4 adds two read-only commands without creating a second authority model:

- `zass status` reports factual Full-ZASS file presence, validator summary, and local Git CLEAN / CHANGED / UNKNOWN state;
- `zass diff` compares the three primary Full-ZASS files against local `HEAD`, reports file ADDED / MODIFIED / DELETED / UNCHANGED states, and provides bounded ZASS-aware identity / decision-state / declared-readiness deltas.

`zass diff` is informational; `zass check` remains the validation authority.

The Windows field correction normalizes only line-ending representation before file equality comparison so ordinary CRLF working trees do not become false `MODIFIED` results.

## Intentionally deferred

v0.4.0 does not implement npm publication, remote URL checking, `.zass/schema.yml`, dashboards, SaaS services, AI semantic comparison, custom `zass diff` baselines/ranges, or the optional Z206 working-tree atomic-sync heuristic. GitHub Actions orchestration is provided by the repository workflow, while validator semantics remain in this CLI.

See [`../docs/CR010_ZASS_CHECK_SPEC.md`](../docs/CR010_ZASS_CHECK_SPEC.md) for the locked implementation plan.

For the recommended local verification sequence, see [`../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md`](../docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md).
