const ID_PREFIX = '(?:AC|MR|I|Q|R|E|D|L)';
const ID_CANDIDATE = `${ID_PREFIX}(?:-|_)?\\d{1,4}`;
const CANONICAL_ID = /^(?:AC|MR|I|Q|R|E|D|L)-\d{3}$/;

export function visibleMarkdownLines(markdown) {
  const lines = markdown.split(/\r?\n/);
  const visible = [];
  let fence = null;
  let inComment = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trimStart();

    if (!inComment) {
      const fenceMatch = trimmed.match(/^(`{3,}|~{3,})(.*)$/);
      if (fenceMatch) {
        const sequence = fenceMatch[1];
        const marker = sequence[0];

        if (fence === null) {
          fence = { marker, length: sequence.length };
          continue;
        }

        if (
          fence.marker === marker &&
          sequence.length >= fence.length &&
          fenceMatch[2].trim().length === 0
        ) {
          fence = null;
        }
        continue;
      }
    }

    if (fence !== null) continue;

    let output = '';
    let cursor = 0;
    while (cursor < line.length) {
      if (inComment) {
        const end = line.indexOf('-->', cursor);
        if (end === -1) {
          cursor = line.length;
          break;
        }
        inComment = false;
        cursor = end + 3;
        continue;
      }

      const start = line.indexOf('<!--', cursor);
      if (start === -1) {
        output += line.slice(cursor);
        break;
      }

      output += line.slice(cursor, start);
      const end = line.indexOf('-->', start + 4);
      if (end === -1) {
        inComment = true;
        break;
      }
      cursor = end + 3;
    }

    if (output.trim().length > 0) {
      visible.push({ number: index + 1, text: output });
    }
  }

  return visible;
}

export function extractRecordDefinitions(markdown) {
  const records = [];
  const malformed = [];
  const patterns = [
    new RegExp(`^#{1,6}\\s+(${ID_CANDIDATE})(?=\\s|—|–|-|:|$)`, 'i'),
    new RegExp(`^\\s*\\|\\s*(${ID_CANDIDATE})\\s*\\|`, 'i'),
    new RegExp(`^\\s*[-*+]\\s+\\*\\*(${ID_CANDIDATE})(?=\\*\\*|\\s|—|–|:|/)`, 'i')
  ];

  for (const line of visibleMarkdownLines(markdown)) {
    let candidate = null;
    for (const pattern of patterns) {
      const match = line.text.match(pattern);
      if (match) {
        candidate = match[1].toUpperCase();
        break;
      }
    }

    if (!candidate) continue;

    if (CANONICAL_ID.test(candidate)) {
      records.push({ id: candidate, line: line.number });
    } else {
      malformed.push({ id: candidate, line: line.number });
    }
  }

  return { records, malformed };
}

function extractInlineLinkTargets(text) {
  const targets = [];
  const opener = /!?\[[^\]]*\]\(/g;
  let match;

  while ((match = opener.exec(text)) !== null) {
    const contentStart = opener.lastIndex;
    let depth = 1;
    let escaped = false;
    let cursor = contentStart;

    for (; cursor < text.length; cursor += 1) {
      const char = text[cursor];

      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === '(') {
        depth += 1;
        continue;
      }
      if (char === ')') {
        depth -= 1;
        if (depth === 0) break;
      }
    }

    if (depth !== 0) break;

    targets.push(text.slice(contentStart, cursor));
    opener.lastIndex = cursor + 1;
  }

  return targets;
}

function normalizeReferenceLabel(label) {
  return label.trim().replace(/\s+/g, ' ').toLowerCase();
}

function extractReferenceDefinition(text) {
  const match = text.match(/^\s{0,3}\[([^\]]+)\]:\s*(.+?)\s*$/);
  if (!match) return null;

  const label = normalizeReferenceLabel(match[1]);
  const remainder = match[2].trim();
  if (!remainder) return null;

  let target;
  if (remainder.startsWith('<')) {
    const closing = remainder.indexOf('>');
    if (closing === -1) return null;
    target = remainder.slice(1, closing).trim();
  } else {
    const targetMatch = remainder.match(/^(\S+)/);
    if (!targetMatch) return null;
    target = targetMatch[1];
  }

  return { label, target };
}

function extractReferenceUsages(text) {
  const usages = [];
  const occupied = [];
  const fullPattern = /!?\[([^\]]+)\]\[([^\]]*)\]/g;
  let match;

  while ((match = fullPattern.exec(text)) !== null) {
    const label = normalizeReferenceLabel(match[2] || match[1]);
    usages.push({ label });
    occupied.push([match.index, fullPattern.lastIndex]);
  }

  const shortcutPattern = /!?\[([^\]]+)\](?!\s*[\[(])/g;
  while ((match = shortcutPattern.exec(text)) !== null) {
    const start = match.index;
    const end = shortcutPattern.lastIndex;
    if (occupied.some(([from, to]) => start >= from && end <= to)) continue;
    usages.push({ label: normalizeReferenceLabel(match[1]) });
  }

  return usages;
}

function normalizeMarkdownTarget(rawTarget) {
  let target = rawTarget.trim();
  if (target.startsWith('<') && target.endsWith('>')) {
    target = target.slice(1, -1).trim();
  }

  const titleSplit = target.match(/^(\S+)(?:\s+["'][^"']*["'])$/);
  if (titleSplit) target = titleSplit[1];
  return target;
}

export function extractMarkdownLinks(markdown) {
  const links = [];
  const visible = visibleMarkdownLines(markdown);
  const definitions = new Map();

  for (const line of visible) {
    const definition = extractReferenceDefinition(line.text);
    if (definition && !definitions.has(definition.label)) {
      definitions.set(definition.label, definition.target);
    }
  }

  for (const line of visible) {
    const definition = extractReferenceDefinition(line.text);

    for (const rawTarget of extractInlineLinkTargets(line.text)) {
      links.push({ target: normalizeMarkdownTarget(rawTarget), line: line.number });
    }

    if (definition) continue;

    for (const usage of extractReferenceUsages(line.text)) {
      const target = definitions.get(usage.label);
      if (target) links.push({ target: normalizeMarkdownTarget(target), line: line.number });
    }
  }

  return links;
}

function stripInlineMarkdown(text) {
  return text.replace(/\*\*|__|`/g, '');
}

function normalizeDecisionText(text) {
  return text
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line
      .trim()
      .replace(/\s{2,}/g, ' ')
      .replace(/\*\*|__|`/g, '')
      .replace(/^[-*+]\s+/, '')
      .trim())
    .filter(Boolean)
    .join('\n');
}

function extractDecisionSectionState(visible) {
  const lockedIds = new Set();
  const supersededIds = new Set();
  let activeState = null;
  let activeLevel = null;

  for (const line of visible) {
    const stateHeading = line.text.match(
      /^(#{1,6})\s+(?:\d+\.\s*)?(LOCKED|SUPERSEDED)\s+DECISIONS\b/i
    );

    if (stateHeading) {
      activeLevel = stateHeading[1].length;
      activeState = stateHeading[2].toUpperCase();
      continue;
    }

    const heading = line.text.match(/^(#{1,6})\s+/);
    if (activeState && heading && heading[1].length <= activeLevel) {
      activeState = null;
      activeLevel = null;
    }

    if (!activeState) continue;

    const plain = stripInlineMarkdown(line.text);
    const entry = plain.match(
      /^\s*[-*+]\s+(?:(?:L-\d{3})\s*\/\s*)?(D-\d{3})\b/i
    );
    if (!entry) continue;

    const id = entry[1].toUpperCase();
    if (activeState === 'LOCKED') lockedIds.add(id);
    if (activeState === 'SUPERSEDED') supersededIds.add(id);
  }

  return { lockedIds, supersededIds };
}

export function extractDecisionState(markdown) {
  const visible = visibleMarkdownLines(markdown);
  const decisions = new Map();
  const lockedIds = new Set();
  const supersededIds = new Set();
  const supersedes = new Map();

  const headings = visible
    .map((line, index) => ({ ...line, index, match: line.text.match(/^##\s+(D-\d{3})\b(?:\s*[—–-]\s*(.*))?/i) }))
    .filter((item) => item.match);

  for (let i = 0; i < headings.length; i += 1) {
    const current = headings[i];
    const nextIndex = i + 1 < headings.length ? headings[i + 1].index : visible.length;
    const bodyLines = [];

    for (let j = current.index + 1; j < nextIndex; j += 1) {
      if (/^#\s/.test(visible[j].text)) break;
      bodyLines.push(visible[j].text);
    }

    const id = current.match[1].toUpperCase();
    const body = normalizeDecisionText(bodyLines.join('\n'));
    decisions.set(id, {
      id,
      title: (current.match[2] || '').trim(),
      body,
      line: current.number,
      locked: false,
      superseded: false
    });

    for (const line of bodyLines) {
      const plain = stripInlineMarkdown(line).trim().replace(/^[-*+]\s+/, '');
      const relation = plain.match(/^Supersedes\s*:\s*(D-\d{3})\b/i);
      if (relation) supersedes.set(id, relation[1].toUpperCase());

      if (/^Status\s*:\s*LOCKED\b/i.test(plain)) lockedIds.add(id);
      if (/^Status\s*:\s*SUPERSEDED\b/i.test(plain)) supersededIds.add(id);
    }
  }

  const sectionState = extractDecisionSectionState(visible);
  for (const id of sectionState.lockedIds) lockedIds.add(id);
  for (const id of sectionState.supersededIds) supersededIds.add(id);

  for (const id of lockedIds) {
    const record = decisions.get(id);
    if (record) record.locked = true;
  }
  for (const id of supersededIds) {
    const record = decisions.get(id);
    if (record) record.superseded = true;
  }

  return { decisions, lockedIds, supersededIds, supersedes };
}

export function sameDecisionContent(a, b) {
  if (!a || !b) return false;

  const sameTitle = normalizeDecisionText(a.title || '') === normalizeDecisionText(b.title || '');
  return sameTitle && a.body === b.body;
}
