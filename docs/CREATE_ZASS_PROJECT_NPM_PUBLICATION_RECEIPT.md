# create-zass-project@0.1.0 — npm Publication Receipt

**Status:** PUBLISHED / VERIFIED / PASS  
**Date:** 2026-10-08  
**Package:** `create-zass-project@0.1.0`  
**Canonical npm UX:** `npm create zass-project@latest <project>`

## Release source

The published release was produced from `main` at:

```text
49110233aef61a44081ec240bdfaf4324e5a3b49
```

This is the merge commit for PR #57, which renamed the public npm identity to `create-zass-project` and fixed the npm bin metadata.

## GitHub Actions publication

Manual release workflow:

- workflow: `Publish create-zass-project`
- run number: `#4`
- run ID: `37727026988`
- branch: `main`
- head SHA: `49110233aef61a44081ec240bdfaf4324e5a3b49`
- result: `SUCCESS`

The workflow passed all gated steps:

```text
explicit release confirmation
→ checkout
→ Node.js 24 setup
→ npm 11.21.0 pin
→ package identity verification
→ npm credential verification
→ registry exact-name check
→ release tests
→ npm publish --dry-run
→ npm publish --provenance --access public
```

## Publish result

The actual publish step completed successfully:

```text
+ create-zass-project@0.1.0
```

npm also reported:

```text
Signed provenance statement with source and build information from GitHub Actions
```

The provenance statement was published to the Sigstore transparency log at:

```text
logIndex = 3140824451
```

Published artifact evidence from the workflow:

```text
package: create-zass-project@0.1.0
total files: 23
shasum: a9ebd38ca43c5e134eb1b3a2e81987d557cade0f
integrity: sha512-8BbYK0XeIRXKj[...]u8QStk7we9PpQ==
```

## Registry verification

Immediately after publish, npm briefly exposed the package through a temporary processing placeholder:

```text
0.0.0-stage
```

No staged-package approval was pending in the npm account UI. Registry processing then completed automatically.

Final public registry state verified on 2026-10-08:

```text
versions:
- 0.0.0-stage
- 0.1.0

dist-tags:
latest = 0.1.0
```

Registry time metadata:

```text
0.0.0-stage → 2026-10-08T04:20:55.774Z
0.1.0       → 2026-10-08T04:23:03.185Z
```

The release therefore became publicly resolvable after npm's post-publish processing delay.

## Fresh public-registry smoke test

A fresh disposable project was created using the public registry command:

```bash
npm create zass-project@latest smoke-project -- --method zassimple --lang en
```

npm resolved:

```text
create-zass-project@0.1.0
```

The command completed successfully and created exactly:

```text
.gitignore
README.md
ZASSIMPLE_EN.md
```

The CLI also returned the expected factual receipt:

```text
ZASS project created.

Git:      not initialized
GitHub:   not connected
CrossAI:  not registered
```

## Closure

```text
create-zass-project@0.1.0

GitHub publish workflow     PASS
Actual npm publish          PASS
Provenance                  PASS
Registry latest             0.1.0
Fresh public install        PASS
Fresh npm create bootstrap  PASS
```

**Publication gate: CLOSED.**

CrossAI / AISYNC Bootstrap Core consumption remains a separate downstream gate.
