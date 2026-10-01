# Work Prompt — Implement CR-010 `zass check` MVP

**Status:** LOCKED IMPLEMENTATION PROMPT  
**Date:** 2026-09-30  
**Target repository:** `dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint`  
**Authoritative spec:** `docs/CR010_ZASS_CHECK_SPEC.md`

Use this prompt in **ChatGPT Work** when handing off implementation of the first CR-010 validator phase.

---

## COPY FROM HERE

You are implementing the first productized validator for the ZASS repository.

Repository:

```text
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint
```

Work autonomously inside the repository. Inspect the current branch and latest files before editing. The repository may have changed since this prompt was written, so never overwrite newer work blindly.

### Source of Truth

Read these first:

1. `docs/CR010_ZASS_CHECK_SPEC.md`
2. `docs/PRODUCTIZATION_ROADMAP.md`
3. `ZASS.md`
4. `ZASS_MY.md`
5. `README.md`

Treat the repository as the Source of Truth.

The authoritative implementation scope is the current **CR-010 v0.1 current-file validator** only.

Do not redesign the ZASS methodology.

Do not add new ZASS commands, states, ledgers, scoring systems, or architecture rules.

Full ZASS is currently v0.3.9. `ZASS.md` is the default English method and `ZASS_MY.md` is the Bahasa Melayu localization. Do not change decision semantics silently.

### Goal

Build a small Node.js CLI that can be used locally as:

```bash
zass check
```

The first MVP validates the current project files only.

### Required repository structure

Create or adapt:

```text
cli/
├── package.json
├── bin/
│   └── zass.js
├── src/
│   ├── check.js
│   ├── discover.js
│   ├── parser.js
│   └── rules/
└── test/
    └── fixtures/
```

You may add small supporting files when technically necessary, but keep the implementation minimal and easy for a solo maintainer to understand.

### CLI contract

`zass check` reads the current working directory.

Files:

- `ZASS.md` — required
- `ACTION_PLAN.md` — optional
- `ARCHITECTURE.md` — optional

Output classes:

- PASS
- WARNING
- ERROR

Exit codes:

- `0` — validation passes; warnings may exist
- `1` — one or more validation errors
- `2` — CLI/runtime/system failure

Keep terminal output concise and human-readable.

### Implement these v0.1 checks

Implement one rule at a time and test each rule before moving on.

#### Z001 — Duplicate IDs

Detect duplicate recognized ZASS IDs such as:

```text
I-001
Q-001
R-001
E-001
D-001
L-001
AC-001
MR-001
```

Example:

```text
ERROR Z001 — Duplicate ID: D-004
```

Avoid counting the same textual mention repeatedly when it is clearly a reference rather than a record definition. Prefer conservative parsing over noisy false positives.

#### Z002 — Malformed IDs

Detect obvious malformed IDs when they appear in a position that the parser can reasonably identify as an ID/record definition.

Examples:

```text
D004
D_004
D-4
```

Do not use a broad global regex that flags ordinary prose.

#### Z003 — Broken local Markdown/file references

Validate relative references that point to files inside the project.

Do not check remote HTTP/HTTPS URLs in this phase.

#### Z004 — Evidence Confidence pairing

For Full ZASS, require Evidence Confidence when:

1. a real/current `ZERO → ARCHITECTURE` assessment is shown;
2. `DRAFT ARCH` readiness is evaluated;
3. `BUILD ARCHITECTURE` is represented as a current project assessment/gate;
4. architecture is `CONFIRMED` while validation or experiments remain open.

Static documentation/template examples must not be treated as real project assessments.

Be conservative. Prefer a warning over an error if the parser cannot reliably distinguish a real project assessment from documentation text.

Never invent Evidence Confidence.

#### Z005 — Possible secret / sensitive-value warning

Warn on high-signal patterns only, such as obvious API-token prefixes or private-key blocks.

This is a defensive warning, not proof that the value is a valid secret.

Avoid printing the full detected secret value in terminal output.

### Test fixtures

Create at least:

```text
cli/test/fixtures/
├── valid/
├── duplicate-id/
├── malformed-id/
├── missing-evidence/
├── broken-reference/
└── possible-secret/
```

Every implemented rule needs a passing and failing test case where relevant.

Use the Node.js built-in test runner if practical so the MVP does not gain unnecessary dependencies.

### Local verification

Run the test suite.

Then run the CLI against:

1. the fixture projects;
2. at least one real ZASS project/repository state available in this repository.

If `npm link` is practical in the Work environment, verify:

```bash
zass check
```

If global linking is blocked by environment permissions, also provide and test a direct equivalent such as:

```bash
node cli/bin/zass.js check
```

Do not treat an environment-specific `npm link` limitation as a validator failure.

### Explicitly out of scope

Do NOT implement in this task:

- npm publication;
- `zass status`;
- `zass diff`;
- Git-aware LOCKED-decision drift;
- ACTION_PLAN readiness snapshot drift;
- mandatory `.zass/schema.yml`;
- remote URL checking;
- GitHub Actions;
- dashboards;
- SaaS services;
- unrelated README redesign;
- methodology expansion.

If you notice a useful future improvement, record it in your final report only. Do not silently expand scope.

### Maintainability requirements

Keep the code:

- readable by a solo maintainer;
- dependency-light;
- modular enough that new rules can be added later;
- explicit about PASS/WARNING/ERROR;
- safe against obvious false-positive explosions.

Do not optimize prematurely.

### Stop rule

Do not move to CR-010 v0.2 until v0.1:

- runs locally;
- has passing/failing fixtures;
- produces understandable output;
- passes its tests;
- has been tried against a real ZASS project without unacceptable false positives.

### Git workflow

Before editing:

1. confirm the current branch;
2. inspect the latest HEAD;
3. inspect existing uncommitted changes;
4. do not overwrite unrelated user work.

After implementation:

1. show or inspect the diff;
2. run all relevant tests;
3. run the validator itself;
4. fix failures caused by this implementation;
5. commit only the CR-010 v0.1 implementation and its necessary docs/tests.

Preferred commit message:

```text
feat: implement zass check MVP
```

Push only after tests pass.

Do not claim success until the commit/push really succeeds.

### Final report

Return a compact report containing:

- files created/changed;
- rules implemented;
- commands used to test;
- test result;
- sample `zass check` output;
- known limitations;
- whether `npm link` worked;
- actual commit SHA if committed/pushed;
- recommendation: STOP at v0.1 or ready to propose v0.2.

Do not start v0.2 automatically.

## END PROMPT
