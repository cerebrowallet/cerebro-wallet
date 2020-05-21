import { Theme } from '../types';
import { colors } from '../colors';
import { hexToRGB } from '../../utils/common';

const darkTheme: Theme = {
  colors: {
    primary: colors.white,
    primaryLight: hexToRGB(colors.white, 0.8),
    primaryAlpha: hexToRGB(colors.white, 0.1),
    primaryGradient: colors.blackGradient,
    secondary: colors.gray,
    secondaryLight: colors.grayTuna,
    secondaryExtraLight: colors.grayShark,
    secondaryInactive: colors.grayInactive,
    secondaryAlpha: hexToRGB(colors.grayInactive, 0.1),
    tertiary: colors.smoke,
    tertiaryGradient: colors.smokeGradient,
    orange: colors.orange,
    orangeDark: colors.orangeDark,
    red: colors.red,
    redLight: colors.redLight,
    redAlpha: hexToRGB(colors.red, 0.1),
    green: colors.green,
    blue: colors.blue,
    blueAlpha: hexToRGB(colors.blue, 0.1),
  },
};

export default darkTheme;
