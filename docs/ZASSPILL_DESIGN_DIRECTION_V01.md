# ZASSPILL — Design Direction v0.1

**Status:** HISTORICAL LOCKED DESIGN — superseded by ZASSPILL v1.0.0 + ZASS SYSTEM v0.2.0 global three-intent routing  
**Date:** 2026-10-02  
**Owner:** Project Owner  
**Scope:** portable DUMP continuity method/layer, ASC pilot direction, authority, portability, thread model, handoff, privacy, and phased implementation

> **Stay messy. Keep the context. Continue anywhere.**

> **Current-state note (2026-10-03):** ZASSPILL v1.0.0 is PRODUCTION READY and ZASS SYSTEM v0.2.0 has promoted `DUMP / DECIDE / DESIGN` globally. This document now preserves the earlier pre-promotion assumptions as historical design context.

## 0. Contract boundary

This document records the locked design checkpoint. ZASSPILL v0.1.0 Phase 1 is now FROZEN with its core proof passed. Cross-AI field testing exposed a separate external method-readability/transport problem; that problem is owned by AI-SYNC rather than by ZASSPILL semantics. This document still does **not** define a final backend schema, machine thread-ID contract, ASC sync implementation, or replacement for the current global ZASS SYSTEM routing.

Historical global entry at the time this design direction began was:

~~~text
DECIDE or BUILD?
~~~

The target ASC pilot is:

~~~text
DUMP / DECIDE / DESIGN
~~~

That intended migration has now completed: ZASS SYSTEM v0.2.0 promotes DUMP / DECIDE / DESIGN globally, with DUMP → ZASSPILL, DECIDE → ZASSELECTION, and DESIGN → ZASSIMPLE.

If the first pilot is not good enough, the direction is to iterate the new model until it works rather than treating the old entry model as the desired end state.

This document also does not change GitHub authority for existing Git-backed ZASS project artifacts. ZASSPILL continuity-thread authority is a separate concern described below.

---

### Transport ownership update — AI-SYNC Method Gateway

The Phase 1 cross-AI proof established that receiver access to GitHub raw/browser URLs and common mirrors cannot be assumed consistent.

The locked responsibility is therefore:

```text
GitHub
= authoritative method Source of Truth

AI-SYNC
= public method-read transport / synced snapshot gateway

ZASSPILL
= continuity method; carries the receiving-method link when available
```

This transport issue must not be solved by changing ZASSPILL continuity semantics. Until the AI-SYNC public gateway is implemented and proven, the existing GitHub links remain a temporary bootstrap path.

## 1. Purpose and family boundary

> **ZASSPILL preserves messy human context across chats and AIs without forcing premature structure.**

Primary value:

> **Continuity before structured intent.**

Success does not require the user to make a decision, create architecture, execute tasks, or reach closure. ZASSPILL succeeds when a user can continue thinking naturally in another chat or AI without reconstructing important context.

Family boundary:

~~~text
ZASSPILL
= preserve enough to continue thinking

ZASSELECTION
= structure enough to choose

ZASSIMPLE
= structure enough to build
~~~

Core restraint:

> **ZASSPILL must not manufacture structure merely because structure is possible.**

ZASSPILL is not a goal-setting method, scoring engine, decision matrix, architecture method, Action Plan, task manager, project-management system, full transcript archive, personal-profile database, or AI autobiography.

A user may remain in ZASSPILL indefinitely. Not moving to DECIDE or DESIGN is not failure.

---

## 2. User-facing direction: DUMP / DECIDE / DESIGN

Target ASC user-facing model:

~~~text
DUMP
DECIDE
DESIGN
~~~

Internal mapping:

~~~text
DUMP
→ ZASSPILL

DECIDE
→ ZASSELECTION

DESIGN
→ ZASSIMPLE
    ↓
  Full ZASS when needed
~~~

Users should route by intent, not by framework knowledge. Normal users do not need to know the method names.

Safe migration path:

~~~text
CURRENT GLOBAL
DECIDE or BUILD?

        ↓

ASC PILOT
DUMP / DECIDE / DESIGN

        ↓ proven

FUTURE GLOBAL
DUMP / DECIDE / DESIGN
~~~

The current global contract remains unchanged until the promotion gates pass.

---

## 3. Naming boundary with ZASSIMPLE

System/user-facing intent:

~~~text
DUMP
= free thought
= messy conversation
= continuity
= ZASSPILL
~~~

ZASSIMPLE currently uses DUMP as the first stage of its build lifecycle. To prevent semantic collision, the locked rename direction is:

~~~text
IDEA DUMP → DISTILL → DECIDE → DESIGN → DO IT → DELIVERED !!
~~~

IDEA DUMP means raw idea input for something the user wants to shape or build. It does not mean general thought continuity.

The ZASSIMPLE identity may retain:

> **Dump the DUMB. Get to THUMBS-Up. 👍**

because that phrase refers to IDEA DUMP, not ZASSPILL DUMP.

This rename direction is recorded here but is **not implemented by this checkpoint**.

---

## 4. Portable continuity

ZASSPILL continuity must be:

- provider-neutral;
- human-readable;
- self-sufficient enough to continue;
- minimal rather than exhaustive;
- lineage-aware.

Locked principles:

> **Portable context should be sufficient to continue, not sufficient to reconstruct everything.**

> **ZASSPILL portability carries continuity, not decision authority.**

The original platform chat must not be a mandatory dependency for continuation.

---

## 5. Minimum continuity frame — 6W

This is a semantic frame, **not a final schema**.

### WHO
Who matters to this continuity thread?

WHO contains only people whose role or perspective materially matters to the thread.

> **WHO means who matters to this thread, not everyone the AI knows.**

### WHAT THIS IS ABOUT
What human story or continuity topic is being carried?

### WHERE THE THINKING IS NOW
Where does the user's thinking currently stand?

### WHAT MATTERS
Which relevant facts, preferences, constraints, concerns, or conditions matter to continuation?

### WHAT IS STILL OPEN
What remains unresolved, uncertain, or worth returning to?

### WHERE THIS CONTEXT CAME FROM
Source, freshness, and minimal lineage.

Timeline/history is optional and should be retained only when chronology materially improves continuity.

---

## 6. Truth type is separate from continuity stability

ZASSPILL must not collapse meaning into a single state axis.

~~~text
CONTENT TYPE
Fact
Thought
Concern
Preference
AI interpretation

        ×

CONTINUITY STATE
Temporary
Stable
Superseded
~~~

Example:

~~~text
“Aku selalu fikir nak pindah.”

Type:
THOUGHT

Continuity:
STABLE / RECURRING

≠

FACT:
User is moving.
~~~

Locked rules:

> **Stable ≠ fact.**

> **ZASSPILL must preserve thoughts without hardening them into facts.**

A thought may become a stable recurring thought without becoming a factual claim.

Stale or superseded context must not compete with current context. Keep old context only when it helps explain the present.

---

## 7. Refresh and continuity compression

> **Refresh on meaning change, not message count.**

> **Current Summary represents the present, not the transcript.**

Meaning changes may include:

- current thinking changing;
- an important new constraint, preference, person, or concern appearing;
- an open thread resolving or changing;
- old context becoming stale or superseded;
- an explicit user correction;
- a continuation/export checkpoint.

Continuity compression:

~~~text
messy conversation
        ↓
detect meaningful change
        ↓
refresh current context
        ↓
remove redundancy
        ↓
retain only useful transition history
~~~

Locked rules:

> **New information should update the current picture, not automatically enlarge the packet.**

> **A longer conversation should not necessarily produce a larger ZASSPILL context.**

> **Explicit user correction outranks AI interpretation.**

User correction should update the current meaning, not create misleading parallel histories unless the change itself matters to continuity.

---

## 8. Transition from DUMP to DECIDE or DESIGN

> **ZASSPILL may notice intent maturity, but must not manufacture it.**

AI may suggest a transition when user intent materially changes, but may never switch methods automatically.

~~~text
DUMP
  ↓
intent materially changes
  ↓
suggest only
  ↓
user confirms
  ↓
DECIDE / DESIGN
~~~

DECIDE becomes relevant when the user actually wants to choose or compare.

DESIGN becomes relevant when the user actually wants to shape, build, architect, or implement something.

Locked rules:

> **Suggest only when the user's intent materially changes.**

> **Transition should carry relevance, not baggage.**

ZASSPILL remains a continuity home. It is not merely an onboarding stage, and a user may return to DUMP after DECIDE or DESIGN.

---

## 9. Hybrid semantic-thread model

Storage direction:

> **Hybrid semantic-thread model.**

~~~text
ZASSPILL
│
├── lightweight index
├── continuity thread A
├── continuity thread B
└── continuity thread C
~~~

Critical distinction:

~~~text
CONTINUITY THREAD
≠
INTERACTION / CHAT THREAD
~~~

A continuity thread is a semantic human story. It may span multiple chats, AIs, devices, or platforms.

A single interaction/chat may also touch multiple continuity threads.

Locked principles:

> **Chat is an interaction surface, not the continuity store.**

> **A user may start a new chat without starting a new ZASSPILL thread.**

> **A long chat does not need to be reloaded if continuity state has been captured correctly.**

> **Load the relevant continuity thread, not the user's entire ZASSPILL history.**

> **ZASSPILL should make long chat history optional for continuation, not mandatory.**

Dedicated DECIDE or DESIGN interaction threads may branch from a ZASSPILL continuity thread while preserving lineage back to it.

---

## 10. Thread splitting and joining

> **Thread boundaries follow semantic continuity, not topic keywords.**

Keep concerns together while they remain part of the same human story or unresolved outcome.

> **Prefer under-splitting over over-splitting.**

Split when a topic becomes semantically independent and can stand on its own without materially depending on the parent thread.

Merge when separate threads consistently converge on the same people, concern, time horizon, and unresolved outcome.

Locked rules:

> **Growth alone does not justify a split; semantic independence does.**

> **Merge should preserve origin, not erase history.**

> **Thread management should stay mostly invisible to the user.**

> **Split/merge must preserve lineage.**

---

## 11. Thread identity and title

~~~text
THREAD IDENTITY
≠
DISPLAY TITLE
~~~

Thread identity is semantic and stable. The title is a human-readable presentation label that may evolve.

Locked rules:

> **A thread may change its title without changing its identity.**

> **Thread naming is AI-managed by default and user-editable.**

> **Create a title only when enough context exists to name the thread without guessing.**

> **Prefer human-readable story labels over taxonomy labels.**

> **Rename only when the existing title materially misrepresents the thread.**

> **One interaction may update multiple continuity threads without merging them.**

A stable machine identity will eventually be required for rename, split, merge, lineage, and sync safety, but the ID format is not defined by this checkpoint.

---

## 12. Retrieval and thread resolution

> **Retrieve by semantic relevance, not exact title matching.**

~~~text
user reference
    ↓
lightweight index
    ↓
resolve likely thread
    ↓
load selected Thread Packet
~~~

Locked principles:

> **Index helps locate context; Thread Packet carries context.**

> **Resolve first. Load second.**

> **Load the minimum context needed for the current continuation.**

Semantic relevance may use multiple lightweight signals such as title/hints, WHO, open threads, and recency.

> **Use recency as a signal, never as sole authority.**

Cross-thread retrieval does not imply a merge.

Ask for clarification only when ambiguity could materially alter the continuation.

> **ZASSPILL should make retrieval feel like remembering, not searching a database.**

---

## 13. Thread maintenance

Conceptual maintenance states may include:

~~~text
ACTIVE
DORMANT
ARCHIVED
REOPENED
~~~

They are conceptual and do not all need to be implemented in v0.1.

Locked principles:

> **Active means relevant, not necessarily progressing.**

> **Dormant threads remain valid but stay out of the normal working set.**

> **Archive preserves history without polluting normal retrieval.**

> **Reopen must refresh against current reality.**

> **Compact before splitting for size.**

> **ZASSPILL should preserve continuity, not accumulate everything forever.**

When DECIDE or DESIGN returns a result, ZASSPILL keeps the relevant outcome and lineage, not the full internal method artifact.

---

## 14. Index versus Thread Packet

~~~text
INDEX
= Which thread?

THREAD PACKET
= What do I need to know to continue?
~~~

Locked principles:

> **Index describes enough to find; packet contains enough to continue.**

> **Index stores retrieval metadata; packet stores continuity meaning.**

> **Thread Packet is the portable artifact; Index is a system navigation artifact.**

A small amount of identity/title/source duplication is allowed when necessary for portability and integrity.

> **Duplicate only what is necessary for portability and integrity.**

> **Portable continuity artifact does not dictate backend storage format.**

ASC may use Sheets, a database, or another storage implementation while rendering portable Thread Packets when needed.

---

## 15. Handoff to DECIDE or DESIGN

Handoff carries only the context required for the receiving method to start correctly.

Conceptual minimum:

~~~text
thread identity
relevant WHO
current state
relevant WHAT MATTERS
relevant open threads
source / lineage
optional relevant history
~~~

Do not automatically carry the entire history, unrelated people, stale context, every temporary thought, or every AI interpretation.

Locked principles:

> **Handoff carries only what the receiving method needs to start correctly.**

> **The receiving method owns its structured work; ZASSPILL owns the source continuity context.**

> **Continuity context informs, but does not pre-authorize decisions or design.**

> **Relevant source wording may be carried when losing it would change meaning.**

> **Handoff should preserve origin without importing baggage.**

Return path:

~~~text
DECIDE / DESIGN outcome
        ↓
minimal outcome + lineage
        ↓
refresh ZASSPILL continuity
~~~

> **Return outcome + lineage, not internal method machinery.**

---

## 16. Authority and synchronization

### 16.1 Method/semantic authority

~~~text
ZASS SYSTEM
    ↓
ZASSPILL method contract
    ↓
ASC implementation
~~~

> **ASC must implement ZASS SYSTEM semantics; ASC does not redefine them.**

This design does not change GitHub authority for existing Git-backed ZASS project artifacts.

### 16.2 Thread-state authority modes

Standalone:

~~~text
current Thread Packet
= continuity-state authority
~~~

ASC-linked:

~~~text
latest successfully synchronized ASC state
= continuity-state authority
~~~

> **For an ASC-linked thread, the latest successfully synchronized ASC state is authoritative.**

### 16.3 External AI edits

A packet exported from ASC and edited by another AI is a working change, not automatically a new authority.

~~~text
ASC
 ↓ export
portable packet
 ↓ external AI edits
working change
 ↓ successful sync
ASC authoritative state updates
~~~

> **External AI changes become authoritative only after successful synchronization.**

### 16.4 Base/source awareness

An ASC-derived portable packet must conceptually retain at least:

- thread identity;
- base/source revision.

If the ASC base has not moved, normal sync may proceed.

If ASC has moved beyond the packet's base revision, do not silently overwrite. Reconcile meaningful differences first.

Ask the user only when a real semantic conflict requires human intent.

### 16.5 Authority is not timestamp order

> **ASC authority is established by successful synchronization, not by whichever copy has the newest timestamp.**

> **Newest timestamp ≠ newest authority.**

> **Never claim SAVED or SYNCED without a real persistence receipt.**

Summary:

> **ZASS SYSTEM defines the rules. ASC owns the live continuity state when connected. Portable packets preserve continuity outside ASC. Successful sync makes external changes authoritative.**

---

## 17. Human inspection and correction

ZASSPILL should be quiet by default but inspectable whenever the user wants.

> **Invisible by default, inspectable on demand.**

Natural-language examples:

~~~text
“Apa yang kau simpan pasal benda ni?”
“Tunjukkan context thread ni.”
“Yang pasal resign tu salah.”
“Buang benda tu daripada context.”
~~~

Locked principles:

> **The user corrects meaning; the system maintains structure.**

> **Users may explicitly exclude or remove continuity context.**

The user should not need to edit Markdown or understand internal storage to correct ZASSPILL.

An explicit user correction outranks stored AI interpretation. For ASC-linked state, authoritative persistence still requires a real successful write/sync.

---

## 18. Privacy and minimization

WHO is a relevance pointer, not a profile dump.

> **WHO carries relationship and thread relevance, not full identity data.**

Example:

~~~text
Hani
→ spouse
→ relevant because relocation affects family
~~~

Do not carry unrelated profile history simply because a backend knows it.

> **If a personal detail is not necessary for continuity, do not carry it.**

Portable export is a disclosure boundary:

> **Portability is a disclosure boundary.**

A private backend may hold or have authorized access to more context than the portable packet should expose.

Preserve original user wording only when paraphrasing would materially change meaning.

> **User statements and AI interpretations must remain distinguishable.**

---

## 19. Method package boundary

Planned minimum method package:

~~~text
ZASSPILL/
├── README.md
├── ZASSPILL_EN.md
└── ZASSPILL_MY.md
~~~

Critical separation:

~~~text
METHOD
≠
THREAD STATE
≠
BACKEND STORAGE
~~~

Locked principles:

> **Method files define behavior; Thread Packets contain continuity state.**

> **Thread Packets are AI-maintained/generated artifacts, not forms users must fill.**

> **Index is a system capability, not necessarily a mandatory portable artifact.**

Do not create a second schema authority before tooling actually needs one.

Not required at the initial method checkpoint:

~~~text
schema.json
THREAD_PACKET_TEMPLATE.md
mandatory INDEX.md
ARCHITECTURE.md
ACTION_PLAN.md
TASKS.md
~~~

---

## 20. Language routing

ZASSPILL will follow the global ZASS SYSTEM language-routing contract.

~~~text
ZASSPILL_EN.md
→ structured surfaces in English

ZASSPILL_MY.md
→ structured surfaces in Bahasa Melayu
~~~

Important original user wording may remain in the user's original language when translation could change meaning.

---

## 21. User-facing UX

> **DUMP should feel like talking, not operating a system.**

Ordinary DUMP should feel like ordinary conversation.

No mandatory ZASSPILL block is required on normal replies.

No permanent ZASSPILL footer is required.

> **The better ZASSPILL works, the less the user has to think about ZASSPILL.**

### SAVE

SAVE means:

> **save the current continuity state, not the transcript.**

Autosave is allowed only when real persistence occurs. Persistence truth must remain factual.

### CONTINUE / REOPEN

Loading a valid Thread Packet already implies continuation; no mandatory CONTINUE command is required.

REOPEN is a capability, not necessarily a conversational command.

### Contextual transition actions

When intent materially matures:

~~~text
[ KEEP DUMPING ]   [ DECIDE ]
~~~

or:

~~~text
[ KEEP DUMPING ]   [ DESIGN ]
~~~

Do not show these merely because another method could theoretically apply.

---

## 22. Phased implementation strategy

Architecture may be broad, but implementation must remain phased.

### Phase 1 — ZASSPILL Core proof

Build only enough to prove portable continuity:

- single semantic thread;
- 6W continuity frame;
- fact/thought/concern/interpretation distinction;
- temporary/stable/superseded continuity state;
- refresh on meaning change;
- continuity compression;
- portable Markdown packet;
- inspection/correction;
- manual cross-AI continuation.

Success test:

> AI B can continue the user's thinking correctly from a packet produced with AI A without reading the old chat.

### Phase 2 — ASC authority and sync

Add:

- ASC DB continuity authority for linked threads;
- autosave on meaning change;
- packet export/import;
- base revision awareness;
- stale-copy detection;
- simple conflict reconciliation.

Success test:

~~~text
AI A
→ ASC
→ export
→ AI B modifies
→ sync back
→ no silent data loss
~~~

### Phase 3 — Semantic thread intelligence

Add:

- lightweight index;
- semantic thread resolution;
- one chat updating multiple continuity threads;
- cross-thread retrieval;
- dormant/archive/reopen behavior;
- split/merge assistance.

Success test:

> The user can say “sambung benda Kulai tu” and the system resolves the right context without loading the full history.

### Phase 4 — DUMP / DECIDE / DESIGN product pilot

~~~text
DUMP   → ZASSPILL
DECIDE → ZASSELECTION
DESIGN → ZASSIMPLE
~~~

Test the three-intent ASC surface and dedicated DECIDE/DESIGN branching with outcome + lineage returned to ZASSPILL.

---

## 23. Promotion gate for future global routing

Do not retire the current global DECIDE or BUILD? entry until all of these pass:

1. DUMP continuity works across new chats and different AIs.
2. DECIDE routes cleanly into ZASSELECTION.
3. DESIGN routes cleanly into ZASSIMPLE.
4. Users do not need to understand method names to use the three paths.
5. ASC synchronization does not silently lose or overwrite continuity state.

When all pass, the intended migration is:

~~~text
ZASS SYSTEM
↓
DUMP / DECIDE / DESIGN
~~~

and the old:

~~~text
DECIDE or BUILD?
~~~

is retired.

---

## 24. Audit status at this checkpoint

~~~text
Purpose / boundary             PASS
Separation of concerns         PASS
Portability                    PASS
Thread model                   PASS
Retrieval direction            PASS
Handoff                        PASS
Authority / sync               PASS
Human control                  PASS
Privacy minimization           PASS
ASC-safe migration             PASS
ZASSIMPLE naming collision     MITIGATED
Implementation complexity      PHASED / MANAGEABLE
~~~

## 25. Historically deferred implementation details

The following were intentionally **not** finalized at this historical checkpoint. Several were later completed by ZASSPILL v1.0.0 and ZASS SYSTEM v0.2.0; the list is preserved as design-history context:

- final Thread Packet schema;
- machine thread-ID format;
- packet contract/version syntax;
- exact conflict-merge algorithm;
- exact index storage implementation;
- exact ASC database schema;
- exact split/merge scoring or thresholds;
- final field-validated form of ZASSPILL beyond the v0.1.0 Phase 1 method package;
- implementation of the ZASSIMPLE DUMP → IDEA DUMP rename;
- promotion of DUMP / DECIDE / DESIGN to the global ZASS SYSTEM entry contract.

This checkpoint exists so implementation can proceed from a stable, audited design without prematurely locking schema or runtime details.


---

## 26. Phase 1 implementation status — 2026-10-02

ZASSPILL v0.1.0 now exists under `ZASSPILL/` with English and Bahasa Melayu method files plus onboarding README.

Implemented from this direction:

- standalone one-thread continuity;
- 6W packet meaning;
- fact/thought/concern/preference/AI-interpretation discipline;
- temporary/stable/superseded continuity handling;
- meaning-change refresh and compression;
- inspection/correction/exclusion;
- privacy minimization;
- portable packet rendering;
- manual cross-AI continuation;
- contextual DECIDE/DESIGN suggestion boundary.

Still pending:

- real AI A → packet → AI B field proof;
- ASC authority/sync implementation;
- semantic index and multi-thread resolution;
- split/merge automation;
- global DUMP / DECIDE / DESIGN promotion.
