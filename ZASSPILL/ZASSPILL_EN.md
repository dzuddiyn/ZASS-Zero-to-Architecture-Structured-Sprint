# ZASSPILL

> **Stay messy. Keep the context. Continue anywhere.**

**Version:** 0.1.0  
**Status:** PHASE 1 CORE PROOF — standalone portable continuity  
**Language:** English — default method  
**Owner:** User / Continuity Owner

ZASSPILL is the DUMP continuity method in the ZASS family.

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
- global replacement of DECIDE or BUILD?.

The current global ZASS SYSTEM entry remains DECIDE or BUILD?. DUMP / DECIDE / DESIGN is still a target ASC pilot.

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

Method: ZASSPILL v0.1.0
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
Method: https://raw.githubusercontent.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint/main/ZASSPILL/ZASSPILL_EN.md

Instruction: Read and follow the ZASSPILL method at the link above. Treat this packet as the continuity authority, use this packet + the current conversation only, and continue this thread with me.
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

To continue a standalone thread in another AI, the preferred Phase 1 handoff is **single-copy**: paste the current Thread Packet. The packet itself carries the canonical ZASSPILL method link and activation instruction.

If the receiving AI cannot access the method link, attach or paste ZASSPILL_EN.md as fallback.

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
