/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    
        backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',  
          '50%': '50%',           // 50% of the image
          '25%': '25%',           // 25% of the image
          '75%': '75%',           // 75% of the image
          '16': '4rem',           // Custom value for rem units
          'full': '100%',         // Full width of the container
          'screen': '100vw',      // Full width of the viewport
          '16/9': '177.77%',      // 16:9 aspect ratio
          '4/3': '133.33%',       // 4:3 aspect ratio
          '3/2': '150%',          // 3:2 aspect ratio
          '8/5': '160%',          // 8:5 aspect ratio
        
       
      }
    },
  },
  plugins: [],
}
