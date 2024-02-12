/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          100: '#635E5E',
          200: '#7B7B7B',
          300: '#464646',
          400: '#2A2A2A',
          500: '#212020',
        }
      },
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

