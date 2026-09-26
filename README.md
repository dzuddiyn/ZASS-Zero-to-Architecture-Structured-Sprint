# ZASS — Zero-to-Architecture Structured Sprint

**A structured brainstorming method**

**Blast an idea. Let AI organize it. Save its evolution on GitHub.**

> **Don't shortcut thinking; eliminate repeated thinking.**

ZASS is a Markdown framework for developing raw ideas into tested options, decisions locked by the project owner, and traceable architecture. It works across ChatGPT, Gemini, Claude, Perplexity, and other AI models. AI helps explore and organize; the project owner makes the decisions.

## Get started in 3 steps

1. Copy [`ZASS.md`](ZASS.md) into a new project folder. Keep one main ZASS file per project.
2. Give the latest file to an AI and describe your idea in ordinary language. For example: **“I have an idea for a cucumber and ginger drink. Brainstorm with me, then capture the important points in ZASS. Separate what I stated from your inferences and what we still don't know.”**
3. Review the AI's summary of proposed changes. Save the latest version on GitHub so the next session or AI model can read the same decisions.

You don't need to memorize IDs such as `I-001` or `D-001`. The AI manages IDs, statuses, and links between entries. See **Daily Use** near the top of [`ZASS.md`](ZASS.md) for simple instructions and optional prompts. The template's user guide is currently in Malay; the framework can be used in any language.

## The ZASS flow

`Explore freely → Challenge assumptions → Compare options → Test when needed → Owner decides → Lock → Build architecture`

- AI suggestions are **candidates**, not decisions.
- Agreement between AI models is not evidence. Disagreement becomes a question, experiment, or trade-off to resolve.
- Only the project owner can explicitly **LOCK** a decision.
- Locked decisions must never be changed silently.
- Architecture is generated when critical decisions and readiness conditions are satisfied.

## Using this file

The `ZASS.md` in this repository is a **base template**, not a shared decision record for every project. For a new project, copy it into that project's repository (for example, `Kerani-Core/ZASS.md` or `ZASS_Cucumber_Ginger_Drink.md`). Keep updating **the same project file** as the discussion evolves; Git preserves its history. Don't rely on AI memory or chat as the only record.

**Status:** ZASS baseline v0.1 is locked; the template's user guide was updated to v0.1.2.
