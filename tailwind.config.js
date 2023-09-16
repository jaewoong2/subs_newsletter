/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'SpoqaHanSansNeo-Regular': 'SpoqaHanSansNeo-Regular',
        Pretendard: 'Pretendard Variable',
        tossFace: 'Tossface',
        PyeongChangPeace: 'PyeongChangPeace-Bold',
        neurimboGothicRegular: 'neurimboGothicRegular',
        SUITE: 'SUITE-Regular',
        'Yeongdo-Rg': 'Yeongdo-Rg',
        GangwonState: 'GangwonState',
      },

      colors: {
        darkBg: {
          100: '#585a5d',
          200: '#3f4245',
          300: '#282a2d',
          400: '#202124',
          500: '#1e1f21',
          600: '#1c1d1f',
          700: '#1a1b1d',
          800: '#18191b',
          900: '#161718',
        },
      },

      boxShadow: {
        trend: '-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)',
        'trend-inset': 'inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)  ',
      },

      transitionDuration: {
        long: '400ms',
        mid: '250ms',
        short: '100ms',
      },

      backgroundColor: {},
      backgroundSize: {
        'gradient-size': '400% 400%',
      },
      backgroundImage: {
        'gradient-animation': 'linear-gradient(-65deg, #23d5ab, #e73c7eaf, #23a6d5, #ee7752af)',
        'gradient-dark-animation': 'linear-gradient(-65deg, #176f5b, #a1245d9f, #175473, #b54828af)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(120deg, #a1c4fdaf 0%, #c2e9fbaf 100%)',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)',
            display: 'block',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)',
            display: 'none',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        gradation: 'gradient 18s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated'), require('daisyui'), require('@tailwindcss/typography')],
}
