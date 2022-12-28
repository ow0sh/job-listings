/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            "default": ['League Spartan', 'sans-serif']
        },
        colors: {
            "heading-primary": "#5ba4a4",
            "background-primary": "#effafa",
            "tablets-primary": "#eef6f6",
            "tag-primary": "#7b8e8e",
            "text-primary": "#2c3a3a",
        }
    },
  },
  plugins: [],
}
