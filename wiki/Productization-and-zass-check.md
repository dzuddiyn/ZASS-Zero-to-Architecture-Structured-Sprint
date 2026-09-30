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

**Status:** implementation specification locked; MVP implementation pending.

The command contract is defined in:

- [CR010_ZASS_CHECK_SPEC.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/CR010_ZASS_CHECK_SPEC.md)

A ready-to-use Work handoff prompt is available at:

- [WORK_PROMPT_CR010.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/docs/WORK_PROMPT_CR010.md)

## v0.1 scope

The first validator is intentionally small.

It should check:

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
v0.1  current-file validator

v0.2  Git-aware LOCKED drift

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
