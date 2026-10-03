# ZASS Repository Consistency Guard

This folder contains repository-maintenance checks for the ZASS repository itself.

It is deliberately separate from `zass check`.

- `zass check` validates ZASS project semantics and remains the reusable local/CI validator.
- `quality/check-repo-consistency.mjs` checks that this repository's **current-facing metadata** remains synchronized across selected README, Wiki, method, roadmap, integration, and CI surfaces.
- The quality guard does not create a new ZASS method, authority layer, validator rule family, or product version.

Current guard scope:

1. Full ZASS, ZASS SYSTEM, ZASSIMPLE, ZASSELECTION, and ZASSPILL version parity across current surfaces.
2. Precise ZASSPILL production-readiness wording: method/protocol contract readiness is distinct from AI-SYNC/ASC runtime implementation.
3. AI-SYNC Method Gateway current-state agreement for the proven T-013A/T-013B read path.
4. GitHub Actions operational-state agreement across workflow, CI contract, roadmap, and Wiki.
5. Accidental local execution/device metadata must not reappear in public repository text artifacts.

Run locally from repository root:

```bash
node quality/check-repo-consistency.mjs
```

A future legitimate version/status change should update all affected current surfaces in the same change. Historical changelog/design records may retain their historical wording; the guard's status checks intentionally target current-facing files only.
