# Quick Start

ZASS is designed so you can get value before learning the full framework.

## Start ZASS your way

### 1. Just brainstorm — zero setup

Already discussing an idea with an AI?

Keep going.

When something becomes worth preserving:

```text
useful conversation
       ↓
copy / paste
       ↓
trusted GitHub-writer AI
       ↓
ZASS
       ↓
review / decide
       ↓
COMMIT
```

> **Start structured, or start messy. ZASS can capture it later.**

### 2. Public project — paste the link

If the project is public, another AI can read the current repository and challenge it without becoming authoritative.

Copy-ready prompt:

```text
Read this public ZASS project first:

[PROJECT URL]

Treat the repository as the Source of Truth.
Respect all existing LOCKED decisions.

Continue brainstorming with me naturally.
Challenge assumptions and surface useful ideas, questions,
risks and alternatives, but do not silently change LOCKED decisions.

At the end of the session, export a Markdown handoff
containing useful findings and proposed changes.

The handoff is NOT the Source of Truth.
```

Return the handoff to the trusted writer before anything is committed.

### 3. CLI — coming soon

Target experience:

```bash
npm create zass@latest my-project
```

Target minimal project:

```text
my-project/
├── ZASSIMPLE_EN.md
├── README.md
└── .gitignore
```

**Status: specification locked — implementation pending.**

The npm command is the target UX, not a currently released package.

### 4. File — works now

Copy or download `ZASSIMPLE_EN.md`, give it to your AI, and talk normally.

Useful commands:

```text
ZASS!!
PROCEED/LOCK
SAVE
DRAFT DESIGN
CONFIRM DESIGN
```

You do not need to memorize record IDs.

## When to move to Full ZASS

Stay with ZASSIMPLE while you mainly ask:

> **What should I design?**

Move to Full ZASS when the harder question becomes:

> **Why should it be built this way?**

Typical triggers:

- important decisions depend on each other;
- experiments or evidence matter;
- several design options have meaningful trade-offs;
- privacy, money, data loss, security or operational risk matters;
- decision history is becoming hard to track conversationally.

Move because **decision complexity** increased, not merely because the project got larger.
