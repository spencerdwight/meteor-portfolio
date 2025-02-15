import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { base64 } from 'vite-plugin-base64';

// biome-ignore lint/nursery/useImportRestrictions: Astro cannot read the local `tsconfig.json` to resolve import path aliases
import { rehypePlugins, remarkPlugins } from './src/utils/markdown';

function getSite(): string {
	if (import.meta.env.DEV) return 'http://localhost:4321';
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return 'https://example.com';
}

// https://astro.build/config
export default defineConfig({
adapter: cloudflare(),

	experimental: {

	},
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
	output: 'server',
 
	// ✅ Add Image Service Here – we adjusted this which may relate to build-time image processing, and our sharp warning
 image: {
    service: {
      entrypoint: "astro/assets/services/compile",
    },
  },

	site: getSite(),
	vite: {
		plugins: [base64 as any],
	},
});
