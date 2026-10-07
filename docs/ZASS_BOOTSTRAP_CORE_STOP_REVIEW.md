# ZASS Project Bootstrap Core v0.1 — STOP / REVIEW

**Status:** HOLD — FUNCTIONAL / FIELD PASS, STABLE FREEZE BLOCKED BY API-SEAM CORRECTION  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Reviewed main:** `4feab7c96abb2ab3f3b551ce48d41715853293c7`

## 1. Review question

Is Bootstrap Core v0.1 ready to freeze as a stable external Core contract?

The review covers:

- contract fidelity;
- implementation and regression evidence;
- field behavior;
- Core/consumer ownership boundary;
- deterministic bootstrap semantics;
- public API readiness.

## 2. Evidence summary

### Contract fidelity — PASS

Implemented behavior matches the locked v0.1 direction:

- four methods;
- two languages;
- canonical Full-ZASS `ZASS.md` authority;
- exactly three bootstrap artifacts;
- localized consumer-neutral README;
- safe baseline `.gitignore`;
- deterministic default plan generation;
- plan validation;
- materialized snapshot verification;
- no Git/GitHub/Drive/CrossAI/network side effects from Core.

### Implementation / regression — PASS

Windows implementation evidence:

```text
bootstrap-core  26/26 PASS
create-zass     24/24 PASS
combined        50/50 PASS
```

Repository CI passed through implementation and field-test receipts, including:

- zass-cli tests;
- Bootstrap Core tests;
- create-zass tests;
- repository consistency;
- historical baseline resolution;
- ZASS validator.

### Field behavior — PASS

Field receipt:

[`ZASS_BOOTSTRAP_CORE_FIELD_TEST.md`](ZASS_BOOTSTRAP_CORE_FIELD_TEST.md)

Field evidence covered:

- ZASSPILL / English;
- ZASSELECTION / Bahasa Melayu;
- ZASSIMPLE / English;
- Full ZASS / Bahasa Melayu;
- Windows filesystem materialization;
- second consumer-style in-memory adapter;
- deterministic repeated plans;
- read-back verification;
- tamper rejection;
- Full-ZASS validator compatibility;
- consumer-neutral README semantics.

No field defect requiring a corrective behavior patch was found.

### Core / consumer boundary — PASS

The current ownership boundary remains correct:

```text
Bootstrap Core
→ project semantics / plan / validate / verify

create-zass
→ argv / prompts / target path / filesystem / cleanup / receipt

future CrossAI
→ storage orchestration / registration / projection / optional GitHub
```

## 3. Stable-freeze blocker found

The exported `buildBootstrapPlan` currently has this implementation shape:

```js
buildBootstrapPlan(
  { projectName, method, language },
  dependencies = {}
)
```

and accepts:

```js
dependencies.loadTemplate
```

as an override.

That means an external caller can theoretically do:

```js
buildBootstrapPlan(input, {
  loadTemplate: customLoader
})
```

and produce different method content for the same:

```text
projectName
method
language
Core release
```

This conflicts with the locked invariant:

> **Same project name + method + language + Core release → same bootstrap plan.**

The current create-zass consumer and field tests do not use this override, so normal behavior remains correct.

The problem is specifically **stable external API readiness**: a test/dependency-injection seam is currently exposed through the public exported function.

## 4. API-surface observation

The package currently exports `./src/index.js`, whose root surface includes both intended Core operations and several helper/catalog/template functions.

This is acceptable while the package remains private/provisional.

It must not be accidentally interpreted as the frozen stable API.

The stable-freeze step must explicitly distinguish:

- supported public consumer surface;
- internal/provisional helper surface.

This is not a field behavior defect, but it reinforces why freeze should not happen before the API-seam correction.

## 5. Required corrective work before freeze

Minimum corrective direction:

1. Public `buildBootstrapPlan` must become canonical and deterministic from explicit project input only.
2. Template-loader injection, if retained for tests/internal composition, must move behind a non-public/internal function or equivalent test seam.
3. The stable public export surface must be made explicit before freeze.
4. Existing create-zass behavior and all Core field/regression evidence must remain PASS after the correction.
5. Re-run targeted determinism/API tests and repository CI.

Do not broaden this correction into:

- new methods;
- new artifacts;
- CrossAI integration;
- Drive/GitHub integration;
- npm publication;
- lifecycle routing;
- methodology changes.

## 6. Review matrix

```text
Contract fidelity                 PASS
Core implementation              PASS
create-zass regression           PASS
Windows evidence                 PASS
Repository CI                    PASS
Field behavior                   PASS
Second-consumer verification     PASS
Core/consumer boundary           PASS
Default deterministic behavior   PASS
Stable public API readiness      HOLD
```

## 7. STOP / REVIEW decision

**STOP / REVIEW = HOLD FOR ONE PRE-FREEZE CORRECTION.**

Bootstrap Core v0.1 is functionally successful and field-validated.

It is **not yet eligible for stable external API freeze** because the public plan-builder signature still exposes a template override that can violate the deterministic Core invariant.

No stable freeze is performed by this review.

## 8. Next step

```text
correct public deterministic API seam
→ targeted regression / CI
→ repeat STOP / REVIEW
→ if PASS, freeze stable Bootstrap Core contract
```

CrossAI integration and npm publication remain separately gated.


## 9. Correction status

The blocker identified by this review was subsequently corrected.

Receipt:

[`ZASS_BOOTSTRAP_CORE_API_SEAM_CORRECTION.md`](ZASS_BOOTSTRAP_CORE_API_SEAM_CORRECTION.md)

Correction status:

```text
public template injection removed     PASS
root export surface narrowed          PASS
create-zass regression                PASS
Windows targeted tests                PASS
PR CI                                 PASS
```

This historical review remains a HOLD record. The correction does not retroactively convert this review to PASS.

Next gate: **repeat STOP / REVIEW**.
