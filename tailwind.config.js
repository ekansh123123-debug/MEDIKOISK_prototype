/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        med: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        glacier: {
          primary: '#0ea5e9',
          primaryLight: '#38bdf8',
          primaryDim: '#0369a1',
          accent: '#14b8a6',
          surface: '#0d1527',
          surfaceCard: 'rgba(15, 23, 42, 0.75)',
          surfaceElevated: 'rgba(30, 41, 59, 0.85)',
          border: 'rgba(14, 165, 233, 0.15)',
          borderSubtle: 'rgba(226, 232, 240, 0.12)',
        },
        clinical: {
          dark: '#080d1a',
          navy: '#0f172a',
          slate: '#1e293b',
          card: '#0d1527',
          border: '#1e293b',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
