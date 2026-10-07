# ZASS Project Bootstrap Core v0.1 — Implementation Contract

**Status:** LOCKED — IMPLEMENTED / WINDOWS + CI PASS — FIELD TEST PENDING — STABLE FREEZE PENDING  
**Date:** 2026-10-07  
**Owner:** Project Owner  
**Track:** ZASS TRACK B  
**Scope:** Shared deterministic project-bootstrap semantics for create-zass and future CrossAI Create Project

> **One bootstrap meaning. Multiple consumers. No duplicated project semantics.**

## 1. Purpose

The Bootstrap Core defines what a new ZASS project initially contains.

It is shared semantics, not a CLI, filesystem tool, Drive client, Git client, GitHub client, or CrossAI registry client.

Consumers provide explicit project intent:

```text
project name
method
language
```

The Core returns one deterministic bootstrap plan.

Consumers then materialize that plan in their own storage environment.

## 2. Consumers

Initial consumer:

```text
create-zass
```

Future consumer:

```text
CrossAI Create Project
```

The same input semantics must converge on the same ZASS artifact plan.

CrossAI integration itself is NOT implemented by this contract.

## 3. Core boundary

### Core owns

- official bootstrap method catalog;
- method/language mapping;
- active method authority filename;
- canonical bundled bootstrap assets;
- minimal generated artifact set;
- generated README semantics;
- safe baseline `.gitignore`;
- deterministic project metadata;
- bootstrap-plan validation;
- materialized-artifact verification semantics.

### Core does NOT own

- CLI argv parsing;
- terminal prompts;
- target filesystem path;
- existing-directory policy;
- filesystem permissions;
- local rollback/cleanup;
- Google Drive API;
- CrossAI project registration;
- Git initialization;
- GitHub create/link/auth;
- telemetry;
- AI API calls;
- application/framework scaffolding;
- npm publication UX;
- user authentication.

## 4. Determinism invariant

For the same:

```text
projectName
method
language
core/template release
```

the Core must produce the same bootstrap plan.

The plan must not contain runtime-dependent values such as:

- current timestamp;
- random UUID;
- machine path;
- hostname;
- user ID;
- Google Drive ID;
- CrossAI ID;
- Git commit state;
- GitHub state.

External systems may add their own operational identifiers outside the Core artifact semantics.

## 5. Input contract

Provisional v0.1 API concept:

```js
buildBootstrapPlan({
  projectName,
  method,
  language
})
```

Allowed methods:

```text
zasspill
zasselection
zassimple
zass
```

Allowed languages:

```text
en
my
```

`projectName` must be:

- a non-empty string;
- a single line;
- free of NUL/control-line-break content.

The Core does not interpret a filesystem path. The consumer derives or supplies a display project name.

## 6. Method mapping

The Core owns this mapping.

### ZASSPILL

```text
zasspill + en → ZASSPILL_EN.md
zasspill + my → ZASSPILL_MY.md
```

### ZASSELECTION

```text
zasselection + en → ZASSELECTION_EN.md
zasselection + my → ZASSELECTION_MY.md
```

### ZASSIMPLE

```text
zassimple + en → ZASSIMPLE_EN.md
zassimple + my → ZASSIMPLE_MY.md
```

### Full ZASS

```text
zass + en → ZASS.md
zass + my → ZASS.md
```

Full ZASS Bahasa Melayu uses Bahasa Melayu content under the canonical project authority filename `ZASS.md`.

This preserves compatibility with current `zass check/status/diff` discovery.

## 7. Minimal artifact plan

Every v0.1 bootstrap plan contains exactly three ZASS-owned project artifacts:

```text
[selected method file]
README.md
.gitignore
```

No Core-generated:

- ACTION_PLAN.md;
- ARCHITECTURE.md;
- TASKS.md;
- DESIGN.md;
- package.json;
- application source;
- `.zass/`;
- Git metadata;
- CrossAI metadata file.

Those may appear later through the active workflow or another explicitly locked contract.

## 8. Plan shape

Provisional v0.1 semantic shape:

```json
{
  "contractVersion": "0.1",
  "project": {
    "name": "my-project",
    "method": "zassimple",
    "language": "en",
    "methodFile": "ZASSIMPLE_EN.md"
  },
  "files": [
    {
      "path": "ZASSIMPLE_EN.md",
      "role": "method",
      "content": "..."
    },
    {
      "path": "README.md",
      "role": "readme",
      "content": "..."
    },
    {
      "path": ".gitignore",
      "role": "gitignore",
      "content": "..."
    }
  ]
}
```

File ordering is deterministic:

1. method;
2. README;
3. gitignore.

This shape is locked for v0.1 implementation, but is not yet the frozen stable external API. Stable freeze happens only after field testing.

## 9. Initial project metadata

Core metadata is in-memory plan metadata, not a new persisted metadata file.

The Core records only:

- project name;
- method;
- language;
- active method filename;
- Core contract version.

It does not persist:

- account identity;
- CrossAI registration ID;
- Drive folder ID;
- GitHub repository URL;
- Git SHA;
- created timestamp.

Those belong to consumer/orchestration layers.

## 10. README semantics

The Core owns the common README content because README meaning must not diverge between CLI and CrossAI-created projects.

README must state:

- project name;
- selected ZASS method;
- selected language;
- active method filename;
- one clear next action;
- warning not to store passwords/API keys/tokens/sensitive personal data in tracked ZASS Markdown.

README must remain consumer-neutral.

It must NOT claim:

- Git is initialized or not initialized;
- GitHub is connected or not connected;
- CrossAI is registered or not registered;
- Drive exists or does not exist;
- remote save status;
- validation PASS;
- architecture readiness.

Consumer-specific factual state belongs in the consumer receipt/UI, not the durable common README.

README should follow the selected language:

```text
en → English README
my → Bahasa Melayu README
```

## 11. .gitignore semantics

Core v0.1 includes a technology-neutral safety baseline:

```gitignore
.env
.env.*
!.env.example
.secrets/
*.key
*.pem
```

The file is generated even when Git is not enabled.

Its presence does not imply Git initialization.

## 12. Template authority

After Core implementation, bootstrap template ownership moves from `create-zass/templates/` to the Bootstrap Core package/module.

There must be one bootstrap template source used by all consumers.

Canonical repository method files remain the method authority:

```text
ZASSPILL/ZASSPILL_EN.md
ZASSPILL/ZASSPILL_MY.md
ZASSELECTION/ZASSELECTION_EN.md
ZASSELECTION/ZASSELECTION_MY.md
ZASSIMPLE/ZASSIMPLE_EN.md
ZASSIMPLE/ZASSIMPLE_MY.md
ZASS.md
ZASS_MY.md
```

Core template assets must have regression coverage proving they remain synchronized with those canonical method files for this release.

`create-zass` must stop owning an independent duplicate template catalog after the refactor.

## 13. Core validation

The Core must expose deterministic plan validation.

Provisional concept:

```js
validateBootstrapPlan(plan)
```

It returns a structured result rather than inventing project progress:

```json
{
  "ok": true,
  "errors": []
}
```

Validation must detect at least:

- invalid method;
- invalid language;
- invalid project name;
- unexpected/missing artifact;
- duplicate artifact path;
- unsafe absolute or parent-traversal path;
- wrong active method filename;
- empty method content;
- README inconsistent with project metadata;
- missing required secret-oriented gitignore baseline.

Provisional diagnostic families may use `Bxxx` codes. Exact codes become stable only at the later Core freeze gate.

## 14. Materialized verification

The Core must also support verifying artifacts read back from a consumer's storage.

Provisional concept:

```js
verifyBootstrapSnapshot(plan, snapshot)
```

where `snapshot` contains the ZASS bootstrap artifact paths and contents read from the materialized project space.

Verification checks:

- expected artifact set;
- correct artifact paths;
- content matches the approved plan;
- no missing bootstrap artifact.

This enables:

```text
Core plan
→ filesystem / Drive / other authorized storage
→ read back
→ same Core verification semantics
```

Consumer-specific extra operational records are outside the snapshot being verified.

## 15. Materialization boundary

The Core does not create a local directory or Drive folder itself.

The consumer owns materialization.

### create-zass owns

- resolving target path;
- refusing an existing target;
- creating the directory;
- writing Core plan files;
- local partial-failure cleanup;
- CLI receipt/output.

### CrossAI owns later

- owner-approved project-space creation;
- Drive/storage orchestration;
- writing the Core plan;
- read-back verification;
- CrossAI registration;
- index/projection refresh;
- optional GitHub workflow;
- operational recovery around those external systems.

This prevents filesystem assumptions from becoming ZASS semantics.

## 16. create-zass refactor target

Current local implementation:

```text
create-zass
├── method/template semantics
├── README/.gitignore semantics
├── filesystem materialization
└── CLI UX
```

Target:

```text
Bootstrap Core
├── method/template semantics
├── README/.gitignore semantics
├── buildBootstrapPlan()
└── validate / verify

create-zass
├── argv
├── prompt
├── filesystem target policy
├── materialize Core plan
├── cleanup
└── console receipt
```

The refactor must preserve the already locked create-zass v0.1 user behavior unless this Core contract explicitly changes a shared semantic, such as localized consumer-neutral README content.

## 17. CrossAI consumption contract

CrossAI must not reproduce method/file mapping independently.

Future CrossAI flow:

```text
CrossAI UX selects explicit method/language
            ↓
buildBootstrapPlan(...)
            ↓
create durable project space
            ↓
write plan
            ↓
read back
            ↓
verifyBootstrapSnapshot(...)
            ↓
register CrossAI project
            ↓
optional GitHub
```

CrossAI registration success is a separate factual state from Bootstrap Core success.

The Core returning `ok` does not mean CrossAI registration, Drive creation, Git, or GitHub succeeded.

## 18. Packaging boundary

Core code should live in a dedicated repository package/module area, provisionally:

```text
bootstrap-core/
├── package.json
├── src/
├── templates/
└── test/
```

Initial package/module identity may remain private.

Do not freeze npm registry distribution strategy in v0.1.

Before public `create-zass` publication, the project must explicitly decide how the Core is included:

- published dependency;
- bundled dependency;
- another proven package-artifact approach.

A local `file:` dependency is acceptable for repository development but is not by itself publication proof.

## 19. No side effects

Calling the semantic Core must not:

- create directories;
- write files;
- delete files;
- run Git;
- call GitHub;
- call Google Drive;
- register CrossAI;
- call an AI provider;
- send telemetry;
- access network services;
- install dependencies.

Template loading from package-owned local assets is permitted inside the Core package implementation.

## 20. Error/authority semantics

Core success means:

```text
a valid bootstrap plan was produced / verified
```

It does NOT mean:

- project remotely persisted;
- Git enabled;
- GitHub enabled;
- CrossAI registered;
- project method progress exists;
- architecture is ready;
- Full-ZASS validator PASS.

The Core must not infer lifecycle progress.

## 21. Implementation slice

The next implementation step is bounded to:

1. create private `bootstrap-core/` module/package;
2. move shared method/language catalog and bootstrap templates into Core;
3. implement deterministic plan builder;
4. implement plan validator;
5. implement materialized snapshot verifier;
6. generate localized consumer-neutral README;
7. keep safe baseline gitignore in Core;
8. refactor `create-zass` to consume Core;
9. keep CLI prompts/target policy/materialization/cleanup in `create-zass`;
10. preserve all existing create-zass acceptance behavior;
11. add Core unit tests and CLI regression tests;
12. keep both packages private/unpublished.

Do not integrate CrossAI in this implementation slice.

## 22. Acceptance before field test

Implementation must prove:

- all 4 × 2 method/language plans;
- deterministic plan output;
- exact authority filename mapping;
- English/Bahasa Melayu README behavior;
- exact minimal artifact set;
- unsafe path rejection;
- invalid input rejection;
- template synchronization;
- plan validator PASS/FAIL fixtures;
- materialized snapshot PASS/FAIL fixtures;
- Core has no filesystem/network/external-system side effects;
- create-zass uses Core rather than an independent catalog/template copy;
- existing target refusal remains CLI-owned;
- partial local cleanup remains CLI-owned;
- create-zass Windows tests remain PASS;
- repository CI remains PASS.

## 23. Field-test gate

After implementation, run bootstrap field testing using at least:

- one ZASSPILL project;
- one ZASSELECTION project;
- one ZASSIMPLE project;
- one Full-ZASS project;
- both English and Bahasa Melayu represented;
- Windows local materialization;
- at least one second consumer-style adapter/snapshot simulation distinct from the CLI filesystem path.

Field evidence must specifically check whether generated artifacts are understandable and whether Core/consumer boundaries remain truthful.

## 24. Stable freeze gate

The v0.1 contract is LOCKED for implementation but NOT YET the stable external Core contract.

After field testing:

```text
STOP / REVIEW
→ correct field defects if any
→ freeze stable Bootstrap Core contract
```

Only then should CrossAI consumption or public package-distribution architecture treat the Core interface as stable.

## 25. Deferred

Not part of Core v0.1 implementation:

- CrossAI Create Project integration;
- Google Drive adapter;
- Git/GitHub adapter;
- public npm publication;
- template update over network;
- method recommendation engine;
- lifecycle routing engine;
- existing-project migration;
- merge/overwrite mode;
- application scaffolding;
- persisted `.zass/` metadata;
- telemetry.

## 26. Locked principles

> **The Core defines what a ZASS project begins as; consumers decide where and how that plan is materialized.**

> **Same method + language + project name + Core release → same bootstrap plan.**

> **CrossAI and create-zass must consume shared bootstrap semantics, not maintain competing project creators.**


## 27. Implementation receipt

The locked v0.1 contract is implemented as a private shared module:

```text
bootstrap-core/
├── package.json
├── src/
├── templates/
└── test/
```

Package identity:

```text
zass-bootstrap-core@0.1.0
private: true
```

Implemented Core surface:

```js
buildBootstrapPlan(...)
validateBootstrapInput(...)
validateBootstrapPlan(...)
verifyBootstrapSnapshot(...)
```

Additional shared catalog/read helpers remain internal/provisional support surfaces until the stable freeze gate.

### Shared ownership now implemented

`bootstrap-core` owns:

- the four-method/two-language catalog;
- authority filename mapping;
- the single bundled bootstrap template source;
- deterministic three-artifact bootstrap plans;
- English/Bahasa Melayu consumer-neutral README generation;
- the secret-oriented `.gitignore` baseline;
- bootstrap input and plan validation;
- materialized snapshot verification.

`create-zass` now consumes the Core and owns only:

- argv and interactive prompts;
- local target path/preflight;
- existing-target refusal;
- filesystem materialization;
- partial-failure cleanup;
- console receipt.

The previous `create-zass/templates/`, `create-zass/src/templates.js`, and create-zass template-sync test were removed. There is no longer an independent create-zass template/catalog source.

### Windows evidence

Temporary Windows field environment at implementation commit:

```text
3446312f6189ddaf5afc0cb95de96f64bb611422
```

Results:

```text
bootstrap-core tests  26/26 PASS
create-zass tests     24/24 PASS
combined              50/50 PASS
```

Evidence included:

- all 4 × 2 method/language Core plans;
- deterministic repeated plans;
- English/Bahasa Melayu consumer-neutral README behavior;
- Full-ZASS `ZASS.md` authority mapping;
- invalid-input fixtures;
- unsafe/duplicate/missing/unexpected artifact fixtures;
- stale README / empty method / incomplete gitignore fixtures;
- snapshot PASS and FAIL fixtures;
- template synchronization against canonical repository method files;
- proof that Core planning does not materialize files/directories;
- create-zass existing-target refusal;
- create-zass partial cleanup;
- create-zass CLI regression behavior.

### GitHub Actions evidence

PR #44 ZASS CI PASS with:

- existing zass-cli tests;
- Bootstrap Core tests;
- create-zass tests;
- repository consistency;
- historical baseline resolution;
- ZASS validator.

### Implementation conclusion

Bootstrap Core v0.1 implementation: **PASS for implementation gate**.

This does **not** freeze the stable external API.

Next gate remains:

```text
field-test bootstrap
→ STOP / REVIEW
→ freeze stable Bootstrap Core contract
```

CrossAI integration, Drive adapter, Git/GitHub integration and npm publication remain outside this implementation step.
