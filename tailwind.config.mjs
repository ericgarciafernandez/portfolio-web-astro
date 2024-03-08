/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
		},
		colors: {
			'text': '#eaf8fa',
			'background': '#040b0b',
			'primary': '#93e1e7',
			'secondary': '#881f8e',
			'accent': '#d33882',
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}
