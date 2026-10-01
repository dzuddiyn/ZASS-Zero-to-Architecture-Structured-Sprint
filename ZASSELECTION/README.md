# ZASSELECTION

ZASSELECTION is the selection method in the ZASS family.

> **AI compares. AI recommends. Human selects.**

## Start here

For normal use, only this file is required:

- [ZASSELECTION.md](ZASSELECTION.md) — current Malay method, v0.2.0
- [ZASSELECTION_EN.md](ZASSELECTION_EN.md) — English method/reference
- [docs/](docs/) — supporting ZASSELECTION design documents

## Locked user surface

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

- **REVIEW** — compare new input with the current state, or re-view the current matrix when there is no new input.
- **SAVE** — commit the current selection state; without a final choice it is saved as UNFINISHED / DRAFT.
- **HISTORY** — open My Selections History and reopen earlier selections or drafts.

An explicit answer to `Your selection?` auto-commits the choice.

## Boundary

```text
ZASSELECTION
method / selection reasoning
        │
        ▼
      AI-SYNC
external transport / write layer
        │
   ┌────┼──────────────┐
   ▼    ▼              ▼
GitHub  Google Sheets  AI-SYNC DB
```

AI-SYNC is intentionally maintained outside this folder and outside the ZASSELECTION method. It is shared infrastructure.

Selection persistence must not complicate the locked three-button UX.
