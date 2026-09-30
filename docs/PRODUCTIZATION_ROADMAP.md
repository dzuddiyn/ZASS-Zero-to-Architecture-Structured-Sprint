# ZASS Productization Roadmap

**Status:** LOCKED  
**Date:** 2026-09-30  
**Scope:** Post-methodology productization priorities

> **Consistency → Validator → Automation → Real-world evidence**

## Feature freeze

Core ZASS methodology is temporarily feature-frozen.

Do not add new methods, command families, ledgers, or governance layers unless a critical defect or documented field evidence justifies the change.

The freeze does not block consistency fixes, documentation presentation, validator work, automation, or evidence gathering.

## P0 — Consistency and cleanup

- Remove the placeholder GitHub Actions workflow. **DONE in v0.3.4**
- Align the Small Farm Planner teaching fixture with the current Full ZASS version and PROCEED semantics. **DONE in v0.3.4**
- Make CLI specification-vs-release status explicit. **DONE in v0.3.4**
- Tighten PROCEED to approve exactly an explicitly listed proposal set. **DONE in v0.3.4**
- Select a repository license. **DONE — MIT License**

## P1 — Implementation layer

- Slim long-form Full-ZASS reference/manual content into Wiki/docs while preserving one portable project-state file by default.
- Specify `zass check`. **DONE — locked in `docs/CR010_ZASS_CHECK_SPEC.md`**
- Build the `zass check` MVP. **NEXT — Work handoff prompt locked in `docs/WORK_PROMPT_CR010.md`**
- Add a GitHub Action that runs the same validator.

Validator rule candidates already accepted include duplicate/malformed IDs, broken references, unauthorized LOCKED-decision changes, invalid architecture references, stale ZASS ↔ ACTION_PLAN snapshots, unresolved critical placeholders, and likely secret/sensitive-value patterns.

## P2 — Field evidence

Use ZASS on multiple real projects and record evidence such as:

- repeated project-context retelling;
- resurfacing of rejected ideas;
- hidden assumptions found before implementation;
- unexplained decision drift;
- AI factual corrections;
- time from raw idea to owner-approved decision;
- time for another AI or maintainer to understand current project state.

Publish case studies only from documented real usage.

## Validation architecture

```text
zass check
    ├── local CLI
    └── GitHub Action
```

The GitHub Action should call the same validation engine rather than duplicate its rules.

## Repository license

**LOCKED: MIT License.**

The MIT License applies to this repository. Reuse, modification, distribution, and commercial use are permitted subject to the terms in the root `LICENSE` file.
