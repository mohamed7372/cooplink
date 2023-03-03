/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E9EBFF', 
          100: '#D1D7FF', 
          200: '#A3AEFF', 
          300: '#7686FE', 
          400: '#485DFE', 
          500: '#1A35FE', 
          600: '#1428BF', 
          700: '#0D1B7F', 
          800: '#070D40', 
          900: '#030519', 
        },
        secondary: {
          50: '#F0F0F0',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0A0A0A',
        }
      },
      fontFamily: {
        body: ['Nunito']
      },
      backgroundImage: {
        '1': 'url("./assets/img/bg-1.svg")',
        '2': 'url("./assets/img/bg-2.svg")',
        '3': 'url("./assets/img/bg-3.svg")',
      },
      height: {
        large: '36rem',
        medium: '30rem'
      }
    },
  },
  plugins: [],
}
