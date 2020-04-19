import { Reducer } from 'redux';
import { produce } from 'immer';

import { AccountState, AccountActionTypes } from './types';

import { toBTC } from '../../utils/common';

const TYPICAL_TX_SIZE = 226;

const initialState: AccountState = {
  accounts: null,
  rates: null,
  searchActivityStr: '',
  totalBalanceCurrency: null,
  recommendedBTCFee: 0,
  txDraftValues: null,
};

const reducer: Reducer<AccountState> = (
  state: AccountState = initialState,
  action
) => {
  return produce(state, (draft) => {
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
      case AccountActionTypes.SET_TOTAL_BALANCE_CURRENCY:
        draft.totalBalanceCurrency = action.payload;
        break;
      case AccountActionTypes.SET_RECOMMENDED_BTC_FEE:
        draft.recommendedBTCFee = toBTC(action.payload * TYPICAL_TX_SIZE);
        break;
      case AccountActionTypes.SET_TX_DRAFT_VALUES:
        draft.txDraftValues = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
