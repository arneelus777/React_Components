/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'amsterdam-four': ['Amsterdam Four'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'helvetica-now': ['Helvetica Now', 'sans-serif'],
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
