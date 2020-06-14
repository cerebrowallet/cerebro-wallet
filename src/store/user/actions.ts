import { action } from 'typesafe-actions';

import {
  UserActionTypes,
  Settings,
  Profile,
  UpdateDataActionPayload,
} from './types';
import { ActivityFilterTypes, Statuses } from '../../dictionaries';

export const getSettings = () => action(UserActionTypes.GET_SETTINGS);
export const setSettings = (settings: Settings) =>
  action(UserActionTypes.SET_SETTINGS, settings);
export const getProfile = () => action(UserActionTypes.GET_PROFILE);
export const setProfile = (payload: Profile) =>
  action(UserActionTypes.SET_PROFILE, payload);
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
export const chooseRandomEmoji = ({
  isAuthCallback,
}: {
  isAuthCallback: boolean;
}) => action(UserActionTypes.CHOOSE_EMOJI, { isAuthCallback });
