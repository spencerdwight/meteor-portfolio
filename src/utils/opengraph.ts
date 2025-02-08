import { readFileSync } from 'node:fs';
import path from 'node:path';

type Weight = (typeof FONT_WEIGHTS)[number]; // ✅ Extracts valid weights dynamically
type FontStyle = 'normal' | 'italic';

interface FontOptions {
	data: ArrayBuffer;
	name: string;
	weight?: Weight;
	style?: FontStyle;
	lang?: string;
}

// ✅ Centralized weight values
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

// Local TTF fonts for OpenGraph image rendering
const FONTS = FONT_WEIGHTS.map(weight => ({
	weight,
	path: `src/assets/fonts/Inter-${getFontName(weight)}.ttf`, // ✅ Dynamically resolves filenames
}));

function getFontName(weight: number): string {
	const names: Record<number, string> = {
		100: 'Thin',
		200: 'ExtraLight',
		300: 'Light',
		400: 'Regular',
		500: 'Medium',
		600: 'SemiBold',
		700: 'Bold',
		800: 'ExtraBold',
		900: 'Black',
	};
	return names[weight] || 'Regular'; // ✅ Fallback to 'Regular'
}

export const openGraphFonts = FONTS.map(
	(font): FontOptions => ({
		name: 'Inter',
		data: new Uint8Array(readFileSync(path.join(process.cwd(), font.path))).buffer, // ✅ Properly converts Buffer to ArrayBuffer
		style: 'normal',
		weight: font.weight as Weight, // ✅ Ensures type compatibility
	}),
);
