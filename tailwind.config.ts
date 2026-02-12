import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#0B0415",
        acid: "#C7FF00",
      },
      boxShadow: {
        soft: "0 20px 80px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
