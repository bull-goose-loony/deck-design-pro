import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import fs from 'node:fs';

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

const keyPath = './localhost-key.pem';
const certPath = './localhost.pem';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  alias: {     
    '@': './src',
    '@components': './src/components',
    '@layouts': './src/layouts',
  },
  vite: {
    server: {
      https: {
        key: fs.readFileSync('./localhost-key.pem'),
        cert: fs.readFileSync('./localhost.pem'),
      },
      host: 'localhost',
      port: 4321,
    },
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
