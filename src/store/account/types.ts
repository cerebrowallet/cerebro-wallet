import { Coins } from '../../dictionaries';

export enum AccountActionTypes {
  GET_ACCOUNTS = '@@account/get_accounts',
  SET_ACCOUNTS = '@@account/set_accounts',
  CREATE_ACCOUNT = '@@account/create_account',
  UPDATE_ACCOUNT = '@@account/update_account',
  UPDATE_ACCOUNT_IN_GAIA = '@@account/update_account_in_gaia',
  DELETE_ACCOUNT = '@@account/delete_account',
  GET_EXCHANGE_RATES = '@@account/get_exchange_rates',
  SET_EXCHANGE_RATES = '@@account/set_exchange_rates',
  GET_ACCOUNT_BALANCE = '@account/get_account_balance',
}

export interface Account {
  address: string;
  privateKey?: string;
  name: string;
  balance: number;
  coin: Coins;
  id: string;
}

export interface Accounts {
  byIds: {
    [address: string]: Account;
  };
  allIds: string[];
}

export interface ExchangeRates {
  [currency: string]: {
    [currency: string]: number;
  };
}

export interface AccountState {
  accounts: Accounts;
  rates: ExchangeRates | null;
}

export interface UpdateAccountActionPayload {
  accountId: string;
  update: {
    [field: string]: any;
  };
  saveToGaia?: boolean;
}
