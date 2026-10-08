# ZASSPILL Interaction Continuity — Future-Work Architecture Direction

**Status:** ACCEPTED FUTURE-WORK ARCHITECTURE REFINEMENT — ZASSPILL v1.0.0 UNCHANGED  
**Date:** 2026-10-08  
**Owner:** Project Owner  
**Scope:** Portable thread-specific interaction semantics across AI/session handoff  
**Implementation:** NOT STARTED  
**Version effect:** No ZASSPILL v1.0.0 method change; this document records a future v1.x candidate/refinement only.

## 1. Observed field failure

A real ZASSPILL-carried forecasting conversation preserved semantic continuity successfully:

- subject matter;
- forecasts;
- decisions;
- reasoning;
- continuity of discussion.

The receiving AI did not preserve the intended participation mode:

- user = instinct-based forecaster;
- AI = evidence-based challenger;
- relationship = friendly rival / “we bet”;
- tone = sempoi, playful, curious, intellectually serious;
- challenge claims with evidence;
- remain natural rather than turning every turn into a formal audit/report.

The failure is therefore not primarily loss of WHAT the thread is about. It is loss of HOW the participants are intentionally working together.

## 2. Existing-contract finding

Current ZASSPILL v1.0 already contains partial ingredients:

- WHO carries relationship + thread relevance;
- WHAT MATTERS may carry preferences;
- ordinary DUMP behavior says to respond naturally;
- language routing preserves user language;
- privacy rules explicitly exclude provider memory/profile/private personalization unless intentionally introduced by the user.

However, current Portable Packet v2 and the handoff minimum do not define an explicit portable interaction-semantic field or require a receiver to preserve role/relationship/tone/challenge posture as a distinct continuity dimension.

Therefore the observed failure is consistent with the current contract rather than proof that the receiver violated an explicit interaction-continuity rule.

## 3. Architectural conclusion

The requirement is justified, but the smallest correct solution is split across layers:

~~~text
ZASSPILL
= optional portable THREAD INTERACTION CONTRACT
  only when intentionally established by the user

ASC / Context Assembly
= carry/inject the current authorized interaction contract
  into the target AI context

Provider-local personalization
= remains private/local and outside portable authority
  unless the user intentionally brings it into the thread
~~~

ZASSPILL owns the portable meaning of the thread-specific interaction agreement.

ASC owns transport, persistence, retrieval, canonical verification, and context assembly.

Provider-local personality/profile/memory remains outside the ZASSPILL packet boundary.

## 4. Terminology

### Architectural dimension

**Interaction Continuity**

Meaning:

> Preserve enough explicitly intended interaction semantics to continue HOW the user and AI are working together on this thread.

### Portable object

**Thread Interaction Contract**

Internal/machine-facing candidate name:

~~~text
interaction_contract
~~~

User-facing language may remain simpler:

> **How we work together**

“Persona” is not preferred as the primary term because it suggests a model personality or user profile. The requirement is relational and thread-specific: USER ↔ AI ↔ THREAD.

## 5. Minimal scope

Default scope:

> **THREAD-LEVEL, OPTIONAL, EXPLICIT.**

Do not add global/project/session inheritance to the minimum design.

Rules:

- absent interaction contract = current ZASSPILL behavior;
- a thread interaction contract is created/persisted only from explicit user intent;
- a temporary current-message/session instruction may override it without necessarily persisting;
- global user personality/preferences remain outside ZASSPILL unless explicitly introduced into a thread;
- project-level inheritance may be evaluated later only if real field evidence requires it.

## 6. Candidate minimal representation

Do not lock a large persona schema.

Candidate compact representation:

~~~yaml
interaction_contract:
  working_mode: "friendly forecasting rivalry"
  roles: "user=instinct-based forecaster; assistant=evidence-based challenger"
  tone: "sempoi, playful, curious, intellectually serious"
  rules:
    - challenge predictions when evidence disagrees
    - distinguish instinct/belief from evidence/fact
    - preserve friendly rivalry; avoid unnecessary formalization
~~~

Design constraints:

- optional;
- compact;
- human-readable;
- no hidden/provider-derived fields;
- no psychological profile;
- no requirement to reproduce previous-model wording;
- preserve interaction semantics, not stylistic mimicry;
- rules should normally remain only a few high-value bullets.

Exact serialization is NOT locked by this future-work document.

## 7. Authority rules

Persistence authority:

1. explicit user instruction may create or modify the portable thread interaction contract;
2. AI may infer or suggest an interaction mode, but inference alone must not become portable authority;
3. imported ZASSPILL packet may carry a previously user-authorized contract;
4. provider memory/profile/private personalization is not authority for the portable contract.

Immediate-response precedence:

~~~text
platform / safety / provider hard policy
        ↓
active method hard semantics
        ↓
current explicit user instruction
        ↓
current thread interaction contract
        ↓
provider-local personalization/default
        ↓
model default
~~~

Operational policy precedence does not rewrite the stored user interaction contract.

## 8. User override behavior

Current explicit user intent outranks stored interaction style.

Examples:

- “Serious sikit untuk jawapan ni.” → temporary override unless persistence is clearly requested.
- “Mulai sekarang jangan bergurau; buat mode formal.” → persistent interaction-contract change if intent is clear.
- “Kembali macam biasa, kita bet sempoi.” → persistent change back when clearly requested.

A stale stored interaction contract must never override a newer explicit user instruction.

## 9. Revision and lineage

If the user explicitly changes the portable thread interaction contract and intends the change to persist:

- treat it as a material thread continuity mutation;
- use the existing thread revision/concurrency/idempotency machinery;
- no separate interaction revision counter is required initially;
- use the existing semantic UPDATE event rather than adding a new event type unless later evidence justifies one;
- preserve source/provenance through the existing record/event/packet lineage.

A temporary message/session override does not require a persisted revision unless the user asks to keep it.

This minimizes new lineage machinery.

## 10. Portable Packet / handoff direction

A future compatible packet MAY include the optional contract after thread identity/current state is established.

Do not make it mandatory.

Future handoff principle:

~~~text
semantic continuity
+ optional user-authorized interaction continuity
        ↓
minimum portable packet
        ↓
ASC / context assembly
        ↓
target AI
~~~

Interaction semantics should not be used as primary identity authority for thread retrieval.

A phrase such as “our betting thread” may still become an ordinary user-authored resume cue when useful, but interaction similarity alone must not select thread identity.

## 11. Context-assembly behavior

If a current authorized interaction contract exists, ASC/context assembly should:

- retrieve/verify it from current canonical thread state;
- apply current explicit user override first;
- send only the compact current contract;
- omit superseded interaction modes;
- avoid provider-private profile enrichment;
- combine it with the active method instructions without allowing style to override method semantics;
- keep token cost bounded.

Target-AI instruction should communicate semantic participation mode, not demand imitation of the previous model.

## 12. Privacy boundary

The existing ZASSPILL privacy rule remains unchanged:

> **Provider-specific personal memory/profile/private context remains outside portable ZASSPILL authority unless the user intentionally brings that context into the semantic thread.**

The feature must not:

- scrape hidden personalization;
- infer/export psychological traits;
- export provider personality state;
- create a universal user persona profile;
- silently promote observed tone into a durable portable contract.

Portability remains a disclosure boundary.

## 13. Backward compatibility

Backward compatibility target:

- existing v1.0 packets without interaction_contract remain fully valid;
- absence means no portable interaction contract;
- older receivers may ignore the future optional field without changing semantic-thread meaning;
- current ZASSPILL v1.0 remains frozen until a future version is explicitly approved;
- ASC/runtime implementation must not require this field for existing threads.

## 14. Mandatory forecasting acceptance test

Source intent:

> “Saya manusia, saya ada instinct-based. Awak evidence-based. So, we bet.”

Expected transferred interaction semantics:

- friendly forecasting contest;
- user supplies instinct-based predictions;
- AI challenges using evidence;
- sempoi/playful/curious participation;
- intellectual/factual rigor remains;
- belief/instinct is not converted into fact;
- avoid bureaucratic audit/report style unless requested.

PASS does not require copying the previous AI’s exact wording.

PASS requires preserving the negotiated interaction semantics.

## 15. Additional acceptance tests

1. **Absent-contract compatibility** — ordinary old packet continues normally.
2. **Explicit creation** — user-defined thread mode transfers correctly.
3. **AI-inference isolation** — AI-inferred tone is not persisted without user authorization.
4. **Temporary override** — “formal for this answer” affects one response without changing stored mode.
5. **Persistent override** — explicit lasting change bumps thread revision once.
6. **Stale packet** — older interaction mode cannot overwrite newer canonical mode.
7. **Provider-memory isolation** — hidden provider personalization does not appear in the packet.
8. **Method conflict** — interaction tone may shape presentation but cannot weaken active ZASS method semantics.
9. **Policy conflict** — provider/platform policy is obeyed without silently rewriting the user’s stored contract.
10. **Token discipline** — compact interaction semantics remain materially smaller than a persona/profile dump.

## 16. Risks / failure modes

- **Persona creep:** optional thread interaction state expands into a universal user profile.
- **Over-inference:** AI silently persists a style that the user never requested.
- **Stale-style dominance:** old tone overrides present instruction.
- **Method corruption:** playful tone weakens factual/method rigor.
- **Provider leakage:** hidden personalization is exported as if user-authorized.
- **Token bloat:** contract becomes a long prompt/personality document.
- **Style mimicry:** receiver imitates wording instead of preserving relational semantics.
- **Scope explosion:** global/project/session inheritance is added before evidence requires it.

Mitigation is the minimal thread-level explicit contract + current-user override + existing privacy/revision machinery.

## 17. Future decision gate

Before any ZASSPILL method/version change:

1. field-test the forecasting case across at least two compatible receivers;
2. test one non-forecast interaction mode;
3. verify provider-memory isolation;
4. verify current-instruction override;
5. measure packet/token overhead;
6. decide whether the candidate earns a ZASSPILL v1.x optional field.

Until that gate passes:

> **ZASSPILL v1.0.0 remains unchanged.**

## 18. Decision recommendation

ACCEPT as a future-work architectural refinement:

> **ZASSPILL should preserve not only enough information to continue WHAT the conversation is about, but—when explicitly requested by the user—enough thread-specific interaction semantics to continue HOW the user and AI are working together.**

This principle is accepted only with these constraints:

- optional;
- thread-level by default;
- explicit-user-authorized;
- compact;
- provider-agnostic;
- subordinate to current explicit instruction and hard method/policy constraints;
- no provider-memory/profile import;
- implemented later only after the future field gate.
