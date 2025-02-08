import { ImageResponse } from '@vercel/og';
import { OGHome } from '~/components/OpenGraph/Home';
import { openGraphFonts } from '~/utils/opengraph';

import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async (context) => {
	try {
		// ✅ Ensure fonts are loaded before generating response
		const fonts = await openGraphFonts;

		return new ImageResponse(OGHome({ context }), {
			fonts,
		});
	} catch (error) {
		console.error('Error generating OG image:', error);
		return new Response('Failed to generate OG image', { status: 500 });
	}
};
