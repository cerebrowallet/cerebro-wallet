import { action } from 'typesafe-actions';

import { Coins, Statuses, ChartPeriods } from '../../dictionaries';
import {
  AccountActionTypes,
  ExchangeRates,
  UpdateAccountActionPayload,
  Accounts,
  Transactions,
  AddressTypes,
  Account,
  KeyTypes,
} from './types';
import { TxDraftFormValues } from '../../components/shared/Send/Send';
import { ImportPublicAddressValues } from '../../pages/accounts/ManageAccount/ImportPublicAddress';
import { ImportPrivateKeyFormValues } from '../../pages/accounts/ManageAccount/ImportPrivateKey';

export const getAccounts = () => action(AccountActionTypes.GET_ACCOUNTS);
export const setAccounts = (accounts: Accounts) =>
  action(AccountActionTypes.SET_ACCOUNTS, accounts);
export const getAccountTxs = (accountId: string) =>
  action(AccountActionTypes.GET_ACCOUNT_TXS, { accountId });
export const setAccountTxs = (accountId: string, txs: Transactions) =>
  action(AccountActionTypes.SET_ACCOUNT_TXS, { accountId, txs });
export const createAccount = (payload: {
  coin: Coins;
  addressType: AddressTypes;
  name?: string;
}) => action(AccountActionTypes.CREATE_ACCOUNT, payload);
export const updateAccount = (payload: UpdateAccountActionPayload) =>
  action(AccountActionTypes.UPDATE_ACCOUNT, payload);
export const addAccount = (account: Account) =>
  action(AccountActionTypes.ADD_ACCOUNT, account);
export const deleteAccount = (accountId: string, accountName: string) =>
  action(AccountActionTypes.DELETE_ACCOUNT, { accountId, accountName });
export const getExchangeRates = () =>
  action(AccountActionTypes.GET_EXCHANGE_RATES);
export const setExchangeRates = (rates: ExchangeRates) =>
  action(AccountActionTypes.SET_EXCHANGE_RATES, rates);
export const getAccountDetails = (payload: string) =>
  action(AccountActionTypes.GET_ACCOUNT_DETAILS, payload);
export const searchActivityByHash = (searchStr: string) =>
  action(AccountActionTypes.SEARCH_ACTIVITY_BY_HASH, searchStr);
export const getTxDetails = (payload: { accountId: string; txHash: string }) =>
  action(AccountActionTypes.GET_TX_DETAILS, payload);
export const getRecommendedBTCFee = () =>
  action(AccountActionTypes.GET_RECOMMENDED_BTC_FEE);
export const setRecommendedBTCFee = (payload: any) =>
  action(AccountActionTypes.SET_RECOMMENDED_BTC_FEE, payload);
export const makeTx = (payload: TxDraftFormValues) =>
  action(AccountActionTypes.MAKE_TX, payload);
export const updateTx = (
  accountId: string,
  txHash: string,
  update: { [name: string]: any }
) => action(AccountActionTypes.UPDATE_TX, { accountId, txHash, update });
export const addTx = (payload: {
  accountId: string;
  tx: {
    amount: number;
    hash: string;
    date: string;
  };
}) => action(AccountActionTypes.ADD_TX, payload);
export const addTxComment = (payload: {
  accountId: string;
  txHash: string;
  comment: string;
}) => action(AccountActionTypes.ADD_TX_COMMENT, payload);
export const addTxCommentConfirm = (payload: {
  accountId: string;
  txHash: string;
  comment: string;
}) => action(AccountActionTypes.ADD_TX_COMMENT_CONFIRM, payload);
export const setCreateTxResult = (
  payload: { status: Statuses; txHash?: string } | null
) => action(AccountActionTypes.SET_CREATE_TX_RESULT, payload);
export const getCharts = (payload: {
  coinA?: Coins;
  coinB?: Coins;
  period?: ChartPeriods;
}) => action(AccountActionTypes.GET_CHARTS, payload);
export const setCharts = (
  payload: {
    [coin: string]: { dateTime: number; value: number }[];
  } | null
) => action(AccountActionTypes.SET_CHARTS, payload);
export const resetChart = () => action(AccountActionTypes.RESET_CHARTS);
export const importPrivateKey = (payload: ImportPrivateKeyFormValues) =>
  action(AccountActionTypes.IMPORT_PRIVATE_KEY, payload);
export const exportPrivateKey = (accountId: string, keyType: KeyTypes) =>
  action(AccountActionTypes.EXPORT_PRIVATE_KEY, { accountId, keyType });
export const importPublicAddress = (payload: ImportPublicAddressValues) =>
  action(AccountActionTypes.IMPORT_PUBLIC_ADDRESS, payload);
