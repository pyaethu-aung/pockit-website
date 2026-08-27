# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Pockit**, a local-first iPhone expense tracker whose app lives in the separate
`pyaethu-aung/expenses` repo. Two pages only: the landing page (`src/pages/index.astro`) and the
privacy policy (`src/pages/privacy.astro`). Everything is static and informational — every number,
chart and progress bar is a hardcoded literal illustrating the app, not live data.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/  (static files, deployable anywhere)
npm run preview
npm run check    # astro check — must stay at 0 errors before any commit
python3 scripts/contrast.py   # run after ANY colour-token change; exits non-zero on a WCAG regression
```

There is no test suite. `astro check` (type checking, `tsconfig` extends `astro/tsconfigs/strict`)
and `scripts/contrast.py` are the two gates.

## Deployment

GitHub Pages, repo `pyaethu-aung/pockit-website`, served at `https://pockit.pyaethuaung.com`
(`public/CNAME`). `.github/workflows/deploy.yml` (`npm run check` → `npm run build` → official
Pages actions) runs **only on a published GitHub Release** or manual `workflow_dispatch` — never
on push to `main`. `.github/workflows/check.yml` runs check + build on every PR. CI Node version
is pinned in `.nvmrc`. `site` in `astro.config.mjs` must match the served hostname (it feeds
canonical + OG URLs).

## Hard constraints

- **Zero external JavaScript in the build.** Only two tiny inline `<script>` blocks are allowed to
  survive: the theme switch (`ThemeToggle.astro`) and the mobile menu (`Nav.astro`). Anything else
  that would need client JS should be reconsidered or solved with CSS. The screenshot theme-swap
  (`Screenshot.astro`) is deliberately pure CSS for this reason.
- **`vite` is pinned to `^6.4.1` in devDependencies on purpose.** `@tailwindcss/vite` accepts a wider
  range and will otherwise pull a second, newer Vite copy alongside Astro's, breaking the plugin's
  types and putting two Vite instances in one build. Do not bump or unpin it.
- **Colour tokens must pass WCAG 2.1 AA** (4.5:1 body text, 3:1 large text / non-text UI). Any edit
  to a `--` colour in `src/styles/global.css` must be verified with `scripts/contrast.py`, and the
  ratios quoted in that file's comments come from that script.

## Architecture

Astro 5 + Tailwind 4 (wired via `@tailwindcss/vite` in `astro.config.mjs`, not the Astro Tailwind
integration). No content collections, no server output.

- **`src/consts.ts`** — single source of truth for every string that appears on both pages or in
  metadata (product name, tagline, email, store URLs, `POLICY_LAST_UPDATED`). `appStoreUrl` /
  `playStoreUrl` are `null`; while null, `DownloadButton.astro` renders a non-interactive "· soon"
  span instead of a link, everywhere, automatically. Fill them in and every button becomes a real link.
- **`src/icons.ts`** — every SVG path in one `ICON_PATHS` map keyed by a `IconName` union. Rendered
  by `Icon.astro`, which is `aria-hidden` by default (icons always sit beside a text label; pass
  `label` only when an icon carries meaning alone).
- **`src/styles/global.css`** — the design system: `--` tokens for both themes, the `@theme inline`
  block mapping them to Tailwind colour utilities, the `.t-*` type scale, and layout primitives
  (`.section`, `.shell`, `.card`, `.btn`). Font sizes use `clamp()` interpolating between the mobile
  artboard (390px) and desktop artboard (1440px) so both endpoints land exactly on the design.
- **`src/layouts/Layout.astro`** — the only layout. Owns `<head>` (canonical URL, OG tags derived
  from `Astro.site`), the blocking inline theme-bootstrap script (applies the stored theme before
  first paint to avoid a flash), the skip link, `Nav` and `Footer`.
- **`src/components/sections/`** — one component per landing-page section. `index.astro` just
  composes them in order. To reorder or add a section, edit that list.
- **`PhoneFrame.astro`** wraps each device mockup as a single `role="img"` with a written `label`,
  so a screen reader does not read out every fake transaction as page content. Its `label` is
  required. Real screenshots live in `public/screenshots/` as `<name>-dark.png` / `<name>-light.png`
  pairs, both shipped in the page, CSS showing the one matching `data-theme`.

## Theming

`data-theme` (`"dark"` | `"light"`) on `<html>`, default `dark` in the markup. The choice is an
explicit stored preference (localStorage key `pockit-theme`), mirroring the app — it is not a live
follow of the system setting, though the pre-paint script falls back to `prefers-color-scheme` then
to dark when nothing is stored.

## Accent colour is synced from the app, not the design

`--accent` and `--glow` in `global.css` are copied **verbatim** from the shipping app's
`expenses/src/theme/tokens.ts` (`DARK_TOKENS`/`LIGHT_TOKENS` `accent` / `accentShadow`), not from the
design artboards. `--accent-fill` (Download button, solid mockup fills) is just `var(--accent)`,
because the app reuses `tokens.accent` as its FAB/Save-key background. One known consequence: white
text on the dark-theme fill is 3.10:1, under AA — this is the app's own existing choice carried over
faithfully, and `contrast.py` prints it as "known app trait, not a regression". Several other light-mode
tokens (`--text2`, `--text3`, `--pos`, `--neg`) were darkened from the artboard values because the
originals fail AA; see `global.css` comments and `README.md` for the per-token rationale.

## Before-launch checklist

Tracked in `README.md`; the recurring ones: fill `appStoreUrl` / `playStoreUrl` in `src/consts.ts`;
repoint `site` in `astro.config.mjs` from `pockit.pyaethuaung.com` to `pockit.app` once that
domain exists (and update `public/CNAME` + DNS to match); bump `POLICY_LAST_UPDATED` whenever the
policy text changes and keep `src/pages/privacy.astro` in step with `docs/privacy-policy.md` upstream
(the `<h2>` ids double as the contents-list anchors — a renamed id silently breaks a link); add an
Open Graph image or drop the `twitter:card` tag.
