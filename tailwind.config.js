/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'highlight': '#027E94',
      'highlight2': '#014d5a',
      'bg': '#F3F1EB',
      'bg2': '#F9F8F3',
      'light': '#6B6B6B',
      'dark': '#262625',
      'cont': '#0A0A0A',
      'success': '#2FAD02',
      'error': '#940225',
      'warning': '#D38C22',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
}
