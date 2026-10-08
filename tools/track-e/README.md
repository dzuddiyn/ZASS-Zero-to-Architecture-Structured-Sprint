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
node tools/track-e/runner.js prepare --project .
```

Rating and feedback require the explicit literal flag `--consent true`. Absence, false, silence, or ordinary text does not count as consent.

Receipts are written locally under `.zass/evidence/`.


## Local evidence hygiene

`prepare` is an explicit test-project hygiene action. It ensures this exact line exists in the selected project's `.gitignore`:

```text
.zass/evidence/
```

It preserves existing `.gitignore` content and is idempotent. Recording or projecting evidence does **not** run `prepare` automatically.

Track E v0.1 performs no automatic receipt deletion, expiry, or cleanup.


## Canonical E3 operator documentation

For the full operating boundary, privacy rules, projection limitations, and E4 gate, see:

- `docs/ZASS_TRACK_E_E3_OPERATOR_GUIDE.md`
- `docs/ZASS_TRACK_E_E3_IMPLEMENTATION_RECEIPT.md`

This README is only the quick command reference. The operator guide is the canonical E3 usage document.
