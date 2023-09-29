import { main } from "./logic.ts";

import { readLines } from "https://deno.land/std/io/mod.ts";

const lines: string[] = [];
for await (const line of readLines(Deno.stdin)) {
  if (line === "") break;
  lines.push(line);
}
const result = main(lines);

console.log(`🎉 This quiz can be solved in ${result.length} steps!`);
console.log(result.join(" "));
