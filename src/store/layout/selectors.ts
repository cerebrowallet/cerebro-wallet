import { ApplicationState } from '../index';

export const getNotification = (state: ApplicationState) => state.layout.notification;
