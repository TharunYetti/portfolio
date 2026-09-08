/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4f1eb",
        secondary: "#ff6b4a",
        coral: "#ff6b4a",
        'coral-dark': "#d84d31",
        paper: "#f4f1eb",
        ink: "#17202a",
        lightSlate: "#53606b",
        lightestSlate: "#17202a",
        slate: "#53606b",
        navy: "#17202a",
        lightNavy: "#e8e3da",
        navyShadow: "rgba(23, 32, 42, 0.15)",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-in-out',
        slideRight: 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
