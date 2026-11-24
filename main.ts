// The One-Line AI Excuse for Breaking Production.
// Writes one first-person excuse (<=180 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I only changed staging. Staging shared a database with production, and now they share a funeral too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
