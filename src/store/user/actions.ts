import { action } from 'typesafe-actions';
import { UserData } from 'blockstack/lib/auth/authApp';

import { UserActionTypes, Settings, Profile } from './types';

export const logIn = () => action(UserActionTypes.LOG_IN);
export const logOut = () => action(UserActionTypes.LOG_OUT);
export const setUserData = (userData: UserData) =>
  action(UserActionTypes.SET_USER_DATA, userData);
export const getSettings = () => action(UserActionTypes.GET_SETTINGS);
export const setSettings = (settings: Settings) =>
  action(UserActionTypes.SET_SETTINGS, settings);
export const getProfileData = () => action(UserActionTypes.GET_PROFILE_DATA);
export const setProfileData = (data: Profile) => action(UserActionTypes.SET_PROFILE_DATA, data);

