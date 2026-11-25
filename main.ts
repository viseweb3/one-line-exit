// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes one funny, single-line resignation letter to /output/entry.txt.
// Gate: UTF-8 text, 1 to 140 characters, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I resign as the office fire warden: after three years showing everyone the exits, I am finally using one myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
