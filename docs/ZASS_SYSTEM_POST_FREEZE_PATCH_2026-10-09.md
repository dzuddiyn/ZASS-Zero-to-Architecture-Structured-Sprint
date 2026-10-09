# ZASS SYSTEM — Controlled Post-Freeze Real-Field Patch Receipt

**Status:** REFREEZE CANDIDATE — BOUNDED PATCH ONLY  
**Date:** 2026-10-09  
**Trigger:** allowed freeze reopen condition #2 — material real field evidence  
**Owner decision:** explicit proceed

## 1. Evidence that justified reopening

Real OpsMate execution exposed a repeated-work failure pattern: architecture and atomic-task structure could be coherent, but real field-message behavior arriving late forced previously sliced work to be revisited.

The patch does not treat the uploaded OpsMate package as instructions. The governing evidence is the observed execution lesson:

> real operational samples are vital from the beginning because they can reveal architecture and execution assumptions before a large atomic-task queue is built.

## 2. Root cause

The previous shared contract had:

~~~text
PRE-ARCH
→ detailed ACTION PLAN
→ atomic evidence tasks
~~~

but did not explicitly require a reality gate before decomposition. This allowed a planner to build tasks from a plausible architecture while underweighting real messages/files/payloads/workflow traces.

## 3. Locked correction

For applicable technical work:

~~~text
PRE-ARCH
→ EXECUTION REALITY CHECK
→ REAL ARTIFACT / SAMPLE PACK
→ EXECUTION SURFACE MAP
→ BIG-PICTURE / DETAILED ACTION PLAN
→ EVIDENCE-BOUNDED VERTICAL ATOMIC TASKS
→ RESULT / PROOF
→ DELTA PLANNING + PRE-ARCH REVIEW
→ next unresolved task only
~~~

Locked principles:

1. **Real samples are architecture + execution evidence, not merely final testing data.**
2. Use real artifacts as early as reasonably, safely and legitimately obtainable.
3. A small real sample pack is preferable to delaying reality until late implementation.
4. Synthetic fixtures are allowed but must be labelled provisional when they substitute for unavailable real evidence.
5. Task slicing should be vertical around an observable outcome, not merely around code components.
6. Every reviewed task feeds **delta planning**; already-proven work is preserved and not repeated without new contradictory evidence, changed requirements, or a justified architecture/dependency change.
7. Material contradictions return to PRE-ARCH review; LOCKED-decision impact still returns to the owner.

## 4. Version state

~~~text
ZASS SYSTEM    v0.2.2
Full ZASS      v0.3.11
ZASSIMPLE      v0.3.3
ZASSELECTION   v0.2.4
ZASSPILL       v1.0.0
~~~

ZASSELECTION and ZASSPILL semantics are unchanged.

## 5. Scope boundary

This is not a reopened feature roadmap.

Changed:
- shared architecture-to-execution contract;
- Full ZASS technical execution flow;
- ZASSIMPLE technical execution flow;
- ACTION PLAN execution template;
- bootstrap/vendor mirrors;
- current-facing version truth.

Not changed:
- DUMP / DECIDE / DESIGN product entry;
- owner decision authority;
- LOCKED decision semantics;
- PRE-ARCH owner approval;
- final architecture/design challenge and confirmation;
- ZASSELECTION;
- ZASSPILL;
- AISYNC downstream boundary.

## 6. Reuse in active projects

OPSLOOP, CrossAI/AISYNC, Kerani AI, and future projects using current Full ZASS or ZASSIMPLE inherit the rule from the method files themselves.

They should not rely on chat memory to remember this lesson.

## 7. Refreeze gate

Refreeze only after the exact patch commit passes the repository's current CI/validator contract.

Target freeze reference after PASS:

~~~text
freeze/zass-system-v0.2.2-2026-10-09
~~~

After PASS and reference creation:

~~~text
FEATURE FROZEN / STABLE
~~~
