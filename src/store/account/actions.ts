import { action } from 'typesafe-actions';

import { Currencies } from '../../enums';
import { AccountActionTypes, Account } from './types';

export const getAccounts = () => action(AccountActionTypes.GET_ACCOUNTS);
export const setAccounts = (accounts: Account[]) => action(AccountActionTypes.SET_ACCOUNTS, accounts);
export const createNewAccount = (currency: Currencies) =>
  action(AccountActionTypes.CREATE_NEW_ACCOUNT, currency);
