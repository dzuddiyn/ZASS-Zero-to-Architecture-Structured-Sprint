# ZASS SYSTEM — bounded ZASSCODE integration candidate

**Date:** 2026-10-10, Asia/Kuala_Lumpur

**State:** REVIEW CANDIDATE; not merged or refrozen by this record

**Trigger:** owner requested a separate ZASSCODE repo/ChatGPT Project and a safe ZASS integration

**Inspected main:** `18bb7706194035249c49c6a2a0e10e8eac6f73ec`

## Bounded change

The existing freeze policy allows an explicit owner decision to reopen a bounded
change. This request supports preparation of the ZASSCODE integration candidate;
it does not authorize reopening dormant methodology work or invent a LOCKED
application decision.

Add a separate downstream boundary and discoverability references. Synchronize
current SYSTEM version metadata. Detailed coding mechanics, role prompts,
controllers, application repositories and field ledgers remain downstream.

| Component | Candidate version |
|---|---|
| ZASS SYSTEM | 0.2.4 — downstream integration surface change |
| Full ZASS | 0.3.11 — method semantics unchanged |
| ZASSIMPLE | 0.3.3 — unchanged |
| ZASSELECTION | 0.2.4 — unchanged |
| ZASSPILL | 1.0.0 — unchanged |
| HPC | 0.1 — unchanged |

The SYSTEM version change follows the existing versioning contract. It does not
claim that ZASSCODE, an application, a pilot or a production release is validated.

## Change boundary

Allowed paths are README.md, ZASS.md, ZASS_MY.md,
docs/ZASS_SYSTEM_UI_UX_CONTRACT.md, wiki/Home.md, the new downstream boundary,
this receipt and the four synchronized Full-ZASS template copies under
bootstrap-core/templates/zass and create-zass/vendor/bootstrap-core/templates/zass.
Full-ZASS changes are SYSTEM metadata and one downstream reference only. Preserve
all other method content, validators, schemas, CLI/bootstrap runtime source,
CI workflows, packages, historical receipts and frozen references.

## Acceptance before merge

1. Inspect the exact eleven-file diff; no unrelated edits or deletions.
2. Verify method versions and all protected implementation paths are unchanged.
3. Run CLI, Bootstrap Core and create-zass tests, repository consistency and
   the ZASS validator against the inspected historical baseline.
4. Require the existing complete GitHub CI on the exact candidate, including
   Ubuntu and Windows CLI jobs under Node.js 20.
5. Verify the separate module distribution and project bootstrap before adoption.
   An unavailable module must not break existing ZASS use.
6. Reconcile a changed main before merging; do not force-push or bypass checks.

Local and remote check receipts are recorded with their actual candidate identity.
This record itself is not a CI PASS receipt or merge approval. Final closure and
any new freeze reference follow verified merge/closure evidence. Existing freeze
references and historical version records are retained.

## Recovery

Before merge, closing the draft PR leaves main unchanged. After merge, revert the
specific integration commit through a checked PR; do not reset shared history.
Reconcile the restored version metadata in that revert. Reverting the integration
does not delete ZASSCODE repositories, pilot data or unrelated work.
