import { Reducer } from 'redux';
import { produce } from 'immer';

import { UserActionTypes, UserState } from './types';
import { Currencies, Genders, TimeOuts } from '../../enums';

const initialState: UserState = {
  username: null,
  avatar: null,
  blockstackId: null,
  blockstackUsername: null,
  email: null,
  gender: Genders.incognito,
  currency: Currencies.USD,
  timeout: TimeOuts.ThreeMinutes,
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
      default:
        return draft;
    }
  });
};

export { reducer as userReducer };
