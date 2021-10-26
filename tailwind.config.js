module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/endless-constellation.svg')",
        "hero-pattern2": "url('/rose-petals.svg')",
        "hero-pattern3": "url('/cool-background.png')",
        "hero-pattern4": "url('/polygon-scatter-haikei.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
