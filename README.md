# Funniest Time Machine Warning Label

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/satriax30-commits/makefun-time-machine-warning/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/satriax30-commits/makefun-time-machine-warning/reward.svg)](https://make.fun)

Entry for the [make.fun](https://make.fun) bounty **Funniest Time Machine Warning Label** (`u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`).

## The label

> WARNING: Do not kill your grandfather. He has not yet had the chance to disappoint you.

A straight-faced safety notice built on the classic grandfather paradox —
with the punchline saved for the last few words.

## How it works

`main.ts` is a deterministic, stdlib-only Node 22 program. It writes the
label to `<outDir>/entry.txt` (default `/output`), with no network, no
wall-clock reads, and no randomness, so every run produces identical bytes.

```sh
node main.ts /output
```
