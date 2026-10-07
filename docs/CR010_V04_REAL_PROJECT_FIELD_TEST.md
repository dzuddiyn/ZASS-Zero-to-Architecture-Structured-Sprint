# CR-010 v0.4 — Real-Project Field-Test Receipt

**Status:** PASS  
**Date:** 2026-10-07  
**Track:** ZASS TRACK B  
**CLI baseline:** `1bc35233da2acc410eb6732727d11570f7f35009`  
**Primary real project:** `dzuddiyn/Kerani_Core@67677954c6eb8a08363ebbf697b6c57d67433abb`

## 1. Field-test method

Testing was performed on a Windows machine in isolated temporary clones.

No production working copy, AISYNC runtime, Apps Script deployment, browser/Google session, or remote repository state was modified.

For real projects whose canonical authority file is project-named rather than literally `ZASS.md`, the same compatibility method used by earlier CR-010 field gates was applied:

```text
canonical project authority
→ copied to temporary ZASS.md
→ committed locally in the isolated clone only
→ no push
```

For Kerani_Core:

```text
ZASS_Kerani_Core.md
→ temporary ZASS.md
```

This does not change the real project repository. It supplies the canonical project authority through the current Full-ZASS CLI surface.

## 2. Initial field finding — Windows EOL false positive

The first clean Kerani_Core run showed:

```text
zass status
Git: CLEAN

zass diff
Diff: CHANGED
ZASS.md: MODIFIED
ACTION_PLAN.md: MODIFIED
```

The Git working tree was factually clean.

Root cause was proven:

```text
working tree: CRLF
git show HEAD:file: LF
semantic/content after EOL normalization: identical
```

This was an implementation defect in v0.4b file comparison.

Correction:

- PR #38 — `Fix Windows EOL false positive in zass diff`;
- normalize only line-ending representation (`CRLF / CR → LF`) before UNCHANGED/MODIFIED comparison;
- do not trim whitespace or normalize Markdown/content;
- explicit CRLF/LF regression test added;
- PR CI PASS;
- post-merge main CI PASS.

The corrected CLI baseline for the remaining field test is:

```text
1bc35233da2acc410eb6732727d11570f7f35009
```

## 3. Kerani_Core clean baseline

With the corrected CLI and a clean local field-test baseline:

### `zass check`

```text
0 error(s), 0 warning(s)
exit 0
```

### `zass status`

```text
Project:     DETECTED
Surface:     FULL ZASS

ZASS.md          FOUND
ACTION_PLAN.md   FOUND
ARCHITECTURE.md  MISSING

Validation:  PASS
Errors:      0
Warnings:    0

Git:         CLEAN
Baseline:    HEAD
exit 0
```

### `zass diff`

```text
Diff:        NO_CHANGE
Baseline:    HEAD

ZASS.md          UNCHANGED
ACTION_PLAN.md   UNCHANGED
ARCHITECTURE.md  UNCHANGED

ZASS IDs added/removed: NONE
LOCKED added/removed: NONE
SUPERSEDED added/removed: NONE

exit 0
```

Result: PASS. The commands report clean real-project state without misleading file changes.

## 4. Deliberate real-project mutation — LOCKED decision content

A temporary local mutation removed the explicit LOCKED token from D-037's decision status.

Observed separation:

### `zass diff`

```text
Diff: CHANGED
ZASS.md: MODIFIED
exit 0
```

No LOCKED-set delta was reported because D-037 remains recognized as LOCKED through the project's explicit LOCKED authority surface. This is factually correct for the parser's state-set semantics.

### `zass check`

```text
ERROR Z101 — LOCKED decision modified: D-037
exit 1
```

### `zass status`

```text
Validation: ERROR
Errors: 1
Warnings: 0
Git: CHANGED
exit 1
```

Result: PASS. `diff` reports what changed; `check` retains validation authority; `status` summarizes the current validated state.

The temporary mutation was reset and the clone returned to a clean working tree.

## 5. Deliberate real-project mutation — readiness drift

A second temporary local mutation changed the declared architecture readiness:

```text
77.5% → 78.5%
```

without updating `ACTION_PLAN.md`.

Observed:

### `zass diff`

```text
Diff: CHANGED
ZASS.md: MODIFIED

Declared readiness:
Progress: 77.5% → 78.5%

exit 0
```

### `zass check`

```text
ERROR Z201 — ACTION_PLAN readiness snapshot is stale:
ZASS 78.5% vs ACTION_PLAN 77.5%

exit 1
```

### `zass status`

```text
Validation: ERROR
Errors: 1
Warnings: 0
Git: CHANGED
exit 1
```

Result: PASS. The command boundaries remain correct on real project content.

The mutation was reset and the clone returned to a clean working tree.

## 6. Secondary real-project observation

A second real project was sampled:

```text
dzuddiyn/Kerani_Core_SuperBasic
@4107291f5ea128f4f2a87812c2e736ff9237c891
```

After supplying its canonical `ZASS_Kerani_Core_SuperBasic.md` as the temporary Full-ZASS `ZASS.md` authority:

`zass status` factually projected the existing validator result:

```text
Validation: ERROR
Errors: 10
Warnings: 1
Git: CLEAN
```

The underlying `zass check` findings were ten Z001 duplicate-ID errors and one Z200 ACTION_PLAN snapshot warning.

These existing validator/project findings are not introduced by v0.4a/v0.4b and are not adjudicated by this field gate.

Importantly, after the Windows EOL correction:

```text
zass diff
Diff: NO_CHANGE
all three primary files: UNCHANGED
exit 0
```

Therefore `status` and `diff` remained factual even when the project's validator state was not PASS.

## 7. Field-gate conclusion

CR-010 v0.4 real-project field gate: **PASS**.

Evidence supports:

- `zass status` is understandable and factual on real project content;
- `zass diff` clean baseline is truthful on Windows after the EOL correction;
- `zass diff` reports working-state/readiness changes without claiming validation authority;
- `zass check` remains the validator;
- deliberate real-project mutations produce the intended command separation;
- commands remain read-only;
- no unacceptable v0.4 false positive remains from the tested behavior.

This receipt does **not** close CR-010.

Next gate:

```text
STOP / REVIEW
→ decide whether CR-010 v0.4 may CLOSE
```
