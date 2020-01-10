import { action } from 'typesafe-actions';

import { LayoutActionTypes, ThemeColors, Notification } from './types';

export const setTheme = (theme: ThemeColors) =>
  action(LayoutActionTypes.SET_THEME, theme);
export const showNotification = (notification: Notification) =>
  action(LayoutActionTypes.SHOW_NOTIFICATION, notification);
export const removeNotification = () => action(LayoutActionTypes.REMOVE_NOTIFICATION);
