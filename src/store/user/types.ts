import { UserData } from 'blockstack/lib/auth/authApp';

import {
  Currencies,
  Genders,
  Statuses,
  ActivityFilterTypes,
} from '../../dictionaries';

export enum UserActionTypes {
  LOG_IN = '@@user/log_in',
  LOG_OUT = '@@user/log_out',
  SET_USER_DATA = '@@user/set_user_data',
  GET_SETTINGS = '@@user/get_settings',
  SET_SETTINGS = '@@user/set_settings',
  GET_PROFILE_DATA = '@@user/get_profile_data',
  SET_PROFILE_DATA = '@@user/set_profile_data',
  UPDATE_PROFILE = '@@user/update_profile',
  UPDATE_SETTINGS = '@@user/update_settings',
  SUBSCRIBE_ON_NEWS = '@@user/subscribe_on_news',
  SET_SUBSCRIBE_ON_NEWS_STATUS = '@@user/subscribe_on_news_status',
  SET_ACTIVITY_FILTER_TYPE = '@@account/set_activity_filter_type',
  SEARCH_ACTIVITIES = '@@account/search_activities',
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
  currency?: Currencies;
  timeout?: number;
  email?: string;
  emailSubscribeStatus?: Statuses;
  theme: Themes;
}

export interface Update {
  title: string;
  excerpt?: string;
  link: string;
  hidden: boolean;
}

export interface UserState {
  userData?: UserData;
  profile: Profile;
  settings: Settings;
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
