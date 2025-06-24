// Based mostly on https://github.com/Uniswap/interface/blob/main/src/theme/index.tsx

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  error_dark: '#ff0030',

  neutral1_dark: '#ffffff',
  neutral2_dark: '#808080',
  accent1_dark: '#e1e71d',
}

const commonTheme = {
  white: colors.white,
  black: colors.black,
}

export const darkTheme = {
  ...commonTheme,

  bg1: '#000000',
  bg2: '#1c2127',

  neutral1: colors.neutral1_dark,
  neutral2: colors.neutral2_dark,
  error: colors.error_dark,
  accent1: colors.accent1_dark,
}
