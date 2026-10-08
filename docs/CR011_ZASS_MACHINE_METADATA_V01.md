# CR-011 — `.zass/` Machine Metadata Contract v0.1

**Status:** LOCKED FOR IMPLEMENTATION  
**Date:** 2026-10-08  
**Track:** TRACK D — A5  
**Change request:** CR-011  
**Contract version:** 0.1  
**Owner authority:** Project Owner approval already opens A5 implementation; this document resolves the v0.1 implementation contract.

> **Markdown = semantic authority. `.zass/` = machine metadata companion.**

## 1. Purpose

CR-011 adds a small, local, machine-readable project descriptor so tooling can identify stable project metadata without repeatedly re-deriving it from human-oriented Markdown.

v0.1 exists to carry only durable bootstrap/project identity facts:

- project display name;
- selected ZASS method;
- selected language;
- active method filename;
- machine metadata schema version.

The layer is intentionally small. It supports deterministic local tooling and future versioned bootstrap generation without replacing Markdown.

## 2. Non-purpose

CR-011 v0.1 is **not**:

- a second Source of Truth for decisions, architecture, evidence, plans, tasks or progress;
- a decision ledger;
- an architecture state database;
- a cache of parsed Markdown semantics;
- a CrossAI/AISYNC registration record;
- account or authorization state;
- Git/GitHub state;
- cloud/Drive state;
- a runtime database;
- a telemetry/logging surface;
- a secret store;
- a place for model/provider memory;
- a migration requirement for existing projects.

It MUST NOT persist:

- LOCKED/SUPERSEDED decisions;
- architecture readiness/progress;
- ACTION_PLAN task status;
- evidence confidence;
- Git SHA/branch/remote;
- GitHub repository URL;
- account/user identifiers;
- CrossAI project IDs;
- Drive folder IDs;
- timestamps whose only purpose is runtime/audit history;
- auth tokens, API keys, passwords or secrets.

## 3. Authority model

The authority order is locked:

```text
Human-owner LOCKED decisions / canonical Markdown semantics
        ↓
canonical ZASS method Markdown
        ↓
ACTION_PLAN.md / ARCHITECTURE.md according to existing ZASS contracts
        ↓
.zass/project.json machine companion
```

Rules:

1. `.zass/project.json` never overrides Markdown semantics.
2. A conflict is surfaced; it is never silently reconciled in favor of `.zass/`.
3. zass-cli MUST NOT rewrite canonical Markdown to make it match machine metadata.
4. zass-cli MUST NOT mutate `.zass/project.json` during `check`, `status`, or `diff`.
5. Absence of `.zass/` never makes a previously valid legacy project invalid.
6. CR-011 introduces no new owner/AI decision authority.

## 4. Exact persisted surface

CR-011 v0.1 reserves one directory and one file:

```text
.zass/
└── project.json
```

No other `.zass/` file is part of the v0.1 contract.

Implementations MUST NOT invent mandatory files such as:

- `.zass/state.json`;
- `.zass/decisions.json`;
- `.zass/cache.json`;
- `.zass/history.json`;
- `.zass/lock.json`.

Future files require a separately versioned contract.

## 5. File encoding and format

`.zass/project.json` MUST be:

- UTF-8 JSON;
- one JSON object at the root;
- parseable by the standard JSON parser;
- free of comments/trailing-comma extensions;
- portable across Windows, Linux and macOS path handling.

Formatting/indentation and object-key order are non-semantic.

Unknown top-level or nested fields are not part of v0.1 authority. The v0.1 loader MAY preserve them when merely reading raw data, but validation MUST report them as unsupported metadata rather than assigning meaning to them. No current command auto-removes them.

## 6. Canonical v0.1 shape

Minimum and complete supported v0.1 shape:

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

All five leaf values above are required.

### 6.1 `schemaVersion`

Exact supported value in this contract:

```text
0.1
```

It is a string, not a number.

### 6.2 `project.name`

Must be:

- a non-empty string;
- a single line;
- free of NUL/control line-break content.

It is a display/project identity name, not a filesystem path and not an authority over the containing directory name.

### 6.3 `project.method`

Allowed values only:

```text
zasspill
zasselection
zassimple
zass
```

These values reuse the frozen Bootstrap Core catalog; CR-011 creates no parallel method vocabulary.

### 6.4 `project.language`

Allowed values only:

```text
en
my
```

These values reuse the frozen Bootstrap Core catalog.

### 6.5 `project.methodFile`

Must exactly match the canonical method/language mapping:

```text
zasspill + en → ZASSPILL_EN.md
zasspill + my → ZASSPILL_MY.md
zasselection + en → ZASSELECTION_EN.md
zasselection + my → ZASSELECTION_MY.md
zassimple + en → ZASSIMPLE_EN.md
zassimple + my → ZASSIMPLE_MY.md
zass + en → ZASS.md
zass + my → ZASS.md
```

It MUST be a project-root relative filename from this mapping, never an absolute path, parent traversal, URL or arbitrary path.

For Full ZASS, language cannot be inferred from filename because both `en` and `my` use canonical `ZASS.md`. The metadata language is therefore declarative bootstrap/project identity; tooling may report a language conflict only when a canonical, deterministic Markdown fact makes that conflict detectable. Tooling MUST NOT guess language from prose.

## 7. Read/write ownership

### Readers

v0.1 readers:

- zass-cli local tooling;
- future Bootstrap verification code covered by A5-T05/A5-T06;
- humans reviewing project files.

Readers MUST treat Markdown as semantic authority.

### Writers

For v0.1 implementation:

- the next versioned `create-zass-project` bootstrap release is the canonical automatic writer;
- Bootstrap Core may produce the metadata artifact plan only through the versioned integration defined in A5-T05/A5-T06;
- current published `create-zass-project@0.1.0` is immutable and MUST NOT be retroactively changed;
- `zass check`, `zass status`, and `zass diff` are read-only with respect to `.zass/`.

### Manual editing

Humans MAY manually create or edit `.zass/project.json`.

Manual edits receive no special authority. They are validated exactly like generated metadata. Tooling MUST NOT silently repair malformed or conflicting manual metadata.

## 8. Loader contract

A5-T02 MUST implement one dedicated local machine-metadata loader. The loader must distinguish at least these states:

```text
ABSENT
VALID
MALFORMED
UNSUPPORTED_SCHEMA
INVALID
```

Definitions:

- **ABSENT** — `.zass/project.json` does not exist. Valid legacy state.
- **VALID** — JSON parses and satisfies v0.1 structural/value contract.
- **MALFORMED** — file exists but is not valid JSON or root is not a JSON object.
- **UNSUPPORTED_SCHEMA** — parseable metadata declares a schema version other than exactly `0.1`.
- **INVALID** — schema `0.1` is declared but required fields/types/allowed values/mapping are invalid or unsupported fields are present.

The loader:

- performs local filesystem reads only;
- performs no network access;
- performs no Git/GitHub access;
- performs no CrossAI/AISYNC/Drive access;
- performs no writes;
- does not parse decision/architecture semantics from Markdown;
- returns structured factual state for callers to validate/render.

A missing `.zass/` directory and a missing `.zass/project.json` file are both `ABSENT`.

Filesystem permission/I/O failures other than not-found are operational errors and MUST NOT be mislabeled as `ABSENT`.

## 9. Validation behavior

A5-T03 integrates bounded machine-layer validation without changing CR-010 semantic authority.

### 9.1 Legacy / absent

If machine metadata is ABSENT:

- existing `zass check/status/diff` semantics remain valid;
- no error is produced merely because metadata is absent;
- tooling may factually display `Machine metadata: ABSENT` when that surface is explicitly added;
- no migration is automatic.

### 9.2 Malformed / unsupported / invalid

If the file exists but state is MALFORMED, UNSUPPORTED_SCHEMA or INVALID:

- `zass check` MUST surface a factual validation error;
- exit behavior follows the existing zass-cli error contract;
- `zass status` MUST reflect validation ERROR through its existing validation summary and may show machine-layer state;
- `zass diff` MUST NOT invent semantic decision drift from machine metadata.

Exact diagnostic codes are implementation details to be assigned in A5-T03, but they must be deterministic and regression-tested.

### 9.3 Detectable conflict

A machine/Markdown conflict exists only when the repository contains a deterministic canonical fact that contradicts metadata.

v0.1 MUST detect at least:

- method/methodFile mapping disagreement internal to metadata;
- declared `methodFile` does not exist where the current project shape requires/contains that canonical method file;
- a method identity conflict where canonical method filename presence makes the conflict unambiguous.

Language conflict MUST be detected only where deterministic evidence exists. Full-ZASS `ZASS.md` alone is insufficient to distinguish `en` from `my`; tooling MUST NOT infer language heuristically from prose.

Conflict behavior:

```text
detect → report error → preserve both sources → no auto-rewrite
```

Machine metadata never silently wins.

## 10. Project-shape boundary

CR-011 metadata can represent all four official methods, but it does not by itself expand current zass-cli Full-ZASS discovery semantics.

Current Full-ZASS discovery remains based on existing CR-010 behavior:

```text
ZASS.md
ACTION_PLAN.md (optional)
ARCHITECTURE.md (optional)
```

A5 implementation may add machine metadata loading/validation around that behavior, but A5 MUST NOT silently redefine `zass check/status/diff` into a universal validator for ZASSPILL/ZASSELECTION/ZASSIMPLE unless a later explicit contract authorizes that expansion.

This separation prevents CR-011 from reopening CR-010.

## 11. Backward compatibility

Legacy projects without `.zass/` are first-class supported projects.

Locked rules:

1. No mandatory migration for existing projects.
2. No change to validity solely because `.zass/` is absent.
3. Existing Markdown-only repositories remain portable.
4. Existing Git histories require no rewrite.
5. Published `zass-cli@0.4.0` remains immutable historical release.
6. Published `create-zass-project@0.1.0` remains immutable historical release.

CR-011 is additive.

## 12. Migration policy

v0.1 does not ship an automatic migration command.

For an existing project, adding `.zass/project.json` is explicit opt-in. A future migration helper requires its own bounded contract and tests.

No tool may generate metadata by guessing uncertain values from Markdown.

If a future migration tool cannot determine a required field deterministically, it must stop and require explicit user input rather than inventing the value.

## 13. Schema/version evolution

`schemaVersion` versions the persisted machine contract independently from npm package versions.

Rules:

- reader support is explicit by schema version;
- unknown versions are `UNSUPPORTED_SCHEMA`, never interpreted as nearest-compatible;
- future schema changes require a new contract version;
- no silent in-place schema upgrade;
- no auto-downgrade;
- v0.1 readers must not assign semantics to future fields.

A future reader may support multiple schema versions, but each supported version must have deterministic validation/migration rules.

## 14. CLI seam

CR-011 integrates through one machine-metadata seam shared by `check` and any status presentation that needs it.

Required behavior:

### `zass check`

- loads machine metadata once through the dedicated loader;
- ABSENT remains valid legacy state;
- malformed/unsupported/invalid/conflicting metadata produces deterministic errors;
- existing CR-010 checks continue unchanged except for additive CR-011 diagnostics.

### `zass status`

- uses the same validation result rather than a second parser;
- may report a concise machine metadata state;
- must not claim semantic project progress based on `.zass/`.

### `zass diff`

- remains Markdown/Git semantic-diff oriented under CR-010;
- must not treat a machine metadata edit as a LOCKED decision/architecture semantic change;
- no CR-011 write behavior is added.

No command may contact a network service because `.zass/` exists.

## 15. Bootstrap version boundary

The frozen/public historical boundary is:

```text
create-zass-project@0.1.0
Bootstrap Core v0.1 public API
```

A5 MUST NOT mutate the contents of the already published `create-zass-project@0.1.0`.

A5-T05 must define the exact next bootstrap/package version before generation is implemented. A5-T06 then generates `.zass/project.json` only in that new version.

The frozen Bootstrap Core v0.1 six-symbol public API MUST NOT be silently broken. CR-011 integration must either:

- be implemented behind existing compatible public semantics; or
- use an explicitly versioned next Core contract/release.

That version choice belongs to A5-T05, not to the coding worker in A5-T02/T03.

## 16. Security and privacy boundary

`.zass/project.json` contains non-secret project descriptor metadata only.

It MUST NOT contain:

- tokens;
- passwords;
- API keys;
- private provider memory/profile;
- personal health/financial/private context;
- external account identifiers;
- auth/session data.

The loader must treat content as untrusted local input and validate types/values before use.

## 17. Determinism

For the same supported project identity values:

```text
name + method + language + methodFile + schemaVersion
```

the semantic metadata object is the same regardless of OS, path separator, Git state, network state or AI provider.

Formatting differences in JSON do not change semantics.

## 18. A5-T02/T03 implementation constraints

Implementation workers are authorized to choose:

- internal module/function names;
- diagnostic code numbers;
- test helper organization;
- internal data structures consistent with this contract.

They are **not** authorized to choose or change:

- authority direction;
- persisted file path;
- JSON shape/required fields;
- allowed method/language values;
- method filename mapping;
- absent/malformed/unsupported semantics;
- auto-migration behavior;
- network behavior;
- CLI semantic scope;
- Bootstrap release/version boundary.

A required change to any locked item above is STOP / RETURN TO CONTRACT REVIEW.

## 19. Required evidence before CR-011 closure

A5 implementation must eventually prove:

- legacy Full-ZASS project without `.zass/` remains valid;
- valid v0.1 metadata loads deterministically;
- malformed JSON fails factually;
- unsupported schema fails factually;
- invalid required field/value fails factually;
- method/methodFile conflict fails;
- detectable method conflict with project shape fails;
- language conflict is tested where deterministic and is not guessed where ambiguous;
- Windows path behavior passes;
- existing CR-010 regression suite passes;
- next-version bootstrap generates correct metadata for all 4 × 2 method/language combinations;
- published `create-zass-project@0.1.0` remains historical/immutable;
- two-shape field test passes;
- STOP/REVIEW explicitly freezes or rejects v0.1.

## 20. Locked implementation statement

CR-011 v0.1 is therefore:

```text
one local companion file
+ minimal project identity metadata
+ explicit schema
+ additive validation
+ legacy-compatible absence
+ conflict reporting
- no semantic authority
- no auto-repair
- no automatic migration
- no network/runtime coupling
- no second Source of Truth
```

**A5-T01 disposition: LOCKED FOR IMPLEMENTATION.**
