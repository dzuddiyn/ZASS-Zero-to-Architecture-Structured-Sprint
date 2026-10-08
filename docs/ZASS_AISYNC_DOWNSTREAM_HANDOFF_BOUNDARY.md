# ZASS ↔ AISYNC Downstream Handoff Boundary

**Status:** LOCKED — ZASS FREEZE BOUNDARY  
**Date:** 2026-10-08  
**Owner:** ZASS SYSTEM upstream / AISYNC downstream

## 1. Purpose

This document prevents downstream AISYNC/CrossAI work from keeping ZASS SYSTEM development artificially open.

ZASS provides stable upstream semantics and shared tooling. AISYNC consumes them downstream without redefining ZASS authority.

## 2. ZASS responsibilities — frozen upstream

ZASS owns:

- ZASS / ZASSIMPLE / ZASSELECTION / ZASSPILL method semantics;
- human-controlled decision authority;
- `zass check/status/diff`;
- CR-011 `.zass/project.json` schema v0.1;
- shared Bootstrap Core API/semantics;
- current canonical single-file ZASS default;
- internal Track E evidence machinery retained for future real-human evidence.

AISYNC integration work does not reopen these by default.

## 3. AISYNC responsibilities — downstream

AISYNC/ASC owns:

- runtime identity/auth;
- continuity persistence/retrieval;
- provider handoff;
- GitHub destination adapters and receipts;
- operational/index data;
- Production v1 human journey;
- closed beta and release acceptance;
- future CrossAI Create Project consumption of shared Bootstrap Core;
- future Interaction Continuity runtime work.

## 4. CR-016 lineage

Former ZASS CR-016 is closed in ZASS scope.

Active future ownership:

```text
AISYNC
→ Interaction Continuity
→ optional Thread Interaction Contract transport/verify/inject
```

ZASSPILL may define explicit portable thread-level interaction state when separately approved, but provider-local memory/profile/persona remains outside portable authority unless intentionally introduced by the user.

CR-016 does not block ZASS freeze.

## 5. Current AISYNC delivery state at freeze

Live AISYNC planning at this freeze point records:

```text
AP-009 PASS
AP-010 PASS
AP-011 PASS
AP-012 PASS
AP-013 PASS
AP-014 CURRENT / READY FOR HUMAN BETA
AP-015 QUEUED
```

Current AISYNC work therefore belongs to AISYNC's Production v1 beta/release path, not ZASS development.

## 6. Bootstrap consumption rule

The shared ZASS Bootstrap Core is an upstream frozen dependency.

Future AISYNC/CrossAI Create Project work MUST consume that shared Core rather than duplicate bootstrap semantics.

Consumption/integration may add downstream adapters/UI/storage, but MUST NOT silently change:

- method-file authority;
- CR-011 schema meaning;
- bootstrap method/language mapping;
- ZASS decision semantics.

If downstream needs conflict with frozen upstream semantics, open an explicit ZASS reopen decision rather than patching ZASS indirectly.

## 7. Reopen rule

AISYNC may request a ZASS reopen only when one of these exists:

1. a critical upstream defect;
2. material real field evidence that current upstream behavior is insufficient;
3. explicit owner decision.

Ordinary downstream implementation inconvenience is not a reopen trigger.

## 8. Freeze consequence

ZASS SYSTEM may be frozen independently of AISYNC completion.

AISYNC can continue:

```text
human beta
→ release acceptance
→ DELIVERED
→ later CrossAI / Interaction Continuity work
```

while ZASS remains stable upstream.
