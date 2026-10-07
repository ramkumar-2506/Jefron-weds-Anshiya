import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 24px 80px rgba(105, 54, 43, 0.15)",
      },
      colors: {
        ivory: "#f9f4ee",
        parchment: "#f5efe7",
        burgundy: "#5f2432",
        blush: "#d9b5a3",
        rose: "#b86b62",
        gold: "#c7a76f",
        ink: "#3d2c2d",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        floral: "radial-gradient(circle at 20% 20%, rgba(140, 101, 77, 0.08), transparent 25%), radial-gradient(circle at 80% 25%, rgba(95, 36, 50, 0.08), transparent 26%), radial-gradient(circle at 50% 80%, rgba(199, 167, 111, 0.06), transparent 30%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
