/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['"poppins"', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: '#FFFFFF',
      black: '#181A1B',
      blue: '#401AFF',
      pink: '#F14AFF',
      orange: '#FD6A00',
      yellow: '#FFD500',
      gray: {
        10: '#293A3D',
        40: '#73888C',
        50: '#8FA0A3',
        60: '#ABB8BA',
        70: '#C7D0D1',
        80: '#E3E7E8',
        90: '#F1F3F3',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
    extend: {
      spacing: {
        4.5: '1.125rem', // 18px
      },
      fontSize: {
        '6xl': ['3.625rem', defaultTheme.lineHeight.tight],
        '2xl': [defaultTheme.fontSize['2xl'][0], defaultTheme.lineHeight.snug],
        lg: [defaultTheme.fontSize.lg[0], defaultTheme.lineHeight.snug],
        base: [defaultTheme.fontSize.base[0], defaultTheme.lineHeight.snug],
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(264.04deg, #F14AFF 15.67%, #401AFF 82.95%)',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
