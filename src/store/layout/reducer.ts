import { Reducer } from 'redux';
import { LayoutState, LayoutActionTypes } from './types';

export const initialState: LayoutState = {
  theme: 'light',
};

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_THEME: {
      return { ...state, theme: action.payload };
    }
    case LayoutActionTypes.SHOW_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload,
      };
    }
    case LayoutActionTypes.REMOVE_NOTIFICATION: {
      return { ...state, notification: undefined };
    }
    default: {
      return state;
    }
  }
};

export { reducer as layoutReducer };
