import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-gray': '#191919',
        'light-gray': '#B4B4B4',
      },
      flex: {
        'flex-full': '0 0 100%',
      },
      screens: {
        lt: '940px',
        ls: '425px',
        ms: '320px',
      },
      fontSize: {
        'text-xl': '1.20rem',
      },

      backgroundColor: {
        'semi-blue': '#041542',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
