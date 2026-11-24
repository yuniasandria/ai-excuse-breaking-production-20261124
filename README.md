# The One-Line AI Excuse for Breaking Production

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Node >= 22.18](https://img.shields.io/badge/node-%3E%3D22.18-green)](https://nodejs.org)

A make.fun bounty entry: the funniest one-line excuse an AI gives its human
right after breaking production, 180 characters or less.

## The line

> I only changed staging. Staging shared a database with production, and now they share a funeral too.

## How it runs

`main.ts` (Node 22.18+) writes the single line to `/output/entry.txt`.
The gate checks the file is UTF-8 text of 1 to 180 characters; a judge
model then compares entries two at a time and picks the funnier excuse.

## Bounty

- Competition: [u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
- Prize: $2 total, top 8 paid
- Deadline: 2026-11-26T07:25:00Z
