# ZASS Project Bootstrap Core v0.1 — Public API Seam Correction

**Status:** CORRECTION PASS — MERGE HOLD / BASE MAIN CI RED — REPEAT STOP-REVIEW PENDING  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Corrective commit under test:** `7932ecca2358f6a85d11af9cf7b89a1a39769fed`

## 1. Trigger

The first Bootstrap Core STOP/REVIEW held stable freeze because public `buildBootstrapPlan` accepted a second dependency-injection argument:

```js
buildBootstrapPlan(input, dependencies)
```

A consumer could provide a custom template loader and produce a different plan for the same project name + method + language + Core release.

That conflicted with the locked deterministic invariant.

Review receipt:

[`ZASS_BOOTSTRAP_CORE_STOP_REVIEW.md`](ZASS_BOOTSTRAP_CORE_STOP_REVIEW.md)

## 2. Correction

Public plan construction is now:

```js
buildBootstrapPlan({
  projectName,
  method,
  language
})
```

The public function always uses the canonical bundled Core template loader.

There is no public template-loader injection argument.

No separate internal injection seam was retained because current Core tests do not require one.

## 3. Public root surface

The provisional package root now exports only:

```text
CORE_CONTRACT_VERSION
METHOD_CHOICES
LANGUAGE_CHOICES
buildBootstrapPlan
validateBootstrapInput
validateBootstrapPlan
verifyBootstrapSnapshot
```

Removed from the root surface:

```text
getBootstrapDescriptor
getLanguageDescriptor
getMethodDescriptor
isSupportedLanguage
isSupportedMethod
GITIGNORE_CONTENT
buildProjectReadme
loadBootstrapTemplate
isSafeArtifactPath
validateProjectName
```

Those remain implementation details inside the Core package rather than consumer-facing root API.

The package `exports` field already exposes only the root entrypoint, so package consumers do not receive supported deep-import subpaths.

## 4. create-zass adaptation

`create-zass` was updated to consume only the narrowed public Core root surface.

It now derives CLI display labels from:

```text
METHOD_CHOICES
LANGUAGE_CHOICES
```

and continues to use:

```text
buildBootstrapPlan
verifyBootstrapSnapshot
```

No create-zass user behavior was intentionally changed.

## 5. Targeted determinism proof

New Core tests prove:

```text
buildBootstrapPlan.length = 1
```

and deliberately attempt:

```js
buildBootstrapPlan(input, {
  loadTemplate: customLoader
})
```

The extra argument is ignored by the one-input public function:

```text
custom loader called = false
result = canonical plan
tampered template content absent
```

A separate root-surface test also asserts the exact intended provisional public export set and verifies that low-level helpers are not exported.

## 6. Windows regression evidence

The correction was first tested at `82830ecfa477fbb19ae13a9fe88bc521be70c5db`, then rebased cleanly onto the newer main commit that introduced ZASS SYSTEM v0.2.1 / ZASSIMPLE v0.3.1.

Rebased corrective commit:

```text
7932ecca2358f6a85d11af9cf7b89a1a39769fed
```

The affected Core template copies were resynchronized to the newer canonical ZASSIMPLE / Full-ZASS method files before retesting.

Windows results after rebase:

```text
Bootstrap Core  30/30 PASS
create-zass     24/24 PASS
combined        54/54 PASS
```

The previous 26 Core tests still pass, plus four new public-API/determinism tests.

## 7. GitHub Actions evidence

Before the concurrent main change, PR #47 source correction reached a fully green ZASS CI run.

After rebasing onto current main `71881110a70681eaaf96ecee6af26c50b96a2bfb`, the PR run showed:

```text
zass-cli tests        PASS
Bootstrap Core tests  PASS
create-zass tests     PASS
repository consistency FAIL
```

The repository-consistency failure is inherited from the new base main, not introduced by this correction.

Evidence:

- main workflow run #160 at `71881110a70681eaaf96ecee6af26c50b96a2bfb` was already FAIL before the rebased correction could merge;
- PR #47 run #161 passed all three code/test layers before failing at repository consistency;
- the PR log reports the inherited consistency errors:
  - ZASS SYSTEM version mismatch;
  - UI contract T-013A current-state marker missing;
  - UI contract T-013B current-state marker missing.

The correction therefore has targeted implementation proof, but **repo-wide CI is not green** and merge remains HOLD until the unrelated base-main consistency issue is resolved.

## 8. Scope discipline

This correction did not add or change:

- ZASS methods;
- bootstrap artifact set;
- method/language mappings;
- Full-ZASS authority filename;
- README semantics;
- `.gitignore` semantics;
- CrossAI integration;
- Drive integration;
- Git/GitHub integration;
- npm publication;
- lifecycle routing.

## 9. Correction verdict

```text
public template injection removed          PASS
same-input canonical plan enforced         PASS
root export surface narrowed               PASS
create-zass regression preserved           PASS
Windows targeted regression                PASS
PR targeted test layers                    PASS
repo-wide CI                               HOLD — inherited base-main failure
merge                                      HOLD
```

**Corrective code step = PASS. Integration/merge gate = HOLD because current base main is already CI-red.**

This does not itself overturn the historical STOP/REVIEW HOLD or perform stable freeze.

## 10. Next gate

```text
restore current main repository consistency
→ merge API-seam correction
→ repeat STOP / REVIEW
→ if PASS, freeze stable Bootstrap Core contract
```

CrossAI integration and npm publication remain separately gated.
