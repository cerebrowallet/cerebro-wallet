import { action } from 'typesafe-actions';

import { UserActionTypes } from './types';

export const logIn = () => action(UserActionTypes.LOG_IN);
export const logOut = () => action(UserActionTypes.LOG_OUT);
