import {space} from './space';
import {colors} from './colors';

export const defaultTheme = {
  space,
  colors,
  fontWeights: {
    400: 400,
    500: 500,
    700: 700,
  },
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 18,
  },
  radii: {
    md: 6,
  },
  lineHeights: {
    sm: 14 * 1.6,
    md: 16 * 1.6,
    lg: 18 * 1.6,
  },
};

export type DefaultTheme = typeof defaultTheme;
