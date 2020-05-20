export type ColorGradient = string[];

export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryAlpha: string;
    primaryGradient: ColorGradient;
    secondary: string;
    secondaryLight: string;
    secondaryExtraLight: string;
    secondaryInactive: string;
    secondaryAlpha: string;
    tertiary: string;
    tertiaryGradient: ColorGradient;
    orange: string;
    orangeDark: string;
    red: string;
    redLight: string;
    redAlpha: string;
    green: string;
    blue: string;
    blueAlpha: string;
  };
}
