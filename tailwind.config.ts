import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
		        background: "var(--background)",
		        foreground: "var(--foreground)",

		        primary: "var(--primary)",

		        accent: "var(--accent)",

		        'card-primary': 'var(--card-primary)',
        		'card-secondary': 'var(--card-secondary)',
		      },
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
} satisfies Config;
