# ZASSPILL

> **Stay messy. Keep the context. Continue anywhere.**

**Current version:** v0.1.0  
**Status:** Phase 1 Core Proof  
**Default English:** [ZASSPILL_EN.md](ZASSPILL_EN.md)  
**Bahasa Melayu:** [ZASSPILL_MY.md](ZASSPILL_MY.md)

ZASSPILL is the portable DUMP continuity method in the ZASS family.

It preserves enough context for a human to continue thinking across chats and AIs without forcing goals, criteria, decisions, architecture, plans, or tasks too early.

## Current system boundary

The released global ZASS SYSTEM entry is still:

~~~text
DECIDE or BUILD?
~~~

ZASSPILL v0.1.0 does **not** replace that contract.

The target ASC pilot remains:

~~~text
DUMP   → ZASSPILL
DECIDE → ZASSELECTION
DESIGN → ZASSIMPLE
~~~

## Phase 1 quick start

### Start a new DUMP

1. Give the AI ZASSPILL_EN.md or ZASSPILL_MY.md.
2. Talk normally.
3. Do not fill a form.
4. When useful, ask what context the AI is carrying.
5. Use SAVE when you want the current continuity state rendered/persisted.

### Continue in another AI

Give the new AI:

~~~text
ZASSPILL_EN.md (or ZASSPILL_MY.md)
+
your current ZASSPILL Thread Packet
~~~

Then say:

~~~text
Continue this thread with me.
~~~

The new AI should continue from the packet rather than requiring the full old transcript.

## What the packet keeps

The minimum semantic frame is:

~~~text
WHO
WHAT THIS IS ABOUT
WHERE THE THINKING IS NOW
WHAT MATTERS
WHAT IS STILL OPEN
WHERE THIS CONTEXT CAME FROM
~~~

History is optional and only kept when chronology helps continuity.

## What ZASSPILL deliberately does not do

Phase 1 does not provide:

- ASC synchronization;
- semantic thread index;
- automatic multi-thread routing;
- automatic split/merge;
- final backend schema;
- final machine thread-ID format.

It also does not force:

- goals;
- selection matrices;
- architecture;
- Action Plans;
- tasks;
- progress percentages.

## Phase 1 field test

The next proof is simple:

~~~text
AI A
→ messy conversation
→ portable packet
→ AI B
→ natural continuation without old chat
~~~

A successful field test must preserve meaning without inventing facts, hardening thoughts into facts, or exporting unnecessary personal detail.

Design rationale: [ZASSPILL Design Direction v0.1](../docs/ZASSPILL_DESIGN_DIRECTION_V01.md)
