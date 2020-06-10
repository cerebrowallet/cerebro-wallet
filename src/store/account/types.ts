import {
  Coins,
  ActivityTypes,
  Statuses,
  ChartPeriods,
} from '../../dictionaries';

export enum AccountActionTypes {
  GET_ACCOUNTS = '@@account/get_accounts',
  SET_ACCOUNTS = '@@account/set_accounts',
  GET_ACCOUNT_TXS = '@@account/get_account_txs',
  SET_ACCOUNT_TXS = '@@account/set_account_txs',
  CREATE_ACCOUNT = '@@account/create_account',
  CREATE_ACCOUNT_SUCCESS = '@@account/create_account_success',
  CREATE_ACCOUNT_FAIL = '@@account/create_account_fail',
  ADD_ACCOUNT = '@@account/add_account',
  UPDATE_ACCOUNT = '@@account/update_account',
  DELETE_ACCOUNT = '@@account/delete_account',
  GET_EXCHANGE_RATES = '@@account/get_exchange_rates',
  SET_EXCHANGE_RATES = '@@account/set_exchange_rates',
  GET_ACCOUNT_DETAILS = '@@account/get_account_details',
  SEARCH_ACTIVITY_BY_HASH = '@@account/search_activity_by_hash',
  GET_TX_DETAILS = '@@account/get_tx_details',
  GET_RECOMMENDED_BTC_FEE = '@@account/get_recommended_btc_fee',
  SET_RECOMMENDED_BTC_FEE = '@@account/set_recommended_btc_fee',
  MAKE_TX = '@account/make_tx',
  ADD_TX = '@@account/add_tx',
  UPDATE_TX = '@@account/update_tx',
  ADD_TX_COMMENT = '@@account/add_tx_comment',
  ADD_TX_COMMENT_CONFIRM = '@@account/add_tx_comment_confirm',
  SET_CREATE_TX_RESULT = '@@account/set_create_tx_result',
  GET_CHARTS = '@@account/get_charts',
  SET_CHARTS = '@@account/set_charts',
  RESET_CHARTS = '@@account/reset_charts',
  IMPORT_PRIVATE_KEY = '@@account/import_private_key',
  EXPORT_PRIVATE_KEY = '@@account/export_private_key',
  IMPORT_PUBLIC_ADDRESS = '@@account/import_public_address',
}

export interface Transaction {
  hash: string;
  amount: number;
  date: string;
  height?: number;
  confirmations?: number;
  comment?: string;
  from?: string;
  to?: string;
  fee?: string;
}

export interface Transactions {
  byIds: {
    [txHash: string]: Transaction;
  };
  allIds: string[];
}

export interface UXTO {
  transaction_hash: string;
  index: number;
  txHex: string;
}

export enum KeyTypes {
  Mnemonic,
  PrivateKey,
  WIF
}

export enum AddressTypes {
  SegWit,
  P2PKH,
}

export interface Account {
  id: string;
  addressType: AddressTypes | null;
  address: string;
  name: string;
  coin: Coins;
  derivationPath: string | null;
  txComments: {
    [txHash: string]: string;
  };
  keyType: KeyTypes | null;
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

export interface ChartFilters {
  period: ChartPeriods;
  coinA: Coins;
  coinB?: Coins;
}

export interface ChartData {
  [coin: string]: { dateTime: number; value: number; currency: string }[];
}

export interface AccountState {
  accounts: Accounts | null;
  txs: {
    [accountId: string]: Transactions;
  };
  rates: ExchangeRates | null;
  searchActivityStr: string;
  recommendedBTCFee: number;
  createTxResult: {
    status: Statuses.Success | Statuses.Fail;
    txHash?: string;
  } | null;
  chart: {
    data: ChartData | null;
    filters: ChartFilters;
  };
}

export interface UpdateAccountActionPayload {
  accountId: string;
  update: {
    [field: string]: any;
  };
  notifications?: {
    success?: string;
    error?: string;
    start?: string;
  }
}

export interface Activity {
  id: string;
  type: ActivityTypes;
  date: Date;
}

export interface TransactionActivity extends Activity {
  accountId: string;
  amount: number;
  amountInLocal: number;
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

export interface BlockChairTx {
  hash: string;
  balance_change: number;
  time: string;
}
