/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'charcoal': '#1c1c1c',
        'off-white': '#f3f3f3',
        'soft-grey': '#a1a1a1',
        'gold': '#c5a059',
        'deep-black': '#000000',
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
	},
	plugins: [],
};