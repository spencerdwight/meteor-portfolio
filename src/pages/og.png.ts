import { ImageResponse } from '@vercel/og';

import { OGHome } from '~/components/OpenGraph/Home';
import { openGraphFonts } from '~/utils/opengraph';

import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = (context) => {
	return new ImageResponse(OGHome({ context }), {
		fonts: openGraphFonts,
	});
};
