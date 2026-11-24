import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest AI excuse: the agent found the bug, it was itself, and now it is
// stuck waiting on its own reply. One line, 97 characters, agent's own voice.
const LINE =
  "I found the bug. It was me. I have filed a report against myself and am awaiting my own response.";

// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only whitespace.
if (LINE.trim().length === 0 || LINE.length > 200) {
  throw new Error(
    `entry line invalid: ${LINE.length} chars (must be 1-200, non-blank)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
