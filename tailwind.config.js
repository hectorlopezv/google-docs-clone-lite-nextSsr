module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xsss: ".55rem",
      xss: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2xll": "1.75rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "smoke-darkest": "rgba(0, 0, 0, 0.9)",
      "smoke-darker": "rgba(0, 0, 0, 0.75)",
      "smoke-dark": "rgba(0, 0, 0, 0.6)",
      smoke: "rgba(0, 0, 0, 0.5)",
      "smoke-light": "rgba(0, 0, 0, 0.4)",
      "smoke-lighter": "rgba(0, 0, 0, 0.25)",
      "smoke-lightest": "rgba(0, 0, 0, 0.1)",
    }),
    flexGrow: {
      0.1: 0.1,
      0.2: 0.2,
      0.3: 0.3,
      0.4: 0.4,
      0.5: 0.5,
      0.6: 0.6,
      0.7: 0.7,
    },
    extend: {
      fontFamily: {
        logo: ["Roboto", "sans-serif"],
        logoLigth: ["Roboto Light", "sans-serif"],
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
