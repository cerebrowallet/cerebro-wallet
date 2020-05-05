import { action } from 'typesafe-actions';

import { Coins, Currencies } from '../../dictionaries';
import {
  AccountActionTypes,
  Account,
  ExchangeRates,
  UpdateAccountActionPayload,
} from './types';
import { TxDraftFormValues } from '../../components/shared/Send/SendForm/SendForm';

export const getAccounts = () => action(AccountActionTypes.GET_ACCOUNTS);
export const setAccounts = (accounts: {
  allIds: string[];
  byIds: { [accountId: string]: Account };
}) => action(AccountActionTypes.SET_ACCOUNTS, accounts);
export const createAccount = (payload: Coins) =>
  action(AccountActionTypes.CREATE_ACCOUNT, payload);
export const updateAccount = (payload: UpdateAccountActionPayload) =>
  action(AccountActionTypes.UPDATE_ACCOUNT, payload);
export const updateAccountInGaia = (payload: UpdateAccountActionPayload) =>
  action(AccountActionTypes.UPDATE_ACCOUNT_IN_GAIA, payload);
export const deleteAccount = (payload: string) =>
  action(AccountActionTypes.DELETE_ACCOUNT, payload);
export const getExchangeRates = () =>
  action(AccountActionTypes.GET_EXCHANGE_RATES);
export const setExchangeRates = (rates: ExchangeRates) =>
  action(AccountActionTypes.SET_EXCHANGE_RATES, rates);
export const getAccountDetails = (payload: string) =>
  action(AccountActionTypes.GET_ACCOUNT_DETAILS, payload);
export const searchActivityByHash = (searchStr: string) =>
  action(AccountActionTypes.SEARCH_ACTIVITY_BY_HASH, searchStr);
export const setTotalBalanceCurrency = (currency: Currencies) =>
  action(AccountActionTypes.SET_TOTAL_BALANCE_CURRENCY, currency);
export const getTransactionDetails = (payload: {
  accountId: string;
  txHash: string;
}) => action(AccountActionTypes.GET_TRANSACTION_DETAILS, payload);
export const getRecommendedBTCFee = () =>
  action(AccountActionTypes.GET_RECOMMENDED_BTC_FEE);
export const setRecommendedBTCFee = (payload: any) =>
  action(AccountActionTypes.SET_RECOMMENDED_BTC_FEE, payload);
export const setTxDraftValues = (payload: TxDraftFormValues | null) =>
  action(AccountActionTypes.SET_TX_DRAFT_VALUES, payload);
export const makeTransaction = () =>
  action(AccountActionTypes.MAKE_TRANSACTION);
export const addTx = (payload: {
  accountId: string;
  tx: {
    amount: number;
    hash: string;
    date: string;
  }
}) => action(AccountActionTypes.ADD_TX, payload);
