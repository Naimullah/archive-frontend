/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
	  extend: {
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: "hsl(var(--primary))",
		  secondary: "hsl(var(--secondary))",
		  muted: "hsl(var(--muted))",
		  accent: "hsl(var(--accent))",
		  destructive: "hsl(var(--destructive))",
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		},
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	  },
	},
	plugins: [],
  };
  