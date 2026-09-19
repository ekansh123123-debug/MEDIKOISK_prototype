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
          surface: '#101114',
          surfaceCard: 'rgba(16, 17, 20, 0.85)',
          surfaceElevated: 'rgba(22, 23, 27, 0.9)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.06)',
        },
        clinical: {
          canvas: '#08090a',
          surface: '#101114',
          elevated: '#16171b',
          well: '#121317',
          dark: '#08090a',
          navy: '#101114',
          slate: '#16171b',
          card: '#101114',
          border: 'rgba(255, 255, 255, 0.07)',
          textMuted: '#8a8f98',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
