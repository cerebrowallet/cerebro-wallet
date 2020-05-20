import { Reducer } from 'redux';
import { produce } from 'immer';

import { LayoutState, LayoutActionTypes } from './types';

export const initialState: LayoutState = {
  theme: 'light',
};

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LayoutActionTypes.SET_THEME:
        draft.theme = action.payload;
        break;
      case LayoutActionTypes.SHOW_NOTIFICATION:
        draft.notification = action.payload;
        break;
      case LayoutActionTypes.REMOVE_NOTIFICATION:
        draft.notification = undefined;
        break;
      default:
        return state;
    }
  })
};

export { reducer as layoutReducer };
