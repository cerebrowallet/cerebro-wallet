import { Theme } from '../types';
import { colors } from '../colors';
import { hexToRGB } from '../../utils/common';

const lightTheme: Theme = {
  colors: {
    primary: colors.black,
    primaryLight: colors.blackLight,
    primaryAlpha: hexToRGB(colors.black, 0.1),
    primaryGradient: colors.blackGradient,
    secondary: colors.gray,
    secondaryLight: colors.grayLight,
    secondaryExtraLight: colors.grayExtraLight,
    secondaryInactive: colors.grayInactive,
    secondaryAlpha: hexToRGB(colors.grayInactive, 0.1),
    tertiary: colors.white,
    tertiaryGradient: [colors.white, colors.white],
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

export default lightTheme;
