# ZASS SYSTEM Gate 2 — Production Integration Acceptance

**Status:** CLOSED / PASS — IMPLEMENTED, DEPLOYED, OWNER-VISIBLE VERIFIED  
**Date:** 2026-10-04  
**System baseline:** ZASS SYSTEM v0.2.0  
**Scope:** Product Gate 2 only — DUMP / DECIDE / DESIGN production integration

> Gate 2 is about one coherent production entry/routing experience. It does not implement AISYNC private continuity/retrieval and does not reopen ZASS method semantics.

## 1. Product intent

A user should be able to enter ZASS SYSTEM without knowing method names.

The product-level route contract is:

```text
natural user input
      ↓
visible route
  DUMP / DECIDE / DESIGN
      ↓
DUMP   → ZASSPILL
DECIDE → ZASSELECTION
DESIGN → ZASSIMPLE
      ↓
Full ZASS only by explicit escalation from DESIGN when stronger governance is justified
```

## 2. Authority boundary

This gate does not move runtime ownership into the ZASS repository.

- ZASS SYSTEM owns the routing/product contract and PASS criteria.
- AISYNC owns the production web/runtime implementation.
- GitHub remains canonical for Git-backed project artifacts.
- AISYNC must not copy or reinterpret ZASS method semantics.
- Method Gateway snapshots are transport mirrors, not method authority.
- Routing/handoff by itself must not imply persistence.

AISYNC implementation tasks, including private continuity/retrieval work such as T-017, remain governed in the AISYNC repository. Their factual results may later satisfy a ZASS SYSTEM product gate, but they are not executed here.

## 3. Minimum Gate 2 PASS contract

Gate 2 passes only when all of the following are proven on the production-facing journey.

### G2-01 — Three-route product surface

The production entry experience exposes the released ZASS SYSTEM routes:

- DUMP
- DECIDE
- DESIGN

The user does not need to select a method name.

A product surface that still presents only DECIDE / DESIGN is not Gate 2 complete.

### G2-02 — Deterministic route mapping

The active route maps exactly to:

- DUMP → ZASSPILL
- DECIDE → ZASSELECTION
- DESIGN → ZASSIMPLE

The mapping must use the current exact Method Gateway path when a receiver handoff is required.

### G2-03 — DUMP is the safe default

Unclear, casual, exploratory, mixed, or low-confidence input routes to DUMP rather than forcing DECIDE or DESIGN.

### G2-04 — Route is visible and owner-overridable

The suggested/active route is visible before handoff.

The user may explicitly override the suggestion.

The system must not silently switch the active route after the user has explicitly overridden it.

### G2-05 — Provider handoff stays capability-honest

Provider handoff may use supported deep-link/prefill behavior where proven.

Otherwise the required fallback is copy/open.

The product must not claim that provider prefill occurred when it did not.

### G2-06 — Exact-source receiver guardrail

Receiver bootstrap must instruct the target AI to read the exact Method Gateway URL.

If that URL cannot be fetched, the receiver must report failure rather than silently substituting repository search, raw GitHub, or another source as method authority.

### G2-07 — Full ZASS is not a fourth landing route

Full ZASS remains a stronger-governance escalation from DESIGN.

Gate 2 must not expose Full ZASS as a peer landing choice beside DUMP / DECIDE / DESIGN and must not migrate a project automatically.

The actual contextual escalation control belongs to the later Workspace / Contextual Cards product gate.

### G2-08 — Routing does not imply persistence

Selecting a route, preparing a handoff, or opening an AI provider must perform no SAVE/write operation by itself.

Persistence remains separately authorized and factual.

### G2-09 — Coherent production integration

The three-route contract must be present in the production-facing journey, not only in an isolated proof page.

At minimum, the main product navigation/read surface and the front-door routing surface must not contradict each other.

A legacy dashboard grouping limited to DECIDE / DESIGN must be reconciled before Gate 2 can PASS.

## 4. Current evidence

Verified from canonical AISYNC `main`:

### Already proven

The static ASC front door implements:

- natural draft input;
- required provider selection;
- route suggestion;
- visible active route;
- route override;
- DUMP / DECIDE / DESIGN;
- exact mappings to ZASSPILL / ZASSELECTION / ZASSIMPLE;
- exact public Method Gateway URLs;
- ChatGPT / Gemini / Copilot copy-open fallback;
- no persistence/write function in the routing/handoff surface.

The AISYNC front-door regression suite also verifies:

- DUMP for ambiguous/casual input;
- DECIDE for comparison/choice input;
- DESIGN for build/design input;
- route override persistence;
- exact-source/no-substitution receiver wording;
- handoff invalidation when draft/provider/route changes.

Historical AISYNC live proof records also report successful provider-routing/handoff field cases.

### Production integration patch — implemented and deployed

AISYNC Gate 2 patch is now merged and production-deployed.

Canonical implementation evidence:
- AISYNC PR #15 merged as `f515a7d1379534501cd7a032563bfa968f8012ae`;
- main dashboard/read model now declares `DUMP / DECIDE / DESIGN`;
- DUMP is the default dashboard route and displays `DUMP → ZASSPILL` plus the existing ASC Front Door link without implementing ZASSPILL semantics;
- DUMP project rows can be projected from `PROJECTS.ui_entry` when present;
- existing DECIDE / DESIGN project grouping, project detail, History, and commit-linked CI behavior remain covered by regression tests;
- all 24 AISYNC repository `test-*.mjs` tests PASS in the verified checkout;
- `git diff --check` PASS.

Live data/deployment evidence:
- active ASC DB `PROJECTS.ui_entry` strict validation was migrated in place to `DUMP / DECIDE / DESIGN`; existing AISYNC `DESIGN` value was preserved and read back;
- protected production Apps Script deployment was promoted to immutable version **21**, `Gate2-three-route-production-integration`;
- production v21 was constructed from the prior immutable production v17 plus exactly `Dashboard.html`, `DashboardClient.html`, and `DashboardRead`;
- independent post-deploy pull verified those three production files match AISYNC Gate 2 merge `f515a7d...`;
- the separate T-017 development HEAD was restored after the versioned release and was not promoted into production v21;
- AISYNC deployment receipt PR #16 merged as `92414d1db856a2c14bff9b09d5f85d5000d6e494`.

Owner-visible production verification is complete.

Observed on the protected/main ASC production surfaces:
- the Google Sites ASC page visibly renders `DUMP / DECIDE / DESIGN`;
- the protected Apps Script production dashboard visibly renders the same three routes;
- DUMP visibly renders `DUMP → ZASSPILL` and the `Open ASC Front Door` action;
- DECIDE can be selected and renders its route view without error;
- DESIGN can be selected and renders the AISYNC project card without error.

This satisfies the remaining human-visible acceptance evidence for the integrated production journey.

## 5. Gate 2 current verdict

```text
G2-01  PASS — three-route main production surface visibly verified
G2-02  PASS
G2-03  PASS
G2-04  PASS
G2-05  PASS
G2-06  PASS
G2-07  PASS BY BOUNDARY — Full ZASS is not a landing route
G2-08  PASS
G2-09  PASS — front door + main dashboard production coherence visibly verified
```

Therefore:

> **GATE 2 = CLOSED / PASS**

No further Gate 2 implementation work is required. Any future regression is handled as a defect against this locked acceptance contract.

## 6. Minimum AISYNC integration evidence required to close Gate 2

All closure items are satisfied.

8. **owner-visible production proof — PASS.** The protected/main ASC dashboard visibly exposes DUMP / DECIDE / DESIGN; DUMP provides the expected front-door path; DECIDE and DESIGN both remain usable.

Gate 2 is formally closed.

## 7. Non-blockers

These are not required to start or complete Gate 2:

- private continuity/retrieval implementation;
- Portable Packet v2;
- cross-AI private thread retrieval;
- CR-010 v0.4;
- optional Z206;
- Workspace contextual cards;
- full Review / History product redesign;
- closed beta.

Those belong to later product gates or AISYNC runtime delivery.

## 8. Stop rule

Do not mark Gate 2 PASS merely because the routing unit tests pass.

Gate 2 closes only after the three-route contract is coherent on the production-facing product journey and factual evidence is recorded.

Do not implement AISYNC runtime code from this repository.
