import { defineCollection, z } from 'astro:content';
// biome-ignore lint/style/noNamespaceImport: This only affects SSG so this is fine to use here.
import * as Icons from 'lucide-astro';

const IconKeys = Object.keys(Icons) as [string, ...Array<string>];

const events = defineCollection({
	type: 'data',
	schema: z
		.object({
			$schema: z.string().optional(),
			date: z.coerce.date(),
			icon: z.enum(IconKeys),
			title: z.string(),
			url: z.string().optional(),
		})
		.strict(),
});

const posts = defineCollection({
	type: 'content',
	schema: () =>
		z
			.object({
				archived: z.boolean().optional().default(false),
				description: z.string(),
				draft: z.boolean().optional().default(false),
				icon: z.enum(IconKeys).default('Newspaper'),
				lastModifiedAt: z.coerce.date().optional(),
				publishedAt: z.coerce.date(),
				title: z.string(),
			})
			.strict(),
});

const socialLinks = defineCollection({
	type: 'data',
	schema: z
		.object({
			$schema: z.string().optional(),
			icon: z.enum(IconKeys),
			name: z.string(),
			showLabel: z.coerce.boolean().optional().default(false),
			url: z.string().url(),
		})
		.strict(),
});

const buildingCollection = defineCollection({
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  date: z.string(), // Use `z.date()` if this is always a valid date
	}),
  });
  

export const collections = {
	events,
	posts,
	socialLinks,
	building: buildingCollection, // ✅ This must be fully defined here
};
