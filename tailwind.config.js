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
          text: '#363636',
          border: '#d1d5db',
          hover: '#f3f4f6',
          shadow: '#e5e7eb',
        },
        dark: {
          background: '#1a202c',
          section: '#2d3748',
          text: '#ffffff',
          border: '#4a5568',
          hover: '#2d3748',
          shadow: '#2d3748',
        },
      },
    },
  },
  plugins: [],
}
