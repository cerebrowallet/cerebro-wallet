import { NotificationTypes } from '../../enums';

export type ThemeColors = 'light' | 'dark';

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
  readonly theme: ThemeColors;
  notification?: Notification;
}
