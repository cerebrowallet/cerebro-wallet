import { Reducer } from 'redux';
import { produce } from 'immer';

import { AccountActionTypes, AccountState } from './types';
import { toBTC } from '../../utils/common';
import { ChartPeriods, Coins } from '../../dictionaries';

const TYPICAL_TX_SIZE = 226;

const chartInitial = {
  data: null,
  filters: {
    period: ChartPeriods.ThreeMonth,
    coinA: Coins.BTC,
  },
};

const initialState: AccountState = {
  accounts: null,
  txs: {},
  rates: null,
  searchActivityStr: '',
  recommendedBTCFee: 0,
  createTxResult: null,
  chart: chartInitial,
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
      case AccountActionTypes.ADD_ACCOUNT:
        if (!draft.accounts) {
          draft.accounts = {
            byIds: {},
            allIds: [],
          };
        }
        draft.accounts.byIds[action.payload.id] = {
          ...action.payload,
          txs: [],
        };
        draft.accounts.allIds.push(action.payload.id);
        break;
      case AccountActionTypes.DELETE_ACCOUNT:
        if (draft.accounts) {
          delete draft.accounts.byIds[action.payload.accountId];
          draft.accounts.allIds = draft.accounts.allIds.filter(
            (id) => id !== action.payload.accountId
          );
        }
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
      case AccountActionTypes.SET_ACCOUNT_TXS: {
        const { accountId, txs } = action.payload;
        draft.txs[accountId] = txs;
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
        const { accountId, tx } = action.payload;

        if (!draft.txs) {
          draft.txs = {};
        }

        if (!draft.txs[accountId]) {
          draft.txs[accountId] = {
            byIds: {},
            allIds: [],
          };
        }

        draft.txs[accountId].byIds[tx.hash] = tx;
        draft.txs[accountId].allIds.push(tx.hash);

        break;
      }
      case AccountActionTypes.UPDATE_TX: {
        const { accountId, txHash, update } = action.payload;

        if (draft.txs?.[accountId]?.byIds?.[txHash]) {
          draft.txs[accountId].byIds[txHash] = {
            ...draft.txs[accountId].byIds[txHash],
            ...update,
          };
        }

        break;
      }
      case AccountActionTypes.ADD_TX_COMMENT: {
        const { accountId, txHash, comment } = action.payload;

        if (draft?.accounts?.byIds?.[accountId]) {
          if (!draft.accounts.byIds[accountId].txComments) {
            draft.accounts.byIds[accountId].txComments = {};
          }

          draft.accounts.byIds[accountId].txComments[txHash] = comment;
        }

        break;
      }
      case AccountActionTypes.SET_CREATE_TX_RESULT:
        draft.createTxResult = action.payload;
        break;
      case AccountActionTypes.GET_CHARTS:
        draft.chart.filters = {
          ...draft.chart.filters,
          ...action.payload,
        };
        break;
      case AccountActionTypes.SET_CHARTS:
        draft.chart.data = action.payload;
        break;
      case AccountActionTypes.RESET_CHARTS:
        draft.chart = chartInitial;
        break;
      default:
        return draft;
    }
  });
};

export { reducer as accountReducer };
