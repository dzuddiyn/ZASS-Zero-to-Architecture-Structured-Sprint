# TRACK D — ZASS PRODUCTIZATION ONLY

> **HISTORICAL / CLOSED.** This action plan preserves execution lineage. Any embedded phrases such as “TRACK D current” describe the state at that task's execution time and are not current roadmap status.

**Status:** PASS / CLOSED  
**Date:** 2026-10-08  
**Owner:** Project Owner  
**Scope:** ZASS repository productization only. Isolated from AISYNC/CrossAI runtime, T-020/T-021, Gate 6 evidence, and Production v1 work.

## 1. Track identity

TRACK D is the successor to the earlier ZASS productization work previously referred to as TRACK B — ZASS PRODUCTIZATION ONLY.

TRACK D contains only:

```text
A1  Documentation truth cleanup
A2  Public zass-cli readiness audit
A3  Public zass-cli package hardening
A4  Public zass-cli publication
A5  CR-011 .zass/ machine-readable layer implementation
```

Outside TRACK D:
- CR-001 remains a TEST candidate for separate later evaluation.
- CR-006 is deferred until TRACK D closes; after that only a scale-out TEST protocol may be prepared.
- CR-007 is closed from ZASS scope and moved to a separate post-production project.

## 2. Hard isolation boundary

TRACK D MUST NOT:
- modify the AISYNC repository;
- modify Apps Script production;
- modify T-020 or T-021;
- alter ZASS Gate 6 acceptance criteria;
- interfere with closed-beta evidence;
- implement CrossAI Create Project;
- open CrossAI Bootstrap Core consumption;
- change auth/session/provider-routing runtime;
- change ZASSPILL runtime persistence/retrieval;
- duplicate AISYNC/CrossAI runtime semantics;
- require any AISYNC/CrossAI deployment to prove TRACK D success.

TRACK D MAY modify only the ZASS repository, local CLI packaging/validator integration, tests/fixtures, local npm tooling, versioned bootstrap behavior, CR-011 local machine metadata, documentation and receipts.

If an atomic task requires AISYNC/CrossAI runtime work: STOP and move that work out of TRACK D.

## 3. Full atomic execution queue

```text
A1-T01 → A1-T02 → A1-T03
→ A2-T01 → A2-T02 → A2-T03 → A2-T04 → A2-T05 → A2-T06
→ A3-T01 → A3-T02 → A3-T03 → A3-T04 → A3-T05
→ A4-T01 → A4-T02 → A4-T03 → A4-T04 → A4-T05
→ A5-T01 → A5-T02 → A5-T03 → A5-T04 → A5-T05 → A5-T06 → A5-T07 → A5-T08 → A5-T09
→ TRACK D STOP / REVIEW
```

# A1 — Documentation truth cleanup

**Priority:** P0  
**Status:** PASS

### A1-T01 — README publication truth
Update README so create-zass-project@0.1.0 is shown as published/verified and npm create zass-project@latest is live. Keep zass-cli local/private until A4 closes.

**PASS:** no current-facing README publication claim is stale.

### A1-T02 — Productization roadmap truth
Update PRODUCTIZATION_ROADMAP: bootstrap readiness/pack/publish/registry/receipt all DONE; TRACK D current; CrossAI Bootstrap consumption NOT OPEN.

**PASS:** roadmap matches current evidence.

### A1-T03 — Historical Track B closure/current Track D handoff
Update ZASS_TRACK_B_PARALLEL_TOOLING as historical lineage: bootstrap publication closed; subsequent isolated work continues under TRACK D; remove current CR-011 exploration-only wording.

**PASS:** Track B is historical lineage, not current execution.

# A2 — Public zass-cli readiness audit

**Priority:** P1. Audit only; no validator semantic changes.  
**Status:** PASS

### A2-T01 — Registry identity audit
Check exact npm identity availability and naming-policy risk for zass-cli. Record exact-availability separately from similarity-policy risk.

### A2-T02 — Package metadata audit
Audit name, version, private flag, bin, files payload, license, repository, homepage, bugs, engines, publishConfig, and README public usage.

### A2-T03 — CR-010 behavioral freeze verification
Confirm packaging/publication cannot change semantics of zass check, zass status, zass diff, or reopen CR-010.

### A2-T04 — npm pack + standalone boundary audit
Run npm pack, inspect tarball, install in disposable external project, and execute all three commands outside the monorepo.

### A2-T05 — Cross-platform packed-artifact smoke
Verify packed artifact on Linux CI and Windows.

### A2-T06 — Publication readiness decision
Produce PASS or HOLD receipt. PASS opens A3. HOLD permits only bounded distribution corrections.

# A3 — Public zass-cli package hardening

**Priority:** P1. Distribution hardening only.  
**Status:** PASS

### A3-T01 — Public package metadata
Remove private:true only when release candidate is ready; normalize license/repository/homepage/bugs/publishConfig/files; make version decision explicit.

### A3-T02 — Stable executable metadata
Verify npm preserves public executable zass and installed tarball exposes it without normalization warnings.

### A3-T03 — Public CLI README
Document zass check/status/diff, factual scope, Git assumptions, exit codes, project expectations, and non-goals.

### A3-T04 — Packed-artifact regression test
Automate real npm pack → clean install → executable smoke; prove no hidden monorepo dependency and intended payload only.

### A3-T05 — Manual release workflow
Add explicit-confirmation workflow: identity → auth → registry state → tests → dry-run → actual publish. Actual publish still waits for A4 owner authorization.

# A4 — Public zass-cli publication

**Priority:** P1  
**Status:** PUBLISHED / VERIFIED / CLOSED

### A4-T01 — Fresh release readiness recheck
From one current main SHA re-run identity, registry state, auth, tests, pack, clean install and dry-run.

### A4-T02 — Explicit owner publish gate
STOP and obtain exact owner authorization for exact package/version. No implicit publish.

### A4-T03 — Actual publish + registry verification
Run publication workflow, verify actual publish step, exact public version and dist-tag.

### A4-T04 — Fresh public consumer smoke
Install from registry into disposable Full-ZASS project and run zass check, zass status, zass diff.

### A4-T05 — Publication receipt + closure
Record source SHA, workflow run, npm version, registry result, fresh consumer smoke and CHANGELOG closure.

# A5 — CR-011 .zass/ machine-readable layer

**Priority:** P2  
**Status:** PASS / CR-011 v0.1 FROZEN / IMPLEMENTATION CLOSED

Non-negotiable boundary:
```text
Markdown = semantic authority
.zass/  = machine metadata companion
```

.zass/ cannot LOCK decisions, override architecture/ACTION_PLAN semantics, create a second Source of Truth, or require AISYNC/CrossAI/network/database runtime. Legacy projects without .zass/ remain valid. Published create-zass-project@0.1.0 remains immutable historical release.

### A5-T01 — Lock CR-011 v0.1 contract

**Status:** PASS / LOCKED FOR IMPLEMENTATION  
**Contract:** [`CR011_ZASS_MACHINE_METADATA_V01.md`](CR011_ZASS_MACHINE_METADATA_V01.md)

Define purpose/non-purpose, authority, exact files, format, minimum fields, read/write ownership, missing/malformed/unsupported behavior, conflict rules, backward compatibility, migration/versioning, CLI seam and bootstrap version boundary.

**PASS:** implementation worker has no unresolved architecture decision.

### A5-T02 — Implement dedicated machine metadata loader

**Status:** PASS

Implemented one local read-only loader for `.zass/project.json` with explicit `ABSENT / VALID / MALFORMED / UNSUPPORTED_SCHEMA / INVALID` states. Missing metadata remains valid legacy state; no network, no writes, no Markdown semantic mutation.

Add one local loader for .zass/. Missing layer is valid legacy state; malformed metadata is factual error/state; no semantic Markdown mutation; no network.

### A5-T03 — Integrate bounded machine-layer validation

**Status:** PASS

Integrated CR-011 machine metadata validation through the dedicated loader. `zass check` now reports deterministic machine-layer errors; `zass status` reuses the same validation result and surfaces machine state; `zass diff` remains Markdown/Git semantic-diff oriented and ignores metadata-only edits as semantic drift. Machine metadata never silently wins over Markdown.

Validate schema version, required machine fields, supported values and detectable conflicts. Machine metadata never silently wins over Markdown.

### A5-T04 — Fixtures + regression tests

**Status:** PASS

Added durable CR-011 fixtures for legacy/no `.zass/`, valid v0.1, malformed metadata, unsupported schema, unambiguous method conflict, and Full-ZASS Bahasa Melayu ambiguity handling. Added fixture-driven regression coverage plus Windows path semantics. Full zass-cli regression passed on Linux CI and on Windows with 99/99 tests PASS; existing CR-010 behavior remained green.

Cover legacy/no .zass/, valid v0.1, malformed metadata, unsupported schema, detectable method conflict, detectable language conflict where contract permits, and Windows paths. Existing CR-010 tests remain PASS.

### A5-T05 — Bootstrap integration/version contract

**Status:** PASS / LOCKED FOR A5-T06 IMPLEMENTATION  
**Contract:** [`CR011_BOOTSTRAP_INTEGRATION_V02.md`](CR011_BOOTSTRAP_INTEGRATION_V02.md)

Locked the next bootstrap boundary to Bootstrap Core contract `0.2` / private package `0.2.0` and `create-zass-project@0.2.0`. The same six frozen root export names and the same `buildBootstrapPlan({ projectName, method, language })` input shape are preserved. The base plan adds `.zass/project.json` schema `0.1`; after A5-T07C, Full ZASS also includes the canonical local architecture-to-execution dependency. v0.1 remains immutable history.

Define next-version integration with Bootstrap Core/create-zass-project. Do not mutate 0.1.0. Do not silently break frozen Bootstrap Core v0.1 public API.

### A5-T06 — Implement versioned bootstrap generation

**Status:** PASS

Implemented Bootstrap Core contract `0.2` / private package `0.2.0` and `create-zass-project@0.2.0` source behavior. All 4 × 2 plans deterministically include `.zass/project.json` schema `0.1`; after A5-T07C, Full ZASS plans additionally include the canonical local architecture-to-execution dependency. Nested materialization and recursive snapshot verification are implemented; vendored Core remains synchronized; packed clean-install bootstrap smoke passes on Windows and Linux CI. Public `create-zass-project@0.1.0` remains the registry `latest` historical release and is not modified.

Generate CR-011 metadata in next bootstrap release for all supported methods and EN/MY; GitHub remains optional; packed tests updated; old 0.1.0 remains reproducible.

### A5-T07 — Two-shape field test

**Status:** PASS — CORRECTIVE RERUN COMPLETE  
**Receipt:** [`CR011_TWO_SHAPE_FIELD_TEST.md`](CR011_TWO_SHAPE_FIELD_TEST.md)

The initial field run exposed a Full-ZASS self-containment defect. A5-T07C corrected the v0.2 bootstrap contract so Full ZASS also materializes the canonical local dependency `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md` while preserving CR-010 Z003 and canonical Markdown links. Corrective Windows rerun: legacy/no-`.zass/` and generated Full-ZASS-with-`.zass/` both pass `zass check/status/diff`; generated machine metadata is VALID and diff remains `NO_CHANGE`.

Test one legacy project without .zass/ and one newly generated project with .zass/. Run zass check/status/diff and verify no authority or portability regression.

### A5-T08 — Documentation + migration guide

**Status:** PASS  
**Guide:** [`CR011_MACHINE_METADATA_GUIDE.md`](CR011_MACHINE_METADATA_GUIDE.md)

Documented what `.zass/` is and is not, legacy/no-`.zass/` compatibility, schema v0.1, loader/validation states, Z300–Z304 behavior, deterministic conflict handling, manual-edit policy, optional migration, no-auto-migration rules, upgrade/version policy, read/write ownership, and the distinction between published `create-zass-project@0.1.0` and repository-source `0.2.0`.

Document what .zass/ is/is not, legacy compatibility, schema version, error/conflict behavior, upgrade path and manual-edit policy.

### A5-T09 — CR-011 STOP / REVIEW

**Status:** PASS / FREEZE v0.1  
**Closure:** [`CR011_STOP_REVIEW_CLOSURE.md`](CR011_STOP_REVIEW_CLOSURE.md)

Final review accepted the implemented CR-011 machine-readable layer after loader/CLI regression evidence, Bootstrap v0.2 source integration, A5-T07C portability correction, two-shape Windows field rerun, and migration/documentation completion. CR-011 schema `0.1` is frozen and implementation is closed.

Outcome: PASS/FREEZE v0.1, CORRECTIVE PATCH, REWORK, or ROLLBACK. Only PASS closes CR-011 implementation.

## 4. TRACK D completion gate

TRACK D closes only when:
```text
A1 documentation truth        PASS
A2 zass-cli readiness         PASS
A3 zass-cli hardening         PASS
A4 public zass-cli            PUBLISHED / VERIFIED / CLOSED
A5 CR-011 .zass/              IMPLEMENTED / FIELD-TESTED / STOP-REVIEW PASS
```

Final TRACK D consistency audit completed. Closure receipt: [`ZASS_TRACK_D_STOP_REVIEW_CLOSURE.md`](ZASS_TRACK_D_STOP_REVIEW_CLOSURE.md).

## 5. After TRACK D

### CR-001 — Critical Assumption Ledger
Status: TEST candidate, NOT deferred by owner. It is not part of TRACK D. Evaluate separately only when explicitly chosen.

### CR-006 — Scale-out Multi-file Structure
Status: DEFERRED UNTIL TRACK D CLOSES.

After TRACK D, build only a TEST protocol to determine when single-file ZASS truly needs scale-out. Allowed: measurable trigger criteria, real large fixture, single-file baseline, experimental split model, comparison of portability/authority/validator/review cost. Not allowed: canonical folder migration, default structure change, mandatory multi-file layout. Implementation requires later owner decision.

### CR-007 — Operation / Post-production Lifecycle
Status: CLOSED FROM ZASS SCOPE / MOVED TO SEPARATE PROJECT. The owner has already opened the separate project thread. No further CR-007 work belongs in ZASS.