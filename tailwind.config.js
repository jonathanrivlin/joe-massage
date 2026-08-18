/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fdf6f0',
          100: '#fae8d8',
          200: '#f5cfad',
          300: '#eeaf79',
          400: '#e68745',
          500: '#df6a22',
          600: '#c85118',
          700: '#a63d15',
          800: '#873318',
          900: '#6e2c18',
        },
        warm: {
          50:  '#faf9f7',
          100: '#f3f1ec',
          200: '#e8e3d9',
          300: '#d5cdc0',
          400: '#b8ae9f',
          500: '#9e9284',
          600: '#7f7368',
          700: '#655c52',
          800: '#4d4540',
          900: '#2e2925',
        }
      },
    },
  },
  plugins: [],
}
