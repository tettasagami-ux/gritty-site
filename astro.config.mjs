import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const gym = JSON.parse(readFileSync(new URL('./src/data/gym.json', import.meta.url), 'utf-8'));

export default defineConfig({
  site: 'https://gritty.co.jp',
  integrations: [tailwind(), sitemap({ filter: (page) => gym.published || !page.includes('/gym/') })],
});
