# ARCHITECTURE — Small Farm Planner

**Status:** ARCHITECTURE CONFIRMED  
**Type:** Fictional teaching fixture  
**Decision authority:** [ZASS.md](ZASS.md)

> This architecture demonstrates traceability from LOCKED decisions. It is not a claim that the product has been implemented or validated with real users.

## 1. Purpose

Provide a very small mobile-friendly daily crop-task planner that remains useful when internet access is unavailable.

## 2. Architecture drivers

- D-001: PWA delivery.
- D-002: local-only v0.1; no account or cloud sync.
- D-003: manual export/import backup.
- D-004: no push notifications in v0.1.
- Low cost.
- Single maintainer.
- Android browser as primary client environment.

## 3. System context

    Farmer
      │
      ▼
    Installable PWA
      │
      ├── Daily Task UI
      ├── Task Editor
      ├── Local Data Store
      ├── Export / Import
      └── Offline App Shell

    No backend in v0.1
    No login in v0.1
    No cloud sync in v0.1

## 4. Main components

### PWA shell
Installable phone-first web app; caches the application shell for offline opening.

### Daily Task UI
Shows today's tasks and pending/completed state.

### Task Editor
Creates and edits tasks and validates required fields before local persistence.

### Local Data Store
Stores crop cycles and tasks on the current device and supports offline reads/writes.

A browser database such as IndexedDB is a reasonable prototype default, but the LOCKED decision is the local-only boundary, not a specific library.

### Export / Import
Exports structured local data as a portable backup; validates an import before changing local state.

## 5. Minimal data model

    CropCycle
    - id
    - name
    - start_date
    - status

    Task
    - id
    - crop_cycle_id
    - title
    - due_date
    - status
    - notes
    - updated_at

## 6. Primary flow

    Open app
    → load local task data
    → show today's tasks
    → create/edit/complete task
    → persist locally
    → optionally export backup

## 7. Failure behavior

**No network:** core task viewing/editing remains local.

**Local storage cleared:** recovery requires an exported backup; this is an accepted v0.1 consequence.

**Invalid import:** reject the import and preserve existing local state.

**Feature pressure:** accounting, IoT, cloud sync and multi-user requests return to ZASS instead of being silently absorbed.

## 8. Security and privacy boundary

v0.1 has no server account and no cloud sync. Data remains on-device except when the user explicitly exports a backup.

The teaching fixture does not store credentials, financial records or health data.

## 9. Deferred architecture

Not part of confirmed v0.1:

- authentication service;
- cloud database;
- sync engine;
- push notification service;
- native Android client;
- messaging-platform bot;
- IoT integration.

## 10. Decision traceability

| Architecture element | Source decision |
|---|---|
| PWA client | D-001 |
| No backend/account | D-002 |
| Local data store | D-002 |
| Export/import backup | D-003 |
| No push service | D-004 |
| Deferred cloud/native/bot paths | D-001, D-002, D-004 |

## 11. Confirmation

This document represents the fictional teaching fixture after:

    DRAFT ARCH
    → BUILD ARCHITECTURE
    → review LOCKED decisions / assumptions / blockers
    → YA, CONFIRM ARCHITECTURE
    → ARCHITECTURE CONFIRMED

Any change that contradicts D-001 through D-004 must return to the decision process first.
