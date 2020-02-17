import { Reducer } from 'redux';
import { produce } from 'immer';

import { normalizeArray } from '../../utils/common';
import { AccountState, AccountActionTypes } from './types';
import {act} from "react-dom/test-utils";

const initialState: AccountState = {
  accounts: {
    byIds: {},
    allIds: [],
  },
  rates: null,
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

        draft.accounts = action.payload;
        break;
      case AccountActionTypes.UPDATE_ACCOUNT: {
        const { update, accountId } = action.payload;
        const account = draft.accounts.byIds[accountId];

        if (account) {
          draft.accounts.byIds[accountId] = {
            ...account,
            ...update,
          };
        }

        break;
      }
      case AccountActionTypes.SET_EXCHANGE_RATES:
        draft.rates = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
