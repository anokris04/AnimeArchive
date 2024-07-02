/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif'], 
    },
    extend: {
      gridTemplateColumns: {
        'autofill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
    },
  },
  plugins: [],
}
}