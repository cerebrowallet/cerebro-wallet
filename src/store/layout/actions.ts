import { action } from 'typesafe-actions';

import { LayoutActionTypes, Themes, Notification } from './types';

export const setTheme = (theme: Themes) =>
  action(LayoutActionTypes.SET_THEME, theme);
export const showNotification = (notification: Notification) =>
  action(LayoutActionTypes.SHOW_NOTIFICATION, notification);
export const removeNotification = () => action(LayoutActionTypes.REMOVE_NOTIFICATION);
