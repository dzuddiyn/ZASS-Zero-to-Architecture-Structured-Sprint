# Productization & `zass check`

ZASS methodology is temporarily feature-frozen while productization focuses on:

```text
Consistency
→ Validator
→ Automation
→ Real-world evidence
```

This means the next value should come mainly from implementation and field use, not more framework layers.

## What productization means

Today, ZASS is primarily:

```text
Markdown
+ AI operating rules
+ human approval
+ Git history
```

Productization adds software that can enforce or check some of those rules.

Target direction:

```text
create project
      ↓
work with AI
      ↓
zass check
      ↓
COMMIT
      ↓
GitHub Action runs same validator
```

## CR-010

The first validator command is:

```bash
zass check
```

**Status:** local v0.1 MVP implemented under `cli/`; not published to npm.

The command contract is defined in:

- [CR010_ZASS_CHECK_SPEC.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/CR010_ZASS_CHECK_SPEC.md)

A ready-to-use Work handoff prompt is available at:

- [WORK_PROMPT_CR010.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/WORK_PROMPT_CR010.md)

## v0.1 scope

The first validator is intentionally small.

It checks:

1. project-file discovery;
2. duplicate IDs;
3. malformed IDs;
4. broken local references;
5. Evidence Confidence pairing;
6. high-signal secret/sensitive-value patterns.

Not in v0.1:

- npm publication;
- `zass status`;
- `zass diff`;
- remote URL validation;
- mandatory `.zass/schema.yml`;
- Git-aware LOCKED-decision drift;
- ACTION_PLAN snapshot drift;
- GitHub Actions.

## Planned phases

```text
v0.1  current-file validator — IMPLEMENTED

v0.2  Git-aware LOCKED drift — PLAN LOCKED / NOT STARTED

v0.3  ACTION_PLAN consistency

v0.4  status / diff
```

## One validation engine

The same validator must eventually power both:

```text
Local PC ─────────┐
                  ├── zass check engine
GitHub Action ────┘
```

Do not duplicate the rule implementation inside GitHub Actions.

## Field evidence

Tooling alone does not prove ZASS works.

Future evaluation should observe real-project signals such as:

- how often context must be retold;
- whether rejected ideas resurface;
- hidden assumptions found before implementation;
- unexplained decision drift;
- factual corrections after AI output;
- time from raw idea to owner-approved decision;
- time another AI or maintainer needs to understand the project state.

Teaching fixtures demonstrate mechanics, not efficacy.

## v0.1 verification

Before commit, the implementation passed 10/10 automated tests, `npm link` worked, and `zass check` returned 0 errors / 0 warnings against the Small Farm Planner teaching project.

CR-010 v0.2 has not started. Its locked plan compares `HEAD:ZASS.md` with the working tree, adds Z100 for unavailable Git history and Z101 for silent LOCKED-decision drift, recognizes only an explicit `Supersedes: D-xxx` replacement path, and uses temporary Git repositories for automated tests. Implementation remains gated by real-project v0.1 field checks.
