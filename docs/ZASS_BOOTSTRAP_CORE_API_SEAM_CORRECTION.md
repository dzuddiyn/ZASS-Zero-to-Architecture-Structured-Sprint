# ZASS Project Bootstrap Core v0.1 — Public API Seam Correction

**Status:** PASS — CORRECTION COMPLETE / REPEAT STOP-REVIEW PENDING  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Corrective commit under test:** `82830ecfa477fbb19ae13a9fe88bc521be70c5db`

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

At corrective commit:

```text
82830ecfa477fbb19ae13a9fe88bc521be70c5db
```

Windows results:

```text
Bootstrap Core  30/30 PASS
create-zass     24/24 PASS
combined        54/54 PASS
```

The previous 26 Core tests still pass, plus four new public-API/determinism tests.

## 7. GitHub Actions evidence

PR #47 ZASS CI passed after the source correction, including:

- zass-cli tests;
- Bootstrap Core tests;
- create-zass tests;
- repository consistency;
- historical baseline resolution;
- ZASS validator.

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
PR CI                                      PASS
```

**Corrective step = PASS.**

This does not itself overturn the historical STOP/REVIEW HOLD or perform stable freeze.

## 10. Next gate

```text
repeat STOP / REVIEW
→ if PASS, freeze stable Bootstrap Core contract
```

CrossAI integration and npm publication remain separately gated.
