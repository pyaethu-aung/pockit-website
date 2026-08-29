---
target: src/pages/index.astro
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
timestamp: 2026-08-28T18-06-52Z
slug: src-pages-index-astro
---
# Critique — src/pages/index.astro (Pockit landing page)

Method: dual-agent (A: design-review · B: detector-evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Theme + current-page clear; pre-JS toggle icon/label can disagree with the resolved theme; "· soon" vs "Start tracking now." send mixed launch signals |
| 2 | Match System / Real World | 3 | Mostly plain; "rate 1.00 / rate 0.0064" unexplained; eyebrow "Currencies" sits over account content |
| 3 | User Control and Freedom | 3 | Persisted theme, skip link, Esc-closes-menu, reduced-motion honored; the in-page "Features" anchor lands on the wrong section |
| 4 | Consistency and Standards | 2 | "Butgets" typo; Features section drops the eyebrow+lead pattern; FinalCta hand-rolls banding; 20 off-ramp font sizes (detector); comma style flip-flops |
| 5 | Error Prevention | 3 | Dead links avoided by design; the mis-targeted #features anchor is a latent nav error |
| 6 | Recognition Rather Than Recall | 3 | Icons always labelled; consistent card/pill language; clear rhythm |
| 7 | Flexibility and Efficiency | n/a | Linear single-path marketing page; no power-user affordance expected |
| 8 | Aesthetic and Minimalist Design | 4 | The real strength — one accent, cinematic restraint, no dashboard clutter; detector confirms zero rendered slop |
| 9 | Error Recovery | 3 | No error states on a static page; theme toggle degrades gracefully if JS fails |
| 10 | Help and Documentation | 2 | Privacy policy is real linked docs, but no FAQ / how-it-works / launch info / proof layer for a close-reading persona |
| **Total** | | **26/36** | **Good (72%)** |

Max is /36 — heuristic 7 is n/a for this Persuade surface. Aesthetic (4) carries the score; Consistency and Documentation (2 each) drag it.

## Design Specificity Verdict

Start here: the skin is Pockit, the skeleton is off-the-shelf.

LLM assessment. Split decision. The art direction is genuinely authored for this product — "Quiet Instrument" is delivered, not just described: near-black ground, a single carried violet kept rare, the native system stack, hairline separation, exactly two box-shadows both spent on making the phones feel physical, real screenshots instead of rebuilt chart furniture. A category competitor could not paste their brand into this visual system unchanged, and the confirmed anti-reference (fintech-dashboard maximalism) is honored completely.

The argument and the prose are another product entirely. The page is an 8-stop feature tour — capture, categories, currencies, budgets, stats, privacy, more features, CTA — with five generic feature sections ahead of the differentiator. The Hero, the highest-attention surface, carries zero Pockit-specific claim: the tagline is "Your money. Simplified." and the lead ("Make sense of your money without the complexity…") is true of Mint, YNAB, and fifty others. Local-first / no-account / SQLite-on-device — the entire reason the product exists per PRODUCT.md ("Privacy is the argument, not a feature callout") — first appears in section 6 of 8. The cloud-competitor contrast PRODUCT.md calls "the product" is never drawn. And the copy register is inverted: the top half is the exact hedge-filler the brand principles reject ("with ease" x3, "without the complexity," "fits naturally into your day," "spend with more confidence"), while the sharp, concrete voice the brief wants ("a salary that lands on the 30th… without lying about when it arrived," "No menus in between") is quarantined in the 14px Features grid at the bottom. Fixing this is mostly copy and section order — not a visual rebuild.

Deterministic scan. Detector exit 2. The FULL source scan (.astro parsed correctly) returned 23 findings: 20x design-system-font-size, 3x design-system-radius.
- The 20 font-size hits are literal text-[14px] / text-[14.5px] / text-[15px] in Footer, Nav, Categories, CurrenciesBudgets, Entry, Features, PrivacyPromise, plus CSS literals in .btn--sm (0.875rem), .toc-link, and the policy table. DESIGN.md's type ramp is entirely fluid clamp() with no step between the 12px label and the 16.5px body minimum — these caption/nav/footer sizes match no documented step. True positives, advisory severity. They are the structural echo of the copy finding: the authored voice literally lives at an undocumented 14px.
- The 3 radius hits (4px focus ring, 56px/45px device geometry) are intentional and effectively false positives against the documented system.
- 3 borderline font-size hits in global.css are documented named steps (t-h2-lg, t-h2-sm, t-h1-doc) the detector can't map because they're fluid clamps — false positives.
- The built-HTML scan ran degraded (htmlparser2 absent) and surfaced 3 "slop" hits (gradient-text, bounce-easing x2). All three are confirmed false positives — unused Tailwind utility/keyframe definitions the build didn't tree-shake; grep of the rendered HTML finds no bg-clip-text, text-transparent, or animate-bounce. No slop is actually rendered.

Project gates (Assessment B): astro check — 0 errors / 0 warnings / 0 hints across 22 files. python3 scripts/contrast.py — exit 0, every pair passes; the 3.10:1 white-on-accent-fill is reported as "known app trait, not a regression."

Visual overlays. Unavailable — no browser-automation tool is exposed in this session. CLI + build evidence only; no user-visible overlay was produced.

## Overall Impression

The page looks excellent — award-grade restraint, "Quiet Instrument" fully realized, and the detector backs that up (no rendered slop, contrast green, aesthetic 4/4). Every real problem is in the argument: five screens of category-generic feature tour before the one differentiator, the differentiator's own section written well but stranded at position 6, and the brief's rejected hedge-voice running the top of the page while the sharp voice sits in 12–14px tiles at the bottom. The single biggest opportunity: rebuild the Hero and section order around privacy-as-argument, and promote the Features-tile voice to run every section lead. Mostly copy and IA, almost no pixels.

## What's Working

1. The art direction is a real achievement. "Quiet Instrument" is delivered: near-black ground, one violet signal kept genuinely rare, system font, tonal layering instead of shadow stacks, exactly two box-shadows both making the phones feel physically present. It reads as a premium product shot of a precise tool and categorically dodges dashboard-maximalism. Detector corroborates — zero rendered slop, contrast.py all-pass, heuristic 8 at 4/4.
2. The PrivacyPromise section is written the way the primary persona needs. Every claim is a mechanism, not an adjective: "stored locally in a SQLite database," "Export a ZIP of CSVs," "Face ID or Touch ID with a PIN fallback, on launch and on your backup and reset screens," "Neither carries an amount, a date, a name." Product Principle 1 executed — it's just isolated to one section.
3. Accessibility execution is disciplined, not box-ticked. Each phone is one role="img" with a written label; decorative swatches and progress bars are aria-hidden with values restated in text; one global focus style; reduced-motion disables smooth scroll and transitions; skip link present; mock data is internally consistent (4,440.00 - 846.82 = 3,593.18; Stats percentages sum to 100).

## Priority Issues

[P0] "Butgets made simple." — misspelled display headline
src/components/sections/CurrenciesBudgets.astro:48. A typo in 24–42px type on a site whose entire pitch is carefulness with the most sensitive data a person has. The primary persona "reads closely"; this fails the carefulness test at headline size on the highest-scrutiny page. While here: the sibling column's eyebrow says "Currencies" over content about accounts, and account row 2 reads "Savings · Savings".
Fix: "Budgets, made simple." — or, in the target voice, "Budgets that keep count." Fix the eyebrow to "Accounts" and the row-2 meta.
Command: /impeccable clarify

[P1] Privacy is staged as feature callout #6, not as the argument
Hero (Hero.astro), section order (index.astro:15–22), PrivacyPromise at 6 of 8. The Hero makes no Pockit-specific claim; the differentiator appears after five generic sections; the cloud-competitor contrast is never drawn.
Why it matters: The primary persona arrives "evaluating trust as much as features." A visitor who bounces after two screens has seen a generic tracker — and the pre-launch success condition ("leave convinced and waiting") never fires.
Fix: Rewrite the Hero lead around the mechanism ("Every transaction lives in a database on your iPhone. No account, no server, no sync."). Pull a compact 3-point privacy proof band directly under the Hero (reuse the PrivacyPromise pillars). Consider collapsing Entry + Categories + Stats so the privacy peak arrives sooner.
Command: /impeccable adapt

[P1] Front-loaded copy is the exact hedge-filler the brand principles reject
Hero lead, and the bodies of Entry, Categories, CurrenciesBudgets, Stats: "without the complexity," "with ease" (x3), "fits naturally into your day," "see your spending clearly," "spend with more confidence." PRODUCT.md: "concrete mechanisms over adjectives"; "vague… language actively undercuts the one thing that differentiates Pockit." The authored voice already exists in Features.astro — it's just in the wrong half of the page, at 14px (the detector's 20 font-size findings mark exactly where).
Fix: Rewrite every section lead in the Features-grid register — one concrete sentence, no adjective doing a verb's job. Delete "with ease" rather than rephrasing it.
Command: /impeccable distill

[P2] The "Features" nav/footer anchor points at the wrong section
id="features" is on Entry.astro:7; Features.astro has no id; Nav.astro and Footer.astro link /#features. Clicking "Features" jumps to "Add. Done.", not the feature list. Features is also the only section with no eyebrow and no lead — a template break.
Fix: Move id="features" to the real Features section and give it the eyebrow + one-line lead so it matches every other section.
Command: /impeccable harden

[P2] Pre-launch dead-end: nothing captures the "leave convinced and waiting" visitor
Every DownloadButton (Hero, nav, mobile menu, FinalCta) is an intentional "· soon" span — but there's no alternative: no launch window, no "email me when it's live," no TestFlight, no "who builds this." FinalCta's "Start tracking now." contradicts the button beneath it. The nav's persistent dashed pill is a dead control in prime real estate and, as a bare span, is invisible to screen-reader users.
Fix (within zero-JS): a mailto: "Email me when Pockit is on the App Store" near each CTA; a stated launch window; honest button copy ("Ready when the App Store is"); change "Start tracking now."; give the nav coming-soon state an aria equivalent or drop it until launch.
Command: /impeccable onboard

[P3] Mobile spacing fragility under 480px
The scaled phone frames use a negative margin-bottom to absorb their height, but only the Hero->Entry gap is compensated (mt-24). After Entry and Stats, the next section's eyebrow crowds the overhanging phone on a 390px screen.
Fix: Move the compensation into the .device-scale primitive so every phone-trailing gap gets it.
Command: /impeccable layout

## Persona Red Flags

Jordan (confused first-timer). Taps the Hero "Download for iPhone · soon" — nothing, no explanation, no notify-me. Clicks "Features" -> lands on "Add. Done.". Reaches "Start tracking now.", taps -> "· soon", direct contradiction. After the first screen still doesn't know what Pockit is — "expense tracker" and "iPhone" appear only on a button label and in the footer.

Riley (stress tester). OS set to light + slow JS: markup ships data-theme="dark" with a moon icon, the pre-paint script flips to light, ThemeToggle.sync() hasn't run -> moon icon on a light page, aria-label still "Switch to light theme." Mock-data scrutiny: "Bangkok trip" shows "112% of $600" with the bar capped at 100%; "Savings · rate 1.08"; "rate 0.0064" for JPY with no base currency — and if nothing leaves the device, where do exchange rates come from, right next to the privacy claim? Taxonomy drift: the Stats screenshot lists "Entertainment 2%", absent from the Categories list. (Reassuringly, the headline arithmetic checks out.)

Casey (distracted, one-handed mobile). The primary CTA yields nothing to a thumb tap, four times down the page. Under 480px the section headings collide with the overhanging phone above. Eight full-height sections at 84–150px spacing before the privacy proof — a lot of thumb travel to reach the one thing that would convert.

Fintech-wary evaluator (project persona). Hero + five sections make no verifiable claim. PrivacyPromise asserts without evidence — the only backing is a plain 16px "Read the privacy policy" link. No named analytics processor, no source-available claim, no App-Privacy-label screenshot, no "requests no network permission." "No copy sent to external servers" sits inches from unexplained per-account exchange rates. No accountable entity on the page — footer is "© 2026 Pockit" + a Gmail address; PRODUCT.md names a real data controller (Pyae Thu Aung) and that human accountability is nowhere. The "Butgets" typo actively fails the carefulness test.

## Minor Observations

- Hero.astro:11 — h1 has mt-4 with nothing above it; Hero is the only section with no eyebrow. title and h1 are both SITE.tagline — the h1 could carry a descriptive line and free the eyebrow slot.
- DownloadButton unreleased state is a bare span with no role / aria-disabled — SR users get no equivalent of the visible "· soon".
- ThemeToggle.astro:14 — initial aria-label is hardcoded "Switch to light theme"; wrong when the resolved theme is already light before the script runs.
- The "local-first / no account / no sync / on your device" sentence appears near-verbatim 3–4x (SITE.description, footer blurb, Hero-adjacent, PrivacyPromise lead) — reinforcement tipping into redundancy.
- Footer.astro link groups aren't wrapped in a nav aria-label landmark.
- FinalCta.astro hand-rolls border-t … bg-surface instead of .section--banded; ends the page on "Android version coming to Google Play." — a platform caveat as the last persuasion beat.
- Entry.astro:21 note icon uses strokeWidth={2} vs the system default 1.9.
- ~15 unused IconName entries in icons.ts — dead surface area in a "single source of truth."
- lg:gap-22, lg:mt-30, lg:pt-26 — fixed rem jumps, which DESIGN.md's Don'ts specifically call out.
- Detector: the built CSS ships unused @keyframes ping/pulse/bounce — harmless, but worth a tree-shake check.

## Questions to Consider

1. If privacy is the argument, what does this page look like when the Hero's first sentence is the strongest privacy claim you can make, and the feature tour has to earn its way back up?
2. What single piece of verifiable proof — named analytics processor, source-available repo, App-Privacy-label screenshot, "no network permission" — would end a wary evaluator's doubt on the page, without them leaving to read the policy?
3. Pre-launch, the whole page drives toward a button that can't be pressed. What's the real conversion event right now, and what would capturing it cost inside the zero-JS constraint?
4. Could eight sections become five, so the privacy peak arrives three screens sooner?
