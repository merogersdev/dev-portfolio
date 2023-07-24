/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Blue
        primary: {
          50: '#AEEDFF',
          100: '#9D8DCE',
          200: '#917EC8',
          300: '#765fba',
          400: '#523D8F',
        },
        // Charcoal
        secondary: {
          50: '#F4F4F5',
          100: '#EAEAEB',
          200: '#BFBFC4',
          300: '#3b3b40',
          400: '#313135',
          500: '#27272A',
          600: 'rgba(49, 49, 53, 0.95);',
        },
      },
    },
  },
  plugins: [],
};