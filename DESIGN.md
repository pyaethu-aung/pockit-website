---
name: Pockit
description: Marketing site for a local-first iPhone expense tracker — a quiet instrument, cinematically staged.
colors:
  bg: "#0b0d12"
  surface: "#151821"
  elev: "#1d212c"
  border: "rgba(255, 255, 255, 0.08)"
  border-strong: "rgba(255, 255, 255, 0.16)"
  text: "#f5f6f8"
  text2: "rgba(245, 246, 248, 0.62)"
  text3: "rgba(245, 246, 248, 0.48)"
  accent: "#8d82ff"
  on-accent: "#ffffff"
  pos: "oklch(0.75 0.15 152)"
  neg: "oklch(0.68 0.18 25)"
  bar: "rgba(21, 24, 33, 0.85)"
  glow: "rgba(107, 71, 247, 0.35)"
  cat-food: "oklch(0.7 0.14 18)"
  cat-bills: "oklch(0.7 0.14 55)"
  cat-groceries: "oklch(0.7 0.14 95)"
  cat-health: "oklch(0.7 0.14 150)"
  cat-transport: "oklch(0.7 0.14 218)"
  cat-travel: "oklch(0.7 0.14 255)"
  cat-shopping: "oklch(0.7 0.14 320)"
typography:
  display:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(2.625rem, 1.696rem + 3.81vw, 5.125rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.032em"
  headline:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(2rem, 1.489rem + 2.1vw, 3.375rem)"
    fontWeight: 700
    lineHeight: 1.09
    letterSpacing: "-0.026em"
  title:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(1.375rem, 1.14rem + 0.95vw, 1.6875rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.018em"
  lead:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(1.0625rem, 1.005rem + 0.24vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(1.031rem, 0.995rem + 0.15vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  eyebrow:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "clamp(0.719rem, 0.684rem + 0.14vw, 0.813rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  note: "16px"
  inner: "18px"
  tile: "22px"
  card: "24px"
  pill: "999px"
spacing:
  section-block: "clamp(5.25rem, 3.5rem + 4.19vw, 9.375rem)"
  section-inline: "clamp(1.5rem, 1.13rem + 0.95vw, 2.5rem)"
  shell: "1120px"
  shell-narrow: "940px"
  shell-wide: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "color-mix(in oklab, #8d82ff 88%, #ffffff)"
    textColor: "{colors.on-accent}"
  button-small:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "44px"
  button-unreleased:
    backgroundColor: "transparent"
    textColor: "{colors.text3}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "52px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  card-inset:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  chip-category:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: "42px"
    padding: "0 1rem 0 0.5rem"
  nav-bar:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.text2}"
    height: "56px"
---

# Design System: Pockit

## Overview

**Creative North Star: "Quiet Instrument"**

Pockit's site presents a precise, unshowy financial tool the way a good photographer
shoots a well-made watch: the object is plain, the staging is dramatic. The interface
itself is disciplined to the point of near-silence — one typeface (the native system
stack), one accent (an electric violet carried verbatim from the app), hairline borders
instead of boxed panels, flat tonal surfaces instead of shadows. What gives the page its
weight is not UI ornament but deep, cinematic space: a near-black ground, one wide soft
drop shadow under each floating device, a single violet bloom behind the hero. The drama
lives in the room, never on the controls.

Density is low and deliberate. Big balanced headlines, a generous section rhythm that
grows from 84px to 150px with the viewport, one centred column that never exceeds 1120px.
Figures are set in tabular numerals and treated as the real content — the copy points at
the app, the screenshots *are* the app, and nothing on the page pretends to be a live
dashboard. Restraint here is not timidity: claims are short and absolute ("Add. Done.",
"Private by design."), and the one violet call-to-action is unmissable precisely because
nothing else competes for it.

The confirmed rejection is **fintech-dashboard maximalism** — stacked chart widgets,
gradient meshes, glassmorphic panels, glowing KPI cards, data confetti. Pockit's charts
appear only inside device screenshots and are never rebuilt as page furniture. The only
backdrop-blur in the entire build is the 1px sticky nav bar; there are no frosted panels
anywhere. Depth comes from two shadows and three tonal steps, not from stacked translucent
cards.

**Key Characteristics:**
- One typeface (native system stack, no web font), one accent (app-synced violet
  `#8d82ff` dark / `#4c00c9` light), present on ≤10% of any viewport.
- Flat by default: separation is a 1px hairline at 8% opacity; the system contains
  exactly two box-shadows.
- Deep near-black ground (`#0b0d12`) with dark as the drawn default; the light theme is
  a faithful mirror, not an afterthought.
- Cinematic staging of a plain object: one wide device shadow, one hero bloom, large real
  screenshots.
- Fluid type and spacing interpolated between a 390px and a 1440px artboard so both
  endpoints land exactly on the design.
- Generous, consistent radii (18–24px casings, 999px pills) and tabular numerals on every
  figure.

## Colors

A near-monochrome graphite system — five steps from cool near-black to off-white —
pierced by a single electric violet and backed by two semantic ledger hues. Every colour
below lists its dark value first (the drawn default) and its light-theme counterpart.

### Primary
- **Carried Violet** (`#8d82ff` dark / `#4c00c9` light): the only accent in the system.
  Eyebrow kickers, links, inline icons, the primary Download fill, the budget progress
  fill, focus rings, and text selection. Copied verbatim from the shipping app's
  `tokens.ts` (`DARK_TOKENS.accent` / `LIGHT_TOKENS.accent`) — never hand-tuned here.
  6.27:1 on the dark ground, 8.96:1 on the light one.

### Secondary — Ledger Semantics
- **Ledger Green** (`oklch(0.75 0.15 152)` dark / `oklch(0.5 0.15 152)` light): the
  "Income" label, positive budget figures. Darkened from the app's own light value to
  clear AA (5.04:1).
- **Ledger Red** (`oklch(0.68 0.18 25)` dark / `oklch(0.52 0.19 25)` light): the "Expense"
  label, over-budget amounts, the over-budget progress fill. 6.21:1 / 5.59:1.

### Tertiary — Category Wheel
- **Seven fixed category hues** (`oklch(0.7 0.14 H)`, H ∈ {18, 55, 95, 150, 218, 255,
  320}): decorative swatch dots beside category names, straight from the app's own
  category palette. Never used alone — always paired with the text label.

### Neutral
- **Ground** (`#0b0d12` / `#f5f5f7`): the page. `color-scheme` follows the theme.
- **Surface** (`#151821` / `#ffffff`): cards, banded sections, table headers.
- **Elevation** (`#1d212c` / `#edeef2`): progress-bar tracks, currency-code tiles, the
  device bezel.
- **Text** (`#f5f6f8` / `#14161c`): headlines and primary copy.
- **Text 2** (62% of Text dark / 72% light): body copy, leads, secondary labels. Raised
  from the artboard's 55% to clear AA and keep a visible gap above Text 3.
- **Text 3** (48% dark / 62% light): datelines, footnotes, the coming-soon button, the
  footer blurb. The lightest text that still clears 4.5:1.
- **Hairline** (`white 8%` / `black 8%`; strong variant `16%`): every border and divider
  in the system.
- **Bar** (`rgba(21,24,33,0.85)` / `rgba(255,255,255,0.85)`): the sticky nav and mobile
  menu background, sitting over a `backdrop-blur-xl`.

### Named Rules
**The One Signal Rule.** The violet accent appears on no more than ~10% of any viewport —
eyebrow, links, icons, one button, one progress fill. Its rarity is what makes the
Download button unmissable. If a second element wants the accent, one of them is wrong.

**The Carried Accent Rule.** `--accent` and `--glow` are copied verbatim from the app's
`tokens.ts`. They are never re-saturated or "improved" on the site. If the accent should
change, it changes in the app first, then the value and its measured ratio are copied
here and `python3 scripts/contrast.py` is re-run.

**The Stated Value Rule.** Colour never carries meaning alone. Every category dot sits
beside its label; every progress bar restates its figure in adjacent text; `aria-hidden`
goes on the decorative element, never on the text.

## Typography

**Display / Body / Label Font:** one native system stack — `-apple-system,
BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", system-ui,
sans-serif`. No web font is loaded.

**Character:** the system font is the point, not a fallback — on the iPhone this site
sells, the page renders in the exact typeface of the app. Tight negative tracking on
headlines (to −0.032em) at weight 700 gives the display sizes a compact, engineered feel;
body copy runs at a relaxed 1.6 line-height in a dimmed ink (Text 2).

### Hierarchy
- **Display** (700, `clamp(2.625rem → 5.125rem)` ≈ 42→82px, line-height 1.05, tracking
  −0.032em): the hero line and its policy-page variant (`t-h1-doc`) only. `text-wrap:
  balance`.
- **Headline** (700, `clamp(2rem → 3.375rem)` ≈ 32→54px, line-height 1.09, tracking
  −0.026em): section titles ("Add. Done."). Two siblings scale it — `t-h2-lg` (34→62px)
  for the privacy banner, `t-h2-sm` (28→42px) for paired-column subheads.
- **Title** (700, `clamp(1.375rem → 1.6875rem)` ≈ 22→27px, line-height 1.25): policy
  `<h2>`s and app-style card headers.
- **Lead** (400, `clamp(1.0625rem → 1.3125rem)` ≈ 17→21px, line-height 1.5, Text 2): the
  one sentence under each headline. `text-wrap: pretty`.
- **Body** (400, `clamp(1.031rem → 1.1875rem)` ≈ 16.5→19px, line-height 1.6, Text 2):
  section paragraphs. Policy prose runs looser at 1.75 — it is read start to finish, not
  skimmed. `<strong>` lifts to full Text at weight 600.
- **Eyebrow** (700, `clamp(0.719rem → 0.813rem)` ≈ 11.5→13px, tracking 0.12em, UPPERCASE,
  violet): the one-word kicker above every section title.
- **Label** (700, 0.75rem / 12px, tracking 0.1em, UPPERCASE, Text 3): footer group
  headings and card-group captions.

### Named Rules
**The Balanced Headline Rule.** Every heading gets `text-wrap: balance`; every lead and
body gets `text-wrap: pretty`. Headlines never leave an orphan; paragraphs never rag
badly.

**The System-Font Rule.** No web font, ever. The site must render in the same typeface as
the app it advertises. A loaded font is a regression, not an enhancement.

## Layout

A single centred column. `.shell` caps at **1120px**; `.shell--narrow` at 940px (the
privacy document), `.shell--wide` at 1200px (nav and footer only). Everything is
flush-centred — no sidebar, no asymmetric grid.

**Section rhythm:** `.section` sets `padding-block: clamp(84px → 150px)` and
`padding-inline: clamp(24px → 40px)`. Alternating feature sections stack on mobile and
become a two-up split at `lg` (1024px), flipping side (`lg:flex-row` /
`lg:flex-row-reverse`) so the device alternates left and right down the page. Card groups
run 1-up, then `md:grid-cols-2` (categories, currencies) or `lg:grid-cols-4` (the feature
grid).

**Banded sections** (`.section--banded`) fill with Surface and rule off top and bottom
with a hairline; inside them, cards invert to the page Ground so they stay distinct.

**Fluid everything:** all type and section spacing interpolate linearly between a 390px
mobile artboard and a 1440px desktop artboard, so both endpoints match the design
pixel-for-pixel. Tailwind's default breakpoints otherwise apply (`sm` 640, `md` 768, `lg`
1024), with one custom stop at 480px used only for device scaling. `scroll-padding-top`
is 88px so policy anchors clear the sticky header.

**Device mockups never reflow.** Each phone is a fixed-width illustration scaled by
`transform` — 0.78 on a narrow phone, 0.92 above 480px, 1.0 above 1024px — with a
negative margin absorbing the scaled height. The app's own layout is never re-flowed or
misrepresented to fit a column.

## Elevation & Depth

A flat system with cinematic exceptions. Surfaces are separated by **tonal layering** —
Ground → Surface → Elevation, three steps of lightness — and by 1px hairline borders.
There is no ambient shadow on cards, chips, the theme toggle, or the nav.

The system contains **exactly two box-shadows**, both reserved for the things that must
feel physically present:

### Shadow Vocabulary
- **Device Drop** (`box-shadow: 0 40px 90px rgba(0,0,0,0.45)` dark / `…0.18` light):
  beneath every phone mockup. Wide, soft, far-offset — this is the shadow doing the
  "premium product shot" work. Never applied to anything that is not a device.
- **Signal Glow** (`box-shadow: 0 12px 40px var(--glow)`, `--glow` = `rgba(107,71,247,
  0.35)` dark / `…0.25` light): under the primary Download button only. A violet bloom,
  not a grey drop. `.btn--sm` and the coming-soon state drop it entirely.

One non-shadow atmosphere element: a single blurred violet radial (`blur 90–120px`) sits
behind the hero device. It is `pointer-events: none`, `aria-hidden`, and appears exactly
once on the site.

### Named Rules
**The Two Shadows Rule.** The system has one structural shadow (Device Drop) and one
signal shadow (Signal Glow). Adding a third — a card hover-lift, a dropdown shadow, a
sticky-header shadow — breaks the system. Use a hairline or a tonal step instead.

**The Flat Hairline Rule.** Separation is a 1px border at 8% opacity (16% when it must
assert). Not a shadow, not a heavier rule, not a gradient edge.

## Shapes

Generous, consistent, soft-cornered — an "instrument casing" language. Container radii sit
in a tight band: **24px** cards (`--radius-card`), **22px** tiles (`--radius-tile`),
**18px** inner and nested elements (`--radius-inner`), with an occasional **16px** on the
smallest inset notes. Actions and chips are fully round (**999px** pills); category
swatches and icon-tile buttons are circles.

Borders are always 1px hairlines — no thick strokes, no double borders, no inset/outset
effects. The device mockups carry the largest radii in the system, a 56px outer bezel
around a 45px screen, deliberately reading as hardware rather than as a card.

Icons are a single inline-SVG set on a 24×24 grid, 1.9px stroke, round caps and joins —
matching the rounded-geometric feel of the type and the corners. They are `aria-hidden`
by default because every icon sits beside a text label.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), `min-height: 52px` (44px for `--sm`),
  `padding-inline: 2rem`.
- **Primary:** violet fill (`--accent-fill`, = the carried accent), white text
  (`--on-accent`), weight 600, plus the Signal Glow. Hover lightens the fill via
  `color-mix(in oklab, accent 88%, white)`; `:active` nudges down 1px. This is the only
  filled button in the system, and there is normally one per view.
- **Small** (`.btn--sm`): 44px, tighter padding, 0.875rem text, no glow. Used in the
  desktop nav.
- **Coming-Soon** (`[data-unreleased]`): while `SITE.appStoreUrl` is null, the same pill
  renders as a non-interactive `<span>` — transparent fill, 1px **dashed** Text 3 border,
  Text 3 label with a "· soon" suffix, `cursor: default`. Filling in the store URL turns
  every instance into a real `<a>` automatically.
- **Focus:** the one global focus style — `outline: 2px solid var(--accent)` at 2px
  offset, 4px radius.

### Cards / Containers
- **Corner:** 24px (`--radius-card`); nested rows use 18px.
- **Background:** Surface on the page Ground; **inverts to Ground** inside banded sections
  and with `.card--inset`.
- **Border:** 1px hairline. **No shadow, ever** (The Two Shadows Rule).
- **Internal padding:** `1.75rem` (p-7) typical; 1.25–1.5rem on compact list rows.

### Chips (category pills)
- **Style:** Ground fill, 1px hairline, full pill, `height: 42px`, asymmetric padding
  (`0.5rem` left for the dot, `1rem` right).
- **Content:** a 26px circular colour swatch (`aria-hidden`) plus a 14px medium label.
  Static display only — these are not interactive filters on the marketing site.

### Inputs / Fields
No real form fields exist on the site — there is no newsletter and no contact form
(support is a `mailto:`). The only input-like control is the **theme toggle**: a 44px
circular icon button, 1px hairline, Text 2 icon that swaps moon/sun on click and writes
`localStorage['pockit-theme']`. Hover fills with `color-mix(in oklab, text 8%,
transparent)`.

### Navigation
- **Header:** sticky, full-width, `height: 56px`, `--bar` translucent background over
  `backdrop-blur-xl`, hairline bottom border. Logo mark (22px PNG) + wordmark left; links
  + theme toggle + small Download button right.
- **Links:** 13px, Text 2 at rest, full Text on hover and for the current page
  (`aria-current="page"`, weight 600).
- **Mobile:** links collapse behind a 44px hamburger into a panel sharing the `--bar` /
  blur treatment; `Esc` closes it and returns focus to the toggle. This script and the
  theme toggle are the only two inline scripts the build permits.

### Device Mockup (signature component)
`PhoneFrame` exposes the whole frame as one `role="img"` with a written `label`, so a
screen reader gets a single sentence ("The Stats tab: a donut chart totalling 846.82
dollars…") instead of every fake row. Inside it, `Screenshot` ships both the `-dark` and
`-light` PNG and lets CSS show the one matching `data-theme` — no JS, no toggle flash.
The frame carries the Device Drop shadow; only the hero frame adds the bloom.

## Do's and Don'ts

### Do:
- **Do** keep the violet to one signal per view (The One Signal Rule) — eyebrow, links,
  icons, and exactly one Download button.
- **Do** separate surfaces with a 1px hairline at 8% opacity or a tonal step (Ground →
  Surface → Elevation), never a new shadow.
- **Do** copy `--accent` / `--glow` from the app's `tokens.ts` verbatim if they ever
  change, quote the measured contrast ratio in the CSS comment, and re-run `python3
  scripts/contrast.py`.
- **Do** set every headline in the system font at weight 700 with tight negative tracking
  and `text-wrap: balance`.
- **Do** restate any colour-coded value in adjacent text and put `aria-hidden` on the
  swatch or bar, not the label.
- **Do** ship both theme PNGs for any screenshot and switch them with CSS on `data-theme`.
- **Do** render unreleased store links as the dashed non-interactive pill, driven by the
  `SITE` URL being null.
- **Do** keep new interactive behaviour in CSS; the build allows exactly two inline
  scripts (theme, menu).

### Don't:
- **Don't** build fintech-dashboard furniture on the marketing pages — no stacked chart
  widgets, gradient meshes, glassmorphic panels, glowing KPI cards, or data confetti.
  Charts live inside device screenshots only.
- **Don't** add a third box-shadow: no card hover-lift, no dropdown shadow, no
  sticky-header shadow (The Two Shadows Rule).
- **Don't** load a web font, or set headings in anything but the system stack.
- **Don't** introduce a second accent colour, or use the violet on large fills or
  backgrounds — it is a text / icon / one-button colour.
- **Don't** let the accent touch a surface where it drops below AA without recording it;
  white-on-violet-fill in dark mode is a known 3.10:1 inherited from the app, not a
  licence for more.
- **Don't** exceed the container caps (1120 / 940 / 1200) or break the single centred
  column with a sidebar or asymmetric grid.
- **Don't** reflow the device mockups to "fit" — scale them with `transform` so the
  app's own layout stays truthful.
- **Don't** step type or section spacing in fixed `rem` jumps; extend the 390↔1440
  `clamp()` interpolation instead.
