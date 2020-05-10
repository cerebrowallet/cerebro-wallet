import { createSelector } from 'reselect';
import { set } from 'date-fns';

import { ApplicationState } from '../index';
import { Account, Activities, Transaction, TransactionActivity } from './types';
import {
  ActivityFilterTypes,
  ActivityTypes,
  Coins,
  Currencies,
  CurrencySymbols,
} from '../../dictionaries';
import { getActivityFilters, getSettings, getUpdates } from '../user/selectors';
import { groupBy, round } from '../../utils/common';

export const getTotalBalanceCurrency = (state: ApplicationState) =>
  state.account.totalBalanceCurrency;
export const getAccounts = (state: ApplicationState) => state.account.accounts;
export const getAccountsList = createSelector(getAccounts, (accounts) =>
  accounts
    ? accounts.allIds.reduce((list: Account[], accountId: string) => {
        const l = list;
        l.push(accounts.byIds[accountId]);
        return l;
      }, [])
    : []
);
export const getExchangeRates = (state: ApplicationState) =>
  state.account.rates;
export const getAccountsOptions = createSelector(
  [getAccountsList, getSettings, getExchangeRates],
  (list, settings, rates) =>
    list.map((account: Account) => {
      let balance = `${account.balance} ${account.coin}`;

      if (settings.currency && rates) {
        balance += ` / ${CurrencySymbols[settings.currency]}${round(
          account.balance * rates[account.coin][settings.currency]
        )}`;
      }

      return {
        name: account.name,
        address: account.address,
        id: account.id,
        balance,
      };
    })
);
export const getAccountById = (accountId?: string | null) =>
  createSelector(getAccounts, (accounts) =>
    accounts && accountId ? accounts.byIds[accountId] : null
  );
export const getExchangeRate = (coin: Coins) =>
  createSelector([getExchangeRates, getSettings], (rates, settings) => {
    const currency = settings.currency;

    if (!currency || !rates || !rates[coin]) {
      return 0;
    }

    return rates[coin][currency];
  });
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
      accounts.forEach((account) => {
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
                !transaction.hash
                  .toLowerCase()
                  .includes(searchByHashStr.toLowerCase()) &&
                !account.address
                  .toLowerCase()
                  .includes(searchByHashStr.toLowerCase())
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
                comment: transaction.comment,
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
export const getTransactionById = (accountId: string, transactionId?: string) =>
  createSelector(
    [getAccounts, getExchangeRates, getSettings],
    (accounts, rates, settings) => {
      if (!transactionId) {
        return null;
      }

      const account = accounts && accounts.byIds[accountId];

      if (!account || !settings || !rates) {
        return null;
      }

      return account.transactions && account.transactions.byIds[transactionId]
        ? {
            ...account.transactions.byIds[transactionId],
            amountInLocalCurrency: settings.currency
              ? round(
                  account.transactions.byIds[transactionId].amount *
                    rates[account.coin][settings.currency]
                )
              : 0,
          }
        : null;
    }
  );
export const getRecommendedBTCFee = (state: ApplicationState) =>
  state.account.recommendedBTCFee;
export const getTxComment = (accountId: string, txHash: string) =>
  createSelector(getAccountById(accountId), (account) => {
    if (
      !account ||
      !account?.transactions?.byIds[txHash] ||
      !account?.transactions?.byIds[txHash].comment
    ) {
      return '';
    }

    return account.transactions.byIds[txHash].comment;
  });
export const getCreateTxResult = (state: ApplicationState) => state.account.createTxResult;
