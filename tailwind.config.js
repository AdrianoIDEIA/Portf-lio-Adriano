/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        vscode: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          activity: '#333333',
          tab: '#2d2d2d',
          activeTab: '#1e1e1e',
          accent: '#007acc',
          text: '#e0e0e0',
          green: '#4ec9b0',
          orange: '#ce9178',
          blue: '#569cd6',
          purple: '#c586c0',
          yellow: '#dcdcaa',
          comment: '#858585'
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'cursor': 'cursor .75s step-end infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
        }
      }
    }
  },
  plugins: [],
}