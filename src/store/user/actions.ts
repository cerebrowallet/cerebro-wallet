import { action } from 'typesafe-actions';

import { UserActionTypes } from './types';

export const logIn = () => action(UserActionTypes.LOG_IN);
export const logOut = () => action(UserActionTypes.LOG_OUT);
export const setUserData = ({
  username,
  email,
  id,
  name,
  avatarUrl,
}: {
  username: string;
  email?: string;
  id: string;
  name?: string;
  avatarUrl?: string;
}) =>
  action(UserActionTypes.SET_USER_DATA, {
    username,
    email,
    id,
    name,
    avatarUrl,
  });
