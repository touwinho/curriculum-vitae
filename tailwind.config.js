/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          section: '#ebeced',
          text: '#000000',
          border: '#d1d5db',
          hover: '#f3f4f6',
          shadow: '#e5e7eb',
          counter: '#f9fafb',
        },
        dark: {
          background: '#1a202c',
          section: '#2d3748',
          text: '#FFFFFF',
          border: '#4a5568',
          hover: '#4a5568',
          shadow: '#2d3748',
        },
        button: '#295fa9',
      },
    },
  },
  plugins: [],
}
