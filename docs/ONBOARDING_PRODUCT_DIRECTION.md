# ZASS Onboarding & Productization Baseline

**Status:** LOCKED BASELINE  
**Locked by:** Project Owner  
**Locked date:** 2026-09-30  
**Scope:** Landing page, onboarding, cross-AI handoff, CLI bootstrap  
**Implementation status:** npm Bootstrap CLI v0.1 is implemented locally and CI/Windows tested; npm publication remains a separate gate. The decisions in this document remain authoritative unless the owner explicitly revises them.

> **Think once. Keep the decisions. Continue with any AI.**

Supporting mental model:

> **Any AI can think. One trusted writer saves. GitHub remembers.**

## Purpose

ZASS onboarding must reduce first-use friction. A new user should experience the value before learning the full framework.

The landing experience should lead with the user's problem:

> Stop repeating the same project context to every AI.

ZASS is not introduced first as a catalogue of methods. The default **landing/conversational path** is to start with **ZASSIMPLE**, work naturally, persist approved state deliberately, and reveal advanced methods only when needed. The npm bootstrap is an explicit-tooling exception: it asks the user which official method to create rather than silently selecting one.

---

# LOCKED DECISIONS

## L-ONB-001 — Problem-first onboarding

**Decision:** The ZASS landing page and primary onboarding are problem-first, not framework-first.

The user should first understand the benefit:

```text
RAW IDEA
    ↓
EXPLORE WITH AI
    ↓
HUMAN-APPROVED DECISIONS
    ↓
TRACEABLE PROJECT STATE / ARCHITECTURE
```

Default landing/conversational onboarding begins with **ZASSIMPLE**. New users are not required to choose between advanced methods before starting through that path. The npm bootstrap follows L-CLI-002 instead and explicitly asks which official method and language to create.

**Primary positioning:**

> **Think once. Keep the decisions. Continue with any AI.**

Useful supporting line:

> **Start structured, or start messy. ZASS can capture it later.**

---

## L-ONB-002 — GitHub is the Source of Truth

**Decision:** GitHub remains the authoritative persistent Source of Truth for a Git-backed ZASS project.

A "Main App" or trusted writer is **not** the Source of Truth. It is a write-capable client/gateway that:

1. reads the latest authoritative project state;
2. reviews proposed changes;
3. applies only owner-approved changes; and
4. persists them to GitHub through `COMMIT`.

Other AI tools may be used freely for exploration, challenge, review, or brainstorming without needing write access.

Simple mental model:

```text
Other AI tools = explore / challenge / brainstorm
                         ↓
                  trusted writer
                         ↓
                owner approval
                         ↓
                      COMMIT
                         ↓
             GitHub = Source of Truth
```

Core rule:

> **One AI/client saves. Any AI can think.**

The method must not depend on any specific vendor. App capabilities may change over time; named compatibility guidance is implementation documentation, not core ZASS semantics.

---

## L-ONB-003 — Four official onboarding paths

**Decision:** ZASS has four valid onboarding/entry paths. All four must converge on the same principles: preserve project state, respect LOCKED decisions, require human approval, and persist authoritative changes deliberately.

### 1. CLI — fastest structured start

Target user experience:

```bash
npm create zass@latest my-project
```

Then choose the ZASS method and language explicitly in the interactive bootstrap, or provide them through CLI flags for automation.

### 2. Manual file — portable start

Download or copy `ZASSIMPLE_EN.md`, give it to an AI, and begin talking normally.

### 3. Public link — existing public ZASS project

For a public ZASS project, paste the public project/repository URL into an AI that can read the link.

Ask the AI to:

- study the current project state;
- respect existing LOCKED decisions;
- continue brainstorming naturally;
- surface ideas, questions, risks, contradictions, and alternatives;
- export a Markdown handoff at the end of the session.

The handoff is a proposal, not the Source of Truth.

### 4. Ad-hoc brainstorm — zero setup

Start anywhere, even without ZASS.

Brainstorm casually in any AI. When something becomes worth keeping:

```text
useful brainstorm
      ↓
copy / paste
      ↓
trusted GitHub-writer AI/client
      ↓
ZASS review
      ↓
human approval
      ↓
COMMIT
      ↓
GitHub Source of Truth
```

The user does not need to begin with ZASS in order to benefit from ZASS later.

---

## L-ONB-004 — Progressive disclosure

**Decision:** Advanced complexity must not block first use.

The following are introduced only when relevant:

- Full ZASS;
- ZASSELECTION;
- ACTION PLAN;
- evidence/experiment discipline;
- review methods;
- ZERO → ARCHITECTURE scoring;
- architecture governance;
- sync/integration details.

The landing page should first help the user **start**, then explain deeper capabilities.

ZASSIMPLE remains appropriate while the user is mainly discovering **what to build**.

Full ZASS becomes appropriate when the project must explain, test, or preserve **why it should be built that way**, especially when decisions become interdependent, evidence becomes necessary, architecture options have meaningful trade-offs, or decision traceability becomes difficult.

---

## L-ONB-005 — Public-project cross-AI handoff

**Decision:** Public-link brainstorming is an official cross-AI workflow.

Canonical flow:

```text
PUBLIC ZASS PROJECT
        ↓
paste public project URL into another AI
        ↓
AI studies current state
        ↓
AI respects existing LOCKED decisions
        ↓
brainstorm / challenge / explore
        ↓
export Markdown handoff
        ↓
trusted writer compares against latest Source of Truth
        ↓
owner review / approval
        ↓
COMMIT
        ↓
GitHub Source of Truth
```

### Handoff artifact

Preferred default filename:

```text
ZASS_HANDOFF.md
```

Recommended structure:

```text
Source project:
[public project URL]

Source revision:
[commit SHA if known]

Existing LOCKED decisions respected:
- ...

New ideas:
- ...

Questions:
- ...

Risks:
- ...

Suggested candidates:
- ...

Possible contradictions:
- ...

Proposed changes:
- ...

Status:
HANDOFF ONLY — NOT SOURCE OF TRUTH
```

A handoff must never silently replace the current authoritative `ZASS.md`, `ZASSIMPLE_EN.md`, or `ZASSIMPLE_MY.md`.

The trusted writer must compare the handoff against the **latest** repository state before applying it. This protects against stale external-AI sessions reintroducing old state or overriding newer LOCKED decisions.

### Copy-ready public-link prompt

```text
Read this public ZASS project first:

[PROJECT URL]

Treat the repository as the Source of Truth.
Respect all existing LOCKED decisions.

Continue brainstorming with me naturally.
Challenge assumptions and surface useful ideas, questions,
risks and alternatives, but do not silently change LOCKED decisions.

At the end of this session, export a Markdown handoff containing
the useful findings and proposed changes.

The handoff is NOT the Source of Truth.
It will be reviewed by the project's trusted writer before commit.
```

For **Full ZASS**, a returned handoff can enter:

```text
handoff
→ ZASS!!
→ owner review
→ PROCEED
→ COMMIT
```

For **ZASSIMPLE**, keep ZASSIMPLE semantics. Do not import Full-ZASS batch `PROCEED`; use ZASSIMPLE `PROCEED/LOCK` for the currently surfaced clear decision and `SAVE` for persistence. Legacy `LOCK DECISION` / `COMMIT` remain compatibility aliases.

---

## L-CLI-001 — Historical npm default — SUPERSEDED

**Status:** SUPERSEDED by L-CLI-002 on 2026-10-07.

The earlier npm-bootstrap lock used:

```text
ZASSIMPLE default
English default
no method-selection question
```

That default applied only to the planned npm onboarding path. It no longer governs `npm create zass`.

This supersession does **not** change ZASS SYSTEM routing: ZASSPILL remains DUMP, ZASSELECTION remains DECIDE, and ZASSIMPLE remains the default lightweight DESIGN path.

## L-CLI-002 — Explicit npm method/language bootstrap

**Decision:** The CLI remains a first-class official onboarding path, but it must not silently select the user's ZASS method.

Canonical target:

```bash
npm create zass@latest my-project
```

Interactive bootstrap asks the user to choose explicitly from:

- ZASSPILL;
- ZASSELECTION;
- ZASSIMPLE;
- Full ZASS.

It then asks for:

- English; or
- Bahasa Melayu.

Automation bypasses prompts using explicit flags:

```bash
npm create zass@latest my-project -- --method zasspill --lang en
npm create zass@latest my-project -- --method zasselection --lang my
npm create zass@latest my-project -- --method zassimple --lang en
npm create zass@latest my-project -- --method zass --lang my
```

Non-interactive bootstrap must not guess a missing method or language.

The complete locked behavioral contract is:

- [`ZASS_NPM_BOOTSTRAP_CLI_V01.md`](ZASS_NPM_BOOTSTRAP_CLI_V01.md)

Implementation receipt: [`ZASS_NPM_BOOTSTRAP_CLI_V01.md`](ZASS_NPM_BOOTSTRAP_CLI_V01.md) — implemented locally as private `create-zass@0.1.0`; npm publication not yet performed.

The bootstrap remains local-first, create-new-only, and free of implicit Git/GitHub/CrossAI side effects.

---


## L-CLI-002 — Shared Project Bootstrap Core

**Decision:** The future npm bootstrap CLI and AISYNC Create Project flow must converge on one shared ZASS Project Bootstrap Core rather than maintain separate project-template semantics.

See [`ZASS_PROJECT_BOOTSTRAP_CORE_DIRECTION.md`](ZASS_PROJECT_BOOTSTRAP_CORE_DIRECTION.md).

The shared core owns project-file generation, initial metadata, and validation. AISYNC owns repository-creation UX/integration and project registration. GitHub remains the canonical Source of Truth for each Git-backed project.

This is a **future product direction**, not an active Gate 6 task. Repository creation requires explicit owner confirmation and must never occur silently from merely entering DESIGN.

---

# Landing / README order

The README implementation should follow this order unless the owner explicitly changes it:

1. Pain / value proposition
2. Simple visual mental model
3. **Start ZASS Your Way** — the four onboarding paths
4. 2-minute practical demo
5. Complete example
6. How ZASS works
7. When ZASSIMPLE becomes too small
8. Full ZASS
9. ZASSELECTION
10. Advanced/reference material

Suggested section:

```text
START ZASS YOUR WAY

① JUST BRAINSTORM
   Think anywhere. Bring the useful parts back later.

② PUBLIC LINK
   Give any AI your public ZASS project URL.

③ CLI
   Start a new project instantly.

④ FILE
   Bring ZASSIMPLE_EN.md to your AI.
```

**LOCKED presentation order:** Ad-hoc brainstorm → Public project link → CLI → Manual file.

This ordering is a landing-page presentation decision. It does not change the validity or authority rules of any onboarding path.

All four paths converge on:

```text
CLI ───────────────┐
Manual file ───────┤
Public project ────┤
Ad-hoc brainstorm ─┘
         ↓
   ZASS project state
         ↓
 Human-approved decisions
         ↓
    trusted writer
         ↓
       COMMIT
         ↓
 GitHub Source of Truth
```

---

# Generated project README baseline

The CLI-generated project README should stay intentionally short.

Minimum concepts:

1. Give `ZASSIMPLE_EN.md` to an AI.
2. Talk normally.
3. Use `ZASS` when you want the discussion organized.
4. Use `LOCK DECISION` when a clear decision should become authoritative.
5. Use `COMMIT` when approved project state should be persisted.
6. Give the same project state to another AI and continue without retelling the project.

Advanced methodology belongs in the main ZASS repository/documentation, not in the generated project's first screen.

---

# 2-minute demo baseline

The primary demo should show the benefit rather than teach framework theory.

Suggested flow:

### 0:00–0:20 — raw idea

> "Cucumber-ginger juice from rejected cucumbers."

### 0:20–0:55 — organize

User intentionally says:

```text
ZASS
```

Show the AI organizing useful state such as RAW IDEA, WHY, GOALS, QUESTIONS, and RISKS.

### 0:55–1:20 — human decision

Answer a few questions and explicitly lock a clear decision.

### 1:20–1:45 — cross-AI continuity

Move the current project state to another AI and say:

```text
Continue this project.
```

Demonstrate that the project does not need to be retold.

### 1:45–2:00 — architecture direction

Show `DRAFT ARCH`, then briefly show the final confirmation path:

```text
BUILD ARCHITECTURE
        ↓
YA, CONFIRM ARCHITECTURE
```

Do not portray architecture as automatically confirmed merely because another AI read the file.

---

# Security and state integrity

The four onboarding paths must preserve these invariants:

- GitHub is the Source of Truth for a Git-backed project.
- External AI output is proposal material until reviewed.
- LOCKED decisions cannot be changed silently.
- A stale handoff cannot overwrite newer authoritative state.
- App/vendor names are not architecture dependencies.
- Secrets and sensitive personal data should not be committed into tracked ZASS Markdown.
- Manual copy/paste is a valid fallback, not a workflow failure.

---


---

## L-DOC-001 — Root README is the landing page; long-form material moves to Wiki

**Decision:** The root `README.md` becomes a lightweight, problem-first, onboarding-first landing page.

The previous long-form README material and detailed infographics are retained as reference material in the GitHub Wiki rather than competing with first-use onboarding.

The root README should prioritize:

1. the user pain / value proposition;
2. the simple ZASS mental model;
3. the four official onboarding paths, presented as **Just Brainstorm → Public Project → CLI → File**;
4. a short practical demo;
5. the complete example;
6. links into Wiki/reference material for deeper concepts.

Detailed framework explanation, extended command/reference material, long-form method guidance, and detailed infographics belong in the Wiki/reference layer.

**Implementation note:** this decision is LOCKED now. The actual Wiki migration and root README rewrite are separate implementation work and must not be claimed complete until they are actually performed.

## L-PROD-001 — Methodology feature freeze during productization

**Decision:** Core ZASS methodology is temporarily feature-frozen.

Do not add new methods, command families, ledgers, or governance layers unless a critical defect or real field evidence justifies the change.

Locked focus order:

```text
Consistency
→ Validator
→ Automation
→ Real-world evidence
```

Presentation fixes, consistency fixes, validator implementation, automation, and evidence gathering may continue during the freeze.

---

## L-PROCEED-001 — PROCEED approves an exact proposal set

**Decision:** In Full ZASS, `PROCEED` is not a blank approval of everything recently discussed.

Before offering `PROCEED`, AI must show:

```text
PROPOSED FOR PROCEED
- [explicit item]
- [explicit item]
```

`PROCEED` approves exactly that set. Unlisted suggestions are not approved.

If the set changes, conflicts, or becomes ambiguous, AI must show the revised set and wait for a new `PROCEED`.

A listed proposed LOCK may become LOCKED through PROCEED. PROCEED never commits or pushes.

---

## L-VALID-001 — One validation engine

**Decision:** Future local validation and GitHub CI must share one validation engine.

Target architecture:

```text
zass check
    ├── local CLI
    └── GitHub Action
```

Do not maintain a separate set of validation rules directly inside GitHub Actions if the same rules belong in `zass check`.

The placeholder Hello-World workflow is removed now. A real workflow should be added when it can call the shared validator.

---

## L-DOC-002 — Slim Full ZASS state without fragmenting project authority

**Decision:** Full `ZASS.md` should evolve toward project operating rules + project state, while long manuals, prompt libraries, review-method explanations, mobile instructions, and extended reference material move to Wiki/docs.

This does **not** authorize splitting normal project state into many mandatory files. The portable single project ZASS file remains the default unless scale-out evidence justifies otherwise.

---

## L-LICENSE-001 — MIT License

**Decision:** The repository uses the **MIT License**.

The owner explicitly selected MIT on 2026-09-30. The root `LICENSE` file is authoritative for reuse terms. This licensing decision does not change ZASS method semantics.

---

## Locked productization roadmap

**P0 — consistency / cleanup**
- remove the placeholder `.github/workflows/blank.yml`;
- align the teaching fixture with current Full ZASS semantics/version;
- make CLI specification-vs-release status explicit;
- tighten PROCEED semantics;
- keep license selection open for explicit owner choice.

**P1 — implementation layer**
- slim long-form Full-ZASS reference material into Wiki/docs without fragmenting project state;
- specify `zass check`;
- build the `zass check` MVP;
- add a GitHub Action that runs the same validator.

**P2 — field evidence**
- use ZASS on multiple real projects;
- collect evidence on context repetition, decision drift, repeated rejected ideas, hidden assumptions, AI corrections, and time-to-decision;
- publish case studies only from documented real usage.

---

# Decision status

The following are LOCKED as of 2026-09-30:

- `L-ONB-001` — Problem-first onboarding
- `L-ONB-002` — GitHub is the Source of Truth; trusted writer persists
- `L-ONB-003` — Four official onboarding paths
- `L-ONB-004` — Progressive disclosure
- `L-ONB-005` — Public-project cross-AI handoff
- `L-CLI-001` — CLI is an official onboarding mechanism with minimal ZASSIMPLE default
- `L-DOC-001` — Root README is the lightweight landing page; long-form README content and detailed infographics move to GitHub Wiki/reference material
- `L-PROD-001` — Methodology feature freeze during productization
- `L-PROCEED-001` — PROCEED approves only the explicitly listed proposal set
- `L-VALID-001` — Local CLI and GitHub Action share one validation engine
- `L-DOC-002` — Slim Full ZASS reference material without fragmenting project authority
- `L-LICENSE-001` — Repository license is MIT

This document is now the authoritative onboarding/productization baseline for the next README and CLI implementation.
