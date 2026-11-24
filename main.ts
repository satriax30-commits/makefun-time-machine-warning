// Funniest Time Machine Warning Label
// Deterministic, stdlib-only, Node 22. Writes one warning label to
// <outDir>/entry.txt (default /output). No network, no wall-clock,
// no randomness: the same input always produces the same bytes.
//
// The label: a straight-faced safety notice whose warning is the classic
// grandfather paradox, with the punchline saved for the last few words —
// the danger is not that you erase yourself, but that grandad never gets
// the chance to disappoint you.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Do not kill your grandfather. He has not yet had the chance to disappoint you.";

// The gate: 1-120 characters, not only whitespace.
function assertGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`entry must be 1-120 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  // Optional first argument overrides the output directory (used to verify
  // determinism across two runs); the grader's default is /output.
  const outDir = process.argv[2] ?? "/output";
  assertGate(LABEL);
  mkdirSync(outDir, { recursive: true });
  // Exact bytes, no trailing newline: the label itself is the entry.
  writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
}

main();
