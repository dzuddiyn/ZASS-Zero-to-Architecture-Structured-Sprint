# ZASS Evolution Candidates

**Status:** CANDIDATE REGISTER — NOT LOCKED  
**Purpose:** Keep potentially useful ZASS evolution ideas without changing the current method prematurely.  
**Authority:** This file is an idea register only. It does not override `ZASS.md`, `ZASSIMPLE.md`, `ZASSELECTION.md`, or any LOCKED decision.

> New ideas about improving ZASS should be recorded here first unless the project owner explicitly decides otherwise.

## Rules

- Adding an item here does **not** mean the idea is approved.
- `COMMIT` records the candidate in Git history; it does **not** make the candidate `LOCKED`.
- Do not bump the ZASS version merely because a candidate is added here.
- Do not update `CHANGELOG.md` unless an actual method/documentation change is implemented.
- Prefer evidence from real ZASS use cases before promoting a candidate into the method.
- Avoid adding ceremony unless it clearly reduces repeated thinking, decision drift, lost assumptions, or traceability problems.
- When a candidate is accepted, rejected, superseded, or deferred, update its status here and link the resulting ZASS decision or commit when relevant.

## Candidate Statuses

- `CANDIDATE` — worth retaining for future consideration.
- `TEST` — should be evaluated through a real project or controlled example.
- `TEST WHEN NEEDED` — useful only when a triggering complexity appears.
- `PARKED` — retained but not currently worth testing.
- `DEFERRED` — valid idea, intentionally postponed.
- `SCALE-OUT CANDIDATE` — relevant only when project/team size exceeds the current single-file model.
- `OUT OF CURRENT SCOPE` — not part of the present Zero-to-Architecture purpose.
- `ACCEPTED` — approved for implementation, but implementation may still be pending.
- `REJECTED` — explicitly not adopted.
- `SUPERSEDED` — replaced by a newer candidate or decision.

---

## CR-001 — First-class Critical Assumption Ledger

**Status:** TEST  
**Source:** External Copilot review  
**Problem observed:** ZASS already records assumptions inside experiments and architecture readiness, but important assumptions that have not yet become experiments may remain implicit between questions, risks, and decisions.

### Candidate shape

Use a dedicated assumption identifier that does not conflict with ACTION PLAN `A-xxx` action IDs.

Example:

```text
AS-001 | OPEN

Assumption:
Users are willing to perform manual backup.

Why it matters:
If false, a local-only architecture may create unacceptable data-loss risk.

Confidence:
LOW

Validation:
E-003

Affected decisions:
D-002, D-003
```

### Why test it

Potential benefit:

- makes hidden assumptions visible;
- improves traceability between assumptions, experiments, and decisions;
- may reduce architecture decisions based on untested beliefs.

Potential cost:

- adds another first-class ID and ledger;
- may duplicate questions or experiment hypotheses;
- may increase ceremony for small projects.

### Test question

> Does a first-class `AS-xxx` assumption record prevent meaningful assumptions from being lost better than the current ZASS structure?

Do not add this to the core template until real usage shows clear value.

---

## CR-002 — Decision Dependency Metadata

**Status:** TEST WHEN NEEDED  
**Source:** External Copilot review

Candidate optional fields:

```text
Depends On:
Affected By:
```

Possible use:

- decisions with many upstream dependencies;
- architecture decisions where changing one LOCKED decision has a visible impact on others;
- larger projects where decision traceability becomes hard to follow manually.

Do not require these fields by default. Test only when a real decision graph becomes difficult to understand.

---

## CR-003 — Decision Type

**Status:** PARKED  
**Source:** External Copilot review

Candidate categories:

```text
STRATEGIC
TACTICAL
OPERATIONAL
```

Potential value:

- distinguishes high-impact architecture/business choices from routine decisions;
- may help review or filtering in larger projects.

Concern:

- may add classification work without improving the actual decision;
- boundaries between categories can be subjective.

Keep parked until a real use case shows a clear need.

---

## CR-004 — Stakeholder Ledger

**Status:** PARKED  
**Source:** External Copilot review

Possible model:

```text
S-001 — Customer
S-002 — Owner
S-003 — Supplier
```

Current ZASS already considers stakeholders through architecture readiness and stakeholder/conflict review lenses.

A dedicated ledger should only be added if repeated real projects show that stakeholder identity, responsibility, or conflicts are being lost.

---

## CR-005 — Metrics Ledger

**Status:** DEFERRED  
**Source:** External Copilot review

Possible examples:

```text
M-001 — Weekly Sales
M-002 — Conversion Rate
M-003 — Gross Margin
```

Current ZASS already supports measurable experiment signals through pass/fail criteria, observed results, and experiment evidence.

A general metrics ledger could push ZASS beyond Zero-to-Architecture into product operations. Reconsider only if architecture decisions repeatedly depend on persistent project-level metrics that do not fit experiments.

---

## CR-006 — Scale-out Multi-file Structure

**Status:** SCALE-OUT CANDIDATE  
**Source:** External Copilot review

Possible future structure:

```text
decisions/
risks/
experiments/
architecture/
```

Potential trigger:

- very large decision count;
- multiple contributors;
- difficult file navigation;
- complex decision dependency graph.

Current default remains a portable single project ZASS file because that simplicity is valuable for solo builders and cross-AI handoff.

Do not fragment the default workflow merely to prepare for hypothetical scale.

---

## CR-007 — Operation / Post-mortem Lifecycle

**Status:** OUT OF CURRENT SCOPE  
**Source:** External Copilot review

Proposed extended lifecycle:

```text
Zero
→ Validation
→ Decision
→ Architecture
→ Operation
→ Learning
```

This is conceptually useful, but it changes the scope from **Zero-to-Architecture** toward a complete product/operations lifecycle framework.

For now:

- ZASS remains focused on discovery, evidence, decisions, and architecture.
- ACTION PLAN handles execution.
- Operational/post-mortem methodology should not be added without a separate scope decision.

---

## Existing Capability Notes

The external review also suggested several capabilities that already exist in current ZASS-related files:

### Priority

ACTION PLAN already uses:

```text
P0
P1
P2
P3
```

Therefore, priority should not be duplicated across every ZASS question, risk, or decision unless real evidence shows a need.

### Assumptions inside experiments

Current ZASS experiment discipline already includes:

```text
Assumption
Pass/fail signal
Observed result
Learning
Impact
```

CR-001 is specifically about assumptions that exist **before** or **outside** a defined experiment.

### Stakeholder awareness

Current ZASS includes stakeholder-oriented architecture readiness and optional stakeholder/conflict review lenses.

CR-004 concerns whether a persistent first-class stakeholder ledger is ever necessary.

---

## Evaluation Principle

When considering any future ZASS feature, ask:

> Does this reduce repeated thinking, decision drift, hidden assumptions, or lost traceability — or does it merely add framework ceremony?

The core differentiation to protect is:

> **Externalized decision memory + human-controlled LOCKED decisions.**

---

## Register Policy

**Current productization freeze:** core methodology is feature-frozen while consistency, validator implementation, automation, and real-world evidence take priority. New methodology candidates may still be recorded, but they should not be promoted without a critical defect or field evidence.

Use this file as the default holding area for future ZASS evolution ideas.

New ideas may be appended as `CR-xxx` entries.

They remain candidates until the project owner explicitly approves a change through the appropriate ZASS decision process.


---

## CR-008 — One Writer, Many Brainstormers

**Status:** ACCEPTED  
**Source:** External Meta AI review  
**Scope:** Cross-AI workflow, onboarding mental model, GitHub persistence

### Core idea

Use one **write-capable main client** to persist approved ZASS state, while other AI tools can be used freely for exploration without needing direct GitHub write access.

Simple user mental model:

```text
Main = save
Others = explore
```

More precise architecture wording:

```text
GitHub repository = Source of Truth

Write-capable Main AI / client
        │
        ├── reads latest project state
        ├── reviews proposed changes
        ├── applies owner-approved changes
        └── COMMIT → GitHub

Other AI tools
        │
        ├── receive latest ZASS/ZASSIMPLE file or relevant context
        ├── brainstorm / challenge / counter-review
        └── return useful ideas or structured proposed deltas
                         │
                         └── back to Main for review / approval / persistence
```

The **Main App is not the Source of Truth**. GitHub remains the Source of Truth. The Main App is a trusted writer or gateway.

### Candidate onboarding phrase

> **One AI saves. Any AI can think.**

Alternative:

> **Main = persist. Others = explore.**

This may be easier for new users than requiring every AI platform to support GitHub write access.

### Candidate workflow

```text
1. Main reads latest project state from GitHub.
2. User works normally in Main or another AI.
3. For counter-brainstorming, give another AI the latest ZASS/ZASSIMPLE file.
4. Other AI returns ideas, questions, risks, contradictions, or proposed changes.
5. Bring the useful result back to Main.
6. Run ZASS / review the delta.
7. Owner approves through the method's normal approval semantics.
8. COMMIT persists the approved change to GitHub.
```

For full ZASS, this can look like:

```text
Other AI idea
→ Main
→ ZASS!!
→ owner review
→ PROCEED
→ COMMIT
→ GitHub Source of Truth
```

For ZASSIMPLE, approval must continue to follow ZASSIMPLE semantics rather than importing full-ZASS `PROCEED`.

### Why this candidate matters

Potential benefits:

- removes the requirement that every AI must have GitHub integration;
- keeps cross-AI brainstorming portable;
- gives solo builders one simple persistence rule;
- reduces platform-specific onboarding complexity;
- preserves one authoritative project state;
- makes copy/paste a valid fallback rather than a failure mode.

### Capability classes instead of hard-coded app promises

Do not make the core method depend on a permanent list of app names.

Classify tools by capability:

#### A. WRITE-CAPABLE

Can read the current project and write approved changes back to the GitHub Source of Truth.

#### B. READ / BRAINSTORM

Can consume the current Markdown state and return analysis or candidate changes, but does not need repository write access.

#### C. MANUAL BRIDGE

No direct repository integration is required. The user can move the latest Markdown file or structured output between tools manually.

App-specific capability tables may exist in documentation, but they should be treated as **time-sensitive implementation guidance**, not core ZASS semantics.

### Current platform-reality note

External reviews may overstate or understate what individual AI apps can do. Product capabilities, plan requirements, mobile surfaces, permissions, and write support change frequently.

Therefore:

- verify app capabilities from current official documentation before publishing a compatibility claim;
- prefer capability-based wording in the main README;
- keep any named-app matrix in a separate, refreshable document;
- never make ZASS correctness depend on a particular vendor integration.

### Candidate README positioning

Instead of:

> Choose an AI platform that supports ZASS.

Prefer:

> Use any AI to think. Use one trusted writer to save approved decisions.

Then show:

```text
Claude / Gemini / Meta / ChatGPT / Other AI
                 ↓
        ideas / challenges / review
                 ↓
         trusted write-capable client
                 ↓
              GitHub
          Source of Truth
```

Names are illustrative only; the architecture is capability-based.

### Validation experiment

Test with one real project:

1. Maintain authoritative state in GitHub.
2. Use one write-capable Main client.
3. Use at least two other AI tools with no assumed write access.
4. Give each the latest project Markdown.
5. Return selected findings to Main.
6. Persist only owner-approved changes.
7. Check whether any context, LOCKED decision, provenance, or intent is lost.

### Pass signals

- user does not need every AI to integrate with GitHub;
- switching AI does not require retelling the project;
- only one authoritative project state exists;
- unapproved external-AI suggestions never silently enter the Source of Truth;
- manual copy/paste remains usable when integrations fail;
- the workflow remains understandable to a solo builder without learning connector architecture.

### Failure signals

- users confuse the Main App with the Source of Truth;
- multiple AI tools create competing authoritative copies;
- stale files cause decisions to regress;
- copy/paste strips provenance or decision status;
- users assume named app capabilities that are no longer true.

### Relationship to existing candidates

CR-008 complements the onboarding direction in `docs/ONBOARDING_PRODUCT_DIRECTION.md`.

It also aligns with the broader portability principle:

> **Do not require every AI to understand the repository or have write access.**

This candidate has been promoted into the LOCKED onboarding baseline. See `docs/ONBOARDING_PRODUCT_DIRECTION.md`, especially `L-ONB-002`, `L-ONB-003`, and `L-ONB-005`. Core ZASS and ZASSIMPLE decision semantics remain unchanged.


---

## CR-009 — Suggestion / Decision / Git Change Separation

**Status:** ACCEPTED — LOCKED PHILOSOPHY  
**Source:** External Copilot UX review + Project Owner decision  
**Decision date:** 2026-09-30

Locked principle:

```text
AI suggestion ≠ Owner decision ≠ Git change
```

This is a semantic invariant, not a mandatory three-box UI. Current ZASS already follows the same authority separation; v0.3.3 makes the principle explicit.

- AI suggestions are candidates.
- The owner decides and authorizes LOCKED state.
- Git state changes only after an actual successful save/commit.
- AI must never claim that a later layer occurred when it did not.

No additional field or mandatory response block is required.

---

## CR-010 — `zass check / status / diff` Validator

**Status:** ACCEPTED — IMPLEMENTATION PRIORITY  
**Source:** External Copilot UX/automation review  
**Decision date:** 2026-09-30

Accepted direction for the future CLI:

```bash
zass check
zass status
zass diff
```

Potential MVP checks:

- duplicate or malformed IDs;
- broken references;
- unauthorized changes to LOCKED decisions;
- architecture references to invalid or superseded decisions;
- stale ZASS ↔ ACTION_PLAN readiness snapshots;
- unresolved critical placeholders;
- likely secrets or sensitive values committed by mistake.

The CLI onboarding baseline remains minimal. Validator commands are follow-up implementation work, not onboarding prerequisites.

---

## CR-011 — Machine-readable `.zass/` Layer

**Status:** ACCEPTED — EXPLORATION / IMPLEMENTATION CANDIDATE  
**Source:** External Copilot UX/automation review  
**Decision date:** 2026-09-30

Candidate machine-only layer:

```text
.zass/
├── config.yml
└── schema.yml
```

Purpose:

- give CLI / GitHub Actions a stable machine-readable contract;
- keep human interaction centered on Markdown;
- avoid forcing users to read automation configuration during onboarding.

Example candidate fields:

```yaml
version: 1
language: en
approval_mode: explicit
source_of_truth: github
```

Do not make `.zass/` mandatory until the validator/automation design proves that it adds value.

---

## CR-012 — Architecture Readiness ≠ Evidence Confidence

**Status:** ACCEPTED CONCEPT — TEST PASS  
**Source:** External Copilot review + in-repo fixture test  
**Test date:** 2026-09-30

### Test

The existing `examples/01-small-farm-planner/ZASS.md` fixture reports:

```text
ZERO → ARCHITECTURE: 100% — ARCHITECTURE CONFIRMED
```

while explicitly stating that no empirical experiment result is invented, with offline, backup-recovery, and real-user usability experiments still planned.

### Result

**PASS.** The fixture demonstrates that:

```text
100% Architecture Readiness
≠
100% empirical validation
```

Therefore ZASS v0.3.3 adds **Evidence Confidence** as a separate qualitative axis:

```text
UNVALIDATED
LOW
MEDIUM
HIGH
```

No second percentage is introduced. The existing ZERO → ARCHITECTURE formula remains unchanged.

### Locked display rule — v0.3.5

Evidence Confidence must be displayed when:

1. a real/current `ZERO → ARCHITECTURE` assessment is shown;
2. `DRAFT ARCH` readiness is evaluated;
3. `BUILD ARCHITECTURE` is run; or
4. architecture is `CONFIRMED` while validation/experiments remain open.

Static documentation examples do not trigger this requirement. When no observed empirical evidence exists for the relevant critical assumptions, report `UNVALIDATED`; never invent evidence.

---

## CR-013 — One Primary Action Per Response

**Status:** REJECTED  
**Source:** External Copilot UX review  
**Decision date:** 2026-09-30

Reason:

- existing ZASS already provides contextual next-action guidance;
- a new mandatory UX rule is unnecessary;
- the owner prefers to simplify the command surface directly instead.

Related method change in v0.3.3:

- remove the Full-ZASS `PARK` command;
- keep `PROCEED`, `PIVOT`, and `COMMIT`;
- retain `PARKED` as an internal/history state.

---

## CR-014 — Real-world Case Studies

**Status:** ACCEPTED — FIELD EVIDENCE PRIORITY  
**Source:** External Copilot review  
**Decision date:** 2026-09-30

Teaching fixtures show mechanics, not proven real-world value.

Future ZASS evaluation should use several real projects and observe useful signals such as:

- how often project context must be retold to another AI;
- repeated debates or resurfacing of already rejected ideas;
- hidden assumptions discovered before implementation;
- unauthorized or unexplained decision drift;
- time from raw idea to an owner-approved decision;
- time for another AI or maintainer to understand the current project state;
- factual corrections required after AI-generated claims.

Case-study evidence should guide future method changes before new ceremony is added.
