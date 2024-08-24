/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sora: ['Sora', 'sans-serif'],
			code: ['"Source Code Pro"', 'monospace'],
			grotesk: ['"Space Grotesk"', 'sans-serif'],
		},
		colors: {
			'lavender-purple': '#AC6AFF',
			'sunset-orange': '#FFC876',
			'coral-red': '#FF776F',
			'mint-green': '#7ADB78',
			'periwinkle-blue': '#858DFF',
			'bubblegum-pink': '#FF98E2',
			'charcoal-black': '#26242C',
			'lilac-gray': '#CAC6DD',
			'amethyst-purple': '#ADA8C3',
			'slate-gray': '#757185',
			'midnight-blue': '#3F3A52',
			'deep-indigo': '#252134',
			'night-black': '#15131D',
			'ink-black': '#0E0C15',
			'shadow-gray': '#474060',
			'slate-blue': '#43435C',
			'dark-navy': '#1B1B2E',
			'dark-plum': '#2E2A41',
			'steel-gray': '#6C7275',
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
		},
		extend: {
			spacing: {
				7.5: '1.875rem',
				15: '3.75rem',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'linear',
			},
			borderWidth: {
				DEFAULT: '0.0625rem',
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
				'conic-gradient':
					'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
			},
		},
	},
	plugins: [],
}
