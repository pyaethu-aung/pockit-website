/**
 * Single source of truth for the handful of strings that appear on both pages
 * and in the metadata. Everything the artboards marked as a placeholder is
 * collected here.
 */

export const SITE = {
  /** Product name used in the nav, titles and body copy. */
  name: 'Pockit',
  tagline: 'Your money. Simplified.',
  description:
    'A local-first expense tracker for iPhone. No account, no sync, no server: everything stays in a database on your device.',
  /** Data controller / copyright holder, per docs/privacy-policy.md. */
  author: 'Pockit',
  email: 'pockitapp.pyaethuaung@gmail.com',
  person: 'Pyae Thu Aung',
  /** Live App Store listing (Apple ID 6803324516). */
  appStoreUrl: 'https://apps.apple.com/app/id6803324516',
  /**
   * TODO: Google Play URL once the Android build ships. While this is null the
   * download buttons render as a non-interactive "· soon" state rather than a
   * link that goes nowhere.
   */
  playStoreUrl: null as string | null,
} as const;

/** Shown in the policy dateline. Bump this whenever the policy text changes. */
export const POLICY_LAST_UPDATED = '18 August 2026';
