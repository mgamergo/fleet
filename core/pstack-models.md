# pstack model configuration

Codex-only role mappings confirmed by the user. Model IDs and high reasoning
were checked against this session's live model catalog. Panels use two models
and at most two delegates may run concurrently. Global instructions load the
model rows; the native plugin hook reads the session hook setting here.

feature, refactoring: gpt-6.1-sol
bug-fix: gpt-6.1-sol
perf-issue: gpt-6.1-sol
hillclimb: gpt-6.1-sol
judgment and prose: gpt-6-astra
strongest judgment: gpt-6-astra
how explorer: gpt-6.1-sol
how explainer: gpt-6-astra
why investigators: gpt-6.1-sol
why synthesizer: gpt-6-astra
reflect tooling: gpt-6.1-sol
reflect judgment, divergent, synthesizer: gpt-6-astra
arena runners: gpt-6.1-sol, gpt-6-astra
arena cross-judge pool: gpt-6.1-sol, gpt-6-astra
swarm workers: gpt-6.1-sol
architect runners: gpt-6.1-sol, gpt-6-astra
interrogate reviewers: gpt-6.1-sol, gpt-6-astra

default effort: high
panel vendors: any
session hook: on
