# ZASSIMPLE

**Current version:** v0.2.4

ZASSIMPLE is the default lightweight way to use ZASS.

> **Think casually. Record what matters. Agreement becomes a candidate. Lock becomes a decision. Architecture only appears when confirmed.**

## How it feels

Attach the current `ZASSIMPLE_EN.md` to an AI and talk normally.

You do not need to:

- fill a long form;
- memorize IDs;
- choose a review methodology;
- design architecture before the problem is understood.

The AI should distinguish:

- what the owner explicitly said;
- AI interpretation;
- what remains unknown.

AI may propose ideas, questions, risks, experiments and options. It cannot silently turn them into owner decisions.

## Lightweight state

ZASSIMPLE keeps a small set of useful sections:

- IDEA LOG
- AGREED CANDIDATES
- OPEN NOTES
- DECISIONS
- ARCHITECTURE

Casual explicit agreement can become an agreed candidate when the target is clear.

A final decision requires an explicit owner instruction such as:

```text
LOCK DECISION
```

## Deliberate ZASS mapping

When the user intentionally says:

```text
ZASS
```

or:

```text
ZASS!!
```

the AI can organize relevant discussion into the ZASSIMPLE state.

It must also show a **CURRENT SELECTION MATRIX**:

| Option / Candidate | Must-have fit | Strength | Risk / Weakness | Evidence / Unknown | Status |
|---|---|---|---|---|---|
| [candidate] | PASS / FAIL / UNKNOWN | ... | ... | ... | IDEA / AC-xxx / D-xxx LOCKED / OPEN |

The matrix is mandatory on deliberate ZASS/ZASS!! mapping, even when only one candidate exists. It does not require weighted scoring, does not invent alternatives, and does not add ZASSELECTION's `SELECT` command. Final authority remains `LOCK DECISION`.

This does not automatically LOCK or COMMIT anything.

## Persistence

```text
AI proposal
    ↓
owner approval
    ↓
LOCK DECISION
    ↓
COMMIT
    ↓
GitHub
```

Never claim a commit happened unless it actually happened.

## Architecture

ZASSIMPLE can propose:

```text
DRAFT ARCH
```

when the important decisions are becoming clear.

A draft is still not confirmed architecture.

The final gate remains:

```text
BUILD ARCHITECTURE
        ↓
owner review
        ↓
YA, CONFIRM ARCHITECTURE
        ↓
ARCHITECTURE CONFIRMED
```

## What ZASSIMPLE intentionally does not include

ZASSIMPLE does not require the full Evidence Confidence/readiness machinery during normal lightweight use.

When evidence, architecture trade-offs and traceability become important, migrate the project to [Full ZASS](Full-ZASS.md).

Authoritative template:

- [ZASSIMPLE_EN.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSIMPLE/ZASSIMPLE_EN.md) — default
- [ZASSIMPLE_MY.md](https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSIMPLE/ZASSIMPLE_MY.md) — Bahasa Melayu

[executed on device: LAPTOP-DBGSGIEI (3bcc9967-d6ee-42e6-bd9f-ac96ebcea9f1)]