/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			width: {
				375: '375px'
			},
			colors: {
				black: '#00000',
				white: '#FFFFFF',
				primary: '#C7B9FF',
				secondary: '#0AA95E',
				gray: '#667080',
				gray2: '#313136'
			},
			fontSize: {
				title: '48px',
				subtitle: '24px',
				description: '16px'
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
