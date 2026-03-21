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
        background: "#0a0a0a", // Apple-style deep black
        foreground: "#ededed",
        accent: "#38bdf8", // Sky blue for vibrant contrast
        cardBg: "#171717",
      },
    },
  },
  plugins: [],
};
export default config;
