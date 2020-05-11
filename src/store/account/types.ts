import { Coins, ActivityTypes, Currencies, Statuses } from '../../dictionaries';

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
  GET_TRANSACTION_DETAILS = '@@account/get_transaction_details',
  GET_RECOMMENDED_BTC_FEE = '@@account/get_recommended_btc_fee',
  SET_RECOMMENDED_BTC_FEE = '@@account/set_recommended_btc_fee',
  MAKE_TRANSACTION = '@account/make_transaction',
  ADD_TX = '@@account/add_tx',
  ADD_TX_COMMENT = '@@account/add_tx_comment',
  ADD_TX_COMMENT_CONFIRM = '@@account/add_tx_comment_confirm',
  SET_CREATE_TX_RESULT = '@@account/set_create_tx_result',
}

export interface Transaction {
  hash: string;
  amount: number;
  height: number;
  confirmations: number;
  date: string;
  spent: boolean;
  comment?: string;
  from: string;
  to: string;
  fee: string;
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
  recommendedBTCFee: number;
  createTxResult: {
    status: Statuses.Success | Statuses.Fail;
    txHash?: string;
  } | null;
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
  amountInLocalCurrency?: number;
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
