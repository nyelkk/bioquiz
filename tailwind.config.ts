import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        NotAnswer: '0 8px var(--green-darker)',
        Answer: '0 8px var(--gray)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "var(--header)"
      },
    },
  },
  plugins: [],
};

export default config;