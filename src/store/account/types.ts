import { Coins } from '../../dictionaries';

export enum AccountActionTypes {
  GET_ACCOUNTS = '@@account/get_accounts',
  SET_ACCOUNTS = '@@account/set_accounts',
  CREATE_ACCOUNT = '@@account/create_account',
  GET_EXCHANGE_RATES = '@@account/get_exchange_rates',
  SET_EXCHANGE_RATES = '@@account/set_exchange_rates',
}

export interface Account {
  address: string;
  privateKey?: string;
  name: string;
  balance: number;
  coin: Coins;
  id: string;
}

export interface ExchangeRates {
  [currency: string]: {
    [currency: string]: number;
  }
}

export interface AccountState {
  accounts: {
    byIds: {
      [address: string]: Account;
    };
    allIds: string[];
  };
  rates: ExchangeRates | null;
}
