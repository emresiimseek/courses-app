/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			flex: {
				2: '2 2 0%',
				3: '3 3 0%',
			},
		},
	},
	plugins: [],
};
