import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)'],
      crisis: ['var(--font-crisis-climate)']
    },
    extend: {
      boxShadow: {
        NotAnswer: '0 8px var(--green-darker)',
        Answer: '0 8px var(--gray)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "var(--header)",
        black: "var(--black)",
        white: "var(--white)",
        red: "var(--red)",
        redDark: "var(--red-dark)",
        green: "var(--green)",
        greenDark: "var(--green-dark)",
        greenDarker: "var(--green-darker)"
      }
    }
  },
  plugins: [],
};

export default config;