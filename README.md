# Pockit website

Marketing site for Pockit, the local-first expense tracker in
[`pyaethu-aung/expenses`](https://github.com/pyaethu-aung/expenses). Two pages
for now: the landing page and the privacy policy.

Static, informational only. Nothing here tracks an expense: every number,
chart and progress bar on the page is a hardcoded literal illustrating what the
app does.

## Stack

Astro 5 with Tailwind 4. Output is plain static files, deployable to any host.

The build ships **zero external JavaScript**. Two small inline scripts survive
(~1.1 KB combined, minified into the HTML): the theme switch and the mobile
menu.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
npm run check    # astro check, must stay at 0 errors
```

`vite` is pinned to `^6.4.1` in devDependencies on purpose. `@tailwindcss/vite`
accepts `^5.2 || ^6 || ^7 || ^8` and will otherwise pull a second, newer copy
alongside the one Astro depends on, which breaks the plugin's types and means
two Vite instances in one build.

## Layout

```
src/
  consts.ts                  product name, contact, store URLs, policy date
  icons.ts                   every SVG path, one map
  styles/global.css          design tokens, type scale, layout primitives
  layouts/Layout.astro       head, theme bootstrap, skip link, nav, footer
  components/
    Nav / Footer / ThemeToggle / DownloadButton / Icon / PhoneFrame
    mockups/                 HomeScreen, AddScreen, StatsScreen
    sections/                one file per landing-page section
  pages/
    index.astro              landing
    privacy.astro            policy
scripts/contrast.py          palette contrast check
```

## Design source

Built from the artboards in the design canvas (`Main.dc.html`,
`Mobile.dc.html`, `Privacy.dc.html`), which mirror the app's own token set.
Type sizes interpolate between the mobile artboard at 390px and the desktop
artboard at 1440px, so both endpoints land exactly on the design.

### Accent: sourced from the app, not the artboards

`--accent` and `--glow` are copied verbatim from the shipping app
(`expenses/src/theme/tokens.ts`, `DARK_TOKENS.accent`/`accentShadow` and
`LIGHT_TOKENS.accent`/`accentShadow`), not derived from the design-canvas
artboards:

| Theme | Token | Value | Source |
| --- | --- | --- | --- |
| dark | `--accent` | `#8D82FF` | `DARK_TOKENS.accent` |
| dark | `--glow` | `rgba(107,71,247,.35)` | `DARK_TOKENS.accentShadow` |
| light | `--accent` | `#4C00C9` | `LIGHT_TOKENS.accent` |
| light | `--glow` | `rgba(107,71,247,.25)` | `LIGHT_TOKENS.accentShadow` |

The artboards drew a lighter, less saturated light-mode violet
(`oklch(.58 .19 288)`, 4.23:1) than the app actually ships. The app's real
value is deliberately darker for contrast — per its own code comment, it sits
on the sRGB gamut boundary — so using it here is both more accurate and
higher-contrast (8.97:1 vs. `--bg`).

`--accent-fill`, used for the Download button and every solid-fill mockup
element, is just `var(--accent)`: the app itself reuses `tokens.accent` as the
FAB/Save-key background with white `onAccent` text, so this mirrors that
rather than inventing a separate button colour. That has one consequence
worth knowing: white text on the dark-theme fill is 3.10:1, under the 4.5:1
body-text threshold. That is not a website-only shortfall — it is the same
combination the app itself uses on its Save/FAB buttons today. If you want it
fixed, it should likely be fixed in `tokens.ts` first so the two stay in sync;
happy to do either.

### Other colour changes from the artboards

Four token values were changed because the artboard originals fail WCAG 2.1 AA
for body text. `python3 scripts/contrast.py` verifies every pair and exits
non-zero on a regression. These are independent of the accent sync above and
still use the site's own darkened values rather than the app's (the app's own
light-mode `positive`/`negative` have the same shortfall as the artboard and
have not been changed here — only `--accent` was asked to sync with the app).

| Token | Artboard | Was | Now | Ratio |
| --- | --- | --- | --- | --- |
| `--text2` (light) | `rgba(20,22,28,.55)` | 3.92:1 | alpha `.72` | 6.90:1 |
| `--text3` (light) | `rgba(20,22,28,.35)` | 2.21:1 | alpha `.62` | 4.91:1 |
| `--text3` (dark) | `rgba(245,246,248,.35)` | 3.17:1 | alpha `.48` | 5.00:1 |
| `--pos` (light) | `oklch(.62 .15 152)` | 3.13:1 | `oklch(.50 …)` | 5.04:1 |
| `--neg` (light) | `oklch(.60 .19 25)` | 3.98:1 | `oklch(.52 …)` | 5.59:1 |

`--text2` (dark) also moved from `.55` to `.62`. It already passed at 6.25:1;
raising it keeps a visible gap from `--text3` now that `--text3` is lighter.

### Accessibility notes

- Each phone mockup is one `role="img"` with a written description. Without it a
  screen reader would read out every fake transaction, amount and keypad digit
  as page content.
- Category swatches are decorative and always paired with a text label, so
  colour never carries meaning alone. Same for the budget progress bars, which
  restate their value in adjacent text.
- One focus style for everything: 2px solid `--accent` at 2px offset.
- Policy body links are underlined, not colour-only.
- `prefers-reduced-motion` disables smooth scrolling and transitions.

## Before launch

1. **`SITE.appStoreUrl` / `SITE.playStoreUrl` in `src/consts.ts`** are `null`.
   While null, every download button renders as a non-interactive "· soon"
   placeholder instead of a link to nowhere. Fill them in and all instances
   become real links automatically.
2. **`site` in `astro.config.mjs`** is `https://pockit.pyaethuaung.com`, the
   GitHub Pages subdomain the site currently deploys to (see Deployment below).
   Repoint it at `pockit.app` once that domain is set up.
3. **The app is still named "expenses" / "Expense Tracker"** in `app.json`,
   `README.md` and `docs/privacy-policy.md` in the app repo. This site says
   Pockit. A privacy policy naming a product the store listing does not is a
   compliance problem, so align the two before publishing.
4. **The phone mockups are hand-built HTML replicas**, not screenshots. Swap in
   real `simctl` captures, as the design canvas note says. Section heights will
   shift when you do.
5. **The telemetry spec link** on the policy page points at
   `docs/specs/telemetry-stack.md` on GitHub `main`. It 404s for visitors if
   that repo is private.
6. **No Open Graph image.** `twitter:card` is set to `summary_large_image` with
   nothing to show. Add one, or drop the tag.
7. **Bump `POLICY_LAST_UPDATED`** in `src/consts.ts` whenever the policy text
   changes, and keep it in step with `docs/privacy-policy.md` upstream.

## Deployment

Hosted on **GitHub Pages** from `pyaethu-aung/pockit-website`, served at
`https://pockit.pyaethuaung.com` (custom subdomain; `public/CNAME`).

`.github/workflows/deploy.yml` builds with `npm run check && npm run build` and
publishes `dist/` via the official Pages actions (`upload-pages-artifact` +
`deploy-pages`). It runs **only when a GitHub Release is published**, or on a
manual `workflow_dispatch` — not on every push to `main`. Cut a release to ship:

```bash
gh release create vX.Y.Z --generate-notes
```

`.github/workflows/check.yml` runs the same check + build on every pull request.

DNS: a `CNAME` record `pockit` → `pyaethu-aung.github.io` on `pyaethuaung.com`.
Node version for CI is pinned in `.nvmrc`.

## Policy content

`src/pages/privacy.astro` is a transcription of `docs/privacy-policy.md` from
the app repo, with the product name substituted and the placeholder date
filled in. The two must be changed together. The contents list at the top of
that file supplies the anchor ids used by the `<h2>`s below it; a renamed id
silently breaks a link.
