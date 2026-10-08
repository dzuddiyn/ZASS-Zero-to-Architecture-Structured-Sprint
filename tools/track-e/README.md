# Track E Field Runner

Repo-local test/research helper for Track E E4 preparation.

It is **not** a public `zass` CLI command, is not declared in npm `bin`, and performs no network activity.

Examples:

```bash
node tools/track-e/runner.js automated --project . --result PASS --questions Q4,Q8 --command check --exitCode 0
node tools/track-e/runner.js observed --project . --result FRICTION --questions Q5,Q8 --observationCode navigation-repeat --severity MEDIUM --reproducible YES
node tools/track-e/runner.js rate --project . --rating 4 --consent true --target overall-workflow
node tools/track-e/runner.js feedback --project . --feedback "Useful, but setup was confusing." --consent true --category documentation-onboarding
node tools/track-e/runner.js project --project .
```

Rating and feedback require the explicit literal flag `--consent true`. Absence, false, silence, or ordinary text does not count as consent.

Receipts are written locally under `.zass/evidence/`.
