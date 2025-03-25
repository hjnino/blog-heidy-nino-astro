// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	outDir: './docs', 
	site: 'https://hjnino.github.io/',
	base: '/blog-heidy-nino-astro',
	integrations: [mdx(), sitemap()],
});
