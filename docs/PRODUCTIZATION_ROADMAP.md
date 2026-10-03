# ZASS Productization Roadmap

**Status:** LOCKED  
**Date:** 2026-10-03  
**Scope:** Post-methodology productization priorities

> **Consistency → Local first-class tooling → AI-SYNC automation → Product UX**

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
- Add a repository current-surface consistency guard without duplicating ZASS validator semantics. **DONE — `quality/check-repo-consistency.mjs`, enforced by ZASS CI**

## P1 — Implementation layer

- Generate the versioned Wiki/reference source under `wiki/`. **DONE**
- Publish that source to the separate GitHub Wiki repository, then continue slimming long-form Full-ZASS manual/reference content while preserving one portable project-state file by default. **DONE — initial Wiki publication completed**
- Specify `zass check`. **DONE — locked in `docs/CR010_ZASS_CHECK_SPEC.md`**
- Build the `zass check` MVP. **DONE — local v0.1 implemented under `cli/`**
- CR-010 v0.2 Git-aware LOCKED drift. **DONE — implemented under `cli/`; specification in `docs/CR010_V02_LOCKED_DRIFT_SPEC.md`**
- Field-test v0.2 on real ZASS projects before considering v0.3. **NEXT**
- CR-010 v0.3 ACTION_PLAN consistency plan. **LOCKED — `docs/CR010_V03_ACTION_PLAN_CONSISTENCY_SPEC.md`; implementation NOT STARTED**
- ZASS SYSTEM default landing / escalation direction. **LOCKED + PROMOTED — `docs/ZASS_SYSTEM_DEFAULT_LANDING_ESCALATION_DIRECTION.md`; DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE; Full ZASS remains DESIGN escalation**
- ZASS SYSTEM local-core + AI-SYNC UI/UX contract. **LOCKED — `docs/ZASS_SYSTEM_UI_UX_CONTRACT.md`; ZASS SYSTEM v0.2.0; global DUMP / DECIDE / DESIGN routing; local tooling remains first-class and AI-SYNC Web remains UX/automation projection over the same authority and validator semantics**
- Global EN/MY method-surface routing. **LOCKED — conversation language may differ from method-file language; structured surfaces follow the active EN/MY file; Malay companion notice is one-time and non-switching; canonical IDs/commands remain stable**
- Add a GitHub Action that runs the same validator. **DONE — `.github/workflows/zass-ci.yml` operational; shared semantics documented in `docs/ZASS_GITHUB_CI_CONTRACT.md`**

Validator rule candidates already accepted include duplicate/malformed IDs, broken references, unauthorized LOCKED-decision changes, invalid architecture references, stale ZASS ↔ ACTION_PLAN snapshots, unresolved critical placeholders, and likely secret/sensitive-value patterns.

## P2 — AI-SYNC integration and adoption

Current engineering priority is not blocked on proving the methodology through external case studies.

- Keep local tooling first-class and independently usable.
- Reuse validator/core semantics inside AI-SYNC rather than duplicating them.
- The released global entry contract is **DUMP / DECIDE / DESIGN**: DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE.
- **ZASSPILL v1.0.0 method/protocol contract: PRODUCTION READY.** Phase 1–6 cover core continuity, multi-thread continuity, the ASC persistence contract boundary, retrieval intelligence, cross-method continuity, and production-reliability rules. Runtime persistence, retrieval, authorization, and transport remain AI-SYNC/ASC responsibilities.
- **ZASSPILL Design Direction v0.1** remains historical design context; its promotion gate has passed.
- Next implementation step: AI-SYNC/ASC consumes the frozen ZASSPILL v1.0 contract when its implementation gate is open; do not reopen ZASSPILL core semantics merely to fit transport/runtime details.
- Keep ZASSPILL continuity-state authority distinct from Git-backed project-artifact authority: standalone Thread Packet is continuity authority until linked; latest successfully synchronized ASC state is continuity authority for ASC-linked threads.
- Use progressive disclosure, contextual cards, Project Pulse, and Review/History surfaces where the active method needs them; ordinary ZASSPILL DUMP should remain plain conversation without a permanent footer.
- Require factual SAVE/sync receipts backed by real persistence.
- Keep GitHub-backed project state authoritative for existing Git-backed ZASS project artifacts; AI-SYNC remains the product UX / automation layer over ZASS SYSTEM semantics.

## P3 — Field evidence (non-blocking)

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
