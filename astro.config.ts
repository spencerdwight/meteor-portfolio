import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// biome-ignore lint/nursery/useImportRestrictions: Astro cannot read the local `tsconfig.json` to resolve import path aliases
import { rehypePlugins, remarkPlugins } from './src/utils/markdown';

function getSite(): string {
	if (import.meta.env.DEV) return 'http://localhost:4321';
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return 'https://example.com';
}

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [
		mdx(),
		preact(),
		robotsTxt({
			sitemap: new URL('/sitemap-index.xml', getSite()).href,
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	markdown: {
		rehypePlugins,
		remarkPlugins,
		// Note: We disable syntax highlighting here because we're using `rehype-pretty-code` instead
		syntaxHighlight: false,
	},
	
	output: "server",
	site: getSite(),
	vite: {
		plugins: [],
	},
});
