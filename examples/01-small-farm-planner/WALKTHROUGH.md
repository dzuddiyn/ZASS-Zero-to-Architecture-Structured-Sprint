# Walkthrough — From Raw Idea to Confirmed Architecture

This is a compact **fictional conversation trace** showing how full ZASS v0.3.2 is intended to feel.

It is not a transcript of real research and does not invent empirical evidence.

## 1. Talk normally

**Owner**

> I want a simple system that helps small farmers keep track of crop work without needing a complicated farm-management platform. It should work on an Android phone and I do not want to run lots of infrastructure.

Nothing is LOCKED yet.

## 2. Ask ZASS to map the discussion

**Owner**

    ZASS!!

**AI mapping — abbreviated**

    EXPLICIT
    - small-farmer crop-task problem
    - Android phone
    - low infrastructure / maintenance

    UNKNOWN
    - offline requirement
    - account requirement
    - notifications
    - multi-device sync

    OPTIONS
    - PWA
    - native Android
    - messaging bot

    RISKS
    - scope creep
    - data loss
    - unreliable connectivity

The mapping contains candidates, not decisions.

## 3. Owner clarifies constraints

**Owner**

> Yes, core tasks must work without internet. No account or cloud sync for v0.1. I also do not want push notifications yet.

## 4. ZASS proposes decisions

The AI proposes:

    D-001 → proposed LOCK
    Use an installable PWA for v0.1.

    D-002 → proposed LOCK
    Use local-only storage; no account/cloud sync.

    D-003 → proposed LOCK
    Provide manual export/import backup.

    D-004 → proposed LOCK
    Defer push notifications.

These are still proposals until owner approval.

## 5. Owner uses PROCEED

**Owner**

    PROCEED

In full ZASS v0.3.2:

- every unopposed proposal in the latest ZASS mapping is approved;
- proposed LOCK transitions become LOCKED;
- no Git commit happens yet.

## 6. Persist approved state

**Owner**

    COMMIT

A real tool-enabled AI should:

1. update affected files;
2. create one atomic commit;
3. push to the GitHub Source of Truth;
4. report the real SHA only after push succeeds.

This walkthrough does not fabricate a historical SHA.

## 7. Draft architecture

At sufficient readiness:

    DRAFT ARCH

The draft follows the LOCKED decisions:

    PWA
    + local data
    + offline app shell
    + export/import
    - backend
    - account
    - cloud sync
    - push notifications

A draft is not confirmed architecture.

## 8. Run the confirmation gate

**Owner**

    BUILD ARCHITECTURE

The AI must show the draft, relevant LOCKED decisions, readiness, critical assumptions and unresolved blockers.

For this teaching fixture, the fictional owner then gives the exact confirmation:

    YA, CONFIRM ARCHITECTURE

Only now does the example reach:

    ARCHITECTURE CONFIRMED

See [ARCHITECTURE.md](ARCHITECTURE.md).

## 9. Execution remains separate

Real implementation and tests belong in [ACTION_PLAN.md](ACTION_PLAN.md):

- E-001 offline compatibility test;
- E-002 backup recovery test;
- E-003 real-user usability test.

A PASS or FAIL in ACTION PLAN does not silently rewrite a LOCKED decision. Mature findings return through ZASS FEED.

## Whole flow

    normal conversation
          ↓
        ZASS!!
          ↓
    structured candidates / questions / risks
          ↓
    owner clarifies or rejects
          ↓
    proposed decisions / proposed LOCKs
          ↓
       PROCEED
          ↓
    LOCKED decisions
          ↓
        COMMIT
          ↓
      DRAFT ARCH
          ↓
    BUILD ARCHITECTURE
          ↓
    YA, CONFIRM ARCHITECTURE
          ↓
    ARCHITECTURE CONFIRMED

**AI explores and structures. The owner approves. Git preserves. Architecture follows decisions.**
