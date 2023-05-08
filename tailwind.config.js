/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      '100%': '100%',
    },
    backgroundPosition: {
      'left-center': 'left center',
      'center-center': 'center center',
      'right-center': 'right center',
      'cover': 'cover'
    },
    boxShadow: {
      'bx': 'rgba(250, 250, 255, 0.16) 0px -5px 6px 0px inset, rgba(38, 37, 37, 0.24) 4px 6px 11px 1px inset'
    },
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
        'white': 'var(--white)',
        'grey': 'var(--border-color)',
        'white2': 'var(--nav-text)',
        'black2': 'var(--phone-color)',

      },
      textColor: {
        'white': 'var(--white)',
        'black': 'var(--bg-black)',
        'nav-text': 'var(--nav-text)'
      },
      
      
    },
  },
  plugins: [],
}


