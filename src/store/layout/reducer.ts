import { Reducer } from 'redux';
import { produce } from 'immer';

import { LayoutState, LayoutActionTypes } from './types';

export const initialState: LayoutState = {};

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LayoutActionTypes.SHOW_NOTIFICATION:
        draft.notification = action.payload;
        break;
      case LayoutActionTypes.REMOVE_NOTIFICATION:
        draft.notification = undefined;
        break;
      default:
        return state;
    }
  });
};

export { reducer as layoutReducer };
