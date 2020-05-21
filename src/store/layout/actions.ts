import { action } from 'typesafe-actions';

import { LayoutActionTypes, Notification } from './types';

export const showNotification = (notification: Notification) =>
  action(LayoutActionTypes.SHOW_NOTIFICATION, notification);
export const removeNotification = () =>
  action(LayoutActionTypes.REMOVE_NOTIFICATION);
