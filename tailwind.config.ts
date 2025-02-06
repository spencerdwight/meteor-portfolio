import TypographyPlugin from '@tailwindcss/typography';
import { blue, zinc } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	plugins: [TypographyPlugin],
	theme: {
		extend: {
			animation: {
				'meteor-effect': 'meteor 5s linear infinite',
			},
			colors: {
				gray: zinc,
				primary: blue,
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1',
					},
					'70%': {
						opacity: '1',
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0',
					},
				},
			},
		},
	},
} satisfies Config;
