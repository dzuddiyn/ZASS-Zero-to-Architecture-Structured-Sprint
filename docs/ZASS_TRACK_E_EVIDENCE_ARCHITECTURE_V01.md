# TRACK E — Lightweight Evidence Architecture & Collection Flow v0.1

**Status:** LOCKED FOR E2 DESIGN  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E2-T04

## 1. Purpose

This contract locks the smallest architecture needed to capture Track E evidence locally, review it safely, aggregate factual summaries, and feed human-reviewed case studies.

It deliberately avoids a telemetry platform, database service, network collector, dashboard, or automatic publication path.

## 2. Architecture

```text
real ZASS use / bounded field test
        ↓
approved evidence producer
        ↓
privacy + contract validation
        ↓
local JSON receipt
        ↓
.zass/evidence/
        ↓
read-only evidence projection / aggregation
        ↓
human review
        ↓
case-study summary / Track E finding
        ↓
STOP / REVIEW decision
```

## 3. Components

### A. Evidence producer

A producer creates one receipt event from a bounded source.

Allowed producer classes for v0.1 architecture:

- `manual` — explicit human-entered field observation or review event;
- `zass-cli` — future local CLI integration if approved;
- `bootstrap-test` — bounded automated bootstrap/test evidence;
- `field-runner` — future bounded local field-test helper if approved.

Producer names are identifiers only. E2-T04 does not authorize implementation of all producer classes.

### B. Contract validator / sanitizer

Before a receipt is accepted locally, the producer path must enforce the E2-T02/E2-T03 contracts:

- required fields present;
- evidence class valid;
- Q1–Q10 links valid;
- bounded result vocabulary valid;
- prohibited/private default fields absent;
- USER-RATED / USER-FEEDBACK consent rules satisfied;
- feedback length and rating scale valid.

The validator may reject invalid evidence. It must not silently rewrite semantic meaning to make invalid evidence pass.

### C. Local receipt store

Canonical location remains:

`.zass/evidence/`

Each receipt remains one JSON file following the E2-T02 contract.

The receipt store is append-oriented evidence storage, not semantic project state.

### D. Read-only projector / aggregator

The projector reads valid local receipts and derives factual summaries such as:

- receipt/evidence counts;
- PASS / FAIL / WARN distributions;
- diagnostic-code frequency;
- OS/version/project-shape coverage;
- observation-code frequency;
- rating distribution / median / mean with sample size;
- feedback-category counts;
- Q1–Q10 evidence coverage.

It must preserve evidence-class distinctions and must not convert INFERRED/user feedback into automated fact.

### E. Human review layer

Human review interprets the projected evidence against E2-T01 decision criteria.

Only this layer may produce reviewed conclusions such as:

- KEEP CURRENT
- DOCUMENT / ONBOARD
- CORRECTIVE DEFECT
- CANDIDATE IMPROVEMENT
- SCALE-OUT CANDIDATE
- REJECT / NO ACTION

### F. Case-study output

CR-014 case studies are human-reviewed documents derived from evidence references and findings.

They are not automatically generated public reports and are not stored inside the minimal receipt itself.

## 4. Read / write ownership

```text
Producer
  WRITE → new local receipt only

Validator
  READ candidate receipt
  ACCEPT or REJECT
  must not edit ZASS semantic authority

Receipt store
  WRITE → evidence artifacts
  no authority over Markdown

Projector
  READ ONLY → receipts
  WRITE → derived summary artifact only if later approved

Human reviewer
  READ → receipts + summaries
  WRITE → reviewed case study / Track E findings

ZASS Markdown / LOCKED decisions
  never written by evidence machinery
```

## 5. Collection flow

### Automated / field-observed event

```text
explicit Track E run starts
→ bounded event occurs
→ producer builds candidate record
→ validate + sanitize
→ invalid: reject with factual reason
→ valid: write local receipt
→ later projector reads receipt
```

### User rating / feedback event

```text
explicit lightweight prompt
→ user may SKIP
→ user intentionally submits rating and/or feedback
→ consent=true recorded for that event
→ validate scale/target/category/length
→ write local receipt
```

No response means no USER-RATED / USER-FEEDBACK evidence record.

## 6. Failure behavior

### Invalid schema / contract violation

- do not write a valid-looking receipt;
- report rejection factually;
- preserve no false PASS state.

### Receipt write failure

- report WRITE_FAILED / equivalent implementation-level failure later;
- do not claim evidence was saved;
- do not modify project semantic files as fallback.

### Aggregation parse failure

- isolate/reject the malformed receipt;
- continue only when remaining receipts can be read safely;
- surface incomplete coverage truthfully.

### Missing optional metadata

- keep field absent;
- never invent OS/version/diagnostic/rating values.

### User skips rating/feedback

- record nothing for USER-RATED / USER-FEEDBACK;
- do not infer neutral/negative sentiment.

## 7. Local-first and network boundary

v0.1 architecture ends locally.

```text
producer
→ local receipt
→ local projection
→ human review
```

There is no automatic network collector, cloud analytics endpoint, central telemetry database, or background upload in this architecture.

Any later opt-in submission mechanism requires a separate explicit privacy/authority design decision.

## 8. Git boundary

E2-T04 does not yet lock whether `.zass/evidence/` is Git-tracked or ignored.

However:

- evidence receipts must never be required for a ZASS project to be valid;
- absence of receipts must not break `zass check/status/diff`;
- CR-010 and CR-011 semantics remain unchanged;
- committing evidence cannot make it semantic authority.

Exact Git-ignore/retention behavior remains an E2/E3 decision.

## 9. Aggregation boundary

The first projector/aggregator, if implemented, should be deterministic and local.

It may aggregate only fields defined by locked contracts.

It must not:

- crawl arbitrary project Markdown;
- read chats/provider memory;
- infer user identity;
- enrich data from network services;
- merge unrelated users/projects through hidden identity;
- generate proprietary scores;
- auto-open product changes.

## 10. Scale-out test seam

CR-006 experiments fit the same architecture by emitting bounded evidence for both shapes:

```text
single-file baseline
        ↓
same test protocol
        ↓
receipts

experimental scale-out shape
        ↓
same test protocol
        ↓
receipts

receipts
→ projection
→ human comparison
→ E2-T01 scale-out criteria
```

The evidence system does not itself choose the winning architecture.

## 11. Case-study seam

CR-014 uses references to receipts/findings rather than duplicating raw evidence.

```text
receipts
→ factual projection
→ human review
→ case-study document
```

Case studies must preserve the distinction between:

- factual evidence;
- user rating/feedback;
- reviewer inference;
- final Track E decision.

## 12. Minimal implementation direction

If E3 authorizes implementation, the preferred first shape is:

```text
small local evidence module
  ├── validate receipt
  ├── write receipt
  └── read/project receipts
```

Prefer reuse by a future CLI/helper rather than embedding evidence logic independently in multiple commands.

This is an architecture seam, not yet a package/API freeze.

## 13. Explicit non-goals

E2-T04 does not authorize:

- SaaS telemetry;
- remote submission;
- database infrastructure;
- dashboards;
- account identity;
- public analytics;
- automatic case-study publication;
- modification of ZASS semantic files;
- canonical multi-file ZASS migration;
- AISYNC/CrossAI runtime integration.

## 14. Acceptance criteria

E2-T04 passes when:

- capture, validation, storage, projection, review and case-study responsibilities are separated;
- write ownership cannot mutate semantic authority;
- local-first/no-network boundary is explicit;
- user rating/feedback skip behavior is truthful;
- invalid/write/parse failure behavior avoids false success;
- CR-006 and CR-014 have clear seams without special telemetry architecture;
- implementation can remain small and reusable;
- no E3 implementation is started.

## 15. Locked decision

TRACK E v0.1 uses a local pipeline:

`bounded producer → contract validation → local receipt → read-only projection → human review → case-study/finding`.

The evidence layer observes and summarizes ZASS usage; it does not control ZASS state.
