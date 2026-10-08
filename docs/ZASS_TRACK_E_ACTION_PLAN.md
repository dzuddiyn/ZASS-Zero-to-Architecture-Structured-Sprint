# TRACK E — FIELD EVIDENCE & SCALE VALIDATION

**Status:** OWNER-APPROVED / SCOPE LOCKED / DESIGN NOT STARTED  
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

Only E1-T01 is completed by this scope-lock task.

### E1-T01 — Clean evolution registry + lock TRACK E scope

**Status:** PASS / SCOPE LOCKED

Completed:

- normalized DONE/CLOSED statuses for completed CRs;
- moved CR-016 active ownership out of ZASS into AISYNC future work while preserving lineage;
- activated CR-006, CR-014 and CR-015 under TRACK E;
- locked TRACK E purpose, scope and privacy/non-goal boundaries.

## 7. Deferred design decisions

Not decided in E1-T01:

- exact evidence JSON/CSV schema;
- exact local receipt filename/location;
- whether evidence capture is a CLI command, helper script or separate small package;
- exact rating scale;
- exact aggregation workflow;
- exact case-study template;
- exact scale-out fixture count;
- whether any later opt-in network submission is justified.

Those belong to E2 decision/design work.

## 8. Exit condition for TRACK E

TRACK E can close only after:

- bounded protocol is locked;
- minimum recorder/projection implementation is completed if approved;
- representative field evidence exists;
- privacy boundary is verified;
- evidence is reviewed for defects/friction/usefulness;
- case-study output is produced or explicitly rejected as insufficient;
- STOP / REVIEW decides whether any ZASS product change is justified.

