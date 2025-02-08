import { defineCollection, z } from 'astro:content';
import * as Icons from 'lucide-astro'; // ✅ Import all available Lucide icons

// Ensure `IconKeys` is a valid tuple for `z.enum()`
const IconKeys = (Object.keys(Icons).length > 0 ? Object.keys(Icons) : ['HelpCircle']) as [string, ...string[]];

const events = defineCollection({
	type: 'data',
	schema: z.object({
		$schema: z.string().optional(),
		date: z.coerce.date(), // ✅ Converts string to Date
		icon: z.string().refine((value) => IconKeys.includes(value), { 
			message: `Invalid icon name. Choose from: ${IconKeys.join(', ')}`,
		}),
		title: z.string(),
		url: z.string().optional(),
	}).strict(),
});

const posts = defineCollection({
	type: 'content',
	schema: () =>
		z.object({
			archived: z.boolean().optional().default(false),
			description: z.string(),
			draft: z.boolean().optional().default(false),
			icon: z.string().refine((value) => IconKeys.includes(value), { 
				message: `Invalid icon name. Choose from: ${IconKeys.join(', ')}`,
			}).default('HelpCircle'), // ✅ Defaults to "HelpCircle" if missing
			lastModifiedAt: z.union([z.string(), z.coerce.date()]).optional(),
			publishedAt: z.union([z.string(), z.coerce.date()]), // ✅ Ensures proper Date conversion
			title: z.string(),
			url: z.string().optional(),
			external: z.boolean().optional().default(false),
		}).strict(),
});

const socialLinks = defineCollection({
	type: 'data',
	schema: z.object({
		$schema: z.string().optional(),
		icon: z.string().refine((value) => IconKeys.includes(value), { 
			message: `Invalid icon name. Choose from: ${IconKeys.join(', ')}`,
		}).default('Link'),
		name: z.string(),
		showLabel: z.coerce.boolean().optional().default(false),
		url: z.string().url(),
	}).strict(),
});

export const collections = {
	events,
	posts,
	socialLinks,
};
