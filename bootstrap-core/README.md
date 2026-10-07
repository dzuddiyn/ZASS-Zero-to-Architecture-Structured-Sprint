# ZASS Project Bootstrap Core

Private shared module implementing the locked ZASS Project Bootstrap Core v0.1 contract.

It owns deterministic project-bootstrap semantics only:

- method/language catalog;
- method authority filename mapping;
- bundled templates;
- minimal three-artifact plan;
- localized consumer-neutral README;
- safe baseline `.gitignore`;
- plan validation;
- materialized snapshot verification.

It does not create directories, write files, call Git/GitHub/Drive/CrossAI, use AI APIs, send telemetry, or access network services.

The module remains private and its external API is not frozen until the later field-test + STOP/REVIEW gate.
