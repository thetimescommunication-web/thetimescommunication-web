/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f7",
          100: "#b3ebeb",
          200: "#80dfdf",
          300: "#4dd3d3",
          400: "#26c7c7",
          500: "#009292", // Main teal from logo
          600: "#008282",
          700: "#006166", // Dark teal from logo
          800: "#004d52",
          900: "#003a3f",
        },
        secondary: {
          50: "#ffe6e6",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff2626",
          500: "#ff0000", // Red from logo
          600: "#e60000",
          700: "#cc0000",
          800: "#b30000",
          900: "#350a0a", // Dark red from logo
        },
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e8eaed",
          300: "#dadce0",
          400: "#bdc1c6",
          500: "#9aa0a6",
          600: "#80868b",
          700: "#5f6368",
          800: "#3c4043",
          900: "#202124",
          950: "#000000", // Black from logo
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-in": "bounceIn 0.8s ease-out",
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "text-shimmer": "textShimmer 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
          "70%": { transform: "scale(0.9)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0", scale: "0.8" },
          "100%": { transform: "translateX(0)", opacity: "1", scale: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", scale: "0.8" },
          "100%": { opacity: "1", scale: "1" },
        },
        glowPulse: {
          "0%, 100%": { 
            textShadow: "0 2px 8px rgba(0, 130, 130, 0.5), 0 0 20px rgba(0, 146, 146, 0.3)",
            opacity: "0.9"
          },
          "50%": { 
            textShadow: "0 4px 16px rgba(0, 146, 146, 0.8), 0 0 30px rgba(0, 200, 200, 0.5)",
            opacity: "1"
          },
        },
        textShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
