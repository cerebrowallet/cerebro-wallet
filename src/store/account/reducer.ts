import { Reducer } from 'redux';
import { produce } from 'immer';

import { AccountState, AccountActionTypes } from './types';

import { toBTC } from '../../utils/common';

const TYPICAL_TX_SIZE = 226;

const initialState: AccountState = {
  accounts: null,
  rates: null,
  searchActivityStr: '',
  recommendedBTCFee: 0,
  createTxResult: null,
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
      case AccountActionTypes.SET_RECOMMENDED_BTC_FEE:
        draft.recommendedBTCFee = toBTC(action.payload * TYPICAL_TX_SIZE);
        break;
      case AccountActionTypes.ADD_TX: {
        if (draft.accounts) {
          const account = draft.accounts.byIds[action.payload.accountId];

          if (!account.transactions) {
            account.transactions = {
              byIds: {},
              allIds: [],
            }
          }

          account.transactions.allIds.push(action.payload.tx.hash);
          account.transactions.byIds[action.payload.tx.hash] = {
            ...action.payload.tx
          };
        }
        break;
      }
      case AccountActionTypes.ADD_TX_COMMENT_CONFIRM:
        if (draft.accounts) {
          const account = draft.accounts.byIds[action.payload.accountId];
          const tx = account?.transactions?.byIds[action.payload.txHash];

          if (tx) {
            tx.comment = action.payload.comment;
          }
        }
        break;
      case AccountActionTypes.SET_CREATE_TX_RESULT:
        draft.createTxResult = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
