// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "6 AM Saturday, my alarm clock's a wedding DJ asking an empty room to make some noise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
