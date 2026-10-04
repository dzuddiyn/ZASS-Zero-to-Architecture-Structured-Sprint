# ZASS SYSTEM Gate 4 — Factual SAVE / Sync Acceptance

**Status:** LOCKED ACCEPTANCE CONTRACT — IMPLEMENTATION PENDING  
**Date:** 2026-10-04  
**System baseline:** ZASS SYSTEM v0.2.0  
**Scope:** Product Gate 4 only — factual save/sync state and receipt UX

> Gate 4 does not invent persistence. It integrates the already-proven AISYNC T-016 production write boundary into a truthful product experience.

## 1. Product intent

The user must always be able to distinguish:

```text
UNSAVED
SYNCING
SAVED
FAILED
STALE
```

These are product projection states, not new method states.

Primary rule:

> **Never show SAVED until authoritative persistence has been verified and its receipt/history state is factual.**

## 2. Authority boundary

- GitHub-backed project artifacts remain authoritative.
- ASC/Sheets HISTORY is an operational audit projection, not a competing artifact authority.
- Gate 4 reuses the existing T-016 server write path; it must not add a second browser-side GitHub writer.
- Explicit owner confirmation remains mandatory before persistence.
- Routing/handoff and opening ASC Front Door remain non-persistent.
- Gate 4 does not change ZASS method semantics, validator rules, or Full-ZASS escalation.

## 3. Product-state contract

### G4-01 — UNSAVED

Show **UNSAVED** when a valid pending request exists but no confirmed write attempt has completed.

Examples:
- preview restored;
- security-valid request awaiting CONFIRM & SYNC;
- draft/handoff prepared but no persistence has occurred.

UNSAVED must not imply failure.

### G4-02 — SYNCING

Show **SYNCING** only while a confirmed persistence attempt/result resolution is in progress.

SYNCING must explicitly say that SAVED has not yet been established.

### G4-03 — SAVED

Show **SAVED** only when all factual success conditions hold:

- receipt status = SUCCESS;
- receipt verified = true;
- HISTORY outcome = HISTORY_PERSISTED;
- server flow reports an authoritative synced success state.

For GitHub outcomes:

- `VERIFIED_WRITE` — show the real commit SHA when present;
- `NO_CHANGE` — may show SAVED with `write_performed=false`; do not invent a new commit SHA;
- `VERIFIED_WRITE_RECONCILED` — may show SAVED even when a commit cannot be attributed to the exact attempt; clearly say the desired persisted content was verified and no attributable commit SHA is available.

A missing commit SHA is acceptable only for truthful success classes whose adapter semantics explicitly permit it.

### G4-04 — FAILED

Show **FAILED** for any unverified, rejected, conflicted, unknown, or incomplete outcome.

Examples include:
- WRITE_ERROR;
- WRITE_CONFLICT;
- WRITE_UNVERIFIED;
- WRITE_OUTCOME_UNKNOWN;
- replay rejection;
- HISTORY persistence failure;
- unreadable/unavailable final result.

A receipt with `verified=false` can never produce SAVED.

### G4-05 — STALE

Show **STALE** when the project/index projection is factually behind or marked stale.

STALE describes projection freshness; it must not retroactively change a verified historical SAVE receipt into failure.

If the latest authoritative save succeeded but the operational index is stale, the UI may show both facts:

```text
Save: SAVED
Index: STALE
```

Do not collapse these into one ambiguous status.

## 4. Receipt UX

The user-facing success surface must prioritize a compact factual receipt over raw JSON.

Minimum human-facing fields when available:

- state: SAVED / FAILED;
- adapter outcome;
- affected resource;
- commit SHA or record identifier when attributable;
- whether a new write was performed;
- verified flag;
- request ID;
- timestamp;
- failure reason on failure.

Raw receipt JSON may remain behind Review/details.

## 5. Workspace integration

Project Pulse gains a **Save / sync health** projection.

Deterministic precedence:

1. project index freshness `STALE` → show **STALE** as index/save-sync health;
2. otherwise, latest project HISTORY row for SAVE/SYNC:
   - SUCCESS + factual receipt `verified=true` → **SAVED**;
   - FAILED → **FAILED**;
3. if no qualifying receipt exists → neutral **Not provided**, not an invented UNSAVED claim.

Workspace must not claim current SAVED merely because an old history row succeeded while the current project index is stale.

## 6. Confirm & Sync integration

The protected confirm flow must visibly transition:

```text
UNSAVED
  ↓ explicit owner confirmation
SYNCING
  ↓ verified result + HISTORY
SAVED

or

SYNCING
  ↓ failure / unknown / unverified
FAILED
```

No automatic click, silent write, or bypass of confirmation is allowed.

## 7. Production evidence required to close Gate 4

Gate 4 closes only after:

1. acceptance contract is merged;
2. AISYNC source patch is merged;
3. all relevant confirm/write/dashboard regression tests pass;
4. browser/client code still contains no direct GitHub/Sheets credentialed writer;
5. production Apps Script deployment contains the bounded Gate 4 UI patch;
6. owner-visible production proof confirms:
   - pending preview visibly says UNSAVED;
   - after explicit CONFIRM & SYNC, SYNCING appears before final state;
   - verified success renders SAVED with truthful receipt facts;
   - failure fixture/test cannot render SAVED;
   - Workspace Project Pulse shows STALE/SAVED/FAILED truthfully without conflating save receipt with index freshness.

A production proof may use a deterministic T-016 `NO_CHANGE` request so no duplicate Git commit is created.

## 8. Non-blockers

Gate 4 does not require:
- T-017 completion;
- Gate 5 redesign;
- CR-010 v0.4;
- Z206;
- closed beta;
- automatic index refresh after every save.

## 9. Stop rule

Do not mark Gate 4 PASS from raw backend success alone.

Do not call generated Markdown, queued work, attempted writes, or unverified results SAVED.

If result truth is unknown, show FAILED/unknown and direct the user to HISTORY; never guess success.
