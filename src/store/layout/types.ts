import { NotificationTypes } from '../../dictionaries';

export enum LayoutActionTypes {
  SHOW_NOTIFICATION = '@@layout/show_notification',
  REMOVE_NOTIFICATION = '@@layout/remove_notification',
}

export interface Notification {
  type: NotificationTypes;
  text: string;
}

export interface LayoutState {
  notification?: Notification;
}
