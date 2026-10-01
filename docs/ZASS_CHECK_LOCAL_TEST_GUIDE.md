# Testing `zass check` v0.1 Locally

**Scope:** CR-010 v0.1 current-file validator  
**Platform examples:** Windows PowerShell  
**Required Node.js:** 20+

This guide shows the recommended local test sequence for the current `zass check` v0.1 implementation.

The recommended order is:

```text
automated tests
    ↓
known-good teaching fixture
    ↓
known-failing fixtures
    ↓
real ZASS project
```

The final real-project check is the important field gate before CR-010 v0.2 implementation begins.

---

## 1. Update the repository

Open PowerShell and go to the local ZASS repository:

```powershell
cd "PATH\TO\ZASS-Zero-to-Architecture-Structured-Sprint"
git pull
```

Confirm Node.js and npm are available:

```powershell
node --version
npm --version
```

The CLI currently targets Node.js 20 or newer.

---

## 2. Run the automated test suite

From the repository root:

```powershell
cd cli
npm test
```

Expected result:

```text
10 tests
10 pass
0 fail
```

The exact Node test-runner formatting may vary, but all tests should pass.

The suite covers:

- valid project state;
- duplicate IDs;
- malformed IDs;
- broken local references;
- missing Evidence Confidence warning;
- possible-secret warning with redaction;
- missing `ZASS.md`;
- validation exit code `1`;
- CLI misuse exit code `2`;
- ordinary ID references not being counted as duplicate definitions.

---

## 3. Link the local CLI

While still inside `cli/`:

```powershell
npm link
```

If it succeeds, the command becomes available locally as:

```powershell
zass check
```

This is local development linking only. The validator is not published to npm.

---

## 4. Test the known-good Small Farm Planner fixture

From `cli/`, move to the teaching example:

```powershell
cd ..\examples\01-small-farm-planner
zass check
```

Expected result:

```text
ZASS CHECK

PASS Z000 — ZASS.md found
PASS Z001 — No duplicate record IDs found
PASS Z002 — No malformed record IDs found
PASS Z003 — Local Markdown references resolve
PASS Z004 — Evidence Confidence is paired with architecture assessment
PASS Z005 — No high-signal secret patterns detected

0 error(s), 0 warning(s)
```

This confirms the validator can pass a known Full-ZASS project state without obvious false positives.

---

## 5. Test known failures

The repository includes fixtures that intentionally fail individual rules.

### Duplicate ID — Z001

```powershell
cd ..\..\cli\test\fixtures\duplicate-id
zass check
```

Expected:

```text
ERROR Z001 — Duplicate ID: D-001
```

Exit code should be `1`.

### Malformed ID — Z002

```powershell
cd ..\malformed-id
zass check
```

Expected output includes:

```text
ERROR Z002
```

### Broken local reference — Z003

```powershell
cd ..\broken-reference
zass check
```

Expected output includes:

```text
ERROR Z003
```

### Missing Evidence Confidence — Z004

```powershell
cd ..\missing-evidence
zass check
```

Expected output includes:

```text
WARNING Z004
```

A warning does not fail validation, so the exit code remains `0`.

### Possible secret — Z005

```powershell
cd ..\possible-secret
zass check
```

Expected output includes:

```text
WARNING Z005
```

The detected value must be redacted from terminal output.

---

## 6. Test a real ZASS project

Go to the project directory that contains the project's actual `ZASS.md`.

Example:

```powershell
cd "D:\Projects\Temaya"
zass check
```

The project structure may be as small as:

```text
Temaya/
├── ZASS.md
├── ACTION_PLAN.md      optional
└── ARCHITECTURE.md     optional
```

Run `zass check` from the **project directory**, not from the CLI directory.

Record the complete output.

The key question is not merely whether the command runs. Check whether every PASS, WARNING, and ERROR is factually correct for the real project.

Look especially for:

- a legitimate record incorrectly reported as duplicate;
- ordinary prose incorrectly reported as a malformed ID;
- valid relative links reported as broken;
- documentation examples incorrectly triggering Z004;
- benign text incorrectly triggering the secret detector.

These are the false-positive patterns that matter before v0.2.

---

## 7. If `npm link` does not work

The validator can still be run directly.

First go to the ZASS project that you want to validate:

```powershell
cd "D:\Projects\Temaya"
```

Then execute:

```powershell
node "PATH\TO\ZASS-Zero-to-Architecture-Structured-Sprint\cli\bin\zass.js" check
```

Because `zass check` reads the current working directory, the terminal must be inside the project being checked.

An environment-specific `npm link` limitation is not itself a validator failure.

---

## 8. Exit-code reference

| Result | Exit code |
|---|---:|
| PASS only | 0 |
| PASS + WARNING | 0 |
| One or more validation ERRORs | 1 |
| CLI/runtime/system misuse/failure | 2 |

In PowerShell, the most recent process exit code can be inspected with:

```powershell
$LASTEXITCODE
```

---

## 9. Field gate before CR-010 v0.2

Before implementing the locked CR-010 v0.2 Git-aware LOCKED-drift plan, run v0.1 against at least 1–2 real ZASS projects.

Proceed toward v0.2 only when:

- the output is understandable;
- no unacceptable false-positive pattern appears;
- any v0.1 parser defect found is fixed or explicitly accepted first.

Recommended first real-project test: **Temaya**.

Then test another structurally different ZASS project if available.

The purpose of this step is to validate the parser against real project writing before Git-aware drift checks are layered on top.
