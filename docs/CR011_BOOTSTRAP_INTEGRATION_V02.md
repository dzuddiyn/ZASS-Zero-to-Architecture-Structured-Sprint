# CR-011 — Bootstrap Integration / Version Contract

**Status:** LOCKED FOR A5-T06 IMPLEMENTATION  
**Date:** 2026-10-08  
**Track:** TRACK D — A5  
**Task:** A5-T05  
**CR:** CR-011

> **Bootstrap Core v0.1 stays frozen history. CR-011 enters through an explicit v0.2 contract boundary.**

## 1. Version decision

The next bootstrap generation line is locked as:

```text
Bootstrap Core contract: 0.2
bootstrap-core package:   0.2.0 (private/internal)
create-zass-project:      0.2.0 (next public candidate)
CR-011 metadata schema:   0.1
```

These version numbers are deliberately different concepts:

- Core contract `0.2` versions bootstrap-plan semantics.
- npm/package `0.2.0` versions the implementation release.
- `.zass/project.json` `schemaVersion: "0.1"` versions the persisted machine metadata schema.

The machine schema does **not** become `0.2` merely because the Bootstrap Core contract becomes `0.2`.

## 2. Historical immutability

The following are immutable historical releases/contracts:

```text
create-zass-project@0.1.0
Bootstrap Core contract v0.1
bootstrap-core@0.1.0 source/release semantics
three-artifact v0.1 bootstrap plan
```

A5 implementation MUST NOT rewrite history to pretend v0.1 generated `.zass/`.

Reproduction of the 0.1.0 release from its historical source remains valid evidence that v0.1 did not include persisted machine metadata.

## 3. Why this is a minor-version boundary

CR-011 adds a new durable generated artifact:

```text
.zass/project.json
```

Therefore the deterministic bootstrap artifact plan changes from:

```text
v0.1
[selected method file]
README.md
.gitignore
```

to:

```text
v0.2
[selected method file]
README.md
.gitignore
.zass/project.json
```

This is additive for end users but changes frozen Core plan semantics and snapshot expectations. It MUST NOT be smuggled into Core v0.1.

## 4. Frozen public API compatibility

Bootstrap Core v0.1 froze these six root exports:

```js
CORE_CONTRACT_VERSION
METHOD_CHOICES
LANGUAGE_CHOICES
getBootstrapDescriptor
buildBootstrapPlan
verifyBootstrapSnapshot
```

Core v0.2 MUST preserve these same six root export names and the same `buildBootstrapPlan({ projectName, method, language })` input call shape.

No new mandatory input parameter is introduced for CR-011.

However:

```text
CORE_CONTRACT_VERSION
0.1 → 0.2
```

and the returned plan semantics explicitly change to include the fourth metadata artifact.

This is a versioned semantic change, not a silent v0.1 mutation.

Internal validators/helpers remain non-public unless separately authorized.

## 5. Core v0.2 plan shape

The v0.2 plan remains structurally compatible with the v0.1 envelope:

```json
{
  "contractVersion": "0.2",
  "project": {
    "name": "my-project",
    "method": "zassimple",
    "language": "en",
    "methodFile": "ZASSIMPLE_EN.md"
  },
  "files": []
}
```

The deterministic base `files` sequence is:

1. selected method file;
2. `README.md`;
3. `.gitignore`;
4. `.zass/project.json`.

For Full ZASS (`method = zass`) only, the plan MUST also include the canonical local dependency referenced by `ZASS.md`:

5. `docs/ZASS_ARCHITECTURE_TO_EXECUTION_STANDARD.md` with role `method-dependency`.

ZASSPILL, ZASSELECTION and ZASSIMPLE remain four-artifact plans. Full ZASS is therefore a five-artifact plan. This corrective exception preserves the canonical local link and CR-010 Z003 semantics while making a generated Full-ZASS project self-contained.

## 6. Exact generated machine artifact

Core v0.2 owns generation of:

```text
.zass/project.json
```

Its semantic content MUST be exactly the CR-011 v0.1 shape:

```json
{
  "schemaVersion": "0.1",
  "project": {
    "name": "my-project",
    "method": "zassimple",
    "language": "en",
    "methodFile": "ZASSIMPLE_EN.md"
  }
}
```

Values MUST come from the same validated bootstrap input and method/language descriptor already used by the plan.

The Core MUST NOT derive these fields from rendered README text or from filesystem state.

The generated JSON MUST end with a newline and use deterministic pretty formatting:

```text
JSON.stringify(metadata, null, 2) + "\n"
```

Key ordering is fixed by the construction order shown above for reproducible package tests. Semantic readers still treat key order/whitespace as non-authoritative.

## 7. Metadata artifact role

The v0.2 plan file entry is locked as:

```js
{
  path: '.zass/project.json',
  role: 'machine-metadata',
  content: '...'
}
```

No second machine file is generated in v0.2.

No runtime/account/Git/GitHub/CrossAI/Drive/timestamp state is added.

## 8. Core ownership

Bootstrap Core v0.2 owns:

- generation of the deterministic machine metadata object;
- serialization of `.zass/project.json`;
- exact artifact path and role;
- inclusion in plan validation;
- inclusion in materialized snapshot verification;
- the existing 4 × 2 method/language mapping used by the metadata.

The Core remains pure bootstrap semantics and MUST NOT:

- create directories;
- write files;
- inspect Git;
- call network services;
- register CrossAI;
- infer runtime state.

## 9. create-zass-project@0.2.0 ownership

The CLI consumer continues to own filesystem materialization.

Because the v0.2 plan introduces a nested path, `create-zass-project@0.2.0` MUST upgrade materialization behavior so that, for every plan file:

```text
create parent directories as needed
→ write exact plan content
```

The consumer MUST create only directories required by plan paths. For v0.2 this includes:

```text
.zass/
```

It MUST NOT invent other folders.

Failure after target creation must retain the existing all-or-cleanup behavior: remove the partially created project directory.

## 10. Recursive snapshot boundary

Current v0.1 CLI snapshot verification enumerates only project-root entries. That is insufficient for `.zass/project.json`.

For v0.2, consumer snapshot collection MUST recursively include planned files using project-root-relative POSIX-style artifact paths:

```text
ZASSIMPLE_EN.md
README.md
.gitignore
.zass/project.json
```

Rules:

- recursion is local filesystem only;
- directories themselves are not snapshot file artifacts;
- path separators in semantic plan/snapshot paths are `/` on all OSes;
- filesystem joins may use native separators internally;
- no parent traversal;
- no absolute artifact paths.

`verifyBootstrapSnapshot(plan, snapshot)` remains the public verifier and must verify the fourth artifact.

## 11. Plan validation additions

Core v0.2 plan validation MUST additionally reject:

- missing `.zass/project.json`;
- duplicate machine metadata artifact;
- wrong machine metadata path;
- wrong role;
- malformed JSON content;
- schema other than `0.1`;
- metadata project values differing from `plan.project`;
- machine methodFile differing from canonical descriptor mapping;
- unsafe nested path semantics.

Validation MUST NOT assign decision/architecture authority to metadata.

## 12. Determinism invariant

Core v0.2 preserves:

```text
same projectName
+ same method
+ same language
+ same Core release
= same four-artifact bootstrap plan
```

No timestamp, UUID, host path, Git state, account ID, provider ID or network-derived value may enter `.zass/project.json`.

## 13. Method/language matrix

A5-T06 MUST prove machine metadata generation for all eight combinations:

```text
zasspill      + en
zasspill      + my
zasselection  + en
zasselection  + my
zassimple     + en
zassimple     + my
zass          + en
zass          + my
```

The method file mapping is unchanged from Core v0.1.

Full ZASS retains:

```text
zass + en → ZASS.md
zass + my → ZASS.md
```

Only the explicit metadata `language` distinguishes those two bootstrap identities; generated prose is not heuristically parsed.

## 14. Vendoring/package boundary

`create-zass-project` currently ships a vendored Bootstrap Core implementation under:

```text
create-zass/vendor/bootstrap-core/
```

For `create-zass-project@0.2.0`, the package MUST vendor the exact Core v0.2 implementation used by repository tests.

The packed public candidate MUST NOT depend on:

- repository-relative `file:` dependencies;
- the monorepo existing at runtime;
- network access to obtain Bootstrap Core.

Packed-artifact tests must prove the vendored Core and templates are self-contained.

## 15. Source-of-truth rule for vendored Core

The canonical implementation source remains:

```text
bootstrap-core/
```

The vendored copy is a distribution artifact, not a second independent implementation.

A5-T06 MUST update/synchronize the vendor copy from the canonical Core v0.2 source and retain regression checks that detect divergence.

Do not hand-evolve two separate Core implementations.

## 16. README and success receipt

The generated project README remains consumer-neutral and keeps existing v0.1 meaning.

It MAY mention the existence/purpose of `.zass/project.json` only if that wording is added deterministically and localized consistently; such documentation is optional for A5-T06 because A5-T08 owns the migration/documentation pass.

The CLI success receipt for `create-zass-project@0.2.0` MUST truthfully include `.zass/project.json` in its created-file list because that list derives from the plan.

No claim of Git/GitHub/CrossAI registration is added.

## 17. zass-cli relationship

A5-T02/T03/T04 already implemented reader/validation behavior in repository source.

A5-T05 does **not** authorize a new public `zass-cli` publish and does not assign its next npm version.

The bootstrap v0.2 generation must emit metadata conforming to the locked CR-011 schema that the current repository CLI implementation understands.

Any future public zass-cli release/version decision is a separate release gate.

## 18. No automatic migration

`create-zass-project@0.2.0` affects only newly bootstrapped projects.

It MUST NOT:

- scan existing projects;
- add `.zass/` to existing directories;
- mutate existing Markdown;
- upgrade old generated projects automatically.

Legacy projects remain supported without metadata.

## 19. Acceptance for A5-T06

A5-T06 may close only after proving:

- Core contract reports `0.2`;
- package source reports `bootstrap-core@0.2.0`;
- `create-zass-project` source reports `0.2.0`;
- same six frozen root API names remain exported;
- all non-Full-ZASS plans contain exactly four artifacts and both Full-ZASS plans contain exactly five artifacts including the canonical architecture-to-execution dependency;
- every generated `.zass/project.json` matches CR-011 schema 0.1;
- nested materialization works on Windows;
- recursive snapshot verification passes;
- deliberate metadata tampering is rejected;
- template/vendor synchronization remains enforced;
- packed `create-zass-project@0.2.0` clean-install/bootstrap smoke passes;
- historical `create-zass-project@0.1.0` publication is not modified.

## 20. STOP conditions

Implementation MUST stop and return to contract review if it requires:

- changing the four-method/two-language catalog;
- changing authority filenames;
- adding new mandatory bootstrap inputs;
- changing/removing any of the six frozen root export names;
- adding semantic authority to `.zass/`;
- adding network/CrossAI/GitHub/Drive runtime dependency;
- automatic legacy migration;
- more than one persisted CR-011 machine file;
- changing CR-011 schemaVersion from `0.1`.

## 21. Locked execution statement

A5-T06 implementation target is:

```text
Bootstrap Core v0.2 / 0.2.0
        ↓
same public call shape + same six export names
        ↓
deterministic base plan + Full-ZASS local dependency closure
        ↓
create-zass-project@0.2.0
        ↓
nested local materialization + recursive verification
        ↓
new projects contain .zass/project.json schema 0.1
```

**A5-T05 disposition: PASS / LOCKED FOR A5-T06 IMPLEMENTATION.**
