export const colors = {
  primary: {
    50: '#f9f5ff',
    100: '#f2e8ff',
    200: '#e7d5ff',
    300: '#d4b4fe',
    400: '#bb86fc',
    500: '#a055f7',
    600: '#8a33ea',
    700: '#7522ce',
    800: '#6421a8',
    900: '#531c87',
    950: '#360764',
  },

  secondary: {
    50: '#effefb',
    100: '#c7fff5',
    200: '#8fffec',
    300: '#4ff9e1',
    400: '#1be6cf',
    500: '#03dac6',
    600: '#00a297',
    700: '#048179',
    800: '#0d5450',
    900: '#003433',
  },

  neutral: {
    50: '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#6d6d6d',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#3d3d3d',
    950: '#121212',
  },

  error: '#CF6679',
} as const

export type Colors = keyof typeof colors
export type ColorValue = (typeof colors)[Colors]
