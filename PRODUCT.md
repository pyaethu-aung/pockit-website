# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: fintech-wary iPhone owners.** People who actively distrust apps that
harvest financial data and want a spending tracker that structurally *cannot*.
They arrive evaluating trust as much as features, and they read closely — the
privacy policy is one of only two pages on the site and a real part of their
decision. Their job: confirm Pockit is trustworthy and simple enough to adopt,
then install it (or, pre-launch, leave convinced and waiting for the App Store
link).

Secondary, not separately targeted yet: people leaving shut-down or
newly-expensive budgeting apps, and minimalists who found other trackers
bloated. The privacy pitch tends to reach them too.

## Product Purpose

Marketing site for **Pockit**, a local-first expense tracker for iPhone. The app
itself lives in the separate `pyaethu-aung/expenses` repo; this site's only job
is to explain what the app does and drive App Store downloads. It is static and
informational — every number, chart, and progress bar on the page is a hardcoded
literal illustrating the app, not live data. Success is a qualified visitor
installing the app.

## Positioning

**Local-first: the data never leaves the device.** All transactions live in a
SQLite database on the phone. No account, no sign-in, no background sync, no
server-side copy of anyone's spending. The only data that ever leaves is
optional anonymous usage counts and opt-in crash reports — neither carries an
amount, date, name, or anything the user typed, and both switch off in Settings.
Export is a ZIP of plain CSVs the user owns outright. A cloud-backed competitor
cannot truthfully make the same claim; that gap is the product.

## Operating Context

- **Two pages only:** the landing page (`src/pages/index.astro`) and the privacy
  policy (`src/pages/privacy.astro`).
- Visitors arrive on **iPhone** (primary) and desktop.
- The **privacy policy is a first-class evaluation surface**, not boilerplate. It
  is transcribed from the app repo's `docs/privacy-policy.md` and must stay in
  step with it: bump `POLICY_LAST_UPDATED` in `src/consts.ts` on any policy
  change, and note the `<h2>` ids double as the contents-list anchors (a renamed
  id silently breaks a link).
- **Store URLs are null pre-launch.** While `SITE.appStoreUrl` /
  `SITE.playStoreUrl` in `src/consts.ts` are `null`, `DownloadButton.astro`
  renders a non-interactive "· soon" state everywhere automatically. Filling them
  in turns every instance into a real link with no other change.

## Capabilities and Constraints

- **Zero external JavaScript in the build.** Only two inline `<script>` blocks
  are allowed to survive: the theme switch (`ThemeToggle.astro`) and the mobile
  menu (`Nav.astro`). Anything else that would need client JS is reconsidered or
  solved with CSS (e.g. the screenshot theme-swap in `Screenshot.astro` is pure
  CSS on purpose).
- **Colour tokens must pass WCAG 2.1 AA** (4.5:1 body text, 3:1 large text /
  non-text UI). Any edit to a `--` colour in `src/styles/global.css` must be
  verified with `python3 scripts/contrast.py`, which exits non-zero on a
  regression.
- **Commit gates:** `npm run check` (`astro check`, `tsconfig` extends
  `astro/tsconfigs/strict`) at 0 errors, and `scripts/contrast.py` green. There
  is no test suite.
- **`vite` is pinned to `^6.4.1`** in devDependencies on purpose — do not bump or
  unpin it. `@tailwindcss/vite` accepts a wider range and will otherwise pull a
  second, newer Vite copy alongside Astro's, breaking the plugin's types.
- **Theming:** `data-theme` (`"dark"` | `"light"`) on `<html>`, default `dark`.
  It is an explicit stored preference (localStorage key `pockit-theme`),
  mirroring the app — not a live follow of the system setting (the pre-paint
  script only falls back to `prefers-color-scheme`, then dark, when nothing is
  stored).
- **`--accent` / `--glow` are copied verbatim from the shipping app's**
  `expenses/src/theme/tokens.ts`, not from the design artboards, and are kept in
  sync with the app deliberately. `--accent-fill` is just `var(--accent)` because
  the app reuses that token as its FAB/Save-key background. One carried-over
  consequence: white text on the dark-theme fill is 3.10:1, under AA — the app's
  own existing choice, not a website regression. Several light-mode tokens
  (`--text2`, `--text3`, `--pos`, `--neg`) were darkened from the artboard
  values because the originals fail AA; per-token rationale is in `global.css`
  comments and `README.md`.
- **Single sources of truth:** `src/consts.ts` (shared strings, store URLs,
  policy date), `src/icons.ts` (every SVG path, one `ICON_PATHS` map),
  `src/styles/global.css` (tokens, `@theme inline` mapping, `.t-*` type scale,
  layout primitives). Font sizes use `clamp()` interpolating between the 390px
  mobile artboard and the 1440px desktop artboard.
- **Deployment:** GitHub Pages, repo `pyaethu-aung/pockit-website`, served at
  `https://pockit.pyaethuaung.com` (`public/CNAME`). `.github/workflows/deploy.yml`
  runs **only** on a published GitHub Release or manual `workflow_dispatch` —
  never on push to `main`; `check.yml` runs on every PR. `site` in
  `astro.config.mjs` must match the served hostname (feeds canonical + OG URLs).

### Platform scope

The app is **iPhone-only today; Android is a real roadmap item.** The Play Store
plumbing (`SITE.playStoreUrl`, `DownloadButton` Play branch) stays in place for
it, but there are no Android-specific surfaces to design yet. This site is `web`.

### Explicitly undecided (tracked in `README.md` "Before launch")

- Launch timing is not fixed.
- `site` / `public/CNAME` / DNS to be repointed from `pockit.pyaethuaung.com` to
  `pockit.app` once that domain exists.
- The app is still named "expenses" / "Expense Tracker" upstream (`app.json`, its
  README, its `docs/privacy-policy.md`). A privacy policy naming a product the
  store listing does not is a compliance problem — align the two before
  publishing.
- No Open Graph / social image exists; `twitter:card` is `summary_large_image`
  with nothing to show. Add one or drop the tag.

## Brand Commitments

- **Name:** Pockit. **Tagline:** "Your money. Simplified." (`SITE` in
  `src/consts.ts`).
- **Contact:** `pockitapp.pyaethuaung@gmail.com`. Data controller / copyright
  holder: Pockit. Person: Pyae Thu Aung.
- **Logo mark:** `public/brand/logo-mark.png` (+ `favicon-1024.png`,
  `apple-touch-icon.png`).
- **Accent colour is intentionally synced to the app's shipping tokens**, not to
  a website-only palette (see Capabilities and Constraints).
- **Voice — intended direction: confident and punchy.** Sharper claims, more
  marketing energy. The currently shipped copy is more restrained: plain,
  concrete, dry-witted ("A salary that lands on the 30th can count toward next
  month without lying about when it arrived"; "No menus in between"). Keep that
  concreteness and specificity; raise the confidence. The current copy is the
  starting point, not the target. *(Direction set during init.)*

## Evidence on Hand

- **Real app screenshots:** `public/screenshots/{hero,entry,stats}-{dark,light}.png`
  — dark/light pairs, both shipped, CSS showing the one matching `data-theme`.
- **Privacy policy:** full text transcribed from the app repo's
  `docs/privacy-policy.md`.
- **No testimonials, user counts, ratings, reviews, press, or awards exist.** The
  app is pre-launch; there is no install base to cite. Do not fabricate any of
  these.
- No Open Graph / social share image exists yet.

## Product Principles

1. **Privacy is the argument, not a feature callout.** Every privacy claim must
   be precise and verifiable; vague "we value your privacy" language actively
   undercuts the one thing that differentiates Pockit.
2. **Show the app, not a metaphor for it.** Use real screenshots and the app's
   real token set; illustrative figures must read as plausible real usage, never
   marketing fantasy.
3. **The privacy policy is part of the pitch.** Keep it readable, current, and in
   lockstep with the upstream app policy — a distrustful visitor will read it.
4. **The constraints are the brand.** Zero-JS, WCAG AA, two pages. New work earns
   its weight against those limits or it doesn't ship.
5. **Say less, mean more.** Confident and specific over hedged and generic;
   concrete mechanisms ("a ZIP of plain CSVs") over adjectives.

## Accessibility & Inclusion

WCAG 2.1 AA is a hard requirement, enforced by `scripts/contrast.py` on every
colour-token change. Additional shipped commitments: each phone mockup is a
single `role="img"` with a written label (so a screen reader does not read out
every fake transaction); colour never carries meaning alone (category swatches
always paired with a text label, progress bars restate their value in adjacent
text); one focus style everywhere (2px solid `--accent` at 2px offset); policy
body links are underlined, not colour-only; `prefers-reduced-motion` disables
smooth scrolling and transitions.
