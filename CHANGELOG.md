<!--
  - SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Changelog

All notable changes to this project will be documented in this file.

## [4.1.0](https://github.com/nextcloud-libraries/vue-select/compare/v4.0.0...v4.1.0) (2026-04-16)

### 🐛 Fixed bugs
* fix(a11y): do not auto-open the dropdown on search input focus (WCAG 3.2.1 *On Focus*). Keyboard users still open via Space/Enter/ArrowDown/ArrowUp; mouse users still open by clicking.
* fix(a11y): hide the decorative open-indicator button from the accessibility tree (`aria-hidden="true"`, no `aria-labelledby`/`aria-controls`/`aria-expanded`). WCAG 4.1.2 *Name, Role, Value*.

### ⚠️ Behavior changes
* Focusing the combobox no longer opens the dropdown. Consumers that relied on this side-effect should open the dropdown explicitly (e.g. via `ref.open = true`) or migrate to a keyboard/click gesture.
* The open-indicator button no longer exposes its listbox state to assistive technology. Any code querying those ARIA attributes on `.vs__open-indicator-button` will need to update.

## [4.0.0](https://github.com/nextcloud-libraries/vue-select/compare/v3.26.0...v4.0.0) (2026-04-01)

### ⚠️ Breaking Changes
* Vue 3 only
* ESM only (dropped CommonJS bundle)
* SCSS removed. Use CSS custom properties (`--vs-*`) for theming
* CSS is now inlined, no separate CSS import needed

### Other Changes
* chore: migrate to vue 3 [\#25](https://github.com/nextcloud-libraries/vue-select/pull/25) \([raimund-schluessler](https://github.com/raimund-schluessler)\)
* ci: use common ci tools from organization [\#41](https://github.com/nextcloud-libraries/vue-select/pull/41) \([susnux](https://github.com/susnux)\)
* refactor: migrate to ESLint v9 [\#42](https://github.com/nextcloud-libraries/vue-select/pull/42) \([susnux](https://github.com/susnux)\)
* ci: add `node` build workflow [\#59](https://github.com/nextcloud-libraries/vue-select/pull/59) \([skjnldsv](https://github.com/skjnldsv)\)
* ci: add `dependabot-approve-merge` workflow [\#56](https://github.com/nextcloud-libraries/vue-select/pull/56) \([skjnldsv](https://github.com/skjnldsv)\)
* chore: prepare v4.0.0-beta.0 and add common release scripts [\#62](https://github.com/nextcloud-libraries/vue-select/pull/62) \([susnux](https://github.com/susnux)\)
* fix(exports): add CSS file to package.json exports map [\#63](https://github.com/nextcloud-libraries/vue-select/pull/63) \([pringelmann](https://github.com/pringelmann)\)
* chore: drop common js from bundle [\#65](https://github.com/nextcloud-libraries/vue-select/pull/65) \([susnux](https://github.com/susnux)\)
* chore: prepare v4.0.0-beta.1 [\#66](https://github.com/nextcloud-libraries/vue-select/pull/66) \([pringelmann](https://github.com/pringelmann)\)
* chore: prep 4.0.0 stable release [\#67](https://github.com/nextcloud-libraries/vue-select/pull/67) \([pringelmann](https://github.com/pringelmann)\)


*For pre-release changelogs, see [4.0.0-beta.0](https://github.com/nextcloud-libraries/vue-select/releases/tag/v4.0.0-beta.0) and [4.0.0-beta.1](https://github.com/nextcloud-libraries/vue-select/releases/tag/v4.0.0-beta.1).*

## [3.26.0](https://github.com/nextcloud-libraries/vue-select/compare/v3.25.1...v3.26.0) (2025-09-02)
### 🚀 Enhancements
* omit an option by throwing an event ([4d8f668](https://github.com/nextcloud-libraries/vue-select/commit/4d8f668f37f1248acb4971bb6c92a300560d1052))

### 🐛 Fixed bugs
* add aria-controls ([#1802](https://github.com/sagalbot/vue-select/pull/1802))

## Older releases
See [the Github Releases page](https://github.com/nextcloud-libraries/vue-select/releases) for older changelog entries.
