// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Live hostname the site is served from (GitHub Pages custom subdomain). Used
  // for canonical URLs, the sitemap, and Open Graph tags. `pockit.app` is the
  // eventual brand domain; point this there once that DNS is set up.
  site: 'https://pockit.pyaethuaung.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
