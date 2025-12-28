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
			fontFamiliy: {
				sans: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'custom-2xl': '0 25px 50px -12px #EBEEF3'
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
} satisfies Config;
