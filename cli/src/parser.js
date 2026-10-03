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
    new RegExp(`^\\s*\\|\\s*(${ID_CANDIDATE})\\s*\\|`, 'i')
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

function explicitStatusTokens(text) {
  const plain = stripInlineMarkdown(text).trim().replace(/^[-*+]\s+/, '');
  const match = plain.match(/^Status\s*:\s*([A-Z]+(?:\s*\/\s*[A-Z]+)*)\b/i);
  if (!match) return [];

  return match[1]
    .split('/')
    .map((token) => token.trim().toUpperCase())
    .filter(Boolean);
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
      /^(#{1,6})\s+(?:\d+[A-Z]?\.\s*)?(LOCKED|SUPERSEDED)\s+(?:DECISIONS|RECORDS)\b/i
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
    const entry =
      plain.match(/^\s*[-*+]\s+(?:(?:L-\d{3})\s*(?:\/|→|->)\s*)?(D-\d{3})\b/i) ||
      plain.match(/^\s*[-*+]\s+L-\d{3}\s*:\s*Locks\s+(D-\d{3})\b/i);
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

      const statusTokens = explicitStatusTokens(line);
      if (statusTokens.includes('LOCKED')) lockedIds.add(id);
      if (statusTokens.includes('SUPERSEDED')) supersededIds.add(id);
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



function normalizeReadinessStatus(text) {
  return stripInlineMarkdown(text)
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function parseReadinessLine(text) {
  const plain = stripInlineMarkdown(text).trim();
  const match = plain.match(/(\d+(?:\.\d+)?)%\s*[—–-]\s*(.+?)\s*$/);
  if (!match) return null;

  return {
    progress: Number(match[1]),
    status: normalizeReadinessStatus(match[2])
  };
}

function extractCanonicalIds(text) {
  const ids = new Set();
  for (const match of text.matchAll(/\b(?:AC|MR|I|Q|R|E|D|L)-\d{3}\b/gi)) {
    ids.add(match[0].toUpperCase());
  }
  return [...ids];
}

function extractCurrentVersion(visible) {
  const preferred = [
    /^ZASS method baseline\s*:\s*(?:ZASS\s*)?v?(\d+\.\d+\.\d+)\b/i,
    /^ZASS method\s*:\s*(?:ZASS\s*)?v?(\d+\.\d+\.\d+)\b/i,
    /^Version\s*:\s*v?(\d+\.\d+\.\d+)\b/i
  ];

  for (const pattern of preferred) {
    for (const line of visible) {
      const plain = stripInlineMarkdown(line.text).trim();
      const match = plain.match(pattern);
      if (match) return match[1];
    }
  }

  return null;
}

function extractExplicitLedgerIds(visible) {
  const ids = new Set();
  let activeLevel = null;

  for (const line of visible) {
    const heading = line.text.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const label = stripInlineMarkdown(heading[2]).trim();
      if (/\b(?:DECISION LEDGER|LOCKED RECORDS|LOCKED DECISIONS|SUPERSEDED DECISIONS)\b/i.test(label)) {
        activeLevel = heading[1].length;
        continue;
      }

      if (activeLevel !== null && heading[1].length <= activeLevel) {
        activeLevel = null;
      }
    }

    if (activeLevel === null) continue;

    const plain = stripInlineMarkdown(line.text).trim();
    if (!/^[-*+]\s+/.test(plain)) continue;
    for (const id of extractCanonicalIds(plain)) ids.add(id);
  }

  return ids;
}

function extractCurrentCriticalBlockerIds(visible) {
  const ids = new Set();

  for (let i = 0; i < visible.length; i += 1) {
    const plain = stripInlineMarkdown(visible[i].text).trim();
    const sameLine = plain.match(/^Critical(?: architecture)? blockers(?: before confirmation)?\s*:\s*(.*)$/i);
    if (!sameLine) continue;

    for (const id of extractCanonicalIds(sameLine[1])) ids.add(id);

    for (let j = i + 1; j < visible.length; j += 1) {
      const next = stripInlineMarkdown(visible[j].text).trim();
      if (/^#{1,6}\s+/.test(visible[j].text)) break;
      if (!/^[-*+]\s+/.test(next)) break;
      for (const id of extractCanonicalIds(next)) ids.add(id);
    }
  }

  return ids;
}

export function extractZassProjectSnapshot(markdown) {
  const visible = visibleMarkdownLines(markdown);
  let readiness = null;

  for (let i = 0; i < visible.length; i += 1) {
    const plain = stripInlineMarkdown(visible[i].text);
    if (!/ZERO\s*(?:→|->)\s*ARCHITECTURE/i.test(plain)) continue;

    const sameLine = parseReadinessLine(visible[i].text);
    if (sameLine) {
      readiness = sameLine;
      continue;
    }

    if (i + 1 < visible.length) {
      const nextLine = parseReadinessLine(visible[i + 1].text);
      if (nextLine) readiness = nextLine;
    }
  }

  const definitions = extractRecordDefinitions(markdown);
  const ids = new Set(definitions.records.map((record) => record.id));
  for (const id of extractExplicitLedgerIds(visible)) ids.add(id);

  return {
    progress: readiness?.progress ?? null,
    status: readiness?.status ?? null,
    version: extractCurrentVersion(visible),
    ids,
    criticalBlockerIds: extractCurrentCriticalBlockerIds(visible)
  };
}

function parseActionPlanSource(value) {
  const clean = stripInlineMarkdown(value).trim();
  const fileMatch = clean.match(/\b([A-Za-z0-9_.-]*ZASS[A-Za-z0-9_.-]*\.md)\b/i);
  const versionMatch = clean.match(/\bv(\d+\.\d+\.\d+)\b/i);

  return {
    raw: clean,
    file: fileMatch ? fileMatch[1] : null,
    version: versionMatch ? versionMatch[1] : null,
    sameCommit: /\bsame Git commit\b/i.test(clean)
  };
}

export function extractActionPlanSnapshot(markdown) {
  const visible = visibleMarkdownLines(markdown);
  let start = -1;
  let level = null;

  for (let i = 0; i < visible.length; i += 1) {
    const heading = visible[i].text.match(
      /^(#{1,6})\s+.*?ZERO\s*(?:→|->)\s*ARCHITECTURE\s+SNAPSHOT\b/i
    );
    if (!heading) continue;
    start = i;
    level = heading[1].length;
    break;
  }

  const relatedIds = new Set();
  for (const line of visible) {
    const plain = stripInlineMarkdown(line.text).trim().replace(/^[-*+]\s+/, '');
    const field = plain.match(
      /^(?:Related ZASS(?: IDs)?|Related risks?|Related decisions?|Source Decision|Source ZASS|ZASS experiment)\s*:\s*(.+)$/i
    );
    if (!field) continue;
    for (const id of extractCanonicalIds(field[1])) relatedIds.add(id);
  }

  if (start === -1) {
    return {
      found: false,
      progress: null,
      status: null,
      source: null,
      blockersNone: false,
      blockerIds: new Set(),
      relatedIds
    };
  }

  let progress = null;
  let status = null;
  let source = null;
  let blockersNone = false;
  const blockerIds = new Set();

  for (let i = start + 1; i < visible.length; i += 1) {
    const heading = visible[i].text.match(/^(#{1,6})\s+/);
    if (heading && heading[1].length <= level) break;

    const plain = stripInlineMarkdown(visible[i].text).trim().replace(/^[-*+]\s+/, '');

    const progressMatch = plain.match(/^Progress\s*:\s*.*?(\d+(?:\.\d+)?)%\s*$/i);
    if (progressMatch) {
      progress = Number(progressMatch[1]);
      continue;
    }

    const statusMatch = plain.match(/^Status\s*:\s*(.+)$/i);
    if (statusMatch) {
      status = normalizeReadinessStatus(statusMatch[1]);
      continue;
    }

    const sourceMatch = plain.match(/^Source\s*:\s*(.+)$/i);
    if (sourceMatch) {
      source = parseActionPlanSource(sourceMatch[1]);
      continue;
    }

    const blockerMatch = plain.match(/^Critical blockers\s*:\s*(.*)$/i);
    if (blockerMatch) {
      const value = blockerMatch[1].trim();
      if (/\bnone\b|\bnone currently identified\b/i.test(value)) blockersNone = true;
      for (const id of extractCanonicalIds(value)) blockerIds.add(id);

      for (let j = i + 1; j < visible.length; j += 1) {
        const nextHeading = visible[j].text.match(/^(#{1,6})\s+/);
        if (nextHeading && nextHeading[1].length <= level) break;
        const next = stripInlineMarkdown(visible[j].text).trim();
        if (!/^[-*+]\s+/.test(next)) break;
        for (const id of extractCanonicalIds(next)) blockerIds.add(id);
      }
    }
  }

  return {
    found: true,
    progress,
    status,
    source,
    blockersNone,
    blockerIds,
    relatedIds
  };
}
