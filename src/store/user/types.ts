import { UserData } from 'blockstack/lib/auth/authApp';

import { Currencies, Genders } from '../../enums';

export enum UserActionTypes {
  LOG_IN = '@@user/log_in',
  LOG_OUT = '@@user/log_out',
  SET_USER_DATA = '@@user/set_user_data',
  GET_SETTINGS = '@@user/get_settings',
  SET_SETTINGS = '@@user/set_settings',
  GET_PROFILE_DATA = '@@user/get_profile_data',
  SET_PROFILE_DATA= '@@user/set_profile_data',
}

export interface Profile {
  username?: string;
  gender: Genders;
}

export interface Settings {
  currency: Currencies;
  timeout: number;
  email?: string;
}

export interface UserState {
  userData?: UserData;
  profile: Profile;
  settings: Settings;
}
