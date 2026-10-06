# ZASSPILL

> **Stay messy. Keep the context. Continue anywhere.**

**Version:** 1.0.0  
**Status:** METHOD / PROTOCOL CONTRACT PRODUCTION READY — PHASE 6 RELIABILITY PROOF PASSED  
**Language:** English — default method  
**Owner:** User / Continuity Owner

ZASSPILL is the DUMP continuity method in the ZASS family.

In this repository, `PRODUCTION READY` refers to the frozen ZASSPILL method/protocol contract. Runtime persistence, retrieval, authorization, and transport are implemented outside this method layer by AI-SYNC/ASC.

Its job is simple:

> **Preserve enough human context to continue thinking across chats and AIs without forcing premature structure.**

ZASSPILL is not a decision method, architecture method, task system, transcript archive, or personal-profile database.

A user may stay in ZASSPILL indefinitely. Not moving to DECIDE or DESIGN is not failure.

---

## 1. Phase 1 boundary

ZASSPILL v0.1.0 intentionally proves only the portable single-thread core.

Included:

- one semantic continuity thread per portable packet;
- the 6W continuity frame;
- fact/thought/concern/preference/AI-interpretation distinction;
- temporary/stable/superseded continuity handling;
- refresh on meaning change;
- continuity compression;
- human inspection and correction;
- manual portability between AIs;
- contextual suggestions to DECIDE or DESIGN when intent materially changes.

Not included yet:

- ASC database synchronization;
- semantic thread index;
- automatic multi-thread resolution;
- split/merge automation;
- dormant/archive automation;
- final backend schema;
- machine thread-ID format;
- global addition of DUMP as a first-class entry.

Historical Phase 1 note: those exclusions applied to v0.1.0. As of ZASSPILL v1.0.0 / ZASS SYSTEM v0.2.0, the released global entry is DUMP / DECIDE / DESIGN, with DUMP → ZASSPILL.

---

## 2. Language routing

ZASSPILL_EN.md is the default English method file. ZASSPILL_MY.md is the Bahasa Melayu companion.

If the user clearly speaks Bahasa Melayu while this English method file is active, show this lightweight notice once when useful:

> **Versi Bahasa Melayu tersedia: ZASSPILL_MY.md.**  
> Anda boleh terus bercakap dalam Bahasa Melayu walaupun menggunakan fail English, atau gunakan versi Melayu jika mahu arahan method sepenuhnya dalam BM.

Do not auto-switch files and do not repeat the notice on every reply.

Ordinary conversation may continue in the user's language. Structured ZASSPILL surfaces follow the active method-file language. Important original wording may remain in the user's original language when translation could change meaning.

---

## 3. Normal DUMP behavior

> **DUMP should feel like talking, not operating a system.**

For ordinary user messages:

- reply naturally first;
- do not show a mandatory ZASSPILL block;
- do not force goals, criteria, choices, architecture, plans, tasks, or progress;
- quietly preserve only context that materially helps future continuity;
- do not claim a file or external store changed unless a real write occurred.

The better ZASSPILL works, the less the user has to think about ZASSPILL.

---

## 4. The 6W continuity frame

The AI maintains meaning using six semantic buckets.

### WHO
Who matters to this thread?

Carry only relationship + thread relevance. Do not turn WHO into a full profile.

### WHAT THIS IS ABOUT
What human story or continuity topic is being carried?

### WHERE THE THINKING IS NOW
Where does the user's thinking currently stand?

### WHAT MATTERS
Which facts, preferences, constraints, concerns, or conditions materially help continuation?

### WHAT IS STILL OPEN
What remains unresolved, uncertain, or worth returning to?

### WHERE THIS CONTEXT CAME FROM
Where did this state come from, how fresh is it, and what minimal lineage is needed?

Optional history is allowed only when chronology materially helps continuation.

---

## 5. Meaning discipline

Truth type and continuity stability are separate.

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

Rules:

- Stable does not mean fact.
- A recurring thought remains a thought unless the user explicitly turns it into a fact/decision.
- A concern must be written as a concern, not as a predicted outcome.
- AI interpretation must remain distinguishable from what the user actually said.
- Explicit user correction outranks AI interpretation.
- Superseded context must not compete with current context.
- Keep old context only when it helps explain the present.

Example:

~~~text
User:
“I keep thinking about moving.”

Good:
THOUGHT — moving is a recurring consideration.

Wrong:
FACT — the user is moving.
~~~

Do not force every packet line into visible labels. Use labels when they prevent meaning from being hardened or confused.

---

## 6. Refresh and continuity compression

> **Refresh on meaning change, not message count.**

Refresh when meaning materially changes, for example:

- the user's current thinking changes;
- an important person, fact, preference, constraint, or concern becomes relevant;
- an open thread changes or resolves;
- stored context becomes stale;
- the user corrects the AI;
- the user asks to inspect or export the current state.

Do not append a mini-summary after every message.

> **Current Summary represents the present, not the transcript.**

New information should update the current picture, not automatically enlarge the packet.

A longer conversation should not necessarily produce a larger packet.

---

## 7. Portable Thread Packet — Phase 1 surface

The portable Thread Packet is the standalone continuity artifact.

It is AI-maintained. The user is not expected to fill a form.

This is a human-readable Phase 1 rendering surface, not a final backend schema.

~~~markdown
# ZASSPILL Thread — [human-readable title]

Method: ZASSPILL v1.0.0
Packet format: Portable Thread Packet v0.1
State: Standalone continuity packet
Updated: [date/time if known]
Continuity boundary: Use this packet + current conversation only. Do not enrich this thread from provider memory/profile unless the user explicitly reintroduces it.

## WHO
- [only people who matter to this thread + minimal relevance]

## WHAT THIS IS ABOUT
[short human-story description]

## WHERE THE THINKING IS NOW
[current meaning, not transcript history]

## WHAT MATTERS
- [relevant fact / preference / constraint / concern]
- [use careful wording so thoughts do not become facts]

## WHAT IS STILL OPEN
- [unresolved item]
- [question worth returning to]

## WHERE THIS CONTEXT CAME FROM
- Source: [AI/chat/app/file if known]
- Freshness: [what the state is based on]
- Lineage: [minimal source/continuation note]

## OPTIONAL HISTORY
[only transitions whose chronology materially helps continuity]

## CONTINUE IN ANOTHER AI

ZASSPILL method — raw:
https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSPILL/ZASSPILL_EN.md

ZASSPILL method — browser fallback:
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSPILL/ZASSPILL_EN.md

If the user later chooses DECIDE → ZASSELECTION — raw:
https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSELECTION/ZASSELECTION_EN.md

If the user later chooses DECIDE → ZASSELECTION — browser fallback:
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSELECTION/ZASSELECTION_EN.md

If the user later chooses DESIGN → ZASSIMPLE — raw:
https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSIMPLE/ZASSIMPLE_EN.md

If the user later chooses DESIGN → ZASSIMPLE — browser fallback:
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSIMPLE/ZASSIMPLE_EN.md

Instruction: Read and follow ZASSPILL first. Treat this packet as the continuity authority and use this packet + the current conversation only. If the user's intent later moves to DECIDE or DESIGN and the user explicitly chooses that transition, use the matching receiving-method links already carried in this packet. Do not activate ZASSELECTION or ZASSIMPLE before the user chooses the corresponding transition.
~~~

The title is presentation, not identity. In Phase 1 there is no locked machine-ID format.

One portable packet should carry one semantic continuity thread.

---

## 8. SAVE and standalone authority

SAVE means:

> **save the current continuity state, not the conversation transcript.**

Phase 1 has no ASC sync yet.

When external persistence is available and a real write succeeds, report the real receipt.

When external persistence is not available:

- render the updated portable Thread Packet;
- say clearly that it is an updated/generated packet;
- do not claim it was saved externally.

For standalone use, the Thread Packet intentionally retained and supplied by the user/session is the current continuity authority.

A generated but unpersisted update is not evidence of external persistence.

Newest timestamp alone never proves authority.

---

## 9. Inspect, correct, exclude

ZASSPILL is invisible by default but inspectable on demand.

The user may say naturally:

~~~text
What did you keep about this?
Show me the context for this thread.
That part about me wanting to resign is wrong.
Do not keep that.
Remove that from this context.
~~~

Rules:

> **The user corrects meaning; the system maintains structure.**

> **Users may explicitly exclude or remove continuity context.**

Do not require the user to edit Markdown manually.

If the user corrects a meaning, update the current state rather than preserving a misleading AI interpretation as a competing current truth.

For ZASSPILL system responses to actions such as correct, exclude, inspect, or save:

- place the system response inside a fenced code block;
- keep it as short as possible;
- keep it separate from the normal conversation;
- after the block, continue naturally based on the user's actual message when useful.

Example:

~~~text
ZASSPILL: context excluded.
~~~

---

## 10. Privacy and minimization

WHO carries relationship + thread relevance, not full identity data.

Do not include unrelated personal information merely because the AI or backend knows it.

> **If a personal detail is not necessary for continuity, do not carry it.**

> **Portability is a disclosure boundary.**

> **Provider memory is outside the packet boundary.**

ZASSPILL must not assume, import, or synchronize personal memory, profile, or private context held by ChatGPT, Gemini, or another AI provider unless the user intentionally brings that context into the semantic thread. Provider-specific personalization may coexist, but it is not part of the portable continuity authority.

A portable packet may contain less information than a private authorized backend.

Preserve exact user wording only when paraphrasing would materially change meaning.

---

## 11. Continue in another AI

To continue a standalone thread in another AI, the preferred Phase 1 handoff is **single-copy**: paste the current Thread Packet. The packet itself carries the raw + browser fallback links for ZASSPILL and also the pre-declared receiving-method links for both later routes: DECIDE → ZASSELECTION and DESIGN → ZASSIMPLE.

The receiving AI should read ZASSPILL first. The downstream links are carried in advance for continuity and must not activate ZASSELECTION or ZASSIMPLE until the user explicitly chooses the corresponding transition.

The receiving AI should:

- read the packet as continuity state, not as a final decision record;
- respond naturally;
- avoid reconstructing the whole old conversation;
- refresh only when meaning changes;
- preserve corrections and distinctions between fact/thought/concern/AI interpretation;
- keep new knowledge introduced after handoff distinguishable from inherited context.

> **New knowledge is not inherited context.**

Any fact, estimate, research, or interpretation introduced by the receiving AI after handoff must remain distinguishable from information carried in the Thread Packet.

Loading a valid Thread Packet already implies continuation. No mandatory CONTINUE command exists.

---

## 12. Contextual move-up

ZASSPILL may notice that intent has materially matured, but must never auto-switch.

If the user now truly wants to choose, render only a concise ZASSPILL system block:

~~~text
ZASSPILL: real choice detected.

Reply:
[ KEEP DUMPING ]   [ DECIDE ]
~~~

If the user now truly wants to shape/build something, render only a concise ZASSPILL system block:

~~~text
ZASSPILL: idea is ready to be shaped.

Reply:
[ KEEP DUMPING ]   [ DESIGN ]
~~~

Do not explain the method, repeat the user's options, or define the controls unless the user asks.

Do not show these merely because DECIDE or DESIGN could theoretically apply.

When the user explicitly wants to choose, ZASSPILL must not compare, rank, recommend, select, or plan the options. It must first offer [ KEEP DUMPING ] [ DECIDE ] and wait for the user's choice. Only after the user chooses DECIDE may ZASSELECTION own the comparison.

When the user explicitly wants to shape or build something, ZASSPILL must not architect the solution, design workflows, build an Action Plan, slice tasks, determine implementation structure, or begin execution. It must first offer [ KEEP DUMPING ] [ DESIGN ] and wait for the user's choice. Only after the user chooses DESIGN may ZASSIMPLE own the structured design work.

If the user chooses DECIDE, the receiving method is ZASSELECTION.

If the user chooses DESIGN, the receiving method is ZASSIMPLE.

Carry only relevant continuity context. Do not pre-build the matrix, architecture, Action Plan, or tasks inside ZASSPILL.

---

## 13. Handoff minimum

When a user explicitly moves to DECIDE or DESIGN, carry only:

~~~text
thread identity / title
relevant WHO
WHERE THE THINKING IS NOW
relevant WHAT MATTERS
relevant WHAT IS STILL OPEN
minimal source / lineage
optional relevant history
~~~

The receiving method owns its structured work.

Continuity context informs, but does not pre-authorize a decision or design.

When a structured method returns a result, ZASSPILL should retain only the relevant outcome + lineage, not the entire internal method artifact.

---

## 14. Method Handoff Contract v0.1

When the user explicitly chooses DECIDE or DESIGN, ZASSPILL must generate one copy-ready **ZASS METHOD HANDOFF** packet.

This handoff is mandatory even when the receiving method will continue in the same AI or the same chat. The required order is:

1. User explicitly chooses DECIDE or DESIGN.
2. ZASSPILL renders the complete ZASS METHOD HANDOFF packet first.
3. Only after the packet is rendered may the AI read/load the receiving method.
4. If the receiving method is successfully read, continue directly without asking for a second confirmation.
5. If the receiving method cannot be read through the available transport/fallback path, stop at that boundary and follow the declared fallback behavior.

Structured work from ZASSELECTION or ZASSIMPLE must not appear before the Method Handoff Packet has been rendered.

### Same-chat continuation UX

> **Same-chat continuation is the default. Portability is a capability, not an obligation.**

A method handoff does not mean the user must move to another chat or another AI. It means responsibility moves from one method to the receiving method.

Rules:

- prefer to keep the user in the same conversation when the current AI can continue correctly;
- treat the Method Handoff Packet as lineage + method-boundary infrastructure, not as a demand to relocate the user;
- after rendering the packet, load the receiving method as quietly as possible;
- do not narrate routine transport steps such as “handoff complete”, “now trying the raw link”, or similar system-log language when no problem requires the user's attention;
- if the receiving method loads successfully, continue naturally into the receiving method;
- only surface loading/transport status when there is an actual failure or a user action is required;
- if loading fails, explain the problem in natural language and preserve same-chat continuity whenever possible.

> **Handoff ≠ moving place. Handoff = moving method.**

The handoff packet must:

- name the source method and receiving method;
- record the transition explicitly chosen by the user;
- include both links for the receiving method: (1) canonical raw GitHub link and (2) normal GitHub browser link as fallback;
- instruct the receiver to read and follow that method before structured work begins;
- carry only the minimum relevant continuity context from Section 13;
- state that inherited context is input, not a pre-made decision, architecture, plan, or implementation;
- preserve lineage from ZASSPILL to the receiving method;
- update the current state immediately to reflect the transition the user explicitly chose; pre-transition state must not remain as a competing current truth;
- keep prior AI suggestions clearly labeled as AI suggestions and never promote them into user constraints, preferences, or decisions unless the user explicitly confirmed them;
- treat the user's explicit DECIDE or DESIGN choice as sufficient authorization to activate the receiving method; do not ask for a second confirmation before loading and following it;
- never introduce new options, examples, facts, constraints, preferences, or interpretations inside the Method Handoff Packet. The packet may only carry context already present in the source thread plus the user's explicit transition choice;
- render the entire Method Handoff Packet as one complete fenced code block for single-copy portability. Do not split the packet across normal prose, headings, tables, or multiple blocks. Any status or error about loading the receiving method may appear outside the packet.

> **The receiving AI must read the receiving method before doing structured work. Try the canonical raw GitHub link first. If that fails, try the normal GitHub browser link. Only if both links cannot be accessed may it ask the user to provide the relevant method file as fallback. It must never improvise the receiving method.**

> **Transition truth rule:** once the user chooses DECIDE or DESIGN, the handoff packet must represent that choice as the current state while preserving any still-relevant uncertainty about the underlying decision or design target.

### DESIGN handoff

~~~text
# ZASS METHOD HANDOFF

From: ZASSPILL
To: ZASSIMPLE
Transition chosen by user: DESIGN

Receiving method — raw:
https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSIMPLE/ZASSIMPLE_EN.md

Receiving method — browser fallback:
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSIMPLE/ZASSIMPLE_EN.md

Instruction:
Read and follow ZASSIMPLE before beginning structured design work.
Try the raw link first. If it cannot be accessed, try the browser fallback link.
Do not invent your own ZASSIMPLE workflow.
Only if both links fail, tell the user and ask for ZASSIMPLE_EN.md as file/paste fallback.

## THREAD
[thread title]

## WHERE THE THINKING IS NOW
[current state relevant to DESIGN]

## WHAT MATTERS
- [relevant constraint / concern / preference / fact]

## WHAT IS STILL OPEN
- [open item that still needs design work]

## LINEAGE
ZASSPILL → user explicitly chose DESIGN → handoff to ZASSIMPLE.

Handoff rule:
The user's DESIGN choice is already the current transition state and is sufficient authorization to activate ZASSIMPLE; do not ask for a second confirmation.
This context is input to ZASSIMPLE, not architecture already decided.
Earlier AI suggestions remain AI suggestions unless the user explicitly confirmed them.
ZASSIMPLE owns the structured design work after this handoff.
~~~

### DECIDE handoff

~~~text
# ZASS METHOD HANDOFF

From: ZASSPILL
To: ZASSELECTION
Transition chosen by user: DECIDE

Receiving method — raw:
https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSELECTION/ZASSELECTION_EN.md

Receiving method — browser fallback:
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/blob/main/ZASSELECTION/ZASSELECTION_EN.md

Instruction:
Read and follow ZASSELECTION before beginning comparison.
Try the raw link first. If it cannot be accessed, try the browser fallback link.
Do not invent your own selection method.
Only if both links fail, tell the user and ask for ZASSELECTION_EN.md as file/paste fallback.

## THREAD
[thread title]

## WHERE THE THINKING IS NOW
[current state relevant to the decision]

## WHAT MATTERS
- [relevant constraint / concern / preference / fact]

## WHAT IS STILL OPEN
- [options or questions not yet decided]

## LINEAGE
ZASSPILL → user explicitly chose DECIDE → handoff to ZASSELECTION.

Handoff rule:
The user's DECIDE choice is already the current transition state and is sufficient authorization to activate ZASSELECTION; do not ask for a second confirmation.
This context is input to ZASSELECTION, not a decision already made.
Earlier AI suggestions remain AI suggestions unless the user explicitly confirmed them.
ZASSELECTION owns structured comparison after this handoff.
~~~

The user should be able to copy and paste this handoff packet as one block into the same AI or another AI. The complete packet must therefore be rendered inside one fenced code block.

---

## 15. Phase 1 proof test

ZASSPILL v0.1.0 is successful only when this can be demonstrated in real use:

~~~text
AI A
↓
messy human conversation
↓
portable Thread Packet
↓
AI B
↓
continue naturally without loading the old chat
~~~

The test should verify:

- the important human story survives;
- facts are not invented;
- thoughts/concerns are not hardened into facts;
- stale context does not dominate;
- unnecessary personal detail is not exported;
- the receiving AI can continue without demanding a form or reconstructing the transcript.

Until this field test passes, ZASSPILL remains a Phase 1 core proof and is not a replacement for the current global ZASS SYSTEM entry contract.


---

## 16. Phase 2 — Multi-Thread Continuity

Phase 2 extends the Phase 1 single-thread core so one conversation can carry multiple semantic threads without mixing their meaning.

Core rules:

- A new thread exists only when the topic has continuity that can be resumed independently.
- A supporting topic stays a minor branch until it develops its own goal, state, open questions, or future.
- Do not over-split. When uncertain, keep the topic inside the current thread.
- The current thread gives only a small routing prior; semantic meaning matters more than keywords.
- If more than one thread is plausible, do not guess. Ask the user to choose.

### Thread Index

The lightweight Thread Index contains only:

~~~text
Thread
State: ACTIVE / DORMANT / ARCHIVED
Current
Resume cues
Freshness
Lineage
~~~

It is a navigation surface, not a summary database, and stays hidden by default.

### SPLIT / MERGE

Suggest SPLIT only when one thread now contains two continuities that can move independently. Never auto-split.

If SPLIT is chosen, create the new thread and preserve `split-from [parent]` lineage.

Suggest MERGE only when two threads now share the same continuity and future, and keeping them separate is no longer useful. Never auto-merge.

If MERGE is chosen:
- retain one active continuity;
- active lineage uses `merged-from [A + B]`;
- old source threads remain archived references using `merged-into [active thread]`.

### Thread lifecycle

- ACTIVE = alive / moving / reasonably resumable now.
- DORMANT = unresolved or still relevant, but paused.
- ARCHIVED = completed, no longer current, or intentionally closed.

Transitions:
- ACTIVE → DORMANT when paused.
- DORMANT → ACTIVE when resumed.
- ACTIVE/DORMANT → ARCHIVED when completed or closed.
- ARCHIVED → ACTIVE only when the user clearly reopens the same continuity.
- Historical recall alone does not reopen an archived thread.
- Time alone must not auto-archive a thread.
- SUPERSEDED is a context status, not a thread state.

### Conflict, isolation, and resume

Context remains thread-local by default. Related does not mean shared.

When statements appear to conflict, check scope, time horizon, truth type, and whether the user actually changed position. If a real material conflict remains, ask for clarification rather than choosing for the user.

User correction outranks AI interpretation. Corrected/superseded context must not become a separate thread or compete with current truth.

Resume by explicit reference or strong unique semantic cue. If ambiguous, ask the user to choose. Resume from the current Thread Packet, not by reconstructing the full transcript.

### Index updates and visibility

Update the index only when continuity changes materially.

Minor branches do not create index entries. Split, merge, resume, correction, and lifecycle changes update only the affected thread records.

Show the Thread Index only when the user asks, routing is ambiguous, or split/merge needs a visible choice.

### Phase 2 proof

Field tests passed for:
- routing and resume;
- new thread vs minor branch;
- branch promotion;
- split/merge with user control;
- lineage;
- ACTIVE/DORMANT/ARCHIVED and reopen behavior;
- conflict and isolation;
- correction and superseded context;
- hidden-by-default Thread Index;
- natural same-chat continuity.

Some receivers may still introduce context from outside the portable thread boundary. That remains a receiver-compliance limitation, not part of ZASSPILL portable authority.

> **ZASSPILL v0.2.0 Phase 2 is frozen. New features belong to a later phase/version; only critical fixes should alter this release.**


---

## 17. Phase 3 — Persistence / ASC Contract

Phase 3 locks the persistence contract between ZASSPILL meaning and ASC infrastructure.

Primary boundary:

> **ZASSPILL defines WHAT a thread, continuity, revision, conflict, packet, and lifecycle mean. ASC defines HOW they are stored, synchronized, retrieved, and protected.**

Phase 3 does not lock a database engine, vector store, hosting model, dashboard, AI provider, or implementation stack.

### 17.1 Thread Identity Contract

Every persisted thread has a stable identity:

```text
thread_id = th_<ULID>
```

Rules:

- `thread_id` is generated once by the persistence layer/ASC;
- it is opaque, immutable, and meaning-free;
- it must not encode title, topic, username, provider, project, state, or semantic meaning;
- rename, correction, normal update, DORMANT, ARCHIVE, and REOPEN preserve `thread_id`;
- SPLIT preserves the parent ID and creates a new ID for the child;
- TRUE MERGE creates a new identity. Source threads become ARCHIVED and record `merged_into`; the merged thread records `merged_from`;
- if one thread merely receives an update from another, that is not a TRUE MERGE.

Any technical timestamp inside a ULID does not determine freshness or authority.

### 17.2 Authoritative Thread Record

One authoritative Current Thread Record exists for each `thread_id`.

Minimum semantic record:

```text
thread_id
title
state

continuity:
  who
  about
  current
  matters
  open
  origin

resume_cues
lineage
revision
created_at
semantic_updated_at
```

`state` is limited to:

```text
ACTIVE
DORMANT
ARCHIVED
```

`lineage` may carry:

```text
split_from
merged_from
merged_into
```

The Thread Index is a derived projection only, never a second source of truth.

Metadata such as user/account ID, provider, device, auth, sync status, embeddings, or `persisted_at` belongs to the ASC envelope, not the semantic Thread Record.

### 17.3 Revision + Event Contract

The Current Thread Record is current-state authority. The event log is immutable semantic mutation/history lineage; Phase 3 is not a full event-sourcing system.

Every successful material semantic mutation:

```text
revision N → N+1
```

and must create one matching semantic event.

Minimum event:

```text
event_id: ev_<ULID>
thread_id: th_<ULID>
revision
event_type
occurred_at
change
```

Locked event types:

```text
CREATE
UPDATE
CORRECT
RENAME
DORMANT
RESUME
ARCHIVE
REOPEN
SPLIT
MERGE
```

Revision does not increase for READ, export, sync, backup, replication, serialization-only changes, or retries of the same logical request.

The Thread Record mutation + matching event form one logical atomic operation. The system must not report a new record revision without a valid matching event.

### 17.4 Optimistic Concurrency

A semantic write must carry:

```text
thread_id
expected_revision
mutation
```

If:

```text
stored_revision == expected_revision
```

the write may be accepted.

Otherwise return:

```text
REVISION_CONFLICT
```

and:

- the Thread Record remains unchanged;
- revision does not increase;
- no new semantic event is created;
- no last-write-wins behavior is allowed;
- the caller must reload the current record before reconciliation.

If reconciliation reveals a material contradiction, ask the user to clarify. Do not semantic-auto-merge.

### 17.5 Idempotency Contract

Every logical semantic write carries:

```text
request_id = req_<ULID>
```

Rules:

- same `request_id` + same payload → `ALREADY_APPLIED` / return the original result;
- do not execute again;
- do not increase revision;
- do not create a duplicate event;
- same `request_id` + different payload → `IDEMPOTENCY_KEY_REUSE_CONFLICT`;
- a new logical mutation requires a new `request_id`.

`request_id` identifies the logical request/retry. `event_id` identifies the successful semantic event.

### 17.6 Authority Contract

Phase 3 authority order:

- latest explicit user statement = semantic authority in the live conversation;
- ASC Current Thread Record = persistence authority for successfully stored state;
- event log = history / mutation / lineage authority;
- Portable Packet = portable snapshot of a known persisted revision or standalone/local state;
- Thread Index = derived navigation;
- AI interpretation/chat = working context/proposal, not independent persistence authority;
- provider memory/profile/private context = outside portable authority.

Live meaning may temporarily be newer than ASC before persistence succeeds. The system must never pretend a write occurred.

If a packet is older than reachable ASC state, persisted ASC state wins.

### 17.7 Retrieval Contract

Three retrieval operations:

```text
GET_BY_ID
RESOLVE_THREAD
LIST_THREADS
```

`GET_BY_ID`:
- when `thread_id` is known, retrieve that identity directly;
- do not semantic-search alternatives.

`RESOLVE_THREAD`:
- `UNIQUE_MATCH` → retrieve the selected identity;
- `MULTIPLE_MATCHES` → show minimal candidates and ask the user to choose;
- `NO_MATCH` → do not invent an existing thread.

Resolution candidates carry only minimum identity/navigation context. Full continuity is read after an identity is selected.

`LIST_THREADS` returns the index projection, not full Thread Records.

Retrieval is READ-ONLY:
- no revision bump;
- no event;
- no auto-create;
- no auto-resume;
- no auto-reopen.

An ARCHIVED thread may be retrieved for history but remains ARCHIVED until the user explicitly chooses REOPEN.

### 17.8 Packet ↔ ASC Reconciliation

An ASC-backed packet carries minimum reconciliation metadata:

```text
thread_id
base_revision
packet_state
exported_at
```

`packet_state`:

```text
SYNCED
LOCAL_CHANGES
STANDALONE
```

`base_revision` is the last ASC revision the packet validly knows.

Offline/local edits:

- do not create a fake ASC revision;
- do not create a fake event;
- keep `base_revision` unchanged;
- switch the packet to `LOCAL_CHANGES`.

Reconciliation:

```text
packet SYNCED rev N + ASC rev N
→ IN_SYNC

packet SYNCED rev N + ASC rev >N
→ STALE_PACKET / STALE_SNAPSHOT
→ persisted ASC state wins

packet LOCAL_CHANGES base N + ASC rev N
→ SAFE_TO_WRITE
→ propose write with expected_revision N

packet LOCAL_CHANGES base N + ASC rev >N
→ DIVERGENCE_DETECTED
→ reload + reconcile
→ no last-write-wins
```

If ASC is unavailable, the packet may serve as portable authority for that session but must remain `LOCAL_CHANGES`; do not claim external persistence.

If a packet claims a revision newer than ASC without valid provenance, return `REVISION_PROVENANCE_MISMATCH`.

### 17.9 Cross-AI Write Contract

An AI/provider only proposes semantic mutation. ASC owns persistence mechanics and protected metadata.

Write shape:

```text
request_id
thread_id
expected_revision
operation
changes
```

Allowed semantic operations:

```text
UPDATE
CORRECT
RENAME
DORMANT
RESUME
ARCHIVE
REOPEN
SPLIT
MERGE
```

An AI must not arbitrarily set or replace:

- an existing thread identity;
- revision;
- event_id;
- system timestamps;
- persistence receipts.

State transitions must use lifecycle operations. Lineage changes must use SPLIT/MERGE. Generic full-record replacement is not allowed.

SPLIT and MERGE multi-record operations must be logically atomic. ASC generates any required new identity.

Provider memory/profile must not enrich a semantic mutation unless the user intentionally brings that context into the thread.

### 17.10 Bootstrap / Import Contract

A packet without `thread_id` is a bootstrap candidate, not automatically a new thread.

Flow:

```text
resolve identity
↓
NO_MATCH
→ CREATE new th_<ULID>, revision 1, CREATE event

UNIQUE_MATCH
→ attach existing identity
→ no duplicate

MULTIPLE_MATCHES
→ user clarification
→ no create / no attach
```

Do not infer identity from title alone. Do not auto-MERGE, auto-SPLIT, or create duplicates.

Bootstrap requests must also be idempotent.

### 17.11 Delete / Forget / Tombstone

`ARCHIVED` is a semantic lifecycle state. It is not privacy deletion.

`DELETE_THREAD` requires identity + stale-write protection.

A successful delete removes:

- the semantic Thread Record;
- semantic event history;
- Thread Index/search projections;
- related derived semantic caches.

A minimal tombstone may remain only to prevent resurrection:

```text
thread_id
deleted_at
deletion_request_id
```

A tombstone must not retain title, current, WHO, matters, open, resume cues, semantic history, or deleted content.

A stale packet referencing a tombstoned identity returns:

```text
THREAD_TOMBSTONED
```

and must not auto-resurrect.

If the user wants to reuse old content, it requires explicit CREATE_NEW with a new identity.

`FORGET_CONTEXT` is privacy erasure for selected semantic context. Forgotten content must not be copied into an immutable event; a receipt/event may only state that context was removed at user request.

### 17.12 Portable Packet v2

Portable Packet v2 is human-readable Markdown with machine metadata. It is not a JSON-only database dump.

Method identity must be explicit:

```yaml
method: ZASSPILL
method_version: 1.0.0
packet_format_version: 2
```

`export`, `import`, and `reconcile` are operations, not values for `method`.

Minimum ASC-backed packet:

```yaml
---
method: ZASSPILL
method_version: 1.0.0
packet_format_version: 2
thread_id: th_<ULID>
title: <human title>
state: ACTIVE | DORMANT | ARCHIVED
base_revision: <persisted revision known by packet>
packet_state: SYNCED | LOCAL_CHANGES
exported_at: <timestamp if known>
continuity:
  who: ...
  about: ...
  current: ...
  matters: ...
  open: ...
resume_cues: ...
lineage:
  split_from: ...
  merged_from: ...
  merged_into: ...
provenance:
  source: ...
---
```

A standalone packet without persisted identity may use:

```text
packet_state: STANDALONE
```

and may omit `thread_id` / `base_revision` until bootstrap succeeds.

Do not export full event history by default. Export current continuity + minimum relevant lineage/history only.

Round-trip invariant:

> **export → AI → local change → ASC reconciliation/write → export again must preserve thread_id, lineage, and original meaning except for semantic changes actually authorized by the user.**

Editing a packet never proves persistence.

### 17.13 Phase 3 Proof

The Phase 3 field-test suite passed:

```text
FT01 Identity Stability             PASS
FT02 Revision + Event               PASS
FT03 Idempotency                    PASS
FT04 Concurrent Write               PASS
FT05 Retrieval + Ambiguity          PASS
FT06 Packet ↔ ASC Reconciliation    PASS
FT07 Bootstrap / Duplicate Protect  PASS
FT08 Cross-AI Write                 PASS
FT09 Delete / Tombstone             PASS
FT10 Portable Packet v2 Round-trip  PASS
```

The proof covers:

- stable machine identity;
- revision/event consistency;
- stale-write protection;
- idempotent retries;
- ambiguity-safe retrieval;
- offline/local packet reconciliation;
- cross-provider continuity without provider-memory enrichment;
- duplicate-safe bootstrap;
- privacy deletion + tombstone;
- Portable Packet v2 round-trip.

> **ZASSPILL v0.3.0 Phase 3 is frozen. The persistence semantics and ASC contract above are the Phase 3 authority. New features belong in Phase 4 or a later version; only critical fixes should alter this release.**


---

## 18. Phase 4 — Retrieval Intelligence

Phase 4 locks how ZASSPILL finds and resolves continuity threads semantically without turning retrieval into guessing, keyword-only matching, or authority based on an opaque score.

Primary principle:

> **Retrieval intelligence is evidence-based, not keyword-based. Candidate generation may be broad, but final resolution must remain conservative.**

Phase 4 remains compatible with Phase 3: retrieval is READ-ONLY and has no authority to mutate state, revision, events, or semantic truth.

### 18.1 Authorized Retrieval Scope

Retrieval may search only continuity scope the user is authorized to access.

Allowed evidence sources:

- exact `thread_id`;
- explicit / near-exact title reference;
- `resume_cues`;
- `continuity.about`;
- `continuity.current`;
- `continuity.matters`;
- `continuity.open`;
- materially relevant lineage;
- user lifecycle intent.

Not retrieval authority:

- provider memory / profile / private personalization;
- unrelated chats;
- web knowledge;
- external AI inference not intentionally brought into the thread by the user;
- opaque numeric similarity score alone.

### 18.2 Candidate Generation ≠ Final Resolution

Semantic retrieval has two layers:

```text
USER CUE
   ↓
CANDIDATE GENERATION
   ↓
FINAL RESOLUTION
   ↓
UNIQUE_MATCH
MULTIPLE_MATCHES
NO_MATCH
```

Candidate generation may deliberately retrieve multiple possibilities.

> **Being a candidate does not mean the thread has been selected.**

The final resolver must evaluate evidence coherence before selecting an identity.

### 18.3 Evidence Strength

Evidence may have different strength.

Strong evidence includes:

- exact `thread_id`;
- explicit unique title/reference;
- highly specific resume cue.

Medium evidence includes:

- coherent semantic match with `about` / `current`;
- a combination of multiple current resume cues;
- relevant `matters` / `open`;
- clear lifecycle intent.

Weak evidence includes:

- generic keyword only;
- one overlapping word;
- similarity without continuity meaning.

Keyword overlap alone is not enough to force `UNIQUE_MATCH`.

### 18.4 Negative Evidence

Explicit user exclusion is negative evidence.

Example:

```text
"continue the Kulai one, not the work one"
```

A work-related candidate must lose relevance even if it shares the keyword `Kulai`.

Explicit user exclusion outranks keyword overlap.

### 18.5 Superseded / Stale Cue Discipline

Context or resume cues marked `SUPERSEDED` must not act as current retrieval evidence.

Semantic priority:

```text
current meaning
↓
valid current resume cues
↓
relevant matters/open
↓
older supporting context
```

Freshness is not timestamp alone.

`semantic_updated_at` may help an implementation as a tie-break, but it must not outrank semantic relevance.

DORMANT or ARCHIVED does not mean stale.

### 18.6 Conservative Resolution

`UNIQUE_MATCH` is allowed only when one candidate has materially stronger and coherent evidence.

If two or more candidates remain plausible:

```text
MULTIPLE_MATCHES
```

If evidence is insufficient:

```text
NO_MATCH
```

Do not force `UNIQUE_MATCH` merely because an internal numeric score is slightly higher.

> **False ambiguity is safer than false identity.**

### 18.7 Exact Identity Bypass

When `thread_id` is known, use exact lookup:

```text
GET_BY_ID
```

and do not run semantic ranking against alternatives.

An exact unique title reference may be strong evidence, but title is not identity. If multiple threads share a title or the reference remains ambiguous, preserve ambiguity.

### 18.8 Lifecycle-Aware Retrieval

Eligibility:

```text
ACTIVE      → retrievable
DORMANT     → retrievable
ARCHIVED    → retrievable for history / resolution
TOMBSTONED  → not a semantic candidate
```

Retrieval must not:

- auto-RESUME DORMANT;
- auto-REOPEN ARCHIVED;
- resurrect a tombstoned thread.

Historical recall alone does not change lifecycle state.

A tombstone is deletion/storage status, not a semantic lifecycle state.

### 18.9 Minimal Disclosure During Ambiguity

For `MULTIPLE_MATCHES`, surface only minimum candidate information:

```text
thread_id
title
state
current
match_basis
```

Do not expose a full Thread Record, WHO, private details, or all matters/open merely to resolve identity.

`match_basis` must explain why the candidate is relevant without requiring a numeric score.

### 18.10 Retrieval Operation Result Contract

Result types must match the operation.

```text
GET_BY_ID
├─ FOUND
├─ NOT_FOUND
└─ THREAD_TOMBSTONED

RESOLVE_THREAD
├─ UNIQUE_MATCH
├─ MULTIPLE_MATCHES
└─ NO_MATCH

LIST_THREADS
└─ LIST_RESULT
```

`GET_BY_ID` is not semantic resolution. Therefore a successful exact lookup returns `FOUND`, not `UNIQUE_MATCH`.

`THREAD_TOMBSTONED` is an exact identity/deletion outcome, not a lifecycle state.

### 18.11 Read-Only Guarantee

All retrieval operations are READ-ONLY.

Retrieval must not:

- mutate a Thread Record;
- bump revision;
- create a semantic event;
- change lifecycle state;
- auto-create a thread;
- auto-merge or auto-split.

Resolution only finds identity. Semantic writes remain governed by the Phase 3 write contract.

### 18.12 Implementation Freedom

ASC implementations may use:

- keyword/BM25;
- embeddings;
- vector search;
- LLM resolver;
- hybrid retrieval;
- reranking;
- any combination of the above.

Implementation internals must not change the semantic contract.

An opaque score, embedding distance, or model confidence never becomes authority by itself for thread selection.

### 18.13 Phase 4 Proof

The consolidated Phase 4 field test passed for:

```text
Exact identity lookup               PASS
Strong semantic resolution          PASS
Ambiguous cue handling              PASS
Negative evidence                   PASS
Superseded cue rejection            PASS
DORMANT retrieval                   PASS
ARCHIVED historical recall          PASS
No auto-REOPEN                      PASS
NO_MATCH behavior                   PASS
Tombstone protection                PASS
Minimal candidate disclosure        PASS
Read-only guarantee                 PASS
Provider-memory isolation           PASS
No numeric-score authority          PASS
```

Two schema-wording corrections were identified during audit and incorporated into the final contract:

- successful `GET_BY_ID` exact lookup = `FOUND`, not `UNIQUE_MATCH`;
- a tombstone is not a lifecycle state.

Behavioral proof, contract consistency, Phase 3 compatibility, privacy boundary, and authority boundary all passed.

> **ZASSPILL v0.4.0 Phase 4 is frozen. The Retrieval Intelligence contract above is the Phase 4 authority. New features belong in Phase 5 or a later version; only critical fixes should alter this release.**


---

## 19. Phase 5 — Cross-Method Continuity

Phase 5 locks how one semantic thread moves across ZASS methods without losing identity, mixing authority, or promoting AI output into a user decision.

Primary principle:

> **The method may change. Thread identity remains stable. User authority must not change merely because an AI produced an artifact or recommendation.**

### 19.1 One Thread, Many Methods

A method transition does not create a new semantic thread.

~~~text
th_ABC

ZASSPILL
→ ZASSELECTION
→ ZASSPILL
→ ZASSIMPLE
→ ZASSPILL

thread_id = th_ABC
~~~

The thread_id remains stable while the same continuity is still in progress.

### 19.2 Method Ownership

~~~text
ZASSPILL
→ continuity / context

ZASSELECTION
→ comparison / selection

ZASSIMPLE
→ design / architecture / Action Plan
~~~

Rules:

- ZASSPILL does not choose an option for the user.
- ZASSELECTION does not build architecture.
- ZASSIMPLE does not turn an AI recommendation or draft into a user decision.
- A structured method must not write semantic continuity without the result contract + reconciliation.

### 19.3 ZASSPILL as Continuity Broker

Logically:

~~~text
ZASSPILL
→ handoff
→ receiving method
→ method result
→ ZASSPILL continuity
~~~

The UX may remain smooth in the same chat, but the semantic authority boundary must remain intact.

> **A cross-method handoff is not a thread switch. It is a switch of method responsibility on the same thread.**

### 19.4 Handoff Identity

Every method transition has its own identity:

~~~text
handoff_id = ho_<ULID>
~~~

Distinct identities:

~~~text
thread_id   = continuity identity
request_id  = persistence write/retry identity
event_id    = successful semantic event identity
handoff_id  = method transition identity
~~~

Minimum persisted handoff metadata:

~~~text
handoff_id
thread_id
source_method
target_method
source_revision
transition
minimum relevant continuity
method_lineage
~~~

The Method Handoff Contract v0.1 remains valid; Phase 5 adds machine lineage when a persisted thread is available.

A standalone handoff may omit machine fields that do not yet exist, but must never invent fake identity or revision data.

### 19.5 Handoff is a Revision-Bound Snapshot

The receiving method works from a snapshot at a specific source_revision.

~~~text
thread_id: th_A
source_revision: 12
From: ZASSPILL
To: ZASSELECTION
~~~

The receiving method must not assume the source thread remains at that revision until the result returns.

The result must reconcile against the current persisted Thread Record before semantic persistence.

### 19.6 Method Result Envelope

A structured method returns a result envelope, not the entire internal artifact.

Minimum:

~~~text
handoff_id
thread_id
source_revision
producing_method
result_status
confirmed_outcome
still_open
artifact_refs
~~~

Locked result_status values:

~~~text
CONFIRMED_RESULT
UNCONFIRMED_RESULT
NO_CHANGE
CANCELLED
~~~

For a material reconciliation conflict:

~~~text
METHOD_RESULT_DIVERGENCE
~~~

This is a reconciliation outcome, not a user-confirmed semantic outcome.

### 19.7 User Confirmation Boundary

ZASSELECTION:

~~~text
AI recommendation
→ UNCONFIRMED_RESULT
→ not a user decision

User explicitly selects
→ CONFIRMED_RESULT
→ may become a confirmed semantic outcome
~~~

ZASSIMPLE:

~~~text
draft architecture
→ UNCONFIRMED_RESULT
→ not confirmed continuity truth

user explicitly confirms architecture
→ CONFIRMED_RESULT
→ may become a confirmed semantic outcome
~~~

> **AI-generated artifact ≠ user-confirmed outcome.**

### 19.8 No Double Confirmation

When the user already provided clear confirmation inside the receiving method, CONFIRMED_RESULT does not require a second confirmation merely because the result returns to ZASSPILL.

Persistence still remains governed by the Phase 3 revision, idempotency, and concurrency contracts.

### 19.9 Applying Method Results

CONFIRMED_RESULT:
- may produce a proposed semantic mutation;
- must pass expected_revision / reconciliation;
- stores concise confirmed meaning + method lineage + relevant artifact refs.

UNCONFIRMED_RESULT:
- does not become confirmed user truth;
- may remain a draft/reference;
- must not close an open item as a user decision.

NO_CHANGE:
- no semantic mutation is required.

CANCELLED:
- the handoff closes without forcing an outcome.

### 19.10 Cross-Method Concurrency

When the source revision is still current:

~~~text
handoff source_revision = 12
current ASC revision = 12
→ SAFE_TO_APPLY
~~~

If the source moved:

~~~text
handoff source_revision = 12
current ASC revision = 14
→ RECONCILE
~~~

If compatible, reload the current record and propose the mutation against the latest revision.

If materially conflicting:

~~~text
METHOD_RESULT_DIVERGENCE
~~~

and:

- do not overwrite current state;
- do not create a new revision for the stale conflicting result;
- do not use last-write-wins;
- ask the user for clarification when semantic authority is required.

### 19.11 Thread Lineage ≠ Method Lineage

Thread lineage:

~~~text
split_from
merged_from
merged_into
~~~

Method lineage:

~~~text
handoff_id
source_method
target_method
source_revision
result_status
~~~

A DECIDE or DESIGN handoff does not create split_from, merged_from, or merged_into.

### 19.12 Chained Method Transitions

When a user finishes DECIDE and then wants DESIGN:

~~~text
ZASSPILL
   ↓ ho_001
ZASSELECTION
   ↓ result + reconcile
ZASSPILL
   ↓ ho_002
ZASSIMPLE
~~~

Use two separate handoffs even when the UX stays in the same chat.

Do not bypass continuity authority with direct semantic ownership transfer ZASSELECTION → ZASSIMPLE without a return/reconcile boundary.

### 19.13 Minimal Context Forwarding

The receiving method receives only context required for its job.

Carry minimum data:

~~~text
thread_id
source_revision
current relevant state
relevant matters
relevant open items
necessary method/thread lineage
explicit transition choice
~~~

Do not forward by default:

- the entire transcript;
- the entire provider profile;
- all user threads;
- unrelated personal context;
- a full artifact from the previous method when a concise outcome is sufficient.

### 19.14 Artifact Isolation

Detailed method artifacts remain in the artifact layer.

Example:

~~~text
confirmed_outcome:
Option B selected

artifact_ref:
selection_matrix_xyz
~~~

or:

~~~text
confirmed_outcome:
architecture confirmed

artifact_ref:
ARCHITECTURE.md
~~~

Continuity stores relevant meaning + lineage + references, not a full copy of the artifact.

> **Continuity remembers the meaning and lineage; method artifacts preserve the detailed work.**

### 19.15 Method-Version Metadata

Portable Packet and cross-method machine metadata must report the current active method version.

~~~yaml
method: ZASSPILL
method_version: 1.0.0
~~~

Packets newly exported by the current release must use the current method version.

### 19.16 Phase 5 Proof

The consolidated Phase 5 field test passed for:

~~~text
Stable thread identity                 PASS
Separate handoff identities            PASS
Source revision preserved              PASS
ZASSELECTION ownership boundary        PASS
ZASSIMPLE ownership boundary           PASS
AI recommendation ≠ user truth         PASS
Confirmed decision → continuity        PASS
Draft architecture ≠ user truth        PASS
Confirmed architecture → continuity    PASS
No double confirmation                 PASS
Artifact isolation                     PASS
Thread lineage unchanged               PASS
Method lineage preserved               PASS
Stale method result blocked            PASS
METHOD_RESULT_DIVERGENCE                PASS
No last-write-wins                     PASS
Provider-memory isolation              PASS
~~~

The field test proves that one thread_id remains stable across DECIDE and DESIGN, AI recommendations/drafts remain unconfirmed until the user confirms them, confirmed results can return without a second confirmation, full method artifacts are not copied into continuity, and stale conflicting method results cannot overwrite current semantic state.

The Method Result Envelope was locked during final audit based on the behavior already proven.

Behavioral proof, method ownership, confirmation authority, result isolation, artifact isolation, revision reconciliation, thread/method-lineage separation, Phase 3 compatibility, Phase 4 compatibility, and the privacy boundary all passed.

> **ZASSPILL v0.5.0 Phase 5 is frozen. The Cross-Method Continuity contract above is the Phase 5 authority. New features belong in Phase 6 or a later version; only critical fixes should alter this release.**


---

## 20. Phase 6 — Production Reliability

Phase 6 locks reliability behavior when production transport, storage, retries, restore, migration, or authorization do not behave perfectly.

Primary principle:

> **Fail closed on semantic uncertainty; recover explicitly rather than inventing continuity.**

When semantic state is uncertain, the system must not overwrite, auto-merge, fake success, resurrect deleted continuity, guess revisions, or fabricate telemetry.

### 20.1 Truthful Persistence Receipt

The system may report successful persistence only when the write is actually proven.

Minimum receipt:

~~~text
request_id
thread_id
previous_revision
persisted_revision
event_id
result
~~~

When persistence is not proven:

~~~text
PERSISTENCE_UNCONFIRMED
~~~

Sending a request is not evidence that state was saved.

### 20.2 Unknown Write Outcome

If a client sends a write but loses the response after the server may already have committed:

~~~text
WRITE_OUTCOME_UNKNOWN
~~~

The client must not guess success or failure.

Recovery must reuse the same logical request:

~~~text
retry same request_id + same payload
~~~

Phase 3 idempotency determines whether the request was already applied or should execute exactly once.

### 20.3 Retry Classification

Retryable failures may include:

~~~text
timeout
temporary network failure
service unavailable
transient transport failure
~~~

Non-retryable semantic/security outcomes include:

~~~text
REVISION_CONFLICT
IDEMPOTENCY_KEY_REUSE_CONFLICT
THREAD_TOMBSTONED
AUTHORIZATION_DENIED
invalid semantic operation
~~~

A transport retry for the same logical write must keep the same request_id.

### 20.4 Atomic Semantic Commit

A normal semantic mutation must commit logically atomically:

~~~text
Thread Record update
+
matching semantic event
~~~

A trusted state such as this is invalid:

~~~text
record revision 8
event log revision 7
~~~

If atomicity/integrity cannot be proven:

~~~text
INTEGRITY_ERROR
~~~

Affected continuity is unsafe for semantic writes until recovery completes.

### 20.5 Multi-Record Atomicity

Multi-record operations such as SPLIT, TRUE MERGE, and other operations that must move together semantically require logical atomicity.

Example TRUE MERGE:

~~~text
source A archived
source B archived
new C created
lineage connected
matching events written
~~~

Partial success must not be treated as completed.

If a partial commit is detected:

~~~text
PARTIAL_COMMIT_DETECTED
~~~

and recovery must complete before new semantic operations continue on affected records.

### 20.6 Read-After-Write Verification

After a reported successful write, the persistence layer must be able to verify at least:

~~~text
thread_id
persisted_revision
matching semantic event
~~~

If a success receipt conflicts with persisted verification:

~~~text
PERSISTENCE_VERIFICATION_FAILED
~~~

Do not report the write as trusted success.

### 20.7 Out-of-Order / Replay Protection

Old replication, retry, or sync messages must not rewind current state.

Example:

~~~text
current revision 12
incoming revision 10
→ STALE_REPLAY_IGNORED
~~~

No mutation occurs.

Revision + event lineage has stronger authority than timestamps.

### 20.8 Integrity Guard

Examples of integrity violations:

- duplicate semantic revision;
- missing matching event;
- broken merge/split lineage;
- invalid lifecycle transition;
- thread_id mismatch;
- record/event revision mismatch.

Outcome:

~~~text
INTEGRITY_ERROR
~~~

Do not silently repair semantic meaning or invent a missing event/meaning.

Read-only degraded inspection may be allowed when safe, but semantic writes to the affected record must remain blocked until recovery completes.

### 20.9 Degraded / Offline Mode

When ASC is unavailable:

~~~text
ASC_UNAVAILABLE
~~~

Conversation may continue using portable/local continuity.

A local semantic change must use:

~~~text
packet_state = LOCAL_CHANGES
base_revision = last known persisted revision
~~~

and:

- must not create a fake ASC revision;
- must not create a fake persisted event;
- must not claim external persistence.

When ASC returns, use the Phase 3 reconciliation contract.

### 20.10 Restore / Backup Safety

An old backup does not become authority merely because restore technically succeeds.

Example:

~~~text
current known revision 24
backup revision 20
→ RESTORE_REQUIRES_RECONCILIATION
~~~

Restore must check identity, revision, event lineage, and tombstone/deletion authority.

Never silently rewind newer trusted continuity.

### 20.11 Tombstone Survives Recovery

An old backup or replica must not resurrect a deleted thread.

When a valid tombstone exists:

~~~text
THREAD_TOMBSTONED
~~~

Deletion authority outranks stale semantic backup.

No resurrection.

### 20.12 Schema / Version Compatibility

Persisted data should carry enough schema/version metadata to determine compatibility.

A reader may return:

~~~text
SUPPORTED
MIGRATION_REQUIRED
UNSUPPORTED_VERSION
~~~

Technical migration does not increase semantic revision when meaning is unchanged.

### 20.13 Migration Safety

Migration flow:

~~~text
old schema
↓
migration
↓
new schema
↓
semantic equivalence verification
~~~

If meaning can be preserved safely, migration may succeed without a semantic revision bump.

If a required semantic value cannot be derived safely:

~~~text
MIGRATION_REVIEW_REQUIRED
~~~

Do not invent semantic content to populate a new field.

### 20.14 Authorization Failure

When the caller lacks authority:

~~~text
AUTHORIZATION_DENIED
~~~

The semantic consequence must be zero mutation:

- no revision bump;
- no semantic event;
- no lifecycle change;
- no content mutation.

Authentication/permission implementation remains an ASC concern; ZASSPILL locks only the semantic consequence.

### 20.15 Observability Without Leakage

Operational telemetry may carry metadata such as:

~~~text
request_id
thread_id
operation
result_code
revision
timing / failure class
~~~

It must not duplicate full continuity content by default.

> **Reliability telemetry must not become a shadow semantic database.**

### 20.16 Observability Truthfulness

Telemetry must be factual.

If timestamp, latency, or timing was actually measured, log the real value.

If not measured, use:

~~~text
null
unknown
not_measured
~~~

Do not fabricate numbers or timestamps that appear factual merely to complete a log.

### 20.17 Clock Independence

Clock drift does not determine semantic authority.

~~~text
revision + event lineage
> timestamp
~~~

Timestamps may help diagnostics and technical ordering where appropriate, but must not override revision/event authority.

### 20.18 Recovery Principle

Default production recovery:

- do not overwrite when semantic authority is uncertain;
- do not auto-merge conflicts;
- do not fake persistence success;
- do not resurrect tombstoned continuity;
- do not guess missing revisions/events;
- do not invent migration meaning;
- reconcile or request explicit review.

### 20.19 Method-Version Metadata

Portable Packet and machine metadata produced by the current release must use:

~~~yaml
method: ZASSPILL
method_version: 1.0.0
~~~

### 20.20 Phase 6 Proof

The consolidated production field test was run across more than one receiver/provider and the core behavior was consistent.

~~~text
A  Unknown write + idempotent retry       PASS
B  Stale replay protection                PASS
C  Integrity failure blocks writes        PASS
D  Offline LOCAL_CHANGES                  PASS
E  Divergence protection                  PASS
F  Restore safety                         PASS
G  Tombstone survives recovery            PASS
H  Authorization = zero mutation          PASS
I  Migration preserves meaning            PASS
J  Observability without semantic leakage PASS
~~~

The final audit also locked observability truthfulness after one receiver generated fixture timing/timestamp values that were not supplied by the test. Telemetry that was not measured must be labeled unknown/not_measured rather than fabricated.

Overall proof covers:

- truthful persistence receipts;
- unknown-outcome recovery;
- retry/idempotency safety;
- atomicity and integrity guards;
- stale replay protection;
- degraded/offline operation;
- divergence handling;
- backup/restore safety;
- tombstone recovery protection;
- authorization isolation;
- schema/migration safety;
- telemetry privacy and truthfulness;
- clock-independent authority.

Phase 3, Phase 4, and Phase 5 compatibility remain proven.

> **ZASSPILL v1.0.0 is PRODUCTION READY. Phases 1–6 are frozen as the core continuity contract. New features after this point belong in v1.x compatibility/polish or v2 advanced continuity intelligence; only critical fixes should change the core v1.0 contract without versioned evolution.**
