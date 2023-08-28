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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'new_yellow' : "#FFE9B6",
        'new_carrot' : "#DE6B72",
        'new_green' : "#22B160",
        'new_rust' : "#DFBF9F",
        'new_gray' : "#BBC0CD",
        'new_blue' : "#198FDD",
        'new_lightblue' : "#8BB7F2",
        'new_orange' : "#EBA984",
        'dark-gray':'#1e1b1e'

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  },
}
