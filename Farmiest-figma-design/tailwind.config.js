/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lgradient-one': '#EEDAB5',
        'lgradient-two': '#E6F8EF',
        'lgradient-three': '#E6F8EF',

        'Elipgradient-one': '#008000',
        'Elipgradient-two': '#FFD700',
      },
    },
  },
  plugins: [],
}