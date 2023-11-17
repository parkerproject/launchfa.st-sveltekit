require('dotenv').config()

const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        svelte: '#2e2e2e',
        launchfast: '#f96743',
      },
    },
    fontFamily: {
      display: [process.env.PUBLIC_FONT_NAME || 'Archivo', ...fontFamily.sans],
    },
  },
}
