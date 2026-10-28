# Third-party skill catalog

These are excluded from personal rollout. Cache presence does not establish current installation or tool availability. No personal customization was identified. Every source occurrence, full SHA-256, resolved path, and timestamp is recorded in [the manifest](../inventory/sources.json).

There are 203 skill path occurrences, 127 distinct skill names, and 128 distinct content hashes. The 67 pstack skills appear in both the installed plugin and marketplace checkout with matching bodies. The marketplace has no tracked modifications; its installer receipt is untracked. Supporting plugin files remain installer-managed and were not imported.

Source prefixes below are exact path abbreviations.

| Prefix | Root |
| --- | --- |
| `P` | `/data/home/.codex/plugins/cache/pstack-claude/pstack/0.9.107/skills` |
| `M` | `/data/home/.codex/.tmp/marketplaces/pstack-claude/plugins/pstack/skills` |
| `C` | `/data/home/.codex/plugins/cache/openai-curated-remote` |
| `S` | `/data/home/.codex/skills/.system` |
| `B` | `/data/home/.bun/install/cache` |

`playwright-cli` has two versions. The newer 1.64.1 copy is the catalog representative because it adds scroll guidance, a reverse-scroll example, and `tab-new --isolated-context`. See [the exact diff](../inventory/diffs/playwright-cli.patch). Both versions remain in the manifest. The other two Playwright skills are byte-identical across versions. Bun has alias paths resolving to the same package files. No third-party version was installed or overwritten.

| Skill | Source paths | Scope chosen | Why |
| --- | --- | --- | --- |
| `architect` | `P/architect/SKILL.md`<br>`M/architect/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `arena` | `P/arena/SKILL.md`<br>`M/arena/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-analytics-dashboard` | `C/openai-templates/0.1.1/skills/artifact-template-analytics-dashboard/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-business-review` | `C/openai-templates/0.1.1/skills/artifact-template-business-review/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-design-report` | `C/openai-templates/0.1.1/skills/artifact-template-design-report/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-experiment-analysis` | `C/openai-templates/0.1.1/skills/artifact-template-experiment-analysis/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-financial-budget` | `C/openai-templates/0.1.1/skills/artifact-template-financial-budget/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-investment-committee-memo` | `C/openai-templates/0.1.1/skills/artifact-template-investment-committee-memo/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-legal-memorandum` | `C/openai-templates/0.1.1/skills/artifact-template-legal-memorandum/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-market-trends-report` | `C/openai-templates/0.1.1/skills/artifact-template-market-trends-report/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-minimal-letterhead` | `C/openai-templates/0.1.1/skills/artifact-template-minimal-letterhead/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-operating-calendar` | `C/openai-templates/0.1.1/skills/artifact-template-operating-calendar/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-operating-review` | `C/openai-templates/0.1.1/skills/artifact-template-operating-review/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-project-kickoff` | `C/openai-templates/0.1.1/skills/artifact-template-project-kickoff/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-project-tracker` | `C/openai-templates/0.1.1/skills/artifact-template-project-tracker/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-sales-pipeline` | `C/openai-templates/0.1.1/skills/artifact-template-sales-pipeline/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-simple-dark-mode` | `C/openai-templates/0.1.1/skills/artifact-template-simple-dark-mode/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-simple-light-mode` | `C/openai-templates/0.1.1/skills/artifact-template-simple-light-mode/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-strategy-memorandum` | `C/openai-templates/0.1.1/skills/artifact-template-strategy-memorandum/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-system-design` | `C/openai-templates/0.1.1/skills/artifact-template-system-design/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-team-alignment` | `C/openai-templates/0.1.1/skills/artifact-template-team-alignment/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `artifact-template-three-statement-forecast` | `C/openai-templates/0.1.1/skills/artifact-template-three-statement-forecast/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `automate-me` | `P/automate-me/SKILL.md`<br>`M/automate-me/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `babysit` | `P/babysit/SKILL.md`<br>`M/babysit/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `benchmark-checklist` | `P/benchmark-checklist/SKILL.md`<br>`M/benchmark-checklist/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `blast-radius` | `P/blast-radius/SKILL.md`<br>`M/blast-radius/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `bro` | `P/bro/SKILL.md`<br>`M/bro/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `correct` | `P/correct/SKILL.md`<br>`M/correct/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `create-formal-verification-skill` | `P/create-formal-verification-skill/SKILL.md`<br>`M/create-formal-verification-skill/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `create-pet` | `C/work-pets/0.1.6/skills/create-pet/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `create-verification-skill` | `P/create-verification-skill/SKILL.md`<br>`M/create-verification-skill/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `deslop` | `P/deslop/SKILL.md`<br>`M/deslop/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-code-connect` | `C/figma/16.0.0/skills/figma-code-connect/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-code-workflows` | `C/figma/16.0.0/skills/figma-code-workflows/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-create-new-file` | `C/figma/16.0.0/skills/figma-create-new-file/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-design-to-code` | `C/figma/16.0.0/skills/figma-design-to-code/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-generate-design` | `C/figma/16.0.0/skills/figma-generate-design/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-generate-diagram` | `C/figma/16.0.0/skills/figma-generate-diagram/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-generate-library` | `C/figma/16.0.0/skills/figma-generate-library/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-generative-plugins` | `C/figma/16.0.0/skills/figma-generative-plugins/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-implement-motion` | `C/figma/16.0.0/skills/figma-implement-motion/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-shaders` | `C/figma/16.0.0/skills/figma-shaders/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-spec` | `C/figma/16.0.0/skills/figma-spec/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-swiftui` | `C/figma/16.0.0/skills/figma-swiftui/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-use` | `C/figma/16.0.0/skills/figma-use/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-use-figjam` | `C/figma/16.0.0/skills/figma-use-figjam/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-use-motion` | `C/figma/16.0.0/skills/figma-use-motion/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figma-use-slides` | `C/figma/16.0.0/skills/figma-use-slides/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `figure-it-out` | `P/figure-it-out/SKILL.md`<br>`M/figure-it-out/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `fix-ci` | `P/fix-ci/SKILL.md`<br>`M/fix-ci/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `fix-merge-conflicts` | `P/fix-merge-conflicts/SKILL.md`<br>`M/fix-merge-conflicts/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `get-pr-comments` | `P/get-pr-comments/SKILL.md`<br>`M/get-pr-comments/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `google-docs` | `C/google-drive/0.1.22/skills/google-docs/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `google-drive` | `C/google-drive/0.1.22/skills/google-drive/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `google-drive-comments` | `C/google-drive/0.1.22/skills/google-drive-comments/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `google-sheets` | `C/google-drive/0.1.22/skills/google-sheets/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `google-slides` | `C/google-drive/0.1.22/skills/google-slides/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `how` | `P/how/SKILL.md`<br>`M/how/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `imagegen` | `S/imagegen/SKILL.md` | Excluded | Built-in system skill |
| `in-your-own-words` | `P/in-your-own-words/SKILL.md`<br>`M/in-your-own-words/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `interrogate` | `P/interrogate/SKILL.md`<br>`M/interrogate/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `ketchup` | `P/ketchup/SKILL.md`<br>`M/ketchup/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `ketchup-video` | `P/ketchup-video/SKILL.md`<br>`M/ketchup-video/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `maintain-formal-verification-skill` | `P/maintain-formal-verification-skill/SKILL.md`<br>`M/maintain-formal-verification-skill/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `maintain-space` | `C/pages/0.1.26/skills/maintain-space/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `maintain-verification-skill` | `P/maintain-verification-skill/SKILL.md`<br>`M/maintain-verification-skill/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `make-pr-easy-to-review` | `P/make-pr-easy-to-review/SKILL.md`<br>`M/make-pr-easy-to-review/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `manage-schedules` | `C/pages/0.1.26/skills/manage-schedules/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `no-comments` | `P/no-comments/SKILL.md`<br>`M/no-comments/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `openai-docs` | `S/openai-docs/SKILL.md` | Excluded | Built-in system skill |
| `organize-space` | `C/pages/0.1.26/skills/organize-space/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `pets` | `C/work-pets/0.1.6/skills/pets/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `playwright-cli` | `B/playwright-core@1.64.1@@@1/lib/tools/skills/playwright-cli/SKILL.md`<br>`B/playwright-core/1.64.1@@@1/lib/tools/skills/playwright-cli/SKILL.md`<br>`B/playwright-core/1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-cli/SKILL.md`<br>`B/playwright-core@1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-cli/SKILL.md` | Excluded | Package dependency, not personal |
| `playwright-component-testing` | `B/playwright-core@1.64.1@@@1/lib/tools/skills/playwright-component-testing/SKILL.md`<br>`B/playwright-core/1.64.1@@@1/lib/tools/skills/playwright-component-testing/SKILL.md`<br>`B/playwright-core/1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-component-testing/SKILL.md`<br>`B/playwright-core@1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-component-testing/SKILL.md` | Excluded | Package dependency, not personal |
| `playwright-trace` | `B/playwright-core@1.64.1@@@1/lib/tools/skills/playwright-trace/SKILL.md`<br>`B/playwright-core/1.64.1@@@1/lib/tools/skills/playwright-trace/SKILL.md`<br>`B/playwright-core/1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-trace/SKILL.md`<br>`B/playwright-core@1.64.0-c17905f0d2f6a539@@@1/lib/tools/skills/playwright-trace/SKILL.md` | Excluded | Package dependency, not personal |
| `plugin-management` | `C/plugin-management/0.1.0/skills/plugin-management/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `poteto-help` | `P/poteto-help/SKILL.md`<br>`M/poteto-help/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `poteto-mode` | `P/poteto-mode/SKILL.md`<br>`M/poteto-mode/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-attack-the-premise` | `P/principle-attack-the-premise/SKILL.md`<br>`M/principle-attack-the-premise/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-boundary-discipline` | `P/principle-boundary-discipline/SKILL.md`<br>`M/principle-boundary-discipline/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-build-the-lever` | `P/principle-build-the-lever/SKILL.md`<br>`M/principle-build-the-lever/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-encode-lessons-in-structure` | `P/principle-encode-lessons-in-structure/SKILL.md`<br>`M/principle-encode-lessons-in-structure/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-exhaust-the-design-space` | `P/principle-exhaust-the-design-space/SKILL.md`<br>`M/principle-exhaust-the-design-space/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-experience-first` | `P/principle-experience-first/SKILL.md`<br>`M/principle-experience-first/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-explain-the-number` | `P/principle-explain-the-number/SKILL.md`<br>`M/principle-explain-the-number/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-fix-root-causes` | `P/principle-fix-root-causes/SKILL.md`<br>`M/principle-fix-root-causes/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-foundational-thinking` | `P/principle-foundational-thinking/SKILL.md`<br>`M/principle-foundational-thinking/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-guard-the-context-window` | `P/principle-guard-the-context-window/SKILL.md`<br>`M/principle-guard-the-context-window/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-laziness-protocol` | `P/principle-laziness-protocol/SKILL.md`<br>`M/principle-laziness-protocol/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-make-operations-idempotent` | `P/principle-make-operations-idempotent/SKILL.md`<br>`M/principle-make-operations-idempotent/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-migrate-callers-then-delete-legacy-apis` | `P/principle-migrate-callers-then-delete-legacy-apis/SKILL.md`<br>`M/principle-migrate-callers-then-delete-legacy-apis/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-minimize-reader-load` | `P/principle-minimize-reader-load/SKILL.md`<br>`M/principle-minimize-reader-load/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-model-the-domain` | `P/principle-model-the-domain/SKILL.md`<br>`M/principle-model-the-domain/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-never-block-on-the-human` | `P/principle-never-block-on-the-human/SKILL.md`<br>`M/principle-never-block-on-the-human/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-outcome-oriented-execution` | `P/principle-outcome-oriented-execution/SKILL.md`<br>`M/principle-outcome-oriented-execution/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-prove-it-works` | `P/principle-prove-it-works/SKILL.md`<br>`M/principle-prove-it-works/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-redesign-from-first-principles` | `P/principle-redesign-from-first-principles/SKILL.md`<br>`M/principle-redesign-from-first-principles/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-separate-before-serializing-shared-state` | `P/principle-separate-before-serializing-shared-state/SKILL.md`<br>`M/principle-separate-before-serializing-shared-state/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-sequence-verifiable-units` | `P/principle-sequence-verifiable-units/SKILL.md`<br>`M/principle-sequence-verifiable-units/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-subtract-before-you-add` | `P/principle-subtract-before-you-add/SKILL.md`<br>`M/principle-subtract-before-you-add/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-test-behavior-not-implementation` | `P/principle-test-behavior-not-implementation/SKILL.md`<br>`M/principle-test-behavior-not-implementation/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `principle-type-system-discipline` | `P/principle-type-system-discipline/SKILL.md`<br>`M/principle-type-system-discipline/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `recall` | `P/recall/SKILL.md`<br>`M/recall/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `reflect` | `P/reflect/SKILL.md`<br>`M/reflect/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `review-agent` | `S/review-agent/SKILL.md` | Excluded | Built-in system skill |
| `cloud-environment-runtime` | `C/cloud-environment/0.1.2/skills/runtime/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `setup-pstack` | `P/setup-pstack/SKILL.md`<br>`M/setup-pstack/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `sharpen` | `P/sharpen/SKILL.md`<br>`M/sharpen/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `show-me-your-work` | `P/show-me-your-work/SKILL.md`<br>`M/show-me-your-work/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `sites` | `C/sites/1.1.2/skills/sites/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `sites-remix` | `C/sites/1.1.2/skills/sites-remix/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `skill-creator` | `S/skill-creator/SKILL.md` | Excluded | Built-in system skill |
| `skill-installer` | `S/skill-installer/SKILL.md` | Excluded | Built-in system skill |
| `statechart` | `P/statechart/SKILL.md`<br>`M/statechart/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `swarm` | `P/swarm/SKILL.md`<br>`M/swarm/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `tdd` | `P/tdd/SKILL.md`<br>`M/tdd/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `teach` | `P/teach/SKILL.md`<br>`M/teach/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `technical-writing` | `P/technical-writing/SKILL.md`<br>`M/technical-writing/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `thermo-nuclear-code-quality-review` | `P/thermo-nuclear-code-quality-review/SKILL.md`<br>`M/thermo-nuclear-code-quality-review/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `thermo-nuclear-review` | `P/thermo-nuclear-review/SKILL.md`<br>`M/thermo-nuclear-review/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `thermos` | `P/thermos/SKILL.md`<br>`M/thermos/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `typescript-best-practices` | `P/typescript-best-practices/SKILL.md`<br>`M/typescript-best-practices/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `unslop` | `P/unslop/SKILL.md`<br>`M/unslop/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `update-pet` | `C/work-pets/0.1.6/skills/update-pet/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `what-did-i-get-done` | `P/what-did-i-get-done/SKILL.md`<br>`M/what-did-i-get-done/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `why` | `P/why/SKILL.md`<br>`M/why/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
| `write-page` | `C/pages/0.1.26/skills/write-page/SKILL.md` | Excluded | Third-party plugin or marketplace skill |
