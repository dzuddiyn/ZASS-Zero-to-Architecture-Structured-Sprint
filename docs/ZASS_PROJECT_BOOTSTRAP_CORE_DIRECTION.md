# ZASS Project Bootstrap Core — Future Product Direction

**Status:** LOCKED FUTURE DIRECTION  
**Date:** 2026-10-05  
**Owner:** Project Owner  
**Activation:** Post-AISYNC Production v1 delivery; not an active Gate 6 task  
**Scope:** Shared project bootstrap engine for CLI and AISYNC Create Project

> **Create once. Own the repo. Continue anywhere.**

## 1. Product goal

A new ZASS-backed project should be able to begin through either the npm CLI or AISYNC while converging on the same bootstrap semantics and Git-backed project structure.

Target AISYNC user journey:

```text
NEW PROJECT
→ DESIGN
→ create GitHub repository
→ seed ZASS files
→ register in AISYNC
→ start project
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
AISYNC Create Project
      ┘
              ↓
       owner confirmation
              ↓
       GitHub repository
              ↓
       AISYNC registry
              ↓
          DESIGN
```

## 2. Ownership boundary

### ZASS owns

- Project Bootstrap Core semantics;
- generated ZASS project structure;
- initial ZASS/ZASSIMPLE files and safe defaults;
- initial project metadata contract;
- bootstrap validation;
- compatibility with `zass check` and later local CLI tooling.

### AISYNC owns

- Create Project UX;
- GitHub authentication/integration for repository creation;
- explicit owner confirmation before creating/registering a repository;
- project registration in AISYNC;
- index/projection refresh;
- project progress/current-state presentation;
- operational recovery/error handling around the create/register flow.

AISYNC must consume the bootstrap core rather than reimplementing ZASS bootstrap semantics independently.

## 3. Authority invariant

For a Git-backed project:

```text
GitHub repository
= canonical project Source of Truth

AISYNC
= UX / orchestration / continuity / projection / automation layer
```

A project must remain independently inspectable and maintainable from its repository even if AISYNC is unavailable.

AISYNC may project project progress and current state from canonical/authorized evidence, but it must not become a second editable semantic master for the same project artifacts.

## 4. Explicit creation boundary

Creating a GitHub repository is an external side effect and requires explicit owner confirmation.

AISYNC must not silently create a repository merely because the user enters DESIGN or starts discussing a project.

The future UX should distinguish:

```text
idea/design conversation
≠
approved project bootstrap
≠
GitHub repository created
≠
AISYNC project registered
```

Each factual state must remain separately visible.

## 5. Relationship to npm onboarding

The existing locked onboarding target remains:

```bash
npm create zass@latest my-project
```

The npm bootstrap and AISYNC Create Project should call the same Project Bootstrap Core wherever practical.

The CLI path remains useful without AISYNC.

## 6. Post-Production v1 sequence

Locked future sequence:

```text
T-020 Human Closed Beta
→ Final ZASS Gate 6 acceptance
→ Gate 6 PASS / CLOSED
→ AISYNC visual polish + Guided Journey
→ UX regression
→ T-021 Production v1 release acceptance
→ DELIVERED !!
→ CR-010 v0.4: zass status + zass diff
→ real-project field test
→ CLOSE CR-010
→ npm bootstrap CLI
→ ZASS Project Bootstrap Core
→ AISYNC Create New Project → GitHub
```

This ordering is deliberate. Project-bootstrap work must not interrupt the current T-020 / Gate 6 critical path.

## 7. CR-010 relationship

CR-010 remains a validator/tooling track.

CR-010 may close after v0.4 `zass status` + `zass diff` are implemented, regression-tested, understandable in real use, and field-tested on at least one real ZASS project without unacceptable false positives or misleading state.

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
