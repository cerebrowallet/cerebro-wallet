import { action } from 'typesafe-actions';

import { Coins } from '../../dictionaries';
import {
  AccountActionTypes,
  Account,
  ExchangeRates,
  UpdateAccountActionPayload,
} from './types';

export const getAccounts = () => action(AccountActionTypes.GET_ACCOUNTS);
export const setAccounts = (accounts: {
  allIds: string[];
  byIds: { [accountId: string]: Account };
}) => action(AccountActionTypes.SET_ACCOUNTS, accounts);
export const createAccount = (payload: Coins) =>
  action(AccountActionTypes.CREATE_ACCOUNT, payload);
export const updateAccount = (payload: UpdateAccountActionPayload) =>
  action(AccountActionTypes.UPDATE_ACCOUNT, payload);
export const getExchangeRates = () =>
  action(AccountActionTypes.GET_EXCHANGE_RATES);
export const setExchangeRates = (rates: ExchangeRates) =>
  action(AccountActionTypes.SET_EXCHANGE_RATES, rates);
