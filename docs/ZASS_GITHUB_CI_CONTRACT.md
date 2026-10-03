# ZASS GitHub CI Contract v0.1

Status: OPERATIONAL  
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

Live proof:
- merged main commit: `13b9b267372ef9d18329ed5f88858dc04da3dfdc`;
- workflow: `ZASS CI / zass-check`;
- GitHub Actions run: `37084654404`;
- result: SUCCESS;
- all validator/test/baseline steps completed successfully.

AISYNC T-012 external dependency is therefore satisfied. ASC may now consume/display this commit-linked result, while validation semantics remain owned by ZASS Core/CLI/CI.
