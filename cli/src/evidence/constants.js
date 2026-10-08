export const EVIDENCE_RECEIPT_VERSION = '0.1';

export const EVIDENCE_CLASSES = Object.freeze([
  'AUTOMATED',
  'FIELD-OBSERVED',
  'USER-RATED',
  'USER-FEEDBACK',
  'CASE-STUDY',
  'INFERRED'
]);

export const TRACK_E_QUESTIONS = Object.freeze(
  Array.from({ length: 10 }, (_, index) => `Q${index + 1}`)
);

export const EVIDENCE_SOURCES = Object.freeze([
  'manual',
  'zass-cli',
  'bootstrap-test',
  'field-runner'
]);

export const PROJECT_SHAPES = Object.freeze([
  'legacy-no-machine-metadata',
  'generated-with-machine-metadata',
  'full-zass-single-file',
  'experimental-scale-out',
  'fixture',
  'other-non-sensitive'
]);

export const METHODS = Object.freeze([
  'zasspill',
  'zasselection',
  'zassimple',
  'zass'
]);

export const LANGUAGES = Object.freeze(['en', 'my']);

export const MACHINE_METADATA_STATES = Object.freeze([
  'ABSENT',
  'VALID',
  'MALFORMED',
  'UNSUPPORTED_SCHEMA',
  'INVALID'
]);

export const AUTOMATED_RESULTS = Object.freeze([
  'PASS',
  'FAIL',
  'WARN',
  'NOT_APPLICABLE'
]);

export const FIELD_OBSERVED_RESULTS = Object.freeze([
  'PASS',
  'FAIL',
  'FRICTION',
  'OBSERVED'
]);

export const FIELD_SEVERITIES = Object.freeze([
  'LOW',
  'MEDIUM',
  'HIGH',
  'CRITICAL'
]);

export const REPRODUCIBILITY_VALUES = Object.freeze([
  'YES',
  'NO',
  'UNKNOWN'
]);

export const CASE_STUDY_RESULTS = Object.freeze([
  'REVIEWED',
  'INSUFFICIENT'
]);

export const RATING_TARGETS = Object.freeze([
  'overall-workflow',
  'tooling',
  'continuation-handoff',
  'scale-out-experiment'
]);

export const FEEDBACK_CATEGORIES = Object.freeze([
  'context-continuity',
  'decision-clarity',
  'tooling',
  'friction-ceremony',
  'scale-navigation',
  'documentation-onboarding',
  'other'
]);

export const MAX_FEEDBACK_LENGTH = 500;
