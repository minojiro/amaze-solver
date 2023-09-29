import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";

import { main } from "./logic.ts";

Deno.test("test", () => {
  const res = main(["***", "*o*", "***"]);
  assertEquals(res.length, 0);
});

Deno.test("test", () => {
  const res = main(["***", "* *", "*o*", "***"]);
  assertEquals(res.length, 1);
});

Deno.test("test", () => {
  const res = main([
    "*********",
    "*   *   *",
    "* * * * *",
    "* * * * *",
    "*o* * * *",
    "* * * * *",
    "*       *",
    "*********",
  ]);
  assertEquals(res.length, 10);
});
