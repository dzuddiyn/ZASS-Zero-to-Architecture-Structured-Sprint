# TRACK E — FIELD EVIDENCE & SCALE VALIDATION

**Status:** E2 CLOSED / PASS / ARCHITECTURE v0.1 FROZEN  
**Date:** 2026-10-08  
**Owner:** Project Owner  
**Scope:** Lightweight field-evidence and scale-validation work for ZASS only.

## 1. Track identity

TRACK E groups three related evolution items:

```text
CR-006  Scale-out Multi-file Structure
CR-014  Real-world Case Studies
CR-015  P3 Field Evidence Recorder
```

They are treated as one evidence family:

```text
real ZASS usage
      ↓
CR-006 scale-out validation
      ↓
lightweight evidence capture
      ↓
CR-015 evidence recorder / projection
      ↓
aggregate observations
      ↓
CR-014 case studies
      ↓
STOP / REVIEW
      ↓
future product changes only if evidence justifies them
```

## 2. Locked purpose

TRACK E exists to answer:

> When ZASS is used across more real projects, does the current product/method remain useful, portable and understandable, and what evidence should guide future changes?

TRACK E is evidence-first. It does not assume that scale-out, multi-file structure, analytics, telemetry or new method ceremony are required.

## 3. Locked scope

TRACK E MAY:

- define a bounded scale-out TEST protocol;
- define a minimal privacy-safe field evidence model;
- generate sanitized local receipts;
- collect PASS/FAIL, tool version, platform, method/language, project shape and diagnostic-code evidence;
- allow explicit opt-in rating/short feedback;
- aggregate evidence into human-reviewed summaries;
- produce real-world case-study evidence;
- identify recurring product defects, friction and future-work candidates;
- compare current single-file ZASS against an experimental scale-out shape without changing the canonical default.

## 4. Hard boundaries

TRACK E MUST NOT:

- collect raw ZASS project content by default;
- collect chat transcripts by default;
- collect LOCKED decisions or architecture content as analytics payload;
- export provider-held personal memory/profile;
- collect secrets, tokens, account credentials or private identifiers;
- introduce hidden telemetry;
- automatically upload evidence without explicit owner/user action;
- create a second Source of Truth;
- replace Git history, ZASS receipts, AISYNC HISTORY or canonical project evidence;
- make multi-file ZASS the default without a separate owner decision;
- change CR-010 or CR-011 frozen semantics merely to improve metrics;
- activate AISYNC/CrossAI runtime work.

## 5. Initial evidence principle

Prefer:

```text
projection over duplication
sanitized workflow evidence over semantic content
opt-in over hidden collection
local receipt first
human review before case-study publication
```

The first implementation should remain lightweight. No analytics platform is authorized by this scope lock.

## 6. Track phases

The current high-level sequence is:

```text
E1  Scope / registry cleanup
E2  Decision + small architecture
E3  Action plan + atomic implementation
E4  Field execution / evidence collection
E5  STOP / REVIEW
```

E1 is closed and E2-T01 through E2-T07 are completed. E3 is the next phase.

### E1-T01 — Clean evolution registry + lock TRACK E scope

**Status:** PASS / SCOPE LOCKED

Completed:

- normalized DONE/CLOSED statuses for completed CRs;
- moved CR-016 active ownership out of ZASS into AISYNC future work while preserving lineage;
- activated CR-006, CR-014 and CR-015 under TRACK E;
- locked TRACK E purpose, scope and privacy/non-goal boundaries.

### E2-T01 — Lock field-evidence questions and decision criteria

**Status:** PASS / LOCKED  
**Contract:** [`ZASS_TRACK_E_EVIDENCE_DECISION_CONTRACT_V01.md`](ZASS_TRACK_E_EVIDENCE_DECISION_CONTRACT_V01.md)

Locked ten core evidence questions covering usefulness, continuation quality, authority integrity, tooling reliability, friction, scale threshold, multi-file value, recurring failure patterns, opt-in user-perceived value, and improvement priority.

Locked evidence classes, decision dimensions, final review outcomes, CR-006 scale-out promotion criteria, CR-015 recorder promotion criteria, CR-014 case-study sufficiency, evidence-sufficiency rules, rating role, and privacy boundary.

No recorder schema, CLI command, rating scale, aggregation mechanism, or implementation architecture was selected in E2-T01.

### E2-T02 — Define minimal evidence model + local receipt contract

**Status:** PASS / LOCKED  
**Contract:** [`ZASS_TRACK_E_LOCAL_EVIDENCE_RECEIPT_V01.md`](ZASS_TRACK_E_LOCAL_EVIDENCE_RECEIPT_V01.md)

Locked a minimal local JSON evidence receipt with opaque receipt/evidence IDs, evidence-class tagging, Q1–Q10 linkage, bounded factual outcomes, privacy-safe tooling/workflow metadata, explicit consent boundaries for user ratings/feedback, and a recommended local `.zass/evidence/` location.

The contract forbids raw semantic project content, private identifiers, hidden telemetry, automatic upload, and any receipt authority over Markdown/LOCKED decisions. Retention, Git tracking, cleanup, aggregation, exact rating scale, and implementation command/package remain deferred.

### E2-T03 — Lock rating + feedback contract

**Status:** PASS / LOCKED  
**Contract:** [`ZASS_TRACK_E_RATING_FEEDBACK_CONTRACT_V01.md`](ZASS_TRACK_E_RATING_FEEDBACK_CONTRACT_V01.md)

Locked an explicit opt-in 1–5 usefulness rating for a specific reviewed work/session/case, bounded rating targets, an optional short feedback prompt, bounded feedback categories, event-specific consent, a 500-character feedback limit, interpretation safeguards, aggregation-safe statistics, and non-manipulative capture rules.

Ratings remain user-perceived-value evidence only. They cannot replace factual field evidence, cannot be inferred from ordinary chat/provider memory, and cannot by themselves trigger ZASS method/architecture changes.

No rating UI, CLI prompt timing, network submission, dashboard, or aggregation service was selected.

### E2-T04 — Define lightweight evidence architecture + collection flow

**Status:** PASS / LOCKED  
**Contract:** [`ZASS_TRACK_E_EVIDENCE_ARCHITECTURE_V01.md`](ZASS_TRACK_E_EVIDENCE_ARCHITECTURE_V01.md)

Locked the local evidence pipeline:

```text
bounded producer
→ contract validation / sanitization
→ local JSON receipt
→ read-only projection / aggregation
→ human review
→ case-study / Track E finding
```

Locked separation of responsibilities, append-oriented local receipt storage, read-only projection, human-only interpretation, failure behavior, no-network v0.1 boundary, CR-006 comparison seam, CR-014 case-study seam, and the rule that evidence machinery cannot mutate ZASS semantic authority.

No E3 implementation, package/API freeze, SaaS telemetry, remote submission, dashboard, or AISYNC/CrossAI integration was started.

### E2-T05 — Lock aggregation + case-study contract

**Status:** PASS / LOCKED  
**Contract:** [`ZASS_TRACK_E_AGGREGATION_CASE_STUDY_V01.md`](ZASS_TRACK_E_AGGREGATION_CASE_STUDY_V01.md)

Locked deterministic local aggregation outputs, coverage/completeness truth, reviewed finding structure, LOW/MEDIUM/HIGH evidence confidence, explicit `INSUFFICIENT EVIDENCE` handling, case-study structure, facts-vs-user-signal-vs-reviewer-interpretation-vs-decision separation, feedback quotation consent, publication boundary, cross-case aggregation rules, and CR-006/CR-014/CR-015 responsibility boundaries.

The aggregator may summarize factual evidence but cannot assign final confidence, classify product outcomes, declare reviewed case studies, promote CR-006, or open implementation work. No case study was executed or published.

### E2-T06 — Lock CR-006 scale-out TEST protocol

**Status:** PASS / LOCKED  
**Contract:** [`CR006_SCALE_OUT_TEST_PROTOCOL_V01.md`](CR006_SCALE_OUT_TEST_PROTOCOL_V01.md)

Locked a trigger-based, same-work comparison between canonical single-file ZASS and a bounded experimental scale-out shape. The protocol requires representative fixture/field cases, comparable tasks, evidence across navigation/review, continuation, tooling, portability, authority clarity and ceremony cost, controlled comparison conditions, explicit STOP rules, and one reviewed outcome including `INSUFFICIENT EVIDENCE`.

CR-006 remains TEST-only. A prettier file tree is not evidence. Promotion to `SCALE-OUT CANDIDATE` requires every E2-T01 promotion criterion and still does not authorize canonical migration without a separate owner decision.

### E2-T07 — E2 STOP / REVIEW + architecture lock

**Status:** PASS / E2 CLOSED / ARCHITECTURE v0.1 FROZEN  
**Closure:** [`ZASS_TRACK_E_E2_STOP_REVIEW_CLOSURE.md`](ZASS_TRACK_E_E2_STOP_REVIEW_CLOSURE.md)

Cross-audited E2-T01 through E2-T06 and found no material architecture contradiction. Froze all six E2 contracts as TRACK E architecture v0.1, resolved stale current-facing defer wording, and confirmed authority/privacy/failure/aggregation/scale-out boundaries remain coherent.

E3 may now plan a small local implementation against the frozen baseline. No E3 implementation was started by E2-T07.

## 7. Deferred design decisions

Deferred beyond E2 as implementation/distribution choices:

- exact module/file/API implementation details;
- CLI command vs helper entrypoint exposure;
- Git tracking vs ignore policy for `.zass/evidence/`;
- receipt retention/cleanup policy;
- exact derived-summary artifact filename/location;
- any future explicit opt-in network submission mechanism.

These do not block E3 local implementation planning.

## 8. Exit condition for TRACK E

TRACK E can close only after:

- bounded protocol is locked;
- minimum recorder/projection implementation is completed if approved;
- representative field evidence exists;
- privacy boundary is verified;
- evidence is reviewed for defects/friction/usefulness;
- case-study output is produced or explicitly rejected as insufficient;
- STOP / REVIEW decides whether any ZASS product change is justified.

