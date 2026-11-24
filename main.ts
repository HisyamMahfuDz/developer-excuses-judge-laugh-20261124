// Make the AI Judge Laugh: Developer Excuses — make.fun competition
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// Writes one short text to /output/entry.txt: the funniest excuse a
// developer gives when code breaks in production. Deterministic, no
// network, no input.
//
// The text itself (final, 96 Unicode code points):
// "I blame the intern — me, three years ago, who wrote 'TODO: fix
// before launch' and then launched."
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I blame the intern \u2014 me, three years ago, who wrote " +
  "'TODO: fix before launch' and then launched.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (TEXT.includes("\n")) {
  throw new Error("entry must be one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
