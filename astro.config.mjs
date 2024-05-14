import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import path from 'path'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
})
