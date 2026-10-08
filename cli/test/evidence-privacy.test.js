import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildEvidenceReceipt,
  buildUserFeedbackRecord,
  buildUserRatingRecord,
  validateEvidenceReceipt
} from '../src/evidence/index.js';

function receiptWith(record, rootOverrides = {}) {
  return buildEvidenceReceipt({
    source: 'field-runner',
    records: [record],
    receiptId: 'r-privacy-test',
    createdAt: '2026-10-08T20:30:00+08:00',
    ...rootOverrides
  });
}

test('E3-T05 rating builder requires explicit consent and never infers it', () => {
  assert.throws(
    () => buildUserRatingRecord({ rating: 4 }),
    /explicit consent=true/
  );

  const record = buildUserRatingRecord({
    rating: 4,
    ratingTarget: 'overall-workflow',
    questions: ['Q9'],
    consent: true,
    evidenceId: 'e-rating-explicit'
  });

  assert.deepEqual(record, {
    evidenceId: 'e-rating-explicit',
    evidenceClass: 'USER-RATED',
    questions: ['Q9'],
    result: 4,
    ratingTarget: 'overall-workflow',
    consent: true
  });
});

test('E3-T05 rating builder rejects invalid scale target and missing Q9', () => {
  assert.throws(
    () => buildUserRatingRecord({ rating: 0, consent: true }),
    /integer from 1 to 5/
  );
  assert.throws(
    () => buildUserRatingRecord({
      rating: 4,
      ratingTarget: 'unknown',
      consent: true
    }),
    /ratingTarget is not supported/
  );
  assert.throws(
    () => buildUserRatingRecord({
      rating: 4,
      questions: ['Q1'],
      consent: true
    }),
    /must include Q9/
  );
});

test('E3-T05 feedback builder requires explicit consent and bounded input', () => {
  assert.throws(
    () => buildUserFeedbackRecord({ feedback: 'ordinary chat text' }),
    /explicit consent=true/
  );

  assert.throws(
    () => buildUserFeedbackRecord({
      feedback: 'x'.repeat(501),
      consent: true
    }),
    /at most 500 characters/
  );

  assert.throws(
    () => buildUserFeedbackRecord({
      feedback: 'Useful.',
      feedbackCategory: 'unknown',
      consent: true
    }),
    /feedbackCategory is not supported/
  );

  const record = buildUserFeedbackRecord({
    feedback: 'Useful, but navigation was slower.',
    feedbackCategory: 'friction-ceremony',
    relatedRatingEvidenceId: 'e-rating-explicit',
    consent: true,
    evidenceId: 'e-feedback-explicit'
  });

  assert.equal(record.evidenceClass, 'USER-FEEDBACK');
  assert.equal(record.result, 'Useful, but navigation was slower.');
  assert.equal(record.feedbackCategory, 'friction-ceremony');
  assert.equal(record.relatedRatingEvidenceId, 'e-rating-explicit');
  assert.equal(record.consent, true);
});

test('E3-T05 validator emits explicit privacy errors for prohibited root fields', () => {
  const record = buildUserRatingRecord({
    rating: 5,
    consent: true,
    evidenceId: 'e-rating'
  });
  const receipt = receiptWith(record);
  receipt.repoUrl = 'https://example.invalid/private.git';
  receipt.username = 'private-user';

  const result = validateEvidenceReceipt(receipt);

  assert.equal(result.valid, false);
  assert.ok(result.errors.includes('prohibited privacy field: repoUrl'));
  assert.ok(result.errors.includes('prohibited privacy field: username'));
  assert.ok(result.errors.includes('unsupported field: repoUrl'));
  assert.ok(result.errors.includes('unsupported field: username'));
});

test('E3-T05 validator detects prohibited privacy fields nested inside records', () => {
  const receipt = receiptWith({
    evidenceId: 'e-auto',
    evidenceClass: 'AUTOMATED',
    questions: ['Q4'],
    result: 'PASS',
    credentials: {
      token: 'secret-value'
    }
  });

  const result = validateEvidenceReceipt(receipt);

  assert.equal(result.valid, false);
  assert.ok(result.errors.includes('records[0].prohibited privacy field: credentials'));
  assert.ok(result.errors.includes('records[0].credentials.prohibited privacy field: token'));
});

test('E3-T05 allowed user feedback remains local text and is not rejected heuristically', () => {
  const feedback = buildUserFeedbackRecord({
    feedback: 'My local workflow was confusing at first, then became easier.',
    consent: true,
    evidenceId: 'e-feedback'
  });

  const result = validateEvidenceReceipt(receiptWith(feedback));

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
});

test('E3-T05 explicit user-signal builders produce validator-compatible records only', () => {
  const rating = buildUserRatingRecord({
    rating: 3,
    ratingTarget: 'tooling',
    questions: ['Q4', 'Q9'],
    consent: true,
    evidenceId: 'e-rating-compatible'
  });
  const feedback = buildUserFeedbackRecord({
    feedback: 'Tooling worked, but setup wording was unclear.',
    questions: ['Q5', 'Q9'],
    feedbackCategory: 'documentation-onboarding',
    relatedRatingEvidenceId: 'e-rating-compatible',
    consent: true,
    evidenceId: 'e-feedback-compatible'
  });

  const receipt = buildEvidenceReceipt({
    source: 'field-runner',
    receiptId: 'r-compatible-signals',
    createdAt: '2026-10-08T20:31:00+08:00',
    records: [rating, feedback]
  });

  const result = validateEvidenceReceipt(receipt);
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
});
