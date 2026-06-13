// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://websekolah.developerin.my.id',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});