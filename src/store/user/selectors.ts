import { ApplicationState } from '../index';

export const getName = (state: ApplicationState) => state.user.name;
export const getUserName = (state: ApplicationState) => state.user.username;
export const getAvatarUrl = (state: ApplicationState) => state.user.avatarUrl;
export const getBlockstackId = (state: ApplicationState) => state.user.id;
export const getSessionTimeoutMs = (state: ApplicationState) =>
  state.user.timeout * 60 * 1000;
