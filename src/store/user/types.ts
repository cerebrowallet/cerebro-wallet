import { UserData } from 'blockstack/lib/auth/authApp';

import {
  Currencies,
  Genders,
  Statuses,
  ActivityFilterTypes,
} from '../../dictionaries';

export enum UserActionTypes {
  SET_USER_DATA = '@@user/set_user_data',
  GET_SETTINGS = '@@user/get_settings',
  SET_SETTINGS = '@@user/set_settings',
  GET_PROFILE = '@@user/get_profile',
  SET_PROFILE = '@@user/set_profile',
  UPDATE_PROFILE = '@@user/update_profile',
  UPDATE_SETTINGS = '@@user/update_settings',
  SUBSCRIBE_ON_NEWS = '@@user/subscribe_on_news',
  SET_SUBSCRIBE_ON_NEWS_STATUS = '@@user/subscribe_on_news_status',
  SET_ACTIVITY_FILTER_TYPE = '@@user/set_activity_filter_type',
  SEARCH_ACTIVITIES = '@@user/search_activities',
}

export interface Profile {
  username?: string;
  gender: Genders;
}

export enum Themes {
  light,
  dark,
}

export interface Settings {
  currency: Currencies;
  timeout: number;
  theme: Themes;
  email?: string;
}

export interface Update {
  title: string;
  excerpt?: string;
  link: string;
  hidden: boolean;
}

export interface UserState {
  userData?: UserData;
  profile: Profile | null;
  settings: Settings | null;
  emailSubscribeStatus: Statuses | null;
  activityFilters: {
    type: ActivityFilterTypes;
    value: string | null;
    search: string | null;
  };
  updates: Update[] | null;
}

export interface UpdateDataActionPayload {
  update: { [name: string]: string | number };
  withoutNotifications?: boolean;
}

export enum SyncDataTypes {
  accounts,
  profile,
  settings,
}
