import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { EVIDENCE_RECEIPT_VERSION } from './constants.js';
import { validateEvidenceReceipt } from './validator.js';

export const EVIDENCE_DIRECTORY_RELATIVE_PATH = path.join('.zass', 'evidence');
export const EVIDENCE_FILENAME_PREFIX = 'zass-evidence-';

export function generateReceiptId() {
  return `r-${crypto.randomUUID()}`;
}

export function generateEvidenceId() {
  return `e-${crypto.randomUUID()}`;
}

export function buildEvidenceReceipt({
  source,
  records,
  notes,
  receiptId = generateReceiptId(),
  createdAt = new Date().toISOString()
}) {
  const receipt = {
    receiptVersion: EVIDENCE_RECEIPT_VERSION,
    receiptId,
    createdAt,
    source,
    records
  };

  if (notes !== undefined) {
    receipt.notes = notes;
  }

  return receipt;
}

export function evidenceReceiptPath(projectDir, receiptId) {
  const root = path.resolve(projectDir);
  return path.join(
    root,
    EVIDENCE_DIRECTORY_RELATIVE_PATH,
    `${EVIDENCE_FILENAME_PREFIX}${receiptId}.json`
  );
}

function result(state, extra = {}) {
  return { state, ...extra };
}

export async function writeEvidenceReceipt(projectDir, receipt) {
  const validation = validateEvidenceReceipt(receipt);

  if (!validation.valid) {
    return result('INVALID', {
      saved: false,
      path: null,
      errors: validation.errors
    });
  }

  const root = path.resolve(projectDir);
  const evidenceDir = path.join(root, EVIDENCE_DIRECTORY_RELATIVE_PATH);
  const targetPath = evidenceReceiptPath(root, receipt.receiptId);
  const serialized = `${JSON.stringify(receipt, null, 2)}\n`;

  try {
    await fs.mkdir(evidenceDir, { recursive: true });
  } catch (error) {
    return result('WRITE_FAILED', {
      saved: false,
      path: targetPath,
      errors: [`cannot create evidence directory: ${error.message}`]
    });
  }

  try {
    await fs.writeFile(targetPath, serialized, {
      encoding: 'utf8',
      flag: 'wx'
    });

    return result('SAVED', {
      saved: true,
      path: targetPath,
      errors: []
    });
  } catch (error) {
    if (error.code === 'EEXIST') {
      return result('COLLISION', {
        saved: false,
        path: targetPath,
        errors: ['receipt file already exists; existing evidence was not overwritten']
      });
    }

    return result('WRITE_FAILED', {
      saved: false,
      path: targetPath,
      errors: [`cannot write evidence receipt: ${error.message}`]
    });
  }
}
