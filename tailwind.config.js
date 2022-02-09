module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				main: {
					DEFAULT: "#1a1a1a",
					light: "#212121",
					dark: "#171717",
				},
				primary: {
					DEFAULT: "#FCFCFC",
				},
				secondary: {
					DEFAULT: "#81B673",
				},
				lineHighlight: {
					DEFAULT: "#303030",
				},
			},
			fontFamily: {
				title: ["Roboto Slab"],
				body: ["Roboto"],
			},
		},
	},
	plugins: [],
};
