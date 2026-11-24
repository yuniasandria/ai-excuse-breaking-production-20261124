// The One-Line AI Excuse for Breaking Production.
// Writes one first-person excuse (<=180 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I only changed staging. Staging shared a database with production, and now they share a funeral too.";

// Runtime guard: the judged entry must be a single non-empty line of 1-180 chars.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  console.error(
    `Invalid entry line: must be 1-180 non-whitespace chars, got ${LINE.length} chars.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
