# ZASS SYSTEM Gate 3 — Project Workspace + Contextual Cards Acceptance

**Status:** CLOSED / PASS — IMPLEMENTED, DEPLOYED, OWNER-VISIBLE VERIFIED  
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

## 5. Implementation + deployment evidence

AISYNC Gate 3 is now implemented and production-deployed.

Canonical implementation evidence:
- AISYNC PR #18 merged as `3d006eb4bde64ab9cca9878c0ca4e9c69db4dbf9`;
- project detail now opens on **Workspace** by default;
- explicit **Workspace / Review / History** controls provide progressive disclosure;
- Workspace shows a compact **Project Pulse** and **Continue naturally → ASC Front Door**;
- contextual cards are selected only from explicit factual indexed state;
- `STALE` project-index state suppresses Current Task / decision-currentness claims and shows a refresh warning;
- Review contains commit-linked CI, current-state evidence, Action Plan, and ZASS/project records;
- History contains the factual audit trail separately;
- internal `AP-xxx` / `D-xxx` IDs are absent from default Workspace;
- no write operation, validator rule logic, method-semantic inference, or automatic Full-ZASS migration was added;
- all **26** AISYNC repository `test-*.mjs` files PASS from the T-017-inclusive baseline;
- `git diff --check` PASS.

Production deployment evidence:
- protected production Apps Script deployment is **version 23**, `Gate3-project-workspace-contextual-cards`;
- v23 was constructed from immutable Gate 2 production v21 plus exactly `Dashboard.html` and `DashboardClient.html`;
- independent post-deploy pull verified both files match Gate 3 merge `3d006eb4...`;
- every other production file in v23 matches production v21;
- the separate current development HEAD containing T-017 was restored after release and was not promoted as part of Gate 3;
- AISYNC deployment receipt PR #19 merged as `ca2b690c95f896fc6a2e7c2a4cb80a178fc6a9a8`.

Owner-visible production verification is complete.

Observed on protected production Apps Script v23:
- the AISYNC project opens directly on **Workspace**;
- **Project Pulse** is compact and shows the indexed current stage, next stage, factual progress state, index freshness, and latest update;
- index freshness is visibly **STALE** and the contextual area correctly shows **Project state needs refresh** instead of presenting a stale task or decision as current;
- **Continue naturally** and the ASC Front Door action are visible without implying persistence;
- **Review** exposes commit-linked ZASS CI, current-state summaries, Action Plan, and ZASS/project records on demand;
- **History** exposes the factual audit trail separately;
- the default Workspace no longer exposes the previous permanent technical wall.

The Review surface also displayed a factual `READ_ERROR / GITHUB_READ_FAILED` for the commit-linked CI read tied to the stale indexed commit. This is truthful error presentation and does not invalidate Gate 3.

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

All Gate 3 closure items are satisfied.

Owner-visible production proof — **PASS**:
- Workspace default: PASS;
- compact Project Pulse: PASS;
- STALE-state suppression of current-action claims: PASS;
- Review progressive disclosure: PASS;
- History progressive disclosure: PASS;
- default Workspace no longer shows the full technical wall: PASS.

> **GATE 3 = CLOSED / PASS**

No further Gate 3 implementation work is required unless a future regression is reported against this acceptance contract.

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
