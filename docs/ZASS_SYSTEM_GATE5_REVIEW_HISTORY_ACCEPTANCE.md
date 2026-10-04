# ZASS SYSTEM Gate 5 — Review / History Projection Acceptance

**Status:** CLOSED / PASS — IMPLEMENTED, DEPLOYED, OWNER-VISIBLE VERIFIED  
**Date:** 2026-10-04  
**System baseline:** ZASS SYSTEM v0.2.0  
**Scope:** Product Gate 5 only — read-only review, lineage, commit/version, validator, and audit-history projection

> Gate 5 makes advanced project state inspectable on demand without turning the default Workspace back into a technical wall.

## 1. Product intent

The user-facing separation is:

```text
Workspace
= work normally

Review
= inspect current structured/project evidence

History
= inspect what happened over time
```

Primary rule:

> **Advanced evidence must be reviewable without becoming default working noise.**

## 2. Authority boundary

- GitHub-backed project artifacts and Git lineage remain canonical where applicable.
- ASC DB / Sheets remains an operational/index projection plus factual receipt/history store.
- Review and History are **read-only projections**.
- Gate 5 must not introduce a second validator, second decision ledger, second selection authority, or editable mirror of canonical project artifacts.
- Gate 5 may group, filter, deduplicate, sort, and link explicit indexed facts for presentation.
- Missing evidence remains missing; the UI must not synthesize decisions, design state, selection matrices, lineage, commits, or versions.
- Gates 1–4 behavior remains unchanged.

## 3. Minimum Gate 5 PASS contract

### G5-01 — Review remains on-demand

The default project surface remains **Workspace**.

Review and History appear only after explicit user selection.

No Gate 5 implementation may re-expand Workspace into the old technical wall.

### G5-02 — Decisions projection

Review exposes indexed decision records separately from generic records when explicit decision records exist.

Minimum useful fields:
- decision ID;
- status;
- summary;
- source artifact;
- source commit;
- canonical source link when supplied.

No decision state may be inferred from ordinary prose.

### G5-03 — Design / architecture projection

Review exposes explicit design/architecture records separately when indexed.

Accepted record categories may include explicit record types such as:
- `design`;
- `architecture`;
- `design_record`;
- equivalent explicit indexed type.

If none exist, show a neutral “No design/architecture records indexed” state rather than infer one from decision text.

### G5-04 — Selection-state projection

Review supports explicit ZASSELECTION/selection-state records when indexed.

Examples include explicit record types such as:
- `selection`;
- `selection_matrix`;
- `matrix`;
- equivalent explicit indexed selection type.

If no selection-state record exists for the project, show **No selection state indexed**.

Gate 5 does not create or persist a selection matrix merely to populate this surface.

### G5-05 — Lineage and source traceability

Review exposes lineage and source metadata in a human-reviewable form:

- record lineage from explicit `lineage_json`;
- Action Plan source lineage from explicit `source_lineage`;
- source artifact;
- source commit;
- canonical URL where supplied.

A valid lineage JSON array may be rendered as a readable list.

Malformed/unreadable lineage must remain visibly unreadable/raw; do not repair or infer it silently.

### G5-06 — Validator / CI detail

Review keeps factual commit-linked ZASS CI detail available:

- repository;
- exact source commit;
- status;
- workflow/job;
- conclusion;
- run ID;
- fetched time;
- GitHub Actions link when factual.

`NOT_FOUND` and `READ_ERROR` remain non-PASS states.

ASC must not reimplement validator rule semantics.

### G5-07 — Commit / version trail

Review exposes a **Commit / version trail** built only from explicit commit identifiers already present in:

- project index metadata;
- RECORDS;
- ACTION_PLAN;
- HISTORY.

Requirements:
- deduplicate identical explicit commit IDs for presentation;
- retain source/provenance labels;
- when `github_repo` is available and the commit token is a valid Git SHA-like hex token, provide a GitHub commit link;
- do not invent semantic version numbers;
- absence of commit/version data is shown neutrally.

This trail is an indexed audit projection, not a replacement for Git history.

### G5-08 — History audit projection

History exposes factual audit events separately from Review.

Minimum fields:
- timestamp;
- operation;
- destination;
- status;
- affected resource;
- commit/record identifier;
- failure reason.

When a receipt exists, the UI should prioritize a compact factual receipt summary:
- adapter outcome;
- verified;
- write performed;
- commit/record identifier when attributable.

Raw receipt JSON may remain behind a details control.

Failures must remain visible and must not be collapsed into successful history.

### G5-09 — Freshness / projection caveat remains visible

Review must clearly display current index/source freshness.

A stale operational/index projection must not be presented as current canonical truth.

### G5-10 — Read-only / no authority mutation

Review and History controls:
- do not write;
- do not lock decisions;
- do not modify selection state;
- do not trigger SAVE;
- do not mutate GitHub/Sheets/project state.

Any future action controls belong to their own protected flows.

## 4. Current implementation baseline

AISYNC already provides partial Gate 5 evidence:

- Workspace / Review / History progressive disclosure is live from Gate 3;
- Review already displays commit-linked ZASS CI;
- Review already displays current-state summaries, Action Plan, and raw project RECORDS;
- History already displays factual HISTORY rows and raw receipt JSON on demand;
- Gate 4 has proven factual SAVE receipts and STALE projection behavior.

Current product gaps:
- decisions/design/selection are not projected as distinct review categories;
- lineage is mostly raw table data;
- explicit commit/version evidence is scattered across project/record/action/history rows rather than summarized as a review trail;
- History raw receipt JSON is technically available but not yet optimized as a compact audit summary.

## 5. Required production shape

Minimum accepted structure:

```text
[ Workspace ] [ Review ] [ History ]

Review
  Review Overview / source freshness
  Validator / CI
  Decisions
  Design / architecture
  Selection state
  Action Plan
  Lineage / sources
  Commit / version trail
  Raw project records (secondary/details)

History
  Audit events
  Compact factual receipt details
  Raw receipt JSON (secondary/details)
```

The exact visual layout may differ, but the information hierarchy and authority boundary must remain equivalent.

## 6. Selection and design absence behavior

Gate 5 capability is not measured by forcing every project to contain every record type.

For a project with no indexed selection/design records:

```text
Selection state
No selection state indexed.

Design / architecture
No design/architecture records indexed.
```

This is a valid factual state.

Automated fixtures must prove the positive rendering path when those explicit record types are present.

## 7. Implementation + deployment evidence

Gate 5 source implementation is merged and production-deployed.

Canonical AISYNC evidence:
- AISYNC PR #30 merged as `56f3430f6e0718d21e0b8f63e59dfabd325731d3`;
- all **27** repository `test-*.mjs` files PASS;
- `git diff --check` PASS;
- Workspace remains free of Review/History audit sections;
- Review now projects Review overview/freshness, commit-linked CI, Decisions, Design/architecture, Selection state, Action Plan, readable Lineage/sources, Commit/version trail, and raw records behind details;
- History now projects factual audit events, compact receipt truth, visible failures, and raw receipt JSON behind details;
- automated fixtures prove positive decision/design/selection/lineage/commit/history paths and neutral absence behavior;
- no schema migration, writer, validator duplication, or authority mutation was added.

Production deployment evidence:
- protected production Apps Script deployment is **version 27**, `Gate5-review-history-projection`;
- v27 was built from immutable Gate 4 production v26 plus exactly `Dashboard.html` and `DashboardClient.html`;
- independent post-deploy pull verified both files match AISYNC Gate 5 merge `56f3430...`;
- every other production file in v27 matches v26;
- development HEAD was restored after release;
- AISYNC deployment receipt PR #31 merged as `268af5f15db0a1bfb7742c1841887084d13e0111`.

Closure items 1–6 are satisfied.

Final owner-visible production proof is complete:
- Workspace remains compact/default and does not expose Gate 5 audit sections by default;
- Review clearly labels itself as read-only indexed evidence;
- Review overview shows the explicit **STALE** caveat that indexed evidence is not current canonical truth;
- Commit-linked ZASS CI is visible and factually shows **NOT_FOUND** for the stale indexed commit, with explicit wording that this is not a PASS result;
- Decisions are projected separately;
- Design / architecture shows neutral absence: `No design/architecture records indexed.`;
- Selection state shows neutral absence: `No selection state indexed.`;
- Action Plan remains inspectable;
- Lineage / sources renders readable lineage/source evidence;
- Commit / version trail is inspectable with factual commit links;
- History is separate and shows factual audit events with compact receipt truth;
- verified-write receipts show factual commit IDs;
- NO_CHANGE receipts show `Verified: true`, `Write performed: no`, and do not invent a commit;
- raw receipt JSON remains available behind a details control;
- automated fixtures already cover positive design/selection rendering paths absent from the current AISYNC index.

AISYNC final owner-visible closure receipt: PR #32 merged as `81d53f9a04b1b015e6750f9d5df12ee51179ea90`.

The production `NOT_FOUND` CI result is a truthful stale-index read result, not a Gate 5 failure.

> **GATE 5 = CLOSED / PASS**

No further Gate 5 implementation work is required unless a future regression is reported against this acceptance contract.

## 8. Non-blockers

Gate 5 does not require:
- adding fake selection/design records to AISYNC;
- changing the ASC DB schema;
- T-018 completion;
- CR-010 v0.4;
- Z206;
- public beta;
- a new method/system version.

## 9. Stop rule

Do not mark Gate 5 PASS because raw data merely exists somewhere.

The review surface must make the evidence practically inspectable while preserving the Workspace/authority boundaries.
