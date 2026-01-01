import type { Config } from "next";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Yahan Client ka Green color set kiya hai
        primary: {
          DEFAULT: "#32CD32", // Lime Green
          foreground: "#000000", // Text on green buttons
        },
        background: "#09090b", // zinc-950 (Dark mode bg)
        foreground: "#ffffff",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;