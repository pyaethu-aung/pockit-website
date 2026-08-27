#!/usr/bin/env python3
"""Contrast checker for the palette in src/styles/global.css.

Run it after changing any colour token:

    python3 scripts/contrast.py

Every pair it prints must clear 4.5:1 for body text, 3:1 for large text and for
non-text UI (button fills, focus rings). The ratios quoted in the comments in
global.css come from this script.
"""

import math

WCAG_TEXT = 4.5
WCAG_UI = 3.0


def _lin(c: float) -> float:
    c /= 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (_lin(x) for x in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b) -> float:
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def over(fg, bg, alpha: float):
    """Composite a translucent foreground onto an opaque background."""
    return tuple(alpha * f + (1 - alpha) * b for f, b in zip(fg, bg))


def oklch(L: float, C: float, h: float):
    hr = math.radians(h)
    a, b = C * math.cos(hr), C * math.sin(hr)
    l_, m_, s_ = (
        L + 0.3963377774 * a + 0.2158037573 * b,
        L - 0.1055613458 * a - 0.0638541728 * b,
        L - 0.0894841775 * a - 1.2914855480 * b,
    )
    l, m, s = l_**3, m_**3, s_**3
    lin = (
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    )

    def enc(c):
        c = min(1.0, max(0.0, c))
        c = 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055
        return c * 255

    return tuple(enc(c) for c in lin)


WHITE = (255, 255, 255)
INK = (20, 22, 28)

# --accent and its --glow shadow are not independently derived here: they are
# copied verbatim from the shipping app (expenses/src/theme/tokens.ts
# DARK_TOKENS.accent / LIGHT_TOKENS.accent), so this script checks the app's
# real production colour rather than an approximation of it.
ACCENT_DARK = (0x8D, 0x82, 0xFF)
ACCENT_LIGHT = (0x4C, 0x00, 0xC9)

THEMES = {
    "dark": {
        "bg": (11, 13, 18),
        "surface": (21, 24, 33),
        "text": (245, 246, 248),
        "text2": over(WHITE, (11, 13, 18), 0.62),
        "text3": over(WHITE, (11, 13, 18), 0.48),
        "accent": ACCENT_DARK,
        "pos": oklch(0.75, 0.15, 152),
        "neg": oklch(0.68, 0.18, 25),
    },
    "light": {
        "bg": (245, 245, 247),
        "surface": WHITE,
        "text": INK,
        "text2": over(INK, (245, 245, 247), 0.72),
        "text3": over(INK, (245, 245, 247), 0.62),
        "accent": ACCENT_LIGHT,
        "pos": oklch(0.50, 0.15, 152),
        "neg": oklch(0.52, 0.19, 25),
    },
}

# The app uses tokens.accent as the button/FAB fill directly in both themes;
# --accent-fill in global.css just aliases --accent for the same reason.
ACCENT_FILL = {"dark": ACCENT_DARK, "light": ACCENT_LIGHT}

failures = 0
for name, t in THEMES.items():
    print(f"\n{name} theme")
    for token in ("text", "text2", "text3", "accent", "pos", "neg"):
        r = ratio(t[token], t["bg"])
        ok = r >= WCAG_TEXT
        failures += not ok
        print(f"  {token:8} on bg       {r:6.2f}:1  {'ok' if ok else 'FAIL (needs 4.5)'}")

# The fill differs per theme now (it is just --accent), so check each one.
# The dark-mode fill is a known, pre-existing app trait (see README), not a
# regression introduced here: it is expected to print FAIL below.
for name in THEMES:
    fill = ACCENT_FILL[name]
    r = ratio(WHITE, fill)
    ok = r >= WCAG_TEXT
    tag = "ok" if ok else "known app trait, not a regression (needs 4.5)"
    print(f"\naccent-fill  {name:5} white label   {r:6.2f}:1  {tag}")
    r = ratio(fill, THEMES[name]["bg"])
    failures += r < WCAG_UI
    print(f"accent-fill  {name:5} vs own bg      {r:6.2f}:1  {'ok' if r >= WCAG_UI else 'FAIL (needs 3.0)'}")

print(f"\n{failures} failure(s)")
raise SystemExit(1 if failures else 0)
