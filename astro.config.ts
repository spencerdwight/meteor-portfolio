import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';

// ✅ Fix for vite-plugin-base64 import
// @ts-ignore (Ignore TypeScript warning if types are missing)
import base64Plugin from 'vite-plugin-base64';

// ✅ Correct import for rehype and remark plugins
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

// ✅ Function to determine the correct site URL
const getSite = (): string =>
  import.meta.env.DEV
    ? 'http://localhost:4321'
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://example.com';

// ✅ Export Astro config
export default defineConfig({
  site: getSite(),
  output: 'server', // Ensure compatibility with deployment

  adapter: vercel(), // Vercel adapter

  integrations: [
    mdx(),
    preact(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    robotsTxt({
      sitemap: new URL('/sitemap-index.xml', getSite()).href,
    }),
  ],

  markdown: {
    rehypePlugins: [rehypePrettyCode], // ✅ Ensure correct handling of rehype plugins
    remarkPlugins: [remarkGfm], // ✅ Ensure correct handling of remark plugins
    syntaxHighlight: false, // ✅ Using rehype-pretty-code instead
  },

  vite: {
    plugins: [base64Plugin()], // ✅ Ensure base64 plugin is used correctly
  },
});
