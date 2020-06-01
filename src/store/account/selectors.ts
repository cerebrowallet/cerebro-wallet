import { createSelector, defaultMemoize } from 'reselect';
import { set } from 'date-fns';

import { ApplicationState } from '../index';
import { Activities, Transaction, TransactionActivity } from './types';
import {
  ActivityFilterTypes,
  ActivityTypes,
  CurrencySymbols,
  Coins,
} from '../../dictionaries';
import { getActivityFilters, getSettings, getUpdates } from '../user/selectors';
import { groupBy, round } from '../../utils/common';
import { config } from '../../config';

function calcAccountBalance(txsMap?: { [txHash: string]: Transaction }) {
  return txsMap
    ? round(
        Object.values(txsMap).reduce((total, tx) => (total += tx.amount), 0),
        8
      )
    : 0;
}

export const getAccounts = (state: ApplicationState) => state.account.accounts;
export const getTxs = (state: ApplicationState) => state.account.txs;
export const getExchangeRates = (state: ApplicationState) =>
  state.account.rates;
export const getAccountById = defaultMemoize((accountId?: string) =>
  createSelector([getAccounts, getTxs], (accounts, txs) => {
    if (!accountId || !accounts?.byIds[accountId]) {
      return null;
    }

    return {
      ...accounts.byIds[accountId],
      balance: calcAccountBalance(txs[accountId]?.byIds),
    };
  })
);
export const getAccountTxs = (accountId: string) => (state: ApplicationState) =>
  state.account.txs[accountId];
export const getTotalBalance = createSelector(
  [getAccounts, getTxs, getSettings, getExchangeRates],
  (accounts, txs, settings, rates) =>
    accounts && rates && settings
      ? round(
          accounts.allIds.reduce(
            (total, accountId) =>
              (total +=
                calcAccountBalance(txs[accountId]?.byIds) *
                rates[accounts.byIds[accountId].coin][settings.currency]),
            0
          )
        )
      : null
);
export const getAccountsListWithBalance = createSelector(
  [getAccounts, getTxs],
  (accounts, txs) => {
    return (
      accounts &&
      accounts.allIds.map((accountId: string) => ({
        id: accountId,
        name: accounts.byIds[accountId].name,
        address: accounts.byIds[accountId].address,
        balance: txs[accountId] ? calcAccountBalance(txs[accountId].byIds) : 0,
        coin: accounts.byIds[accountId].coin,
      }))
    );
  }
);
export const getAccountsListWithDescText = createSelector(
  [getAccountsListWithBalance, getSettings, getExchangeRates],
  (accountsList, settings, rates) => {
    if (!accountsList || !settings || !rates) {
      return null;
    }

    return accountsList.map((account) => ({
      ...account,
      descText: `${round(account.balance, 8)} ${
        config.coins[account.coin].abbr
      } / ${CurrencySymbols[settings.currency]}${round(
        account.balance * rates[account.coin][settings.currency]
      )}`,
    }));
  }
);
export const getSearchByHashStr = (state: ApplicationState) =>
  state.account.searchActivityStr;
export const getActivities = createSelector(
  [
    getActivityFilters,
    getAccounts,
    getTxs,
    getUpdates,
    getSettings,
    getExchangeRates,
    getSearchByHashStr,
  ],
  (filters, accounts, txs, updates, settings, rates, searchByHashStr) => {
    if (!accounts || !rates || !settings) {
      return null;
    }

    let results: Activities[] = [];

    if (filters.type !== ActivityFilterTypes.Updates) {
      accounts.allIds.forEach((accountId: string) => {
        if (
          filters.type === ActivityFilterTypes.Account &&
          filters.value !== accountId
        ) {
          return;
        }

        const account = accounts.byIds[accountId];
        const accountTxs = txs[accountId]?.byIds
          ? Object.values(txs[accountId].byIds)
          : [];

        const activities: TransactionActivity[] = accountTxs.reduce(
          (transactions: TransactionActivity[], tx: Transaction) => {
            const acc = transactions;

            if (
              searchByHashStr &&
              !tx.hash.toLowerCase().includes(searchByHashStr.toLowerCase()) &&
              !account.address
                .toLowerCase()
                .includes(searchByHashStr.toLowerCase())
            ) {
              return acc;
            }

            acc.push({
              id: tx.hash,
              type: ActivityTypes.Transaction,
              amount: tx.amount,
              amountInLocal: tx.amount * rates[account.coin][settings.currency],
              hash: tx.hash,
              accountId: account.id,
              comment: account?.txComments?.[tx.hash] || '',
              date: new Date(tx.date),
              coin: account.coin,
            });

            return acc;
          },
          []
        );

        results = results.concat(activities);
      });
    }

    const sorted = results.sort((a, b) => b.date.getTime() - a.date.getTime());
    const groupedByDay: [string, Activities[]][] = Object.entries(
      groupBy(
        sorted.map((act) => ({
          ...act,
          date: set(act.date, {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
          }),
        })),
        'date'
      )
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
                return (sum += transaction.amountInLocal);
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
export const getTxByHash = defaultMemoize((accountId: string, txHash: string) =>
  createSelector(getTxs, (txs) => txs?.[accountId]?.byIds?.[txHash] || null)
);
export const getRecommendedBTCFee = (state: ApplicationState) =>
  state.account.recommendedBTCFee;
export const getTxComment = defaultMemoize(
  (accountId: string, txHash: string) =>
    createSelector(getAccountById(accountId), (account) => {
      if (account?.txComments?.[txHash]) {
        return account.txComments[txHash];
      }

      return '';
    })
);
export const getCreateTxResult = (state: ApplicationState) =>
  state.account.createTxResult;
export const getCharts = createSelector(
  [(state: ApplicationState) => state.account.chart, getSettings],
  (chart, settings) => {
    if (!chart.data || Object.keys(chart.data).length === 0 || !settings) {
      return null;
    }

    const coins = Object.keys(chart.data);
    const coinA = coins[0];
    const coinB = coins[1];

    return chart.data[coinA].map((item, i) => {
      const point = {
        dateTime: item.dateTime,
        currency: CurrencySymbols[settings.currency],
        [coinA]: item.value,
      };

      if (coinB && chart.data && chart.data[coinB]) {
        point[coinB] = chart.data[coinB][i].value;
      }

      return point;
    });
  }
);
export const getChartsFilters = (state: ApplicationState) =>
  state.account.chart.filters;
export const getExchangeRate = defaultMemoize((coin?: Coins) =>
  createSelector([getExchangeRates, getSettings], (rates, settings) =>
    rates && settings && coin ? rates[coin][settings.currency] : 0
  )
);
