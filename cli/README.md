# zass-cli

Command-line validator and project-state tooling for Full ZASS projects.

**Current package version:** `0.4.0`  
**Node.js:** 20 or newer  
**License:** MIT

CR-010 is closed at zass-cli v0.4.0. The CLI behavior for `zass check`, `zass status`, and `zass diff` remains authority-bounded. Repository source now also includes CR-011 machine-metadata reading/validation for `.zass/project.json`; this additive layer does not change Markdown semantic authority.

## Install

Install the published package from npm:

```bash
npm install --global zass-cli
```

Then run the CLI from the root directory of a Full ZASS project:

```bash
zass check
zass status
zass diff
```

For local development from this repository:

```bash
cd cli
npm test
npm link
```

## Commands

```text
zass check  → validate the current project under ZASS rules
zass status → show a compact factual current-state summary
zass diff   → show a ZASS-aware working-tree delta against local HEAD
```

### `zass check`

Runs the validation authority for the current project.

```bash
zass check
```

For CI or another historical comparison, an explicit Git baseline may be supplied:

```bash
zass check --baseline <git-ref>
```

The default historical baseline is local `HEAD`. The `--baseline` option changes only the historical source used by the existing Z101 LOCKED-drift rule; it does not create a second rule engine.

### `zass status`

Reports factual current state only:

- Full-ZASS primary-file presence;
- validator summary;
- local Git state as CLEAN, CHANGED, or UNKNOWN.

It does not infer progress, lifecycle stage, readiness, or recommended next action.

### `zass diff`

Reports a bounded ZASS-aware delta against local `HEAD`, including:

- primary-file ADDED / MODIFIED / DELETED / UNCHANGED state;
- canonical ZASS identity changes;
- LOCKED / SUPERSEDED decision-state deltas;
- declared readiness and blocker deltas.

`zass diff` is informational. `zass check` remains the validation authority.

## Project expectations

Run the CLI from the project directory being inspected.

A Full ZASS project expects:

```text
project/
├── ZASS.md            required
├── ACTION_PLAN.md     optional
├── ARCHITECTURE.md    optional
└── .zass/
    └── project.json   optional machine metadata
```

Legacy projects without `.zass/project.json` remain valid. When present, CR-011 metadata is read-only companion state; it does not override canonical Markdown.

Git is required for Git-aware behavior such as LOCKED-decision drift checks and local `HEAD` comparison. When usable Git history is unavailable, the CLI reports the corresponding factual warning/state rather than inventing history.

The CLI reads the current working directory. It does not modify project files.

## Validation rules

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
| Z300 | CR-011 machine metadata malformed / valid-metadata pass family | ERROR when malformed |
| Z301 | Unsupported CR-011 schema version | ERROR |
| Z302 | Invalid CR-011 v0.1 field/value/mapping | ERROR |
| Z303 | Declared method file missing | ERROR |
| Z304 | Deterministic method/project-surface conflict | ERROR |

Warnings do not fail validation.

## Exit codes

| Exit code | Meaning |
|---:|---|
| `0` | Validation passes; warnings may exist |
| `1` | One or more validation errors |
| `2` | CLI misuse, runtime error, or system error |

The same exit-code contract is used by the executable entry point.

## Authority boundaries

`ZASS.md` remains the semantic authority for Full ZASS.

`.zass/project.json` is a machine-readable companion only. Missing metadata is a supported legacy state; malformed/unsupported/invalid/conflicting metadata is reported factually and never silently repaired.

`ACTION_PLAN.md` is an optional execution/readiness snapshot. The CLI does not turn it into a second source of truth.

`zass status` and `zass diff` are read-only factual surfaces. They do not supersede `zass check`, infer architectural truth, or mutate project state.

## Non-goals in v0.4.0

This release does not provide:

- remote URL validation;
- mandatory `.zass/schema.yml`;
- dashboards or SaaS services;
- AI semantic comparison;
- custom `zass diff` baselines or ranges;
- the optional Z206 working-tree atomic-sync heuristic;
- automatic project mutation or repair;
- automatic migration/backfill of legacy projects into `.zass/`.

GitHub Actions orchestration remains repository-level infrastructure; validator semantics stay in this CLI.

## More documentation

Canonical implementation and test documentation lives in the ZASS repository:

- CR-010 implementation specification: https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/CR010_ZASS_CHECK_SPEC.md
- Local test guide: https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/ZASS_CHECK_LOCAL_TEST_GUIDE.md
- CR-011 metadata + migration guide: https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/CR011_MACHINE_METADATA_GUIDE.md
- Repository: https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint
