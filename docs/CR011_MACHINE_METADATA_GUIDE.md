# CR-011 — .zass/ Machine Metadata Guide

**Status:** CURRENT — schema v0.1  
**Date:** 2026-10-08  
**Scope:** user/developer documentation and migration guidance

> **Markdown remains semantic authority. `.zass/` is a machine-readable companion.**

## 1. What `.zass/` is

CR-011 introduces one optional machine-readable project descriptor:

```text
.zass/
└── project.json
```

Schema v0.1 stores only stable bootstrap/project identity:

```json
{
  "schemaVersion": "0.1",
  "project": {
    "name": "my-project",
    "method": "zassimple",
    "language": "en",
    "methodFile": "ZASSIMPLE_EN.md"
  }
}
```

Supported methods:

```text
zasspill
zasselection
zassimple
zass
```

Supported languages:

```text
en
my
```

The active method filename must match the official method/language mapping.

## 2. What `.zass/` is not

`.zass/project.json` is not a second Source of Truth.

It does not own:

- LOCKED decisions;
- architecture meaning;
- ACTION_PLAN task state;
- readiness/progress;
- evidence confidence;
- Git/GitHub state;
- CrossAI state;
- Drive/cloud state;
- AI/provider memory;
- secrets, tokens or account credentials.

If machine metadata conflicts with canonical Markdown, the tooling reports the conflict. It does not silently make machine metadata authoritative.

## 3. Legacy compatibility

Existing ZASS projects do **not** need `.zass/`.

A project without:

```text
.zass/project.json
```

is treated as:

```text
Machine: ABSENT
```

For an otherwise valid Full-ZASS project, absence alone is not an error.

This means old Markdown-only projects remain supported and portable.

## 4. New-project behavior

Repository source for the next initializer line is:

```text
create-zass-project@0.2.0 source
Bootstrap Core contract 0.2
CR-011 schema 0.1
```

This source line is not the same thing as the currently published npm `latest` release.

At the time of this guide:

```text
public npm latest: create-zass-project@0.1.0
repository source: create-zass-project@0.2.0
```

No public 0.2.0 publication is implied by repository source versioning.

New source-generated ZASSPILL, ZASSELECTION and ZASSIMPLE projects contain:

```text
[selected method file]
README.md
.gitignore
.zass/project.json
```

New source-generated Full-ZASS projects also contain the canonical local dependency required by `ZASS.md`:

```text
docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md
```

That extra Full-ZASS artifact keeps local Markdown references self-contained and preserves `zass check` link validation.

## 5. zass-cli behavior

The CR-011 repository implementation extends local validation as follows.

### `zass check`

Loads `.zass/project.json` once through the dedicated local loader.

States:

```text
ABSENT
VALID
MALFORMED
UNSUPPORTED_SCHEMA
INVALID
```

Relevant diagnostics:

```text
Z300  malformed metadata / valid-metadata pass family
Z301  unsupported schema
Z302  invalid schema-v0.1 fields or values
Z303  declared method file missing
Z304  deterministic method/project-surface conflict
```

No network request is made because metadata exists.

### `zass status`

Uses the same validation result rather than reparsing metadata independently.

It can report, for example:

```text
Machine: ABSENT
Machine: VALID
```

### `zass diff`

Remains a Markdown/Git semantic-diff surface.

Editing only `.zass/project.json` does not become a LOCKED decision or architecture semantic change.

## 6. Missing, malformed and unsupported metadata

### Missing

```text
.zass/project.json absent
→ valid legacy state
→ no automatic migration
```

### Malformed

Invalid JSON or a non-object root is reported factually as malformed metadata.

Tooling does not repair the file automatically.

### Unsupported schema

Any schema version other than exactly:

```text
"0.1"
```

is unsupported by the current CR-011 v0.1 reader.

Readers do not guess compatibility with future versions.

### Invalid

A schema-v0.1 file is invalid when required fields/types/allowed values are wrong, unsupported fields are present, or method/language/methodFile mapping is inconsistent.

## 7. Conflict behavior

The rule is:

```text
detect
→ report error
→ preserve both sources
→ no automatic rewrite
```

Machine metadata never silently wins over Markdown.

A conflict is reported only when deterministic evidence exists.

For Full ZASS, both English and Bahasa Melayu use:

```text
ZASS.md
```

Therefore language is not guessed from prose. The explicit metadata language remains bootstrap/project identity unless another deterministic canonical fact proves a conflict.

## 8. Manual-edit policy

Humans may manually create or edit `.zass/project.json`.

Manual files receive no special authority.

After manual edits:

```bash
zass check
zass status
```

should be used to validate the project.

Do not put secrets, personal provider memory, tokens, passwords, API keys, health/financial private context, account IDs or session state into `.zass/project.json`.

## 9. Migration guide for an existing project

Migration is optional.

There is currently no automatic migration command.

For a legacy project, either:

```text
leave .zass/ absent
→ continue as a supported legacy project
```

or explicitly add a valid `.zass/project.json`.

For Full ZASS / English:

```json
{
  "schemaVersion": "0.1",
  "project": {
    "name": "my-project",
    "method": "zass",
    "language": "en",
    "methodFile": "ZASS.md"
  }
}
```

For Full ZASS / Bahasa Melayu, change only:

```json
"language": "my"
```

Do not infer uncertain values automatically.

If method or language cannot be determined confidently, keep the project legacy/no-`.zass/` until the owner supplies the value explicitly.

## 10. Upgrade path

Current migration policy is additive:

```text
legacy Markdown-only project
        ↓ optional
add .zass/project.json schema 0.1
        ↓
validate with zass check/status
```

There is:

- no mandatory backfill;
- no silent schema upgrade;
- no automatic downgrade;
- no existing-project scan;
- no automatic Markdown mutation.

Future schema changes require a separately versioned contract and migration rules.

## 11. Read/write ownership

Automatic writer for new projects:

```text
versioned create-zass-project bootstrap source
```

Readers:

```text
zass-cli local tooling
bootstrap verification
humans
```

Read-only commands:

```text
zass check
zass status
zass diff
```

These commands do not write or repair `.zass/project.json`.

## 12. Authority summary

```text
Human-approved/canonical Markdown semantics
                ↓
.zass/project.json machine companion
```

The purpose of CR-011 is to eliminate repeated machine inference of stable project identity without weakening human-controlled semantic authority.

## 13. Canonical technical references

- [CR-011 machine metadata contract v0.1](CR011_ZASS_MACHINE_METADATA_V01.md)
- [CR-011 Bootstrap integration contract v0.2](CR011_BOOTSTRAP_INTEGRATION_V02.md)
- [CR-011 two-shape field-test receipt](CR011_TWO_SHAPE_FIELD_TEST.md)
- [TRACK D action plan](ZASS_TRACK_D_ACTION_PLAN.md)
