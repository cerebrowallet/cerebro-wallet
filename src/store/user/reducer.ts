import { Reducer } from 'redux';
import { produce } from 'immer';

import { UserActionTypes, UserState } from './types';
import { Currencies, Genders, TimeOuts, Statuses } from '../../enums';

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
        return {
          ...draft,
          userData: {
            ...action.payload,
          },
        };
      case UserActionTypes.SET_SETTINGS:
        return {
          ...draft,
          settings: {
            ...draft.settings,
            ...action.payload,
          },
        };
      case UserActionTypes.SET_PROFILE_DATA:
        return {
          ...draft,
          profile: {
            ...action.payload,
          },
        };
      case UserActionTypes.UPDATE_SETTINGS:
        return {
          ...draft,
          settings: {
            ...draft.settings,
            ...action.payload.update,
          },
        };
      case UserActionTypes.UPDATE_PROFILE:
        return {
          ...draft,
          profile: {
            ...draft.profile,
            ...action.payload.update,
          },
        };
      case UserActionTypes.SET_SUBSCRIBE_ON_NEWS_STATUS:
        return {
          ...draft,
          settings: {
            ...draft.settings,
            emailSubscribeStatus: action.payload.status,
          },
        };
      case UserActionTypes.SUBSCRIBE_ON_NEWS: {
        draft.settings.email = action.payload;
        break;
      }
      default:
        return draft;
    }
  });
};

export { reducer as userReducer };
