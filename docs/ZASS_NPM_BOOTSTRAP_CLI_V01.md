# ZASS npm Bootstrap CLI v0.1 — Behavioral Contract

**Status:** HISTORICAL CONTRACT — `create-zass-project@0.1.0` LATER PUBLISHED / VERIFIED  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Track:** ZASS TRACK B  
**Target npm UX:** `npm create zass-project@latest <project>`  
**Target initializer package:** `create-zass-project`  
**Initial package version:** `0.1.0`

> **No ZASS method is silently selected by the npm bootstrap. The user chooses the method; automation supplies it explicitly.**

## 1. Supersession

This contract explicitly SUPERSEDES the earlier npm-onboarding lock:

```text
ZASSIMPLE is the default.
No method-selection wizard.
```

and the earlier CLI rule:

```text
generate ZASSIMPLE, not Full ZASS
English default
no method-selection question during the basic path
```

The supersession applies to the **npm bootstrap CLI only**.

It does not change:

- ZASS SYSTEM DUMP / DECIDE / DESIGN routing;
- ZASSPILL as the DUMP method;
- ZASSELECTION as the DECIDE method;
- ZASSIMPLE as the default lightweight DESIGN path;
- Full ZASS escalation/governance semantics.

## 2. Product purpose

The npm bootstrap creates a new local ZASS project space from one explicitly chosen official method:

- ZASSPILL;
- ZASSELECTION;
- ZASSIMPLE;
- Full ZASS.

The CLI is a project bootstrapper, not a project manager, AI runtime, GitHub client, CrossAI client, or validator replacement.

## 3. Primary command

Canonical target UX:

```bash
npm create zass-project@latest my-project
```

npm resolves this initializer UX to the `create-zass-project` package.

Registry-name availability and npm naming-policy acceptance must be verified before publication. The original unscoped identity `create-zass` returned E404 in lookup but was rejected by the registry at actual publish time as too similar to an existing package. The owner selected `create-zass-project` as the replacement public identity; this naming change does not alter the bootstrap behavior contract.

The project target argument is required in v0.1.

## 4. Method selection

Allowed method values:

```text
zasspill
zasselection
zassimple
zass
```

### Interactive terminal

When `--method` is absent and an interactive terminal is available, ask the user to choose explicitly:

```text
Which ZASS method do you want to start with?

  ZASSPILL      — capture / continuity
  ZASSELECTION  — compare / decide
  ZASSIMPLE     — design / execute
  FULL ZASS     — governed architecture
```

No option is labelled as default or silently selected.

### Explicit flag

Automation or an advanced user may bypass the method prompt:

```bash
npm create zass-project@latest my-project -- --method zasspill
npm create zass-project@latest my-project -- --method zasselection
npm create zass-project@latest my-project -- --method zassimple
npm create zass-project@latest my-project -- --method zass
```

### Non-interactive environment

If `--method` is absent and no interactive prompt can be shown:

```text
FAIL — method required
```

Do not guess ZASSIMPLE or any other method.

## 5. Language selection

Allowed language values:

```text
en
my
```

### Interactive terminal

When `--lang` is absent, ask:

```text
Choose language:

  English
  Bahasa Melayu
```

No language is silently selected inside the interactive bootstrap flow.

### Explicit flag

```bash
npm create zass-project@latest my-project -- --method zassimple --lang en
npm create zass-project@latest my-project -- --method zassimple --lang my
```

### Non-interactive environment

A non-interactive invocation must supply both `--method` and `--lang`.

If either required choice is absent, exit with a clear usage error rather than guessing.

If one choice is already supplied in an interactive terminal, prompt only for the missing choice.

## 6. Generated method file mapping

Every successful bootstrap creates exactly one active method file plus `README.md` and `.gitignore`.

### ZASSPILL

```text
--method zasspill --lang en
→ ZASSPILL_EN.md

--method zasspill --lang my
→ ZASSPILL_MY.md
```

### ZASSELECTION

```text
--method zasselection --lang en
→ ZASSELECTION_EN.md

--method zasselection --lang my
→ ZASSELECTION_MY.md
```

### ZASSIMPLE

```text
--method zassimple --lang en
→ ZASSIMPLE_EN.md

--method zassimple --lang my
→ ZASSIMPLE_MY.md
```

### Full ZASS

A generated Full-ZASS project must preserve the existing Full-ZASS project authority/discovery invariant:

```text
project authority filename = ZASS.md
```

Therefore:

```text
--method zass --lang en
→ ZASS.md containing the English project bootstrap surface

--method zass --lang my
→ ZASS.md containing the Bahasa Melayu project bootstrap surface
```

Do not generate `ZASS_MY.md` as the only Full-ZASS project authority because current `zass check/status/diff` discovery requires `ZASS.md`.

The exact project-safe localized Full-ZASS template is a Bootstrap Core/template responsibility. The npm CLI contract locks the output authority filename, not a byte-for-byte copy rule.

## 7. Minimal generated project

Examples:

```text
my-project/
├── ZASSPILL_EN.md
├── README.md
└── .gitignore
```

or:

```text
my-project/
├── ZASSELECTION_MY.md
├── README.md
└── .gitignore
```

or:

```text
my-project/
├── ZASSIMPLE_EN.md
├── README.md
└── .gitignore
```

or Full ZASS:

```text
my-project/
├── ZASS.md
├── README.md
└── .gitignore
```

v0.1 must not add `ACTION_PLAN.md`, `ARCHITECTURE.md`, `.zass/`, application source code, or package files merely because a method was selected.

Those files may be created later by the method/workflow when genuinely needed.

## 8. Generated README

The generated README must be short and factual.

It must state:

- project name;
- selected ZASS method;
- selected language;
- active method filename;
- one clear next action.

It must not claim:

- architecture is ready;
- project state is saved remotely;
- Git exists;
- GitHub exists;
- CrossAI registration exists;
- validation PASS unless validation was actually performed.

## 9. Generated .gitignore

The generated `.gitignore` is technology-neutral and prepares the project for optional later Git use.

Minimum secret-oriented baseline:

```gitignore
.env
.env.*
!.env.example
.secrets/
*.key
*.pem
```

Documentation must warn users not to put passwords, API keys, tokens, or sensitive personal data into tracked ZASS Markdown.

## 10. Target-directory contract

v0.1 is create-new-only.

```text
target does not exist
→ bootstrap may create it

target already exists
→ REFUSE
```

This applies even when the existing directory is empty.

No v0.1 support for:

- `--force`;
- overwrite;
- merge into existing project;
- in-place `.` bootstrap.

The target path is resolved locally. The parent directory must already exist and be writable.

## 11. Transaction and cleanup

Bootstrap order:

```text
resolve arguments
→ resolve method/language
→ preflight target
→ prepare bootstrap plan
→ create target directory
→ write expected files
→ structural validation
→ success receipt
```

If failure occurs after the CLI created a previously non-existent target directory:

- remove only that newly-created partial target;
- never delete or modify a pre-existing path.

The bootstrap must not leave a half-created project behind after a known failure.

## 12. Template/source rule

The runtime bootstrap must not fetch method files live from GitHub or another remote source.

The released package must contain or depend on versioned bootstrap templates/core assets that ship with the package release.

This preserves reproducibility:

```text
create-zass-project release
→ bundled/versioned bootstrap assets
→ generated project
```

The exact template semantics are now owned by the **frozen ZASS Project Bootstrap Core v0.1**.

The CLI consumes that shared Core without maintaining a second semantic engine. For npm distribution, `create-zass-project` carries a byte-for-byte vendored runtime snapshot of canonical Core `src/` + `templates/` under `create-zass/vendor/bootstrap-core/`. A repository sync test must fail on any drift. The packed artifact must still prove this snapshot is present and executable outside the monorepo.

## 13. No external side effects

v0.1 MUST NOT:

- run `git init`;
- run `git add` or `git commit`;
- create/link a GitHub repository;
- authenticate GitHub;
- register a CrossAI/AISYNC project;
- call Google Drive;
- call an AI API;
- call a remote ZASS service;
- send telemetry;
- run `npm init` inside the generated project;
- install project dependencies;
- download method files at runtime.

Package acquisition by npm itself is outside the generated-project side-effect boundary.

## 14. Relationship to Git / GitHub

Successful bootstrap truth:

```text
local project space created
```

It does NOT imply:

```text
Git initialized
GitHub created
GitHub linked
project remotely saved
```

Git and GitHub remain optional later choices.

## 15. Relationship to CrossAI

The CLI does not register the project in CrossAI.

Future CrossAI Create Project may call the same Bootstrap Core with an explicit method/language selected from its own UX.

The intended future convergence is:

```text
create-zass-project ─┐
                    ↓
             Bootstrap Core
                    ↑
CrossAI Create ─────┘
```

CrossAI consumption remains gated separately and does not begin merely because this CLI contract is locked.

## 16. Internal result / receipt

The implementation should return a factual internal result shaped approximately as:

```json
{
  "ok": true,
  "projectName": "my-project",
  "projectDir": "...",
  "method": "zassimple",
  "language": "en",
  "methodFile": "ZASSIMPLE_EN.md",
  "createdFiles": [
    "ZASSIMPLE_EN.md",
    "README.md",
    ".gitignore"
  ]
}
```

This CLI result is a consumer receipt, not the Bootstrap Core public API. The Bootstrap Core v0.1 public consumer surface is now **FROZEN / PASS**; this CLI receipt may remain consumer-specific as long as it stays factual.

## 17. Success output

Representative interactive success:

```text
ZASS project created.

Project:  my-project
Method:   ZASSIMPLE
Language: English

Created:
  ZASSIMPLE_EN.md
  README.md
  .gitignore

Git:      not initialized
GitHub:   not connected
CrossAI:  not registered

Next:
  cd my-project
  open ZASSIMPLE_EN.md with your AI
```

Equivalent wording may vary during implementation, but factual state must remain truthful and compact.

## 18. Exit codes

```text
0
= bootstrap completed and structurally validated

1
= safe bootstrap refusal
  e.g. target already exists

2
= invalid/unsupported CLI usage,
  missing required choice in non-interactive mode,
  or runtime/system failure
```

No partial success may return exit 0.

## 19. Validation boundary

v0.1 bootstrap validation is structural and method-aware.

It proves that the intended project surface was created.

It does not automatically claim:

- Full-ZASS rule validation PASS;
- architecture readiness;
- method progress;
- Git cleanliness;
- remote persistence.

`zass check` remains the Full-ZASS validator where applicable.

## 20. Implementation boundary

Initial implementation should remain bounded to:

1. a new `create-zass` package area;
2. CLI argument parsing and interactive prompts;
3. target preflight;
4. local bootstrap planning/writing;
5. structural validation;
6. safe cleanup;
7. factual receipt/console formatting;
8. automated tests.

Do not implement CrossAI integration in this CLI slice. The shared Bootstrap Core contract is now frozen separately and must be consumed without duplicating its semantics.

## 21. Acceptance requirements

Before implementation may be called PASS, evidence must cover:

- interactive method prompt with all four official methods;
- interactive language prompt;
- non-interactive explicit flags;
- all 4 × 2 method/language combinations;
- Full-ZASS authority output named `ZASS.md` for both languages;
- existing target refusal with no mutation;
- invalid method rejection;
- invalid language rejection;
- non-interactive missing-method rejection;
- non-interactive missing-language rejection;
- exactly the intended minimal files;
- generated README matches selected method/language;
- secret-oriented `.gitignore`;
- no Git/GitHub/CrossAI side effects;
- no runtime template download;
- partial-failure cleanup;
- Windows behavior;
- automated tests PASS.

Before npm publication, additionally require:

```text
npm pack
→ inspect package artifact
→ execute packed artifact locally
→ create disposable projects
→ verify generated files/behavior
→ explicit publish decision
```

Source tests alone are not publication proof.

## 22. Deferred

Not part of v0.1:

- npm publication itself;
- existing-directory merge/in-place mode;
- `--force`;
- Git initialization;
- GitHub create/link;
- CrossAI registration;
- Google Drive project creation;
- application/framework scaffolding;
- ACTION_PLAN/ARCHITECTURE auto-generation;
- method recommendation engine;
- automatic routing from user intent;
- telemetry;
- remote template updates.

## 23. Locked principle

> **Bootstrap asks or receives the method explicitly. It never silently decides the user's ZASS method.**

And:

> **Create the local project first. Add Git, GitHub, CrossAI, or other external systems only through later explicit steps.**


## 24. Implementation receipt

The locked v0.1 contract is implemented as a new private package area:

```text
create-zass/
├── package.json
├── bin/create-zass.js
├── src/
└── test/

bootstrap-core/
├── src/
├── templates/
└── test/
```

Implemented behavior:

- package identity: `create-zass-project@0.1.0`;
- package publication guard has been intentionally opened for the publication candidate; `private:true` is removed and publish metadata is pinned to the public npm registry;
- interactive method prompt exposes ZASSPILL / ZASSELECTION / ZASSIMPLE / Full ZASS with no silent default;
- interactive language prompt exposes English / Bahasa Melayu;
- non-interactive mode requires explicit `--method` and `--lang`;
- all 4 × 2 method/language combinations are implemented;
- Full ZASS always generates `ZASS.md` as project authority for both languages;
- target-directory preflight is create-new-only;
- existing targets are refused without mutation;
- partial targets created by the current run are removed on known failure;
- generated project contains exactly one selected method file plus `README.md` and `.gitignore`;
- no Git, GitHub, CrossAI, Drive, AI API, telemetry, runtime template download, project `npm init`, or dependency installation behavior is present;
- Bootstrap Core bundled templates are versioned assets and regression-tested against the canonical repository method files; `create-zass` consumes those Core semantics through a vendored runtime snapshot that is byte-for-byte sync-guarded against canonical Core;
- repository CI now runs both `zass-cli` and `create-zass` tests.

### Windows evidence

A temporary Windows clone at implementation commit `0300574cd6431de670878d5bb3c6a4833d264d7f` ran:

```text
npm --prefix create-zass test

32 tests
32 pass
0 fail
```

This included all 8 method/language combinations, interactive-choice behavior, explicit CLI flags, existing-target refusal, safe cleanup, CLI exit codes, and bundled-template synchronization.

### GitHub Actions evidence

PR #42 ZASS CI passed with:

- existing ZASS CLI tests: PASS;
- new create-zass bootstrap tests: PASS;
- repository consistency check: PASS;
- historical baseline resolution: PASS;
- ZASS validator: PASS.

### Publication boundary

This sentence described the pre-publication state. The locked v0.1 behavior was later published and verified as `create-zass-project@0.1.0`; repository source subsequently advanced to an unpublished `0.2.0` candidate.

A Windows `npm pack --dry-run` attempt during implementation did not produce a usable result and was terminated; therefore no package-artifact/publication proof is claimed.

The locked publication gate remains unchanged:

```text
npm pack
→ inspect artifact
→ execute packed artifact locally
→ verify disposable bootstrap projects
→ explicit publish decision
```

That publication gate is now the **next TRACK B gate** and remains separate from the already-complete local v0.1 implementation.

The shared ZASS Project Bootstrap Core public API is now **FROZEN / PASS**. The standalone distribution boundary is remediated by vendoring canonical Core runtime `src/` + `templates/` inside `create-zass`, with byte-for-byte sync regression coverage. Packed-artifact testing now covers `npm pack`, clean tarball install, direct installed-bin execution, and local-tarball `npm exec --package ... create-zass-project` invocation. The publication candidate removes `private:true`, adds public package metadata and an explicit manual publish workflow. Registry name availability and npm account credential/authority are verified as separate live publication-gate evidence before publish.

Publication-readiness evidence on 2026-10-08 proved package authentication, artifact integrity, and clean-install behavior, but actual publication of `create-zass@0.1.0` was rejected by npm with `E403` because the unscoped name was considered too similar to an existing package. The public candidate is therefore renamed to `create-zass-project@0.1.0`; a fresh readiness pass is required before any next publish attempt.


---

## Final freeze status note — 2026-10-08

This document preserves the v0.1 contract and pre-publication lineage.

Current distribution truth is maintained in:

`docs/ZASS_FINAL_FREEZE_DISTRIBUTION_TRUTH.md`

At final freeze:

```text
public npm latest = create-zass-project@0.1.0
repository source candidate = create-zass-project@0.2.0
0.2.0 publication = NOT AUTHORIZED by freeze
```
