import { Currencies } from '../../enums';

enum Genders {
  incognito = 'incognito',
  male = 'male',
  female = 'female',
}

export enum UserActionTypes {
  LOG_IN = '@@user/log_in',
  LOG_OUT = '@@user/log_out',
}

export interface UserState {
  username: string | null;
  avatar: string | null;
  blockstackId: string | null;
  blockstackUsername: string | null;
  email: string | null;
  gender: Genders;
  currency: Currencies;
  timeout: number;
}
