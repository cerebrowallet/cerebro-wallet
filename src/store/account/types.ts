export enum AccountActionTypes {
  GET_ACCOUNTS = '@@account/get_accounts',
  SET_ACCOUNTS = '@@account/set_accounts',
  CREATE_NEW_ACCOUNT = '@@account/create_new_account',
}

export interface Account {
  publicAddress: string;
  name: string;
  balance: number;
}

export interface AccountState {
  accounts: {
    byIds: {
      [address: string]: Account
    },
    allIds: string[]
  };
}
