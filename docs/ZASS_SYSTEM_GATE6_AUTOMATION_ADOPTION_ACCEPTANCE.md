# ZASS SYSTEM — Gate 6 Automation + Adoption UX Acceptance

**Status:** LOCKED ACCEPTANCE CONTRACT  
**Date:** 2026-10-05  
**Owner:** Project Owner  
**Gate:** 6 — Automation + adoption UX  
**Scope:** ZASS SYSTEM product acceptance over AISYNC implementation evidence

> **Automate the journey, not the authority.**

This contract closes the acceptance-definition gap for Gate 6. It does not add a new ZASS method, command family, ledger, validator rule, or runtime subsystem.

AISYNC remains the implementation owner for transport, persistence runtime, private continuity/retrieval runtime, provider handoff, integrated web journey, operational reliability, beta access, and closed-beta execution. ZASS SYSTEM remains the contract/audit authority.

## 1. Acceptance contract

### G6-01 — Authority preservation

Gate 6 must preserve the released authority model:

- ZASS / ZASSPILL / ZASSELECTION / ZASSIMPLE own method semantics;
- AISYNC may automate UX, transport, persistence, continuity runtime, handoff, and projection;
- GitHub-backed ZASS project artifacts remain canonical where GitHub is the project authority;
- private continuity authority remains distinct from Git-backed artifact authority;
- AISYNC must not silently reinterpret ZASS semantic state.

### G6-02 — Integrated ordinary-user journey

An ordinary user must be able to use the supported journey without raw internal mechanics:

```text
DUMP / DECIDE / DESIGN
→ provider handoff
→ provider return
→ SAVE / factual receipt
→ continuity advance
→ reopen / transfer
```

The default journey must not require the user to understand raw record contracts, internal revision machinery, repository paths, or developer repair procedures.

### G6-03 — Ordinary-user UX

The default product surface must preserve progressive disclosure and the locked rule:

> **Present only the next meaningful human action.**

Implementation-facing protocol terminology must not be required for ordinary use when plain-language product terms can represent the same factual state.

Technical detail may remain available in Review, History, diagnostics, or explicit advanced views.

### G6-04 — Beta access boundary

External beta participation must use authenticated invited-user access with an explicit production allowlist or an equivalent bounded identity rule.

Opening beta access must not grant:

- method authority;
- GitHub credential access;
- unrestricted write authority;
- owner-only semantic confirmation rights that were not explicitly delegated.

### G6-05 — Truthful automation

Automation must remain factual.

It must not:

- invent SAVE, PASS, VERIFIED, commit, or continuity state;
- silently LOCK a decision;
- silently confirm DESIGN;
- silently cross a protected semantic transition;
- hide an unknown/degraded outcome behind a success state;
- depend on hidden developer-side repair while presenting the journey as successful.

### G6-06 — Continuity and privacy

Cross-provider continuity must preserve the applicable thread identity, revision, lineage, and scoped continuity semantics.

Provider-held personal memory, profile, or private provider context remains outside the portable continuity boundary unless the user intentionally brings it into the semantic thread.

### G6-07 — Human adoption proof

Gate 6 requires factual closed-beta evidence from at least **three distinct non-developer humans**; target 3–5.

Each counted participant must complete the locked core journey without:

- developer-side data repair;
- hidden canonical-state patching;
- manual database correction required only because the ordinary product flow failed;
- a developer translating raw internal protocol mechanics for the participant.

Technically literate participants are acceptable provided they are not developers of AISYNC and do not rely on AISYNC internal knowledge.

### G6-08 — Evidence and recovery

Beta failures, confusion, degraded states, and recovery paths must be recorded factually.

A recoverable user mistake is not automatically a Gate 6 failure. The important requirement is that the product exposes a truthful recovery path without bypassing authority or requiring hidden repair.

### G6-09 — Final ZASS acceptance

AISYNC beta completion does not automatically close Gate 6.

After beta evidence exists, ZASS SYSTEM performs a final acceptance audit against G6-01 through G6-08. Remaining gaps are classified by ownership:

- ZASS-owned contract/method gap → fix in ZASS;
- AISYNC runtime/transport/UX gap → return to AISYNC;
- cosmetic polish that does not affect ordinary usability → may follow functional beta.

Only factual closure evidence plus final ZASS acceptance may mark Gate 6 **PASS / CLOSED**.

## 2. Guided Journey UX direction

The product UX has two layers.

### Default — Simple View

Keep the released mental model lightweight:

```text
DUMP → DECIDE → DESIGN → DO IT → DELIVERED
```

The default view should not expose the entire lifecycle at once.

### Secondary — Guided Journey / Workflow Navigator

When deeper orientation is useful, AISYNC may project the more granular workflow represented by the current ZASS Personal Workflow pattern.

Example:

```text
09 ACTION PLAN v0                 ✅
10 OPEN WIDE AGAIN                ← CURRENT
11 NARROW DOWN AGAIN
12 REMAKE DESIGN ↔ REPLAN ACTION
```

The navigator is a projection of factual state, not a second workflow authority.

Requirements:

- completed/current/pending/rework status must derive from explicit project state or evidence;
- loops such as DESIGN ↔ ACTION_PLAN must remain visible when reality causes rework;
- clicking or expanding a step may expose Why, Pass criteria, Evidence, Decisions, Sources, and History;
- no fake linear progress, invented percentage, or decorative PASS state;
- mobile presentation may focus on previous → current → next with an explicit full-journey view.

Canonical UX principle:

> **Simple on the surface. Guided when useful. Factual state underneath. Strong lineage throughout.**

## 3. Beta versus visual polish

Full visual redesign is not a prerequisite for the functional closed beta.

Before beta, the product must reach minimum ordinary-user usability:

- understandable route and action labels;
- clear current/next action;
- truthful state/error/recovery wording;
- no requirement to understand implementation protocol names;
- usable navigation on supported devices.

After functional beta, visual polish and richer Guided Journey presentation may proceed without reopening method semantics.

## 4. Cross-repository execution strategy

The locked execution sequence is:

```text
AISYNC primary implementation
→ ZASS SYSTEM audit
→ ZASS-owned gap fix where applicable
→ AISYNC integration / re-audit
→ ZASS final acceptance
```

Do not implement the same runtime slice independently in both repositories.

## 5. Current checkpoint at lock time

At the time this contract was locked:

- ZASS SYSTEM Gates 1–5 are PASS / CLOSED;
- AISYNC T-019 Production Reliability & Operations is PASS;
- AISYNC T-020 Human Closed Beta is CURRENT but has not begun counted external beta journeys;
- T-020A readiness identified beta-access and ordinary-user wording/usability gaps that must be resolved before external beta participants are counted.

These are implementation inputs. They do not change ZASS method semantics.
