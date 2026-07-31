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

// Local TTF fonts are used because WOFF2 fonts are not supported
// by the Open Graph image renderer.
const FONTS = [
	{
		name: 'Inter',
		weight: 100,
		path: './src/assets/fonts/Inter-Thin.ttf',
	},
	{
		name: 'Inter',
		weight: 200,
		path: './src/assets/fonts/Inter-ExtraLight.ttf',
	},
	{
		name: 'Inter',
		weight: 300,
		path: './src/assets/fonts/Inter-Light.ttf',
	},
	{
		name: 'Inter',
		weight: 400,
		path: './src/assets/fonts/Inter-Regular.ttf',
	},
	{
		name: 'Inter',
		weight: 500,
		path: './src/assets/fonts/Inter-Medium.ttf',
	},
	{
		name: 'Inter',
		weight: 600,
		path: './src/assets/fonts/Inter-SemiBold.ttf',
	},
	{
		name: 'Inter',
		weight: 700,
		path: './src/assets/fonts/Inter-Bold.ttf',
	},
	{
		name: 'Inter',
		weight: 800,
		path: './src/assets/fonts/Inter-ExtraBold.ttf',
	},
	{
		name: 'Inter',
		weight: 900,
		path: './src/assets/fonts/Inter-Black.ttf',
	},
	{
		name: 'Space Mono',
		weight: 700,
		path: './src/assets/fonts/SpaceMono-Bold.ttf',
	},
] as const;

export const openGraphFonts = FONTS.map(
	(font): FontOptions => ({
		name: font.name,
		data: new Uint8Array(
			readFileSync(path.resolve(process.cwd(), font.path)),
		).buffer,
		style: 'normal',
		weight: font.weight,
	}),
);

const avatarBuffer = readFileSync(
	path.resolve(process.cwd(), './src/assets/avatar.jpeg'),
);

export const avatarDataUri =
	`data:image/jpeg;base64,${avatarBuffer.toString('base64')}`;

const featuredReleaseBuffer = readFileSync(
	path.resolve(
		process.cwd(),
		'./src/assets/releases/sprites-tamaranch-cover.jpg',
	),
);

export const featuredReleaseDataUri =
	`data:image/jpeg;base64,${featuredReleaseBuffer.toString('base64')}`;