import { readFileSync } from 'node:fs';
import path from 'node:path';

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type FontStyle = 'normal' | 'italic';

interface FontOptions {
	data: ArrayBuffer;
	name: string;
	weight?: Weight;
	style?: FontStyle;
	lang?: string;
}

// Note: We have provided local TTF fonts here because WOFF2 fonts
// are not supported by Vercel's OG Image API yet & the `@fontsource/inter`
// package we use for the fonts actually loaded on the site does not
// provide TTF fonts.
const FONTS = [
	{ weight: 100, path: './src/assets/fonts/Inter-Thin.ttf' },
	{ weight: 200, path: './src/assets/fonts/Inter-ExtraLight.ttf' },
	{ weight: 300, path: './src/assets/fonts/Inter-Light.ttf' },
	{ weight: 400, path: './src/assets/fonts/Inter-Regular.ttf' },
	{ weight: 500, path: './src/assets/fonts/Inter-Medium.ttf' },
	{ weight: 600, path: './src/assets/fonts/Inter-SemiBold.ttf' },
	{ weight: 700, path: './src/assets/fonts/Inter-Bold.ttf' },
	{ weight: 800, path: './src/assets/fonts/Inter-ExtraBold.ttf' },
	{ weight: 900, path: './src/assets/fonts/Inter-Black.ttf' },
] as const;

// Note: I adjusted the data here to push buffer to ArrayBuffer, which was recommended as optimized

export const openGraphFonts = FONTS.map(
	(font): FontOptions => ({
		name: 'Inter',
		data: new Uint8Array(readFileSync(path.resolve(process.cwd(), font.path))).buffer,
		style: 'normal',
		weight: font.weight,
	}),
);
