/**
 * Icon path data, kept in one place so a stroke weight or a shape is never
 * tweaked in one copy and not another. Rendered by components/Icon.astro.
 */
export type IconName =
  | 'wallet'
  | 'wallet-mark'
  | 'calendar'
  | 'calendar-check'
  | 'list'
  | 'search'
  | 'arrow-up'
  | 'arrow-down'
  | 'plus'
  | 'close'
  | 'chevron-down'
  | 'undo'
  | 'home'
  | 'pie'
  | 'settings'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'no-account'
  | 'no-upload'
  | 'lock'
  | 'transfer'
  | 'tag'
  | 'download'
  | 'trash'
  | 'utensils'
  | 'bus'
  | 'bag'
  | 'receipt'
  | 'card'
  | 'backspace'
  | 'check'
  | 'arrow-right';

export const ICON_PATHS: Record<IconName, string> = {
  wallet:
    '<path d="M4 7h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2z"/><path d="M4 7a2 2 0 0 1 2-2h9"/>',
  'wallet-mark':
    '<path d="M4 7h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2z"/><path d="M4 7a2 2 0 0 1 2-2h9"/><circle cx="16" cy="13.5" r="1.3" fill="currentColor" stroke="none"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  'calendar-check':
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4M9.5 15l1.8 1.8 3.2-3.4"/>',
  list: '<path d="M4 7h16M7 12h10M10 17h4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/>',
  'arrow-up': '<path d="M12 19V5M5 12l7-7 7 7"/>',
  'arrow-down': '<path d="M12 5v14M5 12l7 7 7-7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  undo: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',
  home: '<path d="M12 3.2 3 10.4V21h6v-6h6v6h6V10.4z"/>',
  pie: '<path d="M11 3a9 9 0 1 0 9 9h-9z"/><path d="M13 2.2V10h7.8A9 9 0 0 0 13 2.2"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M22 12h-2.4M4.4 12H2M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7M19.1 19.1l-1.7-1.7M6.6 6.6 4.9 4.9"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5"/>',
  'no-account':
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M3 3l18 18"/>',
  'no-upload':
    '<path d="M12 21a9 9 0 1 0-9-9"/><path d="M3 12h9M12 3a14 14 0 0 1 0 18"/><path d="M3 3l18 18"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  transfer: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  tag: '<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.4"/>',
  download: '<path d="M12 3v11M8 10.5l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  trash:
    '<path d="M5 7h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 7h18"/>',
  utensils: '<path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10"/><path d="M17 3c-1.6 1-2.4 3-2.4 5.4 0 1.6.8 2.6 2.4 2.6V21"/>',
  bus: '<rect x="4" y="4" width="16" height="13" rx="2.5"/><path d="M4 10h16M7 21v-3M17 21v-3"/>',
  bag: '<path d="M3 9h18l-1.7 9.3a2 2 0 0 1-2 1.7H6.7a2 2 0 0 1-2-1.7z"/><path d="M8.5 9 12 3.5 15.5 9"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8h5M9.5 12h5"/>',
  card: '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/>',
  backspace: '<path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7z"/><path d="M12 9.5l5 5M17 9.5l-5 5"/>',
  check: '<path d="M4 12.5 9.5 18 20 6.5"/>',
  'arrow-right': '<path d="M5 12h14M13 5l7 7-7 7"/>',
};
