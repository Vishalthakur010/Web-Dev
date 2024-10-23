/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
      },
    },
  },
  plugins: [],
}


