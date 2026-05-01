/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          purple: '#b400ff',
          pink: '#ff00d4',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00f0ff, 0 0 20px #00f0ff',
        'neon-purple': '0 0 10px #b400ff, 0 0 25px #b400ff',
        'neon-pink': '0 0 10px #ff00d4, 0 0 25px #ff00d4',
      },
    },
  },
  plugins: [],
}
