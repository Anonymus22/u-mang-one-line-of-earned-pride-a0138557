// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single line of text (1-240 chars, no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At seventy-three, Mara carried the last bucket of water up the stone steps to her rooftop garden, set it down without spilling a drop, and stood with her hands on her hips, looking at the tomatoes she had grown from seed.";

if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!ENTRY.endsWith(".") || !ENTRY.includes("tomatoes")) {
  throw new Error(
    "entry must end with a period and name the tomatoes grown from seed",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
