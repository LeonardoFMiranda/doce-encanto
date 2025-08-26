import type { Config } from "tailwindcss";

export default {
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
        'primaryYellow': "#FEECD0",
        'primaryWhite': "#FFF9E2",
        'primaryGreen': "#CDD4B1",
        'primaryPistachio': "#EBECCC",
        'primaryClay': "#DCA278",
      },
      backgroundSize: {
        'stripe': '300% 100%', // Ajuste o tamanho conforme necessário
      },
    },
  },
  plugins: [],
} satisfies Config;
