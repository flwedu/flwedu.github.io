module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainPurple: {
          100: "#AA8AEA",
          500: "#7843e6",
          700: "#4A3C66",
          900: "#361E66",
        },
      },
    },
  },
  plugins: [],
};
