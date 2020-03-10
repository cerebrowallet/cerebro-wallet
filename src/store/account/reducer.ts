import { Reducer } from 'redux';
import { produce } from 'immer';

import { AccountState, AccountActionTypes } from './types';

const initialState: AccountState = {
  accounts: null,
  rates: null,
  searchActivityStr: '',
};

const reducer: Reducer<AccountState> = (
  state: AccountState = initialState,
  action
) => {
  return produce(state, draft => {
    switch (action.type) {
      case AccountActionTypes.SET_ACCOUNTS:
        draft.accounts = action.payload;
        break;
      case AccountActionTypes.UPDATE_ACCOUNT: {
        if (draft.accounts) {
          const { update, accountId } = action.payload;
          const account = draft.accounts.byIds[accountId];

          if (account) {
            draft.accounts.byIds[accountId] = {
              ...account,
              ...update,
            };
          }
        }

        break;
      }
      case AccountActionTypes.SET_EXCHANGE_RATES:
        draft.rates = action.payload;
        break;
      case AccountActionTypes.SEARCH_ACTIVITY_BY_HASH:
        draft.searchActivityStr = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
