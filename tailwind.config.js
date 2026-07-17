/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        spectral: ['Spectral', 'serif'],
      },
      colors: {
        primary: '#1a1a1a',
        accent: '#2a2a2a',
        foreground: '#000000',
      },
      letterSpacing: {
        'wider-custom': '0.25em',
      },
    },
  },
  plugins: [],
}
