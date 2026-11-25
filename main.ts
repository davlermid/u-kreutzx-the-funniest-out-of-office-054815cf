import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const WINNER = "I'm away. My replacement is a sticky note that says 'figure it out'.";

if (WINNER.length < 1 || WINNER.length > 140 || WINNER.includes('\n')) {
  throw new Error(`entry must be 1-140 chars, single line (got ${WINNER.length})`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WINNER);
