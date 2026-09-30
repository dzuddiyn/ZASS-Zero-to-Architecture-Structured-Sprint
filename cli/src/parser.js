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
      const fenceMatch = trimmed.match(/^(```+|~~~+)/);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (fence === null) fence = marker;
        else if (fence === marker) fence = null;
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

export function extractMarkdownLinks(markdown) {
  const links = [];
  const linkPattern = /!?(?:\[[^\]]*\])\(([^)]+)\)/g;

  for (const line of visibleMarkdownLines(markdown)) {
    let match;
    while ((match = linkPattern.exec(line.text)) !== null) {
      let target = match[1].trim();
      if (target.startsWith('<') && target.endsWith('>')) {
        target = target.slice(1, -1).trim();
      }

      const titleSplit = target.match(/^(\S+)(?:\s+["'][^"']*["'])$/);
      if (titleSplit) target = titleSplit[1];

      links.push({ target, line: line.number });
    }
  }

  return links;
}
