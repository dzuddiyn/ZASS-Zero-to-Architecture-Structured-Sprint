# TRACK E — E3 Implementation Action Plan v0.1

**Status:** LOCKED FOR E3 EXECUTION  
**Date:** 2026-10-08  
**Track:** TRACK E — FIELD EVIDENCE & SCALE VALIDATION  
**Task:** E3-T01  
**Architecture baseline:** TRACK E architecture v0.1 FROZEN

## 1. Goal

Implement the smallest local evidence recorder/projection needed to execute Track E field work without reopening E2 architecture, changing CR-010/CR-011 semantics, or introducing public telemetry infrastructure.

## 2. Implementation strategy

Use the existing `zass-cli` codebase as the reusable Node.js implementation home because it already owns local project discovery, Node 20 runtime assumptions, `.zass/` handling and cross-platform tests.

Do **not** add a public `zass` command in the first implementation slice.

Instead:

```text
cli/src/evidence/
  reusable local evidence module
        ↓
repo-local tools/track-e/ field runner
        ↓
E4 controlled field execution
```

Reason:

- avoids reopening frozen `zass check/status/diff` behavior;
- avoids a premature public CLI/API promise;
- allows real E4 evidence before productizing the recorder;
- keeps implementation reusable if later promoted into `zass-cli`.

## 3. E3 implementation decisions

### D-E3-001 — Implementation home

**LOCKED:** reusable evidence logic lives under `cli/src/evidence/`.

No separate npm package is created in E3 v0.1.

### D-E3-002 — Initial execution surface

**LOCKED:** first execution surface is a repo-local Track E field runner under `tools/track-e/`.

It is test/research tooling, not a published user-facing CLI contract.

### D-E3-003 — Public CLI boundary

**LOCKED:** `zass check`, `zass status`, and `zass diff` remain unchanged.

No `zass evidence ...` public command is added before E4 evidence + later owner decision.

### D-E3-004 — Git boundary

**LOCKED for v0.1:** `.zass/evidence/` receipts are local/private artifacts and should be Git-ignored by default when the Track E helper prepares a test project.

Existing projects are not auto-modified merely because the module exists. Any helper action that adds an ignore entry must be explicit and test-scoped.

Human-reviewed case-study documents may be committed separately after privacy review.

### D-E3-005 — Retention

**LOCKED for v0.1:** no automatic deletion/expiry/cleanup.

Receipts persist locally until explicitly removed by the user/test operator. This prevents silent evidence loss.

### D-E3-006 — Derived summary

**LOCKED for v0.1:** projection is returned as an in-memory object and may be printed by the field runner.

No canonical summary file is required in E3. This avoids creating another persisted artifact before field evidence proves the need.

### D-E3-007 — Network boundary

**LOCKED:** no network code, uploader, endpoint, account identity or background submission.

## 4. Implementation architecture

```text
field/test event
    ↓
tools/track-e/ field runner
    ↓
cli/src/evidence/
    ├── contract constants
    ├── receipt validation
    ├── receipt writing
    ├── receipt reading
    └── deterministic projection
    ↓
.zass/evidence/zass-evidence-<receiptId>.json
    ↓
local summary output
    ↓
E4 human review / case study
```

## 5. Atomic execution queue

```text
E3-T01  Build implementation action plan + atomic task slices          ← THIS TASK
E3-T02  Implement frozen evidence constants + strict receipt validator
E3-T03  Implement local receipt writer + safe evidence-store behavior
E3-T04  Implement receipt reader + deterministic factual projector
E3-T05  Add rating/feedback contract validation + privacy guards
E3-T06  Implement repo-local Track E field runner
E3-T07  Add unit/negative/privacy regression fixtures
E3-T08  Add Git-ignore/local-retention helper behavior + tests
E3-T09  Run packed/cross-platform regression against existing zass-cli
E3-T10  Documentation + E3 implementation receipt
E3-T11  E3 STOP / REVIEW
```

Tasks execute strictly in order unless a task exposes a blocking contract defect.

## 6. Atomic task contracts

### E3-T02 — Implement frozen evidence constants + strict receipt validator

**Status:** PASS  
**Implementation:** `cli/src/evidence/constants.js`, `validator.js`, `index.js`  
**Focused tests:** `cli/test/evidence-validator.test.js`

Implemented frozen E2 receipt/rating vocabularies and a pure strict allow-list validator. No write/aggregation/public-CLI behavior was added. Focused tests cover canonical receipts, all evidence classes, unsupported version/source/question, unknown/private fields, cross-class field misuse, rating/feedback bounds/consent, evidence refs and non-mutation.

**Scope:** code only the frozen E2 receipt/rating vocabularies and validation rules.

Expected implementation:

- create `cli/src/evidence/` module boundary;
- encode receipt version `0.1`, evidence classes, Q1–Q10, bounded results, project shapes, rating targets/categories;
- validate receipt envelope and records;
- reject unknown/unsupported required semantics rather than silently coercing;
- validate opaque/safe IDs structurally without embedding identity;
- enforce 1–5 rating and 500-character feedback maximum;
- preserve distinction between validation failure and factual evidence result.

**Must not:** write files, aggregate, add public CLI commands, mutate CR-010/CR-011.

**PASS:** validator accepts canonical valid fixtures and rejects malformed/private/contract-invalid fixtures deterministically.

### E3-T03 — Implement local receipt writer + safe evidence-store behavior

**Status:** PASS  
**Implementation:** `cli/src/evidence/store.js` + internal exports  
**Focused tests:** `cli/test/evidence-store.test.js`

Implemented explicit-project-root local receipt storage with generated opaque IDs, validate-before-write behavior, safe `.zass/evidence/` directory creation, exclusive no-overwrite writes, factual `SAVED / INVALID / COLLISION / WRITE_FAILED` results, and semantic-file non-mutation. No reader/projector, Git-ignore automation, network behavior, or public CLI surface was added.

**Scope:** local write path only.

Expected implementation:

- resolve `.zass/evidence/` beneath an explicit project root;
- generate opaque receipt IDs without user/project/device identity;
- validate before write;
- create evidence directory safely;
- write one JSON receipt per filename contract;
- prevent overwrite/collision from being reported as success;
- return factual SAVED / rejection/write-failure information;
- never touch semantic Markdown/project decisions.

Prefer atomic temp-write → rename or equivalent safe local write pattern where practical.

**Must not:** upload, Git commit, auto-edit `.gitignore`, aggregate.

**PASS:** valid receipt writes once; invalid receipt writes nothing; collision/write error never yields false success.

### E3-T04 — Implement receipt reader + deterministic factual projector

**Scope:** read/project only.

Expected implementation:

- enumerate candidate receipt JSON files from `.zass/evidence/`;
- validate each receipt before inclusion;
- isolate malformed/invalid receipts;
- report considered/included/excluded coverage;
- aggregate only frozen factual fields;
- preserve evidence-class separation;
- calculate allowed rating count/distribution/median/mean + sample size;
- report Q1–Q10 coverage;
- no final finding/confidence classification.

**PASS:** same receipt set always yields same projection; invalid files surface incomplete coverage truthfully.

### E3-T05 — Add rating/feedback contract validation + privacy guards

**Scope:** harden explicit user-signal boundary.

Expected implementation:

- require `consent: true` for USER-RATED/USER-FEEDBACK;
- reject missing/invalid ratingTarget;
- reject rating outside integer 1–5;
- reject feedback above 500 characters;
- validate bounded feedbackCategory when present;
- validate `relatedRatingEvidenceId` shape when present;
- implement conservative prohibited-field guard for explicitly forbidden receipt keys/metadata surfaces;
- ensure ordinary text/chat cannot be auto-converted into rating evidence by module API.

**PASS:** consent/privacy negative tests fail closed without altering semantic project data.

### E3-T06 — Implement repo-local Track E field runner

**Scope:** thin local wrapper over evidence module for E4 testing.

Location:

`tools/track-e/`

Minimum operations:

- record a bounded AUTOMATED evidence event;
- record a bounded FIELD-OBSERVED event;
- explicitly submit USER-RATED event;
- explicitly submit USER-FEEDBACK event;
- print local projection/summary;
- show factual validation/write failures.

Non-interactive or simple prompt implementation is acceptable; usability polish is not the goal.

**Must not:** become an npm `bin`, modify `cli/bin/zass.js`, add network behavior, infer consent.

**PASS:** E4 operator can create valid local evidence and project it without editing JSON manually.

### E3-T07 — Add unit/negative/privacy regression fixtures

**Scope:** comprehensive contract tests for evidence module + runner seams.

Fixtures/tests must cover:

- canonical valid receipt;
- each evidence class;
- unsupported receipt version;
- malformed JSON;
- unknown question/evidence class/result;
- invalid rating/feedback consent;
- rating bounds;
- feedback length;
- prohibited/private field attempts;
- malformed receipt isolation during projection;
- missing optional metadata;
- duplicate/collision handling;
- no raw semantic-content dependency.

**PASS:** tests prove fail-closed behavior and no hidden semantic-content requirement.

### E3-T08 — Add Git-ignore/local-retention helper behavior + tests

**Scope:** explicit field-test project hygiene only.

Expected behavior:

- helper can explicitly ensure `.zass/evidence/` is ignored for a chosen test project;
- preserve existing `.gitignore` content;
- avoid duplicate ignore entries;
- no automatic cleanup/deletion;
- no project validity dependency on evidence directory.

**Must not:** silently rewrite unrelated projects or bootstrap contracts.

**PASS:** idempotent hygiene behavior is tested on missing/existing `.gitignore` cases.

### E3-T09 — Run packed/cross-platform regression against existing zass-cli

**Scope:** distribution/regression proof, not publication.

Verify:

- existing `zass check/status/diff` tests unchanged/pass;
- existing CR-011 metadata tests pass;
- bootstrap-core/create-zass tests pass;
- npm pack payload remains valid;
- clean-install public-CLI behavior does not regress from source packaging changes;
- Linux CI and Windows local/authorized test pass where required.

**PASS:** Track E internals cause zero regression to published CLI semantics.

### E3-T10 — Documentation + E3 implementation receipt

**Scope:** truthful operator documentation and implementation lineage.

Document:

- field runner is repo-local/test-only;
- receipt location/format;
- privacy/no-network guarantees;
- explicit rating/feedback consent;
- projection meaning and limitations;
- no final automated product decisions;
- no public `zass evidence` command yet.

Record implementation commits/tests/evidence in an E3 receipt.

### E3-T11 — E3 STOP / REVIEW

Review:

- frozen E2 contract compliance;
- implementation size/complexity;
- privacy boundary;
- failure truthfulness;
- CR-010/CR-011 regression;
- E4 field readiness.

Allowed outcomes:

- PASS / OPEN E4;
- CORRECTIVE PATCH;
- REWORK;
- ROLLBACK.

Only PASS opens E4 field execution.

## 7. Dependency graph

```text
E3-T02 validator
    ↓
E3-T03 writer
    ↓
E3-T04 reader/projector
    ↓
E3-T05 consent/privacy hardening
    ↓
E3-T06 field runner
    ↓
E3-T07 regression fixtures
    ↓
E3-T08 Git-ignore/retention hygiene
    ↓
E3-T09 packed/cross-platform regression
    ↓
E3-T10 docs + receipt
    ↓
E3-T11 STOP / REVIEW
```

## 8. Token/agentic-coding discipline

Each implementation task must:

- touch the smallest practical module/file set;
- cite the frozen E2 contract it implements;
- avoid adjacent refactors;
- run focused tests first, then repository CI;
- stop if implementation requires a new architecture decision;
- never solve a failing test by weakening a frozen contract;
- never add a public product surface merely because an internal helper exists.

## 9. E3 success boundary

E3 is complete only when a local evidence module + repo-local field runner can:

```text
validate
→ write local receipt
→ read receipts
→ project factual summary
→ accept explicit rating/feedback
```

while preserving:

```text
no network
no hidden telemetry
no semantic authority mutation
no public CLI semantic regression
no automatic product decision
```

## 10. E3-T01 decision

**E3-T01 = implementation plan + atomic task slicing only.**

No implementation code is authorized or changed by this task.

**NEXT after E3-T01 PASS:** `E3-T02 — Implement frozen evidence constants + strict receipt validator`.
