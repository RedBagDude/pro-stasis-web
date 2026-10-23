/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#070709',
          dark: '#0c0d12',
          card: '#12131a',
          border: 'rgba(255, 255, 255, 0.08)',
          borderActive: 'rgba(255, 42, 42, 0.4)',
          red: '#ff2a2a',
          redHover: '#e01c1c',
          gray: '#8a8d9a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
        tech: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
