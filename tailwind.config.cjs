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
				primary50: "#172B4D",
				accent: "#0052CC",
				dark: "#222222",
				error: "#DE350B",
				neutral: "#5E6C84",
				neutral100: "#7A869A",
				neutral500: "#42526E",
				light50: "#F4F5F7",
				light200: "#A5ADBA",
				light300: "#97A0AF",
				light400: "#6B778C",
				light600: "#344563",
				inputBorder: "#DFE1E6",
				inputOutline: "#4C9AFF",
			},
			backgroundImage: {
				"bg-pattern": "url('/images/bg_pattern.png')",
			},
			boxShadow: {
				card: "0px 18px 31px rgba(9, 30, 66, 0.06)",
				nav: "0px 2px 6px rgba(193, 199, 208, 0.4)",
				dashboardNav:
					"0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)",
				authCard:
					"0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)",
			},
		},
	},
	plugins: [],
};
