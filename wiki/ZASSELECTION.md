# ZASSELECTION

**Current version:** v0.2.3  
**Status:** UX FLOW LOCKED

> **AI compares. You decide, AI saves.**

ZASSELECTION is a selection method for choices where the main problem is comparing alternatives and keeping the resulting decision traceable.

Language routing is global: `ZASSELECTION_EN.md` is the English default and `ZASSELECTION_MY.md` is the Malay companion. Conversation may continue in Malay with the English file, but structured matrices/cards/history labels follow the active method-file language.

The short onboarding guide lives in [ZASSELECTION/README.md](../ZASSELECTION/README.md). This Wiki page holds the longer operating reference.

---

## Core user surface

```text
[ REVIEW ]      [ SAVE ]      [ HISTORY ]
```

### REVIEW

With new input:

```text
new option / evidence / question
        ↓
REVIEW
        ↓
compare with existing state
        ↓
update Selection Matrix
        ↓
AI Recommendation
        ↓
👉 Your selection?
```

Without new input, REVIEW means **re-view**:

- load the current saved state;
- show the current Selection Matrix;
- show the current AI Recommendation;
- do not change scores without new evidence.

### SAVE

If a user selection already exists, SAVE commits the current selection state.

If there is no final selection yet, SAVE preserves the current matrix and information as:

```text
UNFINISHED / DRAFT
```

When no persistent write integration is available, SAVE should produce an updated active method file (`ZASSELECTION_EN.md` or `ZASSELECTION_MY.md`, matching the active language surface) for download/export.

When a real GitHub or future AI-SYNC writer is available, do not claim success until the write returns a factual receipt.

### HISTORY

HISTORY opens a compact list:

```text
MY SELECTIONS HISTORY

Work laptop           → Laptop B
AI subscription       → ChatGPT Plus
Citation software     → Mendeley
Rental house          → Taman Putri unit A
New PC                → Draft
```

A saved item can be reopened so the old matrix, options and decision state become the starting point for new comparison.

---

## PICKS

The quick review technique used by ZASSELECTION is:

```text
P → I → C → K → S
```

- 🎯 **P — Pin the Problem**: define what is actually being selected.
- 🚧 **I — Identify Must-Haves**: identify mandatory requirements.
- 📊 **C — Compare Options**: build and update the Selection Matrix.
- ⭐ **K — Keep the Best Candidate**: show the current AI recommendation.
- 💾 **S — Select & Save**: the user chooses; the system records.

PICKS is optimized for fast product review, while the underlying ZASSELECTION method can also support non-product choices.

---

## Visual presentation lock

The quick-review presentation uses these icons consistently:

```text
🎯 P — Pin the Problem
🚧 I — Identify Must-Haves
📊 C — Compare Options
⭐ K — Keep the Best Candidate
💾 S — Select & Save

🤖 AI Recommendation
👉 Your selection?
```

This is a presentation convention only; it does not change scoring, authority, or persistence semantics.

---

## Matrix evidence discipline

ZASSELECTION distinguishes between what AI may reasonably infer and what requires a stronger basis.

| Matrix element | Default rule |
|---|---|
| Criteria | AI may infer from stated problem, goals, constraints and context; inferred criteria are not user-confirmed |
| Weights | Represent priorities; AI-proposed weights are provisional, never silently authoritative |
| Numeric scores | Require user input, evidence, measurable facts, or an explicit scoring rule |
| Missing basis | Use qualitative comparison, `UNKNOWN`, or clearly labelled provisional scoring |
| Recommendation | May still be given, but visible uncertainty must be preserved |

Locked shorthand:

```text
Criteria may be inferred.
Priorities must not be silently assigned.
Scores must have a basis.
Unknown stays UNKNOWN.
```

This rule prevents a visually precise matrix from implying evidence that does not exist.

---

## Selection Score Bar

When valid comparable numeric totals exist, ZASSELECTION renders a compact visual summary immediately after the comparison table:

```text
┌────────────────────────────────┐
│          ZASSELECTION          │
│                                │
│ Option A   ████████░░   78     │
│ Option B   █████████░   91     │
│ Option C   ██████░░░░   64     │
└────────────────────────────────┘
```

The display may normalize totals to 0–100, such as 7.8/10 → 78. This is display-only: the source matrix remains authoritative.

If numeric values are provisional, label the bar `PROVISIONAL / AI-PROPOSED`. If numeric values lack a valid basis, omit the numeric bar. The bar never replaces the matrix, recommendation, or owner selection.

---

## Selection Matrix

The Selection Matrix is the main comparison surface.

Example:

| Criteria | Weight | Option A | Option B | Option C |
|---|---:|---:|---:|---:|
| Performance | 30% | 7 | 9 | 8 |
| Upgrade | 20% | 8 | 9 | 7 |
| Price | 30% | 7 | 8 | 8 |
| Practical Fit | 20% | 8 | 9 | 8 |
| **TOTAL** | **100%** | **7.4** | **8.7** | **7.8** |

Per-option explanations should normally stay short, around ten words, unless the user asks for deeper analysis.

A new option updates the existing matrix rather than restarting the entire selection process.

---

## AI recommendation vs user selection

These are separate:

```text
AI Recommendation ≠ Your Selection
```

AI may recommend the strongest current option.

Only the user chooses the final option.

An explicit user choice is treated as the current selection and may be committed immediately when persistence is available.

---

## Working State

When the user has not selected yet, ZASSELECTION keeps a temporary Working State:

```text
Current decision
Current options
Current criteria / weights
Current Selection Matrix
Current AI recommendation
Your Selection: Not selected
```

The user may continue asking questions or add options without being forced to decide.

Working State must not rely solely on a platform AI's long-term memory.

---

## Saved selection format

A saved Markdown record should remain compact but sufficient to continue later.

Example:

```md
# Work Laptop

**Decision:** Choose a work laptop
**Status:** COMMITTED
**Selected:** Laptop B

## Must-Haves
- RAM >= 32GB
- SSD >= 1TB

## Selection Matrix

| Criteria | Weight | Laptop A | Laptop B | Laptop C |
|---|---:|---:|---:|---:|
| Performance | 30% | 7 | 9 | 8 |
| Upgrade | 20% | 8 | 9 | 7 |
| Price | 30% | 7 | 8 | 8 |
| Practical Fit | 20% | 8 | 9 | 8 |
| **TOTAL** | **100%** | **7.4** | **8.7** | **7.8** |

## Quick Notes
- Laptop A — Good battery, weaker overall performance.
- Laptop B — Best balance of performance, upgradeability and price.
- Laptop C — Balanced, but less upgrade flexibility.

## AI Recommendation
Laptop B

## Your Selection
Laptop B
```

If the user has not selected:

```md
**Status:** UNFINISHED / DRAFT
**Selected:** Not selected
```

The exact storage representation may evolve, but enough state must remain to reopen the selection without starting from zero.

---

## Current persistence modes

### Manual Markdown export

```text
AI chat
   ↓
REVIEW
   ↓
SAVE
   ↓
updated ZASSELECTION_EN.md / ZASSELECTION_MY.md
   ↓
download / reuse in another AI
```

This is the universal fallback.

### GitHub mode

```text
AI chat
   ↓
REVIEW
   ↓
SAVE / explicit selection
   ↓
GitHub write
   ↓
real commit receipt
```

This enables persistent, versioned selection state across AI tools that can read and write the same repository.

### AI-SYNC

AI-SYNC is a separate transport-layer project and is not part of the ZASSELECTION method.

```text
ZASS / ZASSIMPLE / ZASSELECTION / other projects
                     ↓
                   AI-SYNC
                     ↓
        GitHub / Google Sheets / AI-SYNC DB
```

AI-SYNC may grow into multiple transport implementations or versions while ZASSELECTION remains stable at the method layer.

---

## Source-of-Truth boundary

ZASSELECTION itself defines how selections are compared, reviewed and recorded.

Current and future storage may include:

- Markdown files;
- GitHub repositories;
- Google Sheets;
- AI-SYNC databases.

The storage backend is not the method.

> **Portable methodology ≠ portable automation.**

The normal user path should remain simple even if transport and persistence become sophisticated.

---

## Relationship to the ZASS family

| Method | Purpose |
|---|---|
| ZASS | raw idea → evidence → decision → architecture |
| ZASSIMPLE | lightweight conversational path from idea → DESIGN → execution; architecture only when technically applicable |
| ZASSELECTION | alternatives → comparison → recommendation → user selection |

ZASS / ZASSIMPLE / ZASSELECTION structure reasoning and selection records.

AI-SYNC moves and writes information.

Persistent destinations hold the Source-of-Truth records appropriate to each workflow.

---

## Authoritative files

- [ZASSELECTION README](../ZASSELECTION/README.md)
- [ZASSELECTION_EN.md](../ZASSELECTION/ZASSELECTION_EN.md) — **default**
- [ZASSELECTION_MY.md](../ZASSELECTION/ZASSELECTION_MY.md) — Bahasa Melayu
