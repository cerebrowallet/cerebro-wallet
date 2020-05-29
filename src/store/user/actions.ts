import { action } from 'typesafe-actions';
import { UserData } from 'blockstack/lib/auth/authApp';

import {
  UserActionTypes,
  Settings,
  Profile,
  UpdateDataActionPayload,
  SyncDataTypes,
  Themes,
} from './types';
import {
  ActivityFilterTypes,
  Currencies,
  Genders,
  Statuses,
  TimeOuts,
} from '../../dictionaries';

export const setUserData = (userData: UserData) =>
  action(UserActionTypes.SET_USER_DATA, userData);
export const getSettings = () => action(UserActionTypes.GET_SETTINGS);
export const setSettings = (
  settings: Settings = {
    currency: Currencies.USD,
    timeout: TimeOuts.ThreeMinutes,
    theme: Themes.light,
  }
) => action(UserActionTypes.SET_SETTINGS, settings);
export const getProfile = () => action(UserActionTypes.GET_PROFILE);
export const setProfile = (
  profile: Profile = {
    gender: Genders.incognito,
  }
) => action(UserActionTypes.SET_PROFILE, profile);
export const updateProfile = (payload: UpdateDataActionPayload) =>
  action(UserActionTypes.UPDATE_PROFILE, payload);
export const updateSettings = (payload: UpdateDataActionPayload) =>
  action(UserActionTypes.UPDATE_SETTINGS, payload);
export const subscribeOnNews = (email: string) =>
  action(UserActionTypes.SUBSCRIBE_ON_NEWS, email);
export const setSubscribeOnNewsStatus = (payload: Statuses | null) =>
  action(UserActionTypes.SET_SUBSCRIBE_ON_NEWS_STATUS, payload);
export const setActivityFilterType = (update: {
  type: ActivityFilterTypes;
  value?: string;
}) => action(UserActionTypes.SET_ACTIVITY_FILTER_TYPE, update);
export const syncDataToGaia = (payload: {
  dataType: SyncDataTypes;
  notifications?: {
    start?: string;
    success?: string;
    error?: string;
  };
}) => action(UserActionTypes.SYNC_DATA_TO_GAIA, payload);
export const syncDataToGaiaSuccess = () =>
  action(UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS);
export const syncDataToGaiaError = (error: Error) =>
  action(UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS, error);
