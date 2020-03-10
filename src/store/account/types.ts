import { Coins, ActivityTypes, Currencies } from '../../dictionaries';

export enum AccountActionTypes {
  GET_ACCOUNTS = '@@account/get_accounts',
  SET_ACCOUNTS = '@@account/set_accounts',
  CREATE_ACCOUNT = '@@account/create_account',
  UPDATE_ACCOUNT = '@@account/update_account',
  UPDATE_ACCOUNT_IN_GAIA = '@@account/update_account_in_gaia',
  DELETE_ACCOUNT = '@@account/delete_account',
  GET_EXCHANGE_RATES = '@@account/get_exchange_rates',
  SET_EXCHANGE_RATES = '@@account/set_exchange_rates',
  GET_ACCOUNT_DETAILS = '@@account/get_account_details',
  SEARCH_ACTIVITY_BY_HASH = '@@account/search_activity_by_hash',
  SET_TOTAL_BALANCE_CURRENCY = '@@account/set_total_balance_currency',
}

export interface Transaction {
  hash: string;
  amount: number;
  height: number;
  confirmations: number;
  date: string;
  spent: boolean;
}

export interface Account {
  address: string;
  privateKey?: string;
  name: string;
  balance: number;
  coin: Coins;
  id: string;
  transactions?: {
    byIds: {
      [transactionId: string]: Transaction;
    };
    allIds: string[];
  };
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
  accounts: Accounts | null;
  rates: ExchangeRates | null;
  searchActivityStr: string;
  totalBalanceCurrency: Currencies | null;
}

export interface UpdateAccountActionPayload {
  accountId: string;
  update: {
    [field: string]: any;
  };
  saveToGaia?: boolean;
}

export interface Activity {
  id: string;
  type: ActivityTypes;
  date: Date;
}

export interface TransactionActivity extends Activity {
  accountId: string;
  amount: number;
  coin: Coins;
  hash: string;
  comment?: string;
}

export interface BlogPostActivity extends Activity {
  title: string;
  excerpt: string;
  link?: string;
  closable?: boolean;
}

export type Activities = Activity | TransactionActivity | BlogPostActivity;
