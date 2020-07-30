import { Reducer } from 'redux';
import { produce } from 'immer';

import { UserActionTypes, UserState } from './types';
import {
  ActivityFilterTypes,
} from '../../dictionaries';

const initialState: UserState = {
  authFinished: false,
  profile: null,
  settings: null,
  activityFilters: {
    type: ActivityFilterTypes.ShowAll,
    value: null,
    search: null,
  },
  emailSubscribeStatus: null,
  updates: null,
};

const reducer: Reducer<UserState> = (
  state: UserState = initialState,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UserActionTypes.SET_USER_DATA:
        draft.userData = action.payload;
        break;
      case UserActionTypes.SET_SETTINGS:
        draft.settings = action.payload;
        break;
      case UserActionTypes.SET_PROFILE:
        draft.profile = action.payload;
        break;
      case UserActionTypes.UPDATE_SETTINGS:
        draft.settings = {
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
        draft.emailSubscribeStatus = action.payload;
        break;
      case UserActionTypes.SUBSCRIBE_ON_NEWS:
        if (draft.settings) {
          draft.settings.email = action.payload;
        }
        break;
      case UserActionTypes.SET_ACTIVITY_FILTER_TYPE:
        draft.activityFilters = {
          ...action.payload,
          search: null,
        };
        break;
      case UserActionTypes.SEARCH_ACTIVITIES:
        draft.activityFilters.search = action.payload;
        break;
      case UserActionTypes.SET_AUTH_FINISHED:
        draft.authFinished = true;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as userReducer };
