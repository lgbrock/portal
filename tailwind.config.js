/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['**/*.jsx', '**/*.md', '**/*.js'], // content to be processed
	theme: {
		extend: {
			screens: {
				xs: '320px',
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			extend: {
				colors: {
					primary: '#8cc7ec',
					secondary: '#1e1e1e',
					tertiary: '#f5f5f5',
				},
				fontFamilys: {
					body: ['Montserrat', 'sans-serif'],
					heading: ['Montserrat', 'sans-serif'],
				},
			},
		},
	},
	plugins: [],
};
