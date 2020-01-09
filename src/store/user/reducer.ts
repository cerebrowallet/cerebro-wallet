import { Reducer } from 'redux';
import { produce } from 'immer';

import { UserActionTypes, UserState } from './types';
import { Currencies, Genders, TimeOuts } from '../../enums';

export const profileInitialState = {
  gender: Genders.incognito,
};

export const settingsInitialState = {
  currency: Currencies.USD,
  timeout: TimeOuts.ThirtyMinutes,
};

const initialState: UserState = {
  profile: profileInitialState,
  settings: settingsInitialState,
};

const reducer: Reducer<UserState> = (
  state: UserState = initialState,
  action
) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActionTypes.LOG_IN:
        return draft;
      case UserActionTypes.LOG_OUT:
        return draft;
      case UserActionTypes.SET_USER_DATA:
        return {
          ...draft,
          userData: {
            ...action.payload,
          },
        };
      default:
        return draft;
    }
  });
};

export { reducer as userReducer };
