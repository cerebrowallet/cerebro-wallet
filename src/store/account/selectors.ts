import { createSelector } from 'reselect';
import { set } from 'date-fns';

import { ApplicationState } from '../index';
import { Account, Transaction, TransactionActivity, Activities } from './types';
import {
  ActivityFilterTypes,
  ActivityTypes,
  Coins,
  Currencies,
} from '../../dictionaries';
import { getActivityFilters, getSettings, getUpdates } from '../user/selectors';
import { groupBy, round } from '../../utils/common';

export const getTotalBalanceCurrency = (state: ApplicationState) =>
  state.account.totalBalanceCurrency;
export const getAccounts = (state: ApplicationState) => state.account.accounts;
export const getAccountsList = createSelector(
  getAccounts,
  accounts =>
    accounts
      ? accounts.allIds.reduce((list: Account[], accountId: string) => {
          const account: Account = accounts.byIds[accountId];
          const l = list;

          l.push({
            id: account.id,
            address: account.address,
            balance: account.balance,
            name: account.name,
            coin: account.coin,
            transactions: account.transactions,
          });

          return l;
        }, [])
      : []
);
export const getAccountById = (accountId?: string) =>
  createSelector(
    getAccounts,
    accounts => (accounts && accountId ? accounts.byIds[accountId] : null)
  );
export const getExchangeRates = (state: ApplicationState) =>
  state.account.rates;
export const getExchangeRate = (coin: Coins, currency: Currencies) =>
  createSelector(
    getExchangeRates,
    rates => rates && rates[coin][currency]
  );
export const getTotalBalance = createSelector(
  [getAccounts, getExchangeRates, getTotalBalanceCurrency],
  (accounts, rates, currency) => {
    if (!accounts || !rates || !currency) {
      return 0;
    }

    return round(
      accounts.allIds.reduce((acc, accountId) => {
        let balance = acc;
        const account = accounts.byIds[accountId];
        balance += account.balance * rates[account.coin][currency];
        return balance;
      }, 0)
    );
  }
);
export const getSearchByHashStr = (state: ApplicationState) =>
  state.account.searchActivityStr;
export const getActivities = createSelector(
  [
    getActivityFilters,
    getAccountsList,
    getUpdates,
    getSettings,
    getExchangeRates,
    getSearchByHashStr,
  ],
  (filters, accounts, updates, settings, rates, searchByHashStr) => {
    let results: Activities[] = [];

    if (filters.type !== ActivityFilterTypes.Updates && accounts) {
      accounts.forEach(account => {
        if (
          filters.type === ActivityFilterTypes.Account &&
          filters.value !== account.id
        ) {
          return;
        }

        if (account.transactions) {
          const transactions: Transaction[] = Object.values(
            account.transactions.byIds
          );

          const activities: TransactionActivity[] = transactions.reduce(
            (transactions: TransactionActivity[], transaction: Transaction) => {
              const acc = transactions;

              if (
                searchByHashStr &&
                !transaction.hash.includes(searchByHashStr)
              ) {
                return acc;
              }

              acc.push({
                id: transaction.hash,
                type: ActivityTypes.Transaction,
                amount:
                  rates && settings.currency
                    ? round(
                        transaction.amount *
                          rates[account.coin][settings.currency]
                      )
                    : 0,
                hash: transaction.hash,
                accountId: account.id,
                date: set(new Date(transaction.date), {
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
                  milliseconds: 0,
                }),
                coin: account.coin,
              });

              return acc;
            },
            []
          );

          results = results.concat(activities);
        }
      });
    }

    const groupedByDay: [string, Activities[]][] = Object.entries(
      groupBy(results, 'date')
    );

    return groupedByDay.reduce(
      (
        items: Activities[],
        [day, dayActivities]: [string, Activities[]],
        i: number
      ) => [
        ...items,
        {
          id: `day-${i}-${day}`,
          date: new Date(day),
          type: ActivityTypes.Date,
          totalAmount: round(
            dayActivities.reduce((sum, activity) => {
              if (activity.type === ActivityTypes.Transaction) {
                const transaction = activity as TransactionActivity;
                return (sum += transaction.amount);
              }

              return sum;
            }, 0)
          ),
        },
        ...dayActivities,
      ],
      []
    );
  }
);
