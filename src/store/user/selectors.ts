import { createSelector } from 'reselect';
import { UserData } from 'blockstack/lib/auth/authApp';

import { ApplicationState } from '../index';

export const getUserData = (state: ApplicationState) => state.user.userData;
export const getBlockstackUsername = createSelector(
  getUserData,
  (userData?: UserData) => (userData ? userData.username.split('.')[0] : null)
);
export const getBlockStackName = createSelector(
  getUserData,
  (userData?: UserData) => (userData ? userData.profile.name : null)
);
export const getBlockstackAvatarUrl = createSelector(
  getUserData,
  (userData?: UserData) =>
    userData && userData.profile.image.length > 0
      ? userData.profile.image[0].contentUrl
      : null
);
export const getProfileData = (state: ApplicationState) => state.user.profile;
export const getSettings = (state: ApplicationState) => state.user.settings;
