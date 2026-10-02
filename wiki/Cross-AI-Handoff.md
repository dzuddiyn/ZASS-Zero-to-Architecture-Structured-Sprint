# Cross-AI Handoff

ZASS does not require every AI tool to have GitHub write access.

The portable model is:

> **Any AI can think. One trusted writer saves. GitHub remembers.**

## Capability model

### WRITE-CAPABLE

Can read the current project and persist approved changes to the GitHub Source of Truth.

### READ / BRAINSTORM

Can read project Markdown and return analysis, alternatives, questions, risks or proposed changes.

### MANUAL BRIDGE

No integration required. The user moves Markdown or structured output between tools manually.

ZASS correctness must not depend on a specific AI vendor.

## Public-project flow

```text
PUBLIC ZASS PROJECT
        ↓
another AI reads current repository
        ↓
brainstorm / challenge / review
        ↓
ZASS_HANDOFF.md
        ↓
trusted writer checks latest repository state
        ↓
owner review / approval
        ↓
COMMIT
        ↓
GitHub Source of Truth
```

## Copy-ready public-link prompt

```text
Read this public ZASS project first:

[PROJECT URL]

Treat the repository as the Source of Truth.
Respect all existing LOCKED decisions.

Continue brainstorming with me naturally.
Challenge assumptions and surface useful ideas, questions,
risks and alternatives, but do not silently change LOCKED decisions.

At the end of this session, export a Markdown handoff containing
the useful findings and proposed changes.

The handoff is NOT the Source of Truth.
It will be reviewed by the project's trusted writer before commit.
```

## Suggested handoff file

Preferred filename:

```text
ZASS_HANDOFF.md
```

Suggested content:

```text
Source project:
[public project URL]

Source revision:
[commit SHA if known]

Existing LOCKED decisions respected:
- ...

New ideas:
- ...

Questions:
- ...

Risks:
- ...

Suggested candidates:
- ...

Possible contradictions:
- ...

Proposed changes:
- ...

Status:
HANDOFF ONLY — NOT SOURCE OF TRUTH
```

## Stale handoffs

A handoff may have been produced from an older revision.

Therefore the trusted writer must compare it with the **latest repository state** before applying anything.

A stale handoff must never overwrite newer LOCKED decisions silently.

## Full ZASS

A returned handoff can go through:

```text
handoff
→ ZASS!!
→ owner review
→ PROPOSED FOR PROCEED
→ PROCEED
→ COMMIT
```

## ZASSIMPLE

Use ZASSIMPLE's own approval semantics:

```text
handoff
→ normal discussion / ZASS mapping
→ PROCEED/LOCK when owner is clear
→ SAVE
```

Do not import Full-ZASS batch-PROCEED semantics into ZASSIMPLE. ZASSIMPLE `PROCEED/LOCK` means lock the currently surfaced clear owner decision.
