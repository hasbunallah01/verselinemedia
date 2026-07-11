import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0B",
          50: "#171717",
          100: "#1F1F1F",
          200: "#262626",
          300: "#2D2D2D",
          400: "#3F3F3F",
          500: "#525252",
        },
        copper: {
          DEFAULT: "#B87333",
          50: "#FBF1E8",
          100: "#F4DEC4",
          200: "#E8B985",
          300: "#DC9556",
          400: "#C9823F",
          500: "#B87333",
          600: "#965E29",
          700: "#744820",
          800: "#523317",
          900: "#311D0D",
        },
        muted: "#B8B8B8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-copper":
          "linear-gradient(135deg, #B87333 0%, #DC9556 50%, #B87333 100%)",
      },
      boxShadow: {
        "glow-copper": "0 0 60px -10px rgba(184, 115, 51, 0.5)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
