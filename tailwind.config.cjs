/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				circular: ["Circular STD", "sans-serif"],
			},
			colors: {
				primary: "#091E42",
				accent: "#0052CC",
				neutral: "#5E6C84",
				light50: "#F4F5F7",
				light200: "#A5ADBA",
				light600: "#344563",
			},
			backgroundImage: {
				"bg-pattern": "url('/images/bg_pattern.png')",
			},
		},
	},
	plugins: [],
};
