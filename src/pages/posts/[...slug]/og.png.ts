import { getCollection, getEntry } from 'astro:content';
import { ImageResponse } from '@vercel/og';

import { OGPost } from '~/components/OpenGraph/Post';
import { filterPosts } from '~/utils/content';
import { openGraphFonts } from '~/utils/opengraph';

import type { CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;

export async function getStaticPaths() {
	const posts = await getCollection(
		'posts',
		filterPosts({
			archived: true,
		}),
	);

	return (
		posts
			// Sort by date
			.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
			// Map to paths
			.map((props) => ({
				params: { slug: props.slug },
				props,
			}))
	);
}

type Post = CollectionEntry<'posts'>;

export const GET: APIRoute<Post, Pick<Post, 'slug'>> = async (context) => {
	const post = await getEntry('posts', context.params.slug);

	return new ImageResponse(OGPost({ context, post }), {
		fonts: openGraphFonts,
	});
};
