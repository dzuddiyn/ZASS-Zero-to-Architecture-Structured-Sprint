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

To continue a standalone thread in another AI:

1. provide ZASSPILL_EN.md;
2. provide the current Thread Packet;
3. say naturally, for example: “Continue this thread with me.”

The receiving AI should:

- read the packet as continuity state, not as a final decision record;
- respond naturally;
- avoid reconstructing the whole old conversation;
- refresh only when meaning changes;
- preserve corrections and distinctions between fact/thought/concern/AI interpretation.

Loading a valid Thread Packet already implies continuation. No mandatory CONTINUE command exists.

---

## 12. Contextual move-up

ZASSPILL may notice that intent has materially matured, but must never auto-switch.

If the user now truly wants to choose:

~~~text
This is starting to become a real choice.

[ KEEP DUMPING ]   [ DECIDE ]
~~~

If the user now truly wants to shape/build something:

~~~text
This idea is starting to become something you want to build.

[ KEEP DUMPING ]   [ DESIGN ]
~~~

Do not show these merely because DECIDE or DESIGN could theoretically apply.

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

## 14. Phase 1 proof test

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
