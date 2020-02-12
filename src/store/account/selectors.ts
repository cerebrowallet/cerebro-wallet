import { createSelector } from 'reselect';

import { ApplicationState } from '../index';
import { Account } from './types';
import { Currencies, Coins } from '../../dictionaries';
import { getSettings } from '../user/selectors';

export const getAccounts = (state: ApplicationState) => state.account.accounts;
export const getAccountsList = createSelector(
  getAccounts,
  accounts =>
    accounts.allIds.reduce((list: Account[], accountId: string) => {
      const account: Account = accounts.byIds[accountId];
      const l = list;

      l.push({
        id: account.id,
        address: account.address,
        balance: account.balance,
        name: account.name,
        coin: account.coin,
      });

      return l;
    }, [])
);
export const getAccountById = (accountId: string) =>
  createSelector(
    getAccounts,
    accounts => accounts.byIds[accountId] || null
  );
export const getExchangeRates = (state: ApplicationState) =>
  state.account.rates;
export const getExchangeRate = (coin: Coins, currency: Currencies) =>
  createSelector(
    getExchangeRates,
    rates => rates && rates[coin][currency]
  );
export const getBalanceInLocalCurrency = (coin: Coins, balance: number) =>
  createSelector(
    [getExchangeRates, getSettings],
    (rates, settings) =>
      rates && settings.currency ? balance * rates[coin][settings.currency] : 0
  );
export const getTotalBalance = (currency?: Currencies) =>
  createSelector(
    [getAccounts, getExchangeRates],
    (accounts, rates) => {
      if (!rates || !currency) {
        return 0;
      }

      return accounts.allIds.reduce((acc, accountId) => {
        let balance = acc;
        const account = accounts.byIds[accountId];
        balance += account.balance * rates[account.coin][currency];
        return balance;
      }, 0);
    }
  );
