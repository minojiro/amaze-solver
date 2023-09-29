# amaze solver

https://play.google.com/store/apps/details?id=com.crazylabs.amaze.game

[![Image from Gyazo](https://i.gyazo.com/e9d5aa9fb86e85f3759fb64f69b84c9f.gif)](https://gyazo.com/e9d5aa9fb86e85f3759fb64f69b84c9f)

## Usage

This requires deno to work.

- [Installation | Deno Docs](https://docs.deno.com/runtime/manual/getting_started/installation)

In the standard input, fill in the puzzle as follows. (wall: "\*", ball: "o", way: " ")

in:

```bash
deno run main.ts
*******
*    o*
*     *
*******
```

out:

```
🎉 This quiz can be solved in 3 steps!
↓ ← ↑
```
