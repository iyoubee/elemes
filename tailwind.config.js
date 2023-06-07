/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/background.svg')",
      },
      colors: {
        green: {
          light: '#A4B441',
          lightfade: '#A4B441',
          normal: '#8BAC3E',
          normalfade: '#F0FEEB',
          normalveryfade: '#F9FFF6',
        },
        tosca: {
          normal: '#40A2B1',
          fade: '#E6F3F5',
        },
        blue: {
          normal: '#405EB6',
          fade: '#EAEEFA',
        },
        rose: {
          normal: '#B23F74',
          fade: '#F9EEF3',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
