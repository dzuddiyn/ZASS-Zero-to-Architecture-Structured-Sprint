import { RATING_TARGETS, FEEDBACK_CATEGORIES, MAX_FEEDBACK_LENGTH } from './constants.js';
import { generateEvidenceId } from './store.js';

function requireExplicitConsent(consent) {
  if (consent !== true) {
    throw new TypeError('explicit consent=true is required for user-submitted evidence');
  }
}

function requireQuestions(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new TypeError('questions must be a non-empty array');
  }
}

export function buildUserRatingRecord({
  rating,
  ratingTarget = 'overall-workflow',
  questions = ['Q9'],
  consent,
  evidenceId = generateEvidenceId()
}) {
  requireExplicitConsent(consent);
  requireQuestions(questions);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new TypeError('rating must be an integer from 1 to 5');
  }

  if (!RATING_TARGETS.includes(ratingTarget)) {
    throw new TypeError('ratingTarget is not supported');
  }

  if (!questions.includes('Q9')) {
    throw new TypeError('USER-RATED questions must include Q9');
  }

  return {
    evidenceId,
    evidenceClass: 'USER-RATED',
    questions: [...questions],
    result: rating,
    ratingTarget,
    consent: true
  };
}

export function buildUserFeedbackRecord({
  feedback,
  questions = ['Q9'],
  feedbackCategory,
  relatedRatingEvidenceId,
  consent,
  evidenceId = generateEvidenceId()
}) {
  requireExplicitConsent(consent);
  requireQuestions(questions);

  if (
    typeof feedback !== 'string' ||
    feedback.length === 0 ||
    feedback.length > MAX_FEEDBACK_LENGTH
  ) {
    throw new TypeError(
      `feedback must be non-empty and at most ${MAX_FEEDBACK_LENGTH} characters`
    );
  }

  if (
    feedbackCategory !== undefined &&
    !FEEDBACK_CATEGORIES.includes(feedbackCategory)
  ) {
    throw new TypeError('feedbackCategory is not supported');
  }

  const record = {
    evidenceId,
    evidenceClass: 'USER-FEEDBACK',
    questions: [...questions],
    result: feedback,
    consent: true
  };

  if (feedbackCategory !== undefined) {
    record.feedbackCategory = feedbackCategory;
  }

  if (relatedRatingEvidenceId !== undefined) {
    record.relatedRatingEvidenceId = relatedRatingEvidenceId;
  }

  return record;
}
