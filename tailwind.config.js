/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gilroy': [
        'Gilroy',
        'sans-serif',
      ],
    },
    extend: {
      fontFamily: {
        'gilroy-thin': [
          'Gilroy-Thin',
          'sans-serif',
        ],
        'gilroy-medium': [
          'Gilroy-Medium',
          'sans-serif',
        ],
        'gilroy-semibold': [
          'Gilroy-SemiBold',
          'sans-serif',
        ],
        'gilroy-bold': [
          'Gilroy-Bold',
          'sans-serif',
        ],
        'gilroy-extrabold': [
          'Gilroy-ExtraBold',
          'sans-serif',
        ],
      },
      backgroundColor: {
        'black': 'var(--bg-black)',
        'white': 'var(--white)'
      },
      textColor: {
        'white': 'var(--white)',
        'black': 'var(--bg-black)'
      },
      
    },
  },
  plugins: [],
}


