import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          accent: "#f59e0b",
          "accent-light": "#fcd34d",
          "accent-dark": "#d97706",
          whatsapp: "#25d366",
          "whatsapp-dark": "#128c7e",
          bg: "#08080f",
          surface: "#0f1017",
          "surface-2": "#161820",
          border: "#1e2030",
        },
      },
      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
