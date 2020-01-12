import { Reducer } from 'redux';
import { produce } from 'immer';

import { UserActionTypes, UserState } from './types';
import { Genders } from '../../enums';

export const profileInitialState = {
  gender: Genders.incognito,
};

export const settingsInitialState = {};

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
        draft.userData = action.payload;
        break;
      case UserActionTypes.SET_SETTINGS:
        draft.settings = action.payload;
        break;
      case UserActionTypes.SET_PROFILE_DATA:
        draft.profile = action.payload;
        break;
      case UserActionTypes.UPDATE_SETTINGS:
        draft.profile = {
          ...draft.settings,
          ...action.payload.update,
        };
        break;
      case UserActionTypes.UPDATE_PROFILE:
        draft.profile = {
          ...draft.profile,
          ...action.payload.update,
        };
        break;
      case UserActionTypes.SET_SUBSCRIBE_ON_NEWS_STATUS:
        draft.settings.emailSubscribeStatus = action.payload.status;
        break;
      case UserActionTypes.SUBSCRIBE_ON_NEWS:
        draft.settings.email = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as userReducer };
