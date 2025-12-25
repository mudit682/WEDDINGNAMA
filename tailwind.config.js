/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'georgia': ['Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#5b6062',
          dark: '#2c2f30',
        },
      },
    },
  },
  plugins: [],
}

