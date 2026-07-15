import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gritty.co.jp',
  integrations: [tailwind()],
});
