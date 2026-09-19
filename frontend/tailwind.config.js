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
          primaryDim: '#0284c7',
          accent: '#00f0ff',
          surface: '#111622',
          surfaceCard: 'rgba(17, 22, 34, 0.85)',
          surfaceElevated: 'rgba(22, 29, 43, 0.9)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.06)',
        },
        clinical: {
          canvas: '#0c1017',
          surface: '#111622',
          elevated: '#161d2b',
          well: '#131926',
          dark: '#0c1017',
          navy: '#111622',
          slate: '#161d2b',
          card: '#111622',
          border: 'rgba(255, 255, 255, 0.08)',
          textMuted: '#828e9e',
          azure: '#0284c7',
          azureLight: '#38bdf8',
          neonCyan: '#00f0ff',
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
        'tactile-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
        'pulse-neon': '0 0 14px rgba(0, 240, 255, 0.4)',
        'azure-glow': '0 0 16px rgba(14, 165, 233, 0.35)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
