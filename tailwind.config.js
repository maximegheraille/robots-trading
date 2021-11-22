module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/endless-constellation.svg')",
        "hero-pattern2": "url('/test-bg.svg')",
        "hero-pattern22": "url('/test2.svg')",
        "hero-pattern3": "url('/cool-background.png')",
        "hero-pattern4": "url('/polygon-scatter-haikei.svg')",
        "hero-pattern5": "url('/testblob.svg')",
        "fin888-blob2": "url('/testblob2.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
