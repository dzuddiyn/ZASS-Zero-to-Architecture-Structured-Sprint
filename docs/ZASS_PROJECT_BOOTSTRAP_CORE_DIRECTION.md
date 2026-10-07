# ZASS Project Bootstrap Core — Future Product Direction

**Status:** LOCKED FUTURE DIRECTION  
**Date:** 2026-10-05  
**Owner:** Project Owner  
**Activation:** ZASS tooling/bootstrap work may proceed under isolated TRACK B before AISYNC Production v1 delivery; CrossAI consumption/integration remains gated separately  
**Scope:** Shared project bootstrap engine for CLI and AISYNC Create Project

> **Create once. Own the project space. Add Git when useful. Continue anywhere.**

## 1. Product goal

A new ZASS-backed project should be able to begin through either the npm CLI or CrossAI/AISYNC while converging on the same bootstrap semantics. A project does not require GitHub by default; the bootstrap core must support a durable project space first and optional Git enablement later.

Target AISYNC user journey:

```text
NEW PROJECT
→ create durable project space
→ seed ZASS files
→ register in CrossAI
→ offer GitHub
   [ CREATE NEW REPO ]
   [ LINK EXISTING REPO ]
   [ NOT NOW ]
→ continue in DESIGN
```

Shared implementation direction:

```text
npm CLI
      ┐
      ├─→ ZASS Project Bootstrap Core
      │       ├─ create files
      │       ├─ initialize project metadata
      │       └─ validate
      │
CrossAI Create Project
      ┘
              ↓
       durable project space
              ↓
       CrossAI registry
              ↓
       optional GitHub
              ↓
          DESIGN
```

## 2. Ownership boundary

### ZASS owns

- Project Bootstrap Core semantics;
- generated ZASS project structure;
- official method bootstrap surfaces for ZASSPILL, ZASSELECTION, ZASSIMPLE, and Full ZASS;
- explicit method/language selection semantics;
- initial project metadata contract;
- bootstrap validation;
- compatibility with `zass check` and later local CLI tooling.

### CrossAI / AISYNC owns

- Create Project UX;
- creation/registration orchestration for the user's durable project space;
- optional GitHub authentication/integration;
- explicit owner confirmation before creating/linking a repository;
- project registration in CrossAI;
- index/projection refresh;
- project progress/current-state presentation;
- operational recovery/error handling around the create/register flow.

CrossAI/AISYNC must consume the bootstrap core rather than reimplementing ZASS bootstrap semantics independently.

## 3. Authority invariant

Default authority direction:

```text
durable project space
= user-owned project home

CrossAI
= UX / orchestration / continuity / projection / automation layer
```

For an explicitly Git-enabled project:

```text
GitHub repository
= canonical Git/version-control authority for selected Git-backed artifacts
```

The bootstrap core must not require GitHub merely to create a valid ZASS-backed project. CrossAI may project project progress/current state from authorized evidence, but must not create a second editable semantic master for the same artifact.

## 4. Explicit creation boundary

Creating or linking a GitHub repository is an optional external side effect and requires explicit owner confirmation.

CrossAI must not silently create or link a repository merely because the user enters DESIGN or starts discussing a project.

The future UX should distinguish:

```text
idea/design conversation
≠
approved project bootstrap
≠
durable project space created
≠
CrossAI project registered
≠
optional GitHub enabled
```

Each factual state must remain separately visible.

## 5. Relationship to npm onboarding

The target command remains:

```bash
npm create zass@latest my-project
```

The earlier npm-only default (`ZASSIMPLE` + English + no method question) is SUPERSEDED.

The locked npm Bootstrap CLI v0.1 contract now requires explicit method/language resolution:

- interactive terminal → ask the user;
- automation/non-interactive → require `--method` and `--lang`;
- methods → ZASSPILL / ZASSELECTION / ZASSIMPLE / Full ZASS;
- no silent npm method default.

See [`ZASS_NPM_BOOTSTRAP_CLI_V01.md`](ZASS_NPM_BOOTSTRAP_CLI_V01.md).

The npm bootstrap and future CrossAI Create Project should call the same Project Bootstrap Core wherever practical. CrossAI may select the method explicitly from its own DUMP / DECIDE / DESIGN / Full-ZASS escalation UX rather than reproducing the npm prompt.

The CLI path remains useful without AISYNC.

## 6. Parallel TRACK B sequence

LOCKED sequencing refinement:

```text
TRACK B
CR-010 v0.4: zass status + zass diff ✅
→ real-project field test ✅
→ CR-010 CLOSED — zass-cli v0.4.0 ✅
→ npm bootstrap CLI v0.1 contract ✅ LOCKED
→ implement npm bootstrap CLI ← NEXT
→ ZASS Project Bootstrap Core
→ field-test bootstrap
→ freeze stable Bootstrap Core contract
```

This TRACK B may proceed before AISYNC/CrossAI T-020/T-021 finishes, provided it remains isolated from the active AISYNC runtime and Gate 6/Production v1 critical path.

CrossAI consumption of the Bootstrap Core remains a separate later integration step.

See [`ZASS_TRACK_B_PARALLEL_TOOLING.md`](ZASS_TRACK_B_PARALLEL_TOOLING.md).

## 7. CR-010 relationship

CR-010 remains a validator/tooling track.

CR-010 is CLOSED after v0.4 `zass status` + `zass diff` were implemented, regression-tested, reviewed in real use, field-tested on Kerani_Core, and corrected for the Windows EOL false positive. See [`CR010_STOP_REVIEW_CLOSURE.md`](CR010_STOP_REVIEW_CLOSURE.md).

The npm bootstrap CLI and Project Bootstrap Core are separate onboarding/productization work and are not required to close CR-010.

## 8. UX regression after visual polish

After functional human beta and the later AISYNC visual polish / Guided Journey work, run a focused UX regression rather than repeating unrelated reliability proofs.

Recommended sample:

- two participants from the functional closed beta;
- one fresh user;
- at least one desktop journey;
- at least one mobile journey.

Core regression path:

```text
Landing
→ project
→ DUMP / DECIDE / DESIGN
→ handoff
→ return
→ SAVE
→ receipt
→ reopen
→ Guided Journey / current state
```

The user should be able to tell:

- where they are;
- what the next meaningful action is;
- what is only prepared versus actually saved;
- how to recover from ordinary mistakes;
- what project state is canonical.

Visual polish must not invent progress, PASS, SAVE, LOCK, CONFIRM, or DELIVERED state.
