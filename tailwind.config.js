/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '30aba9': '#30aba9',
          '2a9795': '#2a9795',
          'f5fafd': '#f5fafd',
          '28b19d': '#28b19d',
        }
      }
    },
  },
  plugins: [],
}

