import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// env helper
import { loadEnv } from 'vite';

// Storyblok
import { storyblok } from '@storyblok/astro';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(
	import.meta.env.MODE,
	process.cwd(),
	'',
);

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    mdx(), 
    sitemap(),
    storyblok({
      accessToken: env.STORYBLOCK_DELIVERY_API_TOKEN,
      apiOptions: {
        region: 'us',
      },
    }),
  ],
  output: 'server'
});
