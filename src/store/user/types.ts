import { Currencies } from '../../enums';

enum Genders {
  incognito = 'incognito',
  male = 'male',
  female = 'female',
}

export enum UserActionTypes {
  LOG_IN = '@@user/log_in',
  LOG_OUT = '@@user/log_out',
  SET_USER_DATA = '@@user/set_user_data',
}

export interface UserState {
  username?: string;
  avatarUrl?: string;
  email?: string;
  name?: string;
  id?: string;
  gender: Genders;
  currency: Currencies;
  timeout: number;
}
