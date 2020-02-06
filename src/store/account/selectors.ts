import { ApplicationState } from '../index';

export const getAccounts = (state: ApplicationState) => state.account.accounts;
