import { createInterface } from 'node:readline/promises';

export async function promptChoice(question, choices, io = {}) {
  const input = io.input ?? process.stdin;
  const output = io.output ?? process.stdout;
  const rl = createInterface({ input, output });

  try {
    while (true) {
      output.write(`${question}\n\n`);
      for (let index = 0; index < choices.length; index += 1) {
        const choice = choices[index];
        const description = choice.description ? ` — ${choice.description}` : '';
        output.write(`  ${index + 1}. ${choice.label}${description}\n`);
      }
      output.write('\n');

      const answer = (await rl.question(`Select [1-${choices.length}]: `)).trim();
      const selected = Number(answer);

      if (
        Number.isInteger(selected) &&
        selected >= 1 &&
        selected <= choices.length
      ) {
        return choices[selected - 1].value;
      }

      output.write(`Please choose a number from 1 to ${choices.length}.\n\n`);
    }
  } finally {
    rl.close();
  }
}

export async function defaultPrompt(kind, choices, io) {
  const question =
    kind === 'method'
      ? 'Which ZASS method do you want to start with?'
      : 'Choose language:';
  return promptChoice(question, choices, io);
}
