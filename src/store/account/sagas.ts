import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { produce } from 'immer';
import { push } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';

import { Account, AccountActionTypes, Accounts } from './types';
import { getFile, putFile } from '../../utils/blockstack';
import { callApi, getQueryString } from '../../utils/api';
import {
  addTx,
  addTxComment as addTxCommentAction,
  addTxCommentConfirm,
  createAccount as createAccountAction,
  deleteAccount as deleteAccountAction,
  getAccountDetails as getAccountDetailsAction,
  getTransactionDetails as getTransactionDetailsAction,
  makeTransaction as makeTransactionAction,
  setAccounts,
  setChartData,
  setCreateTxResult,
  setExchangeRates,
  setRecommendedBTCFee,
  updateAccount,
  updateAccountInGaia as updateAccountInGaiaAction,
} from './actions';
import {
  getAccountById,
  getAccounts as getAccountsSelector,
  getChartFilters,
} from './selectors';
import {
  getCoinsList,
  getCurrenciesList,
  getSettings,
} from '../user/selectors';
import { config } from '../../config';
import { createBTCLikeTransaction, createWallet } from '../../utils/wallets';
import { Value } from '../../components/forms/DropDown/DropDown';
import { showNotification } from '../layout/actions';
import {
  ChartPeriods,
  Coins,
  NotificationTypes,
  Statuses,
} from '../../dictionaries';
import { toBTC, toSatoshi } from '../../utils/common';
import { TransferToTypes } from '../../components/shared/Send/Send';

function* getAccounts() {
  try {
    let accounts: Accounts = yield call(getFile, config.gaia.files.accounts);

    if (!accounts) {
      accounts = {
        byIds: {},
        allIds: [],
      };

      yield call(putFile, {
        fileName: config.gaia.files.accounts,
        file: accounts,
      });
    }

    const calls = [];
    const accountsArr = accounts.allIds.reduce(
      (acc: Account[], accountId: string) => {
        const a = acc;
        a.push(accounts.byIds[accountId]);
        return a;
      },
      []
    );

    for (let i = 0; i < accountsArr.length; i++) {
      calls.push(call(getAccountDetails, accountsArr[i]));
    }

    const details = yield all(calls);

    for (let i = 0; i < details.length; i++) {
      if (details[i] && details[i].accountId) {
        accounts.byIds[details[i].accountId] = {
          ...accounts.byIds[details[i].accountId],
          balance: details[i].balance,
          transactions: {
            ...details[i].transactions,
          },
        };
      }
    }

    yield put(setAccounts(accounts));

    yield all(
      accounts.allIds.map((accountId: string) =>
        put(getAccountDetailsAction(accountId))
      )
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting accounts',
      })
    );

    console.error(e);
  }
}

function* createAccount({ payload }: ReturnType<typeof createAccountAction>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Creating accounts...',
      })
    );

    const account = yield call(createWallet, payload);

    const existingAccounts: Accounts = yield select(getAccountsSelector);
    const accounts = {
      byIds: {
        ...existingAccounts.byIds,
        [account.id]: account,
      },
      allIds: [...existingAccounts.allIds, account.id],
    };

    yield call(putFile, {
      fileName: config.gaia.files.accounts,
      file: accounts,
    });

    yield put(setAccounts(accounts));

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Account was successfully created',
      })
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while creating accounts',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* updateAccountInGaia({
  payload: { accountId, update },
}: ReturnType<typeof updateAccountInGaiaAction>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Saving changes...',
      })
    );

    const existingAccounts: Accounts = yield select(getAccountsSelector);
    const accounts: Accounts = produce(existingAccounts, (draft: Accounts) => {
      draft.byIds[accountId] = {
        ...draft.byIds[accountId],
        ...update,
      };
    });

    yield call(putFile, {
      fileName: config.gaia.files.accounts,
      file: accounts,
    });

    yield put(setAccounts(accounts));

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Account was successfully updated',
      })
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while updating accounts',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* deleteAccount({
  payload: accountId,
}: ReturnType<typeof deleteAccountAction>) {
  try {
    const account: Account = yield select(getAccountById(accountId));

    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: `Deleting account${account ? ` ${account.name}` : ''}...`,
      })
    );

    const existingAccounts: Accounts = yield select(getAccountsSelector);
    const accounts: Accounts = produce(existingAccounts, (draft: Accounts) => {
      delete draft.byIds[accountId];
      draft.allIds = draft.allIds.filter((id) => id !== accountId);
    });

    yield call(putFile, {
      fileName: config.gaia.files.accounts,
      file: accounts,
    });

    yield put(setAccounts(accounts));

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Account was successfully deleted',
      })
    );

    yield put(push('/'));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while deleting accounts',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* getExchangeRates() {
  try {
    const coins = yield select(getCoinsList);
    const currencies = yield select(getCurrenciesList);

    const rates = yield call(callApi, {
      method: 'get',
      url: `${config.getCoursesApiUrl}`,
      queryParams: {
        fsyms: coins.map((coin: Value) => coin.id).join(','),
        tsyms: currencies
          .filter((coin: Value) => coin.id !== Coins.BTC_TestNet)
          .map((currency: Value) => currency.id),
      },
    });

    if (Coins.BTC_TestNet) {
      rates[Coins.BTC_TestNet] = rates[Coins.BTC];
    }

    yield put(setExchangeRates(rates));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting exchange rates',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* getAccountDetails(account: Account): SagaIterator {
  try {
    const { data } = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.getAddressInfo(account.address),
      queryParams: {
        transaction_details: true,
      },
    });

    const accountDetails = data[account.address];

    return {
      accountId: account.id,
      balance: toBTC(accountDetails.address.balance),
      transactions: accountDetails.transactions.reduce(
        (txs: any[], tx: any) => {
          const acc: any = txs;

          const existingTxData = account?.transactions?.byIds[tx.hash] || {};

          acc.byIds[tx.hash] = {
            ...existingTxData,
            hash: tx.hash,
            amount: toBTC(tx.balance_change),
            date: tx.time,
          };
          acc.allIds.push(tx.hash);

          return acc;
        },
        {
          byIds: {},
          allIds: [],
        }
      ),
    };
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting accounts details',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* getTransactionDetails({
  payload: { txHash, accountId },
}: ReturnType<typeof getTransactionDetailsAction>) {
  try {
    const account = yield select(getAccountById(accountId));

    const [
      { data: blockChainStats, context: blockChainStatsContext },
      { data: txDetails, context: txDetailsContext },
    ] = yield all([
      call(callApi, {
        method: 'get',
        url: config.coins[account.coin].apiUrls.getBlockChainStats,
      }),
      call(callApi, {
        method: 'get',
        url: config.coins[account.coin].apiUrls.getTxInfo(txHash),
      }),
    ]);

    if (blockChainStats === null) {
      throw new Error(blockChainStatsContext.error);
    }

    if (txDetails === null) {
      throw new Error(txDetailsContext.error);
    }

    const blockChainHeight = blockChainStats.blocks;

    const actions = Object.values(txDetails).map((tx: any) => {
      let to;
      const isSpentTx = !!tx.inputs.find(
        (input: any) => input.recipient === account.address
      );

      if (isSpentTx) {
        const output = tx.outputs.find(
          (out: any) => out.recipient !== account.address
        );
        to = output.recipient;
      } else {
        to = account.address;
      }

      return put(
        updateAccount({
          accountId,
          update: {
            transactions: {
              allIds: account.transactions.allIds,
              byIds: {
                ...account.transactions.byIds,
                [txHash]: {
                  ...account.transactions.byIds[txHash],
                  fee: toBTC(tx.transaction.fee),
                  confirmations:
                    tx.transaction.block_id > 0
                      ? blockChainHeight - tx.transaction.block_id
                      : 0,
                  from: tx.inputs[0].recipient,
                  to,
                },
              },
            },
          },
        })
      );
    });

    yield all(actions);
  } catch (e) {
    console.error(e);
  }
}

function* getRecommendedBTCFee() {
  try {
    const { fastestFee } = yield call(callApi, {
      method: 'get',
      url: config.getRecommendedBTCLikeFeesApiUrl,
    });

    yield put(setRecommendedBTCFee(fastestFee));
  } catch (e) {
    console.error(e);
  }
}

function* makeTransaction({
  payload: txDraftValues,
}: ReturnType<typeof makeTransactionAction>) {
  try {
    if (!txDraftValues.transferFrom || !txDraftValues.transferTo) {
      throw new Error('');
    }

    const transferFromAccount = yield select(
      getAccountById(txDraftValues.transferFrom?.id)
    );

    if (!transferFromAccount) {
      throw new Error('Transfer from account is not found.');
    }

    const addressInfoResult = yield call(callApi, {
      method: 'get',
      url: config.coins[transferFromAccount.coin].apiUrls.getAddressInfo(
        transferFromAccount.address
      ),
      queryParams: {
        unspentOnly: true,
      },
    });

    if (addressInfoResult.data === null) {
      throw new Error(addressInfoResult.context.error);
    }

    const addressInfo = addressInfoResult.data[transferFromAccount.address];

    const txAmount = parseFloat(txDraftValues.amount);
    const txFee = parseFloat(txDraftValues.fee);

    const txHash = createBTCLikeTransaction({
      privateKey: transferFromAccount.privateKey,
      utxo: addressInfo.utxo,
      receivers: [
        {
          address:
            txDraftValues.transferToType === TransferToTypes.Account &&
            typeof txDraftValues.transferTo !== 'string'
              ? txDraftValues.transferTo.address
              : txDraftValues.transferTo,
          amount: toSatoshi(txAmount),
        },
        {
          address: transferFromAccount.address,
          amount:
            toSatoshi(transferFromAccount.balance) -
            toSatoshi(txAmount) -
            toSatoshi(txFee),
        },
      ],
      coin: transferFromAccount.coin,
    });

    const broadcastTxResult = yield call(callApi, {
      method: 'post',
      url: config.coins[transferFromAccount.coin].apiUrls.broadcastTx,
      body: getQueryString({
        data: txHash,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    if (broadcastTxResult.data === null) {
      throw new Error(broadcastTxResult.context.error);
    }

    yield put(
      setCreateTxResult({
        status: Statuses.Success,
        txHash: broadcastTxResult.data.transaction_hash,
      })
    );

    yield put(
      addTx({
        accountId: transferFromAccount.id,
        tx: {
          hash: broadcastTxResult.data.transaction_hash,
          amount: txAmount,
          date: new Date().toString(),
        },
      })
    );
  } catch (e) {
    yield put(
      setCreateTxResult({
        status: Statuses.Fail,
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* addTxComment({
  payload: { comment, txHash, accountId },
}: ReturnType<typeof addTxCommentAction>) {
  try {
    const accounts: Accounts = yield select(getAccountsSelector);

    const update = produce(accounts, (draft: Accounts) => {
      const tx = draft.byIds[accountId].transactions;
      if (tx) {
        tx.byIds[txHash].comment = comment;
      }
    });

    yield call(putFile, {
      fileName: config.gaia.files.accounts,
      file: update,
    });

    yield put(
      addTxCommentConfirm({
        txHash,
        comment,
        accountId,
      })
    );

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Transaction comment was successfully added',
      })
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while adding transaction comment',
      })
    );

    console.error(e);
  }
}

function* getChartData() {
  try {
    const settings = yield select(getSettings);
    const filters = yield select(getChartFilters);

    const params = {
      [ChartPeriods.Day]: { aggregate: 1, limit: 24, api: 'histohour' },
      [ChartPeriods.Week]: { aggregate: 24, limit: 7, api: 'histohour' },
      [ChartPeriods.Month]: { aggregate: 1, limit: 30, api: 'histoday' },
      [ChartPeriods.ThreeMonth]: { aggregate: 1, limit: 90, api: 'histoday' },
      [ChartPeriods.Year]: { aggregate: 1, limit: 365, api: 'histoday' },
    };
    const periodBasedParams = params[filters.period as ChartPeriods];

    const getArgs = (coin: Coins) => ({
      method: 'get',
      url: `${config.getChartDataApiUrl}/${periodBasedParams.api}`,
      queryParams: {
        aggregate: periodBasedParams.aggregate,
        limit: periodBasedParams.limit,
        fsym: coin === Coins.BTC_TestNet ? Coins.BTC : coin,
        tsym: settings?.currency,
      },
    });

    const calls: any[] = [call(callApi, getArgs(filters.coinA))];

    if (filters.coinB) {
      calls.push(call(callApi, getArgs(filters.coinB)));
    }

    const results = yield all(calls);

    const data = results.reduce(
      (
        acc: any,
        el: {
          Response: 'Success' | 'Error';
          Data: { Data: { time: number; close: number }[] };
        },
        i: number
      ) => {
        const a = acc;

        if (!el || el.Response !== 'Success') {
          return a;
        }

        a[i === 0 ? filters.coinA : filters.coinB] = el.Data.Data.map(
          (item) => ({
            dateTime: item.time,
            value: item.close,
          })
        );
        return a;
      },
      {}
    );

    yield put(setChartData(data));
  } catch (e) {
    console.error(e);
  }
}

function* accountSaga() {
  yield all([
    takeLatest(AccountActionTypes.GET_ACCOUNTS, getAccounts),
    takeLatest(AccountActionTypes.CREATE_ACCOUNT, createAccount),
    takeLatest(AccountActionTypes.GET_EXCHANGE_RATES, getExchangeRates),
    takeLatest(AccountActionTypes.UPDATE_ACCOUNT_IN_GAIA, updateAccountInGaia),
    takeLatest(AccountActionTypes.DELETE_ACCOUNT, deleteAccount),
    takeLatest(
      AccountActionTypes.GET_TRANSACTION_DETAILS,
      getTransactionDetails
    ),
    takeLatest(
      AccountActionTypes.GET_RECOMMENDED_BTC_FEE,
      getRecommendedBTCFee
    ),
    takeLatest(AccountActionTypes.MAKE_TRANSACTION, makeTransaction),
    takeLatest(AccountActionTypes.ADD_TX_COMMENT, addTxComment),
    takeLatest(AccountActionTypes.GET_CHART_DATA, getChartData),
  ]);
}

export default accountSaga;
