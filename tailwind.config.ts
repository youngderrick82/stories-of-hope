import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        DM: ["DM Sans", "sans-serif"],
        roboto_mono: ['roboto-mono', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;
