import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#201E98',
          dark: '#0A0256',
          accent: '#201C9E'
        },
        accent: {
          DEFAULT: '#E6E6E6',
          dark: '#B3B3B3'
        },
        secondary: {
          DEFAULT: '#701cf5',
          accent: '#c241bc', 
          red: '#eb404f',
          orange: '#FF7F00',
        }
      }
    },
  },
}

export default config;