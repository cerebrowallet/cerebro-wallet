import { Reducer } from 'redux';
import { produce } from 'immer';

import { normalizeArray } from '../../utils/utils';
import { AccountState, AccountActionTypes } from './types';

const initialState: AccountState = {
  accounts: {
    byIds: {},
    allIds: [],
  },
};

const reducer: Reducer<AccountState> = (
  state: AccountState = initialState,
  action
) => {
  return produce(state, draft => {
    switch (action.type) {
      case AccountActionTypes.SET_ACCOUNTS:
        if (action.payload.length === 0) {
          return draft;
        }

        draft.accounts = normalizeArray(action.payload, 'address');
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
