// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://websekolah.developprin.my.id',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});