# ZASS GitHub CI Contract v0.1

Status: implementation candidate  
Purpose: provide one commit-linked ZASS validation signal that reuses the local ZASS Core/CLI semantics.

## Stable integration surface

- Workflow file: `.github/workflows/zass-ci.yml`
- Workflow name: `ZASS CI`
- Job name: `zass-check`
- Runtime: Node.js 20
- Permissions: repository contents read-only
- Secrets: none required

ASC/AISYNC may consume the GitHub status/result tied to a commit. ASC must not reimplement ZASS validation rules.

## Authority boundary

The workflow is orchestration only.

It MUST:

1. checkout full Git history;
2. run the existing CLI test suite;
3. resolve the correct historical baseline commit;
4. invoke the same CLI rule engine with `zass check --baseline <git-ref>`.

It MUST NOT reproduce Z001–Z101 logic in workflow YAML or in ASC.

## Baseline semantics

- Pull request: compare current candidate state against the PR base commit SHA.
- Push to `main`: compare against the event's previous commit SHA.
- Manual dispatch: use the parent commit when available; otherwise use current HEAD.
- Local default remains `HEAD`, preserving working-tree drift behavior.

The explicit baseline changes only the historical source used by Z101. All rule semantics remain in the CLI.

## Result semantics

- CLI validation ERROR -> failing CI job.
- CLI warnings retain existing non-failing behavior.
- CLI test failure -> failing CI job.
- Invalid/unresolvable workflow baseline -> failing CI job before validation.

A generated workflow file is not proof that CI exists operationally. Promotion requires a real GitHub Actions run tied to a commit.

## ASC dependency

AISYNC T-012 remains blocked until this workflow has a live passing run and its commit-linked status can be retrieved reliably.
