# ZASS SYSTEM Gate 3 — Project Workspace + Contextual Cards Acceptance

**Status:** LOCKED ACCEPTANCE CONTRACT — IMPLEMENTATION PENDING  
**Date:** 2026-10-04  
**System baseline:** ZASS SYSTEM v0.2.0  
**Scope:** Product Gate 3 only — project workspace, progressive disclosure, contextual cards, and Project Pulse

> Gate 3 turns the already-proven routing/product shell into a usable project workspace. It does not add new method semantics, persistence semantics, or automatic Full-ZASS migration.

## 1. Product intent

The default project experience must stop behaving like a permanent technical dashboard.

The user should see:

```text
project
  ↓
Workspace
  ↓
Project Pulse
  ↓
one useful contextual card / next human action
  ↓
Review or History only when requested
```

Primary rule:

> **Present only the next meaningful human action.**

## 2. Authority boundary

- GitHub-backed project artifacts remain authoritative where applicable.
- ASC DB / Sheets remains an operational/index projection.
- AI-SYNC may project useful views but must not invent lifecycle stage, progress, decisions, or task state.
- Gate 3 is read/projection UX. It does not introduce a new write path.
- Existing Gate 1 validator semantics and Gate 2 routing semantics remain unchanged.
- Gate 4 owns integrated factual SAVE/sync state and controls.
- Full ZASS escalation remains advisory and human-controlled; no automatic migration is authorized.

## 3. Minimum Gate 3 PASS contract

### G3-01 — Workspace is the default project surface

Opening a project lands on a compact **Workspace** view rather than exposing the entire operational/index dataset.

The project workspace must remain usable without reading raw IDs, ledgers, JSON, commit metadata, or full tables.

### G3-02 — Project Pulse

Workspace shows only orientation state supported by factual indexed values:

- current stage;
- next stage;
- factual progress when supplied;
- latest update or equivalent current-state context.

If a value is absent, show a neutral `Not provided`/equivalent rather than infer it.

Gate 4 will later add the integrated factual SAVE/sync state.

### G3-03 — Current Task contextual card

When an explicit current/open Action Plan item exists, Workspace shows one **Current Task** card with:

- action;
- observable pass condition when supplied;
- next task/action label only when factually available.

The user-facing card must not expose `AP-xxx` lineage IDs by default.

Selection of a current task must use deterministic explicit status values from the indexed Action Plan; it must not use AI semantic guessing.

### G3-04 — Ready to Lock support

Workspace supports a **Ready to Lock** card only when the projected source state explicitly marks a decision as ready/proposed for owner confirmation.

The card may show the plain-language decision and reason/summary.

Gate 3 must not perform the lock automatically and must not claim a decision is ready based on arbitrary prose.

If no explicit ready-to-lock state exists, the card stays absent.

### G3-05 — Design Forming support

Workspace supports a **Design Forming** card only from explicit factual design-stage/progress state.

It may show factual progress and counts derived from explicit indexed records.

It must not invent a completeness score.

### G3-06 — Delivered support

Workspace supports a **Delivered** card only when the authoritative/projected lifecycle explicitly indicates a delivered/complete state and required display evidence is present.

It must not show `DELIVERED !!` merely because implementation activity exists.

### G3-07 — Progressive disclosure

Default Workspace must hide advanced/internal detail, including:

- raw ZASS record IDs and lineage JSON;
- full Action Plan table;
- full record table;
- commit-linked validator detail;
- full History/audit trail.

These remain available through explicit **Review** and **History** controls.

### G3-08 — Review projection

**Review** exposes the technical/project evidence needed for inspection without changing state:

- commit-linked ZASS CI;
- progress/current-state summaries;
- Action Plan rows;
- ZASS/record projection;
- relevant source/commit metadata.

Review is read-only for Gate 3.

### G3-09 — History projection

**History** exposes the audit trail separately from the normal Workspace.

History remains factual and read-only.

### G3-10 — Conversational-first continuation

Workspace provides a clear path to continue naturally through the existing ASC front-door/provider-handoff flow.

The web workspace does not need to become its own AI model/chat runtime for Gate 3.

The continuation control must not imply SAVE or persistence.

### G3-11 — No regression to Gates 1–2

Gate 3 must preserve:

- DUMP / DECIDE / DESIGN routing;
- DUMP → ZASSPILL, DECIDE → ZASSELECTION, DESIGN → ZASSIMPLE;
- exact-source Method Gateway receiver guardrail;
- existing project navigation;
- commit-linked CI consumption;
- no-write routing behavior.

## 4. Contextual-card evidence rules

Contextual cards are projections, not new semantic authorities.

### Current Task

Eligible explicit status tokens:

```text
CURRENT
ACTIVE
IN PROGRESS
IN_PROGRESS
OPEN
```

If several rows are eligible, use the first indexed row in source order and expose the rest only in Review.

### Ready to Lock

Eligible only from an explicit decision-status token such as:

```text
READY TO LOCK
READY_TO_LOCK
PROPOSED FOR PROCEED
```

Do not derive this state from `LOCKED`, ordinary prose, or AI confidence.

### Design Forming

Eligible when the explicit lifecycle stage is `DESIGN` and the project has factual progress/design summary data.

No invented denominator or percentage.

### Delivered

Eligible only when explicit lifecycle stage/status is one of:

```text
DELIVERED
DELIVERED !!
COMPLETE
COMPLETED
```

The card is a projection of that explicit state only; Gate 3 does not redefine the method's closure requirements.

## 5. Current implementation gap

Canonical AISYNC production currently opens project detail as a single technical wall containing:

- commit-linked CI;
- progress bar;
- progress summary;
- next action summary;
- next stage summary;
- full Action Plan table;
- full ZASS table;
- full History table.

This proves the data exists but does not satisfy Gate 3 progressive-disclosure UX.

## 6. Required implementation shape

The minimum accepted production structure is:

```text
[ Workspace ] [ Review ] [ History ]

Workspace
  Project Pulse
  conversational continuation action
  zero or one primary contextual card
  optional compact secondary context

Review
  CI
  progress/current-state evidence
  Action Plan
  ZASS/records
  source/index metadata

History
  HISTORY audit trail
```

Internal IDs stay hidden in Workspace but may remain visible in Review/History.

## 7. Production evidence required to close Gate 3

Gate 3 closes only after:

1. source implementation is merged;
2. relevant AISYNC regression tests pass;
3. existing Gate 2 route tests still pass;
4. no new write operation is introduced;
5. production Apps Script deployment contains the Gate 3 workspace patch;
6. owner-visible production proof confirms:
   - project opens on Workspace;
   - Project Pulse is compact;
   - Current Task or other eligible contextual card appears only when supported;
   - Review reveals advanced project state;
   - History reveals the audit trail separately;
   - ordinary Workspace no longer shows the full technical wall.

## 8. Non-blockers

Gate 3 does not require:

- T-017 completion;
- Portable Packet v2;
- integrated SAVE state controls;
- CR-010 v0.4;
- Z206;
- final Full-ZASS escalation thresholds;
- public closed beta.

Those belong to later gates or separate runtime work.

## 9. Stop rule

Do not mark Gate 3 PASS from unit tests alone.

Do not add semantic inference merely to make a contextual card appear.

If the indexed project state is too sparse for a card, absence of that card is correct behavior.
