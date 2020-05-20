import { NotificationTypes } from '../../dictionaries';

export enum Themes {
  light,
  dark,
}

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

export enum LayoutActionTypes {
  SET_THEME = '@@layout/SET_THEME',
  SHOW_NOTIFICATION = '@@layout/show_notification',
  REMOVE_NOTIFICATION = '@@layout/remove_notification',
}

export interface Notification {
  type: NotificationTypes;
  text: string;
}

export interface LayoutState {
  theme: Themes;
  notification?: Notification;
}
