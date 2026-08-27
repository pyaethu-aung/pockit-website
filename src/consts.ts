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
  /**
   * TODO before launch: replace with the real App Store URL. While this is
   * null the download buttons render as a non-interactive "coming soon" state
   * rather than a link that goes nowhere.
   */
  appStoreUrl: null as string | null,
  /** TODO before launch: Google Play URL, same treatment as above. */
  playStoreUrl: null as string | null,
} as const;

/** Shown in the policy dateline. Bump this whenever the policy text changes. */
export const POLICY_LAST_UPDATED = '18 August 2026';
