/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'Very-dark-desaturated-blue-main': 'hsl(222, 26%, 31%)',
				'Very-dark-desaturated-blue-toggle': 'hsl(223, 31%, 20%)',
				'Very-dark-desaturated-blue-screen': 'hsl(224, 36%, 15%)',
				'Desaturated-dark-blue': 'hsl(225, 21%, 49%)',
				'Grayish-orange': 'hsl(30, 25%, 89%)',
				'Red-key': 'hsl(6, 63%, 50%)',
				'Very-dark-grayish-blue': 'hsl(221, 14%, 31%)',
			},
		},
	},
	plugins: [],
};
