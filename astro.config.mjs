// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://de-yant.github.io/website-sekolah',
  base: '/website-sekolah/',

  vite: {
    plugins: [tailwindcss()]
  }
});