import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { produce } from 'immer';
import { push } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';

import { AccountActionTypes, Accounts, Account } from './types';
import { getFile, putFile } from '../../utils/blockstack';
import { callApi } from '../../utils/api';
import {
  createAccount as createAccountAction,
  updateAccountInGaia as updateAccountInGaiaAction,
  deleteAccount as deleteAccountAction,
  getAccountDetails as getAccountDetailsAction,
  getTransactionDetails as getTransactionDetailsAction,
  setRecommendedBTCFee,
  updateAccount,
  setAccounts,
  setExchangeRates,
} from './actions';
import {
  getAccountById,
  getAccounts as getAccountsSelector,
  getTxDraftValues,
} from './selectors';
import { config } from '../../config';
import { createWallet, createBTCLikeTransaction } from '../../utils/wallets';
import { getCoinsList, getCurrenciesList } from '../user/selectors';
import { Value } from '../../components/forms/DropDown/DropDown';
import { showNotification } from '../layout/actions';
import { NotificationTypes } from '../../dictionaries';
import { toBTC, toSatoshi } from '../../utils/common';

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
          transactions: details[i].transactions,
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
        text: 'Creating account...',
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
        text: 'Error while creating account',
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
        text: 'Error while updating account',
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
        text: 'Error while deleting account',
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
      url: `${config.coursesApiUrl}`,
      queryParams: {
        fsyms: coins.map((coin: Value) => coin.id).join(','),
        tsyms: currencies.map((currency: Value) => currency.id),
      },
    });

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
    const accountDetails = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.accountDetails(account.address),
    });

    return {
      accountId: account.id,
      balance: toBTC(accountDetails.balance),
      transactions: accountDetails.txrefs.reduce(
        (txs: any[], tx: any) => {
          const acc: any = txs;

          acc.byIds[tx.tx_hash] = {
            hash: tx.tx_hash,
            amount: toBTC(tx.spent ? tx.value * -1 : tx.value),
            height: tx.block_height,
            confirmations: tx.confirmations,
            date: tx.confirmed,
            spent: tx.spent,
          };
          acc.allIds.push(tx.tx_hash);

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
        text: 'Error while getting account details',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* getTransactionDetails({
  payload: { transactionHash, accountId },
}: ReturnType<typeof getTransactionDetailsAction>) {
  try {
    const account = yield select(getAccountById(accountId));

    const transactionDetails = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.transactionDetails(
        transactionHash
      ),
    });

    yield put(
      updateAccount({
        accountId,
        update: {
          transactions: {
            allIds: account.transactions.allIds,
            byIds: {
              ...account.transactions.byIds,
              [transactionHash]: {
                ...account.transactions.byIds[transactionHash],
                fee: toBTC(transactionDetails.fees),
                from: transactionDetails.inputs[0].addresses[0],
                to: transactionDetails.outputs[1].addresses[0],
              },
            },
          },
        },
      })
    );
  } catch (e) {
    console.error(e);
  }
}

function* getRecommendedBTCFee() {
  try {
    const { fastestFee } = yield call(callApi, {
      method: 'get',
      url: config.coins.BTC.apiUrls.recommendedFee(),
    });

    yield put(setRecommendedBTCFee(fastestFee));
  } catch (e) {
    console.error(e);
  }
}

function* makeTransaction() {
  try {
    const txDraftValues = yield select(getTxDraftValues);
    const account = yield select(
      getAccountById(txDraftValues.transferFrom.intId)
    );

    const { txrefs: uxto } = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.accountDetails(account.address),
      queryParams: {
        unspentOnly: true,
      },
    });

    const txAmount = parseFloat(txDraftValues.amount);
    const txFee = parseFloat(txDraftValues.fee);

    const txHash = createBTCLikeTransaction({
      privateKey: account.privateKey,
      uxto,
      receivers: [
        {
          address:
            txDraftValues.transferToType === 'account'
              ? txDraftValues.transferTo.address
              : txDraftValues.transferTo,
          amount: toSatoshi(txAmount),
        },
        {
          address: txDraftValues.transferFrom.address,
          amount:
            toSatoshi(account.balance) - toSatoshi(txAmount) - toSatoshi(txFee),
        },
      ],
      coin: account.coin,
    });

    const { tx } = yield call(callApi, {
      method: 'post',
      url: config.coins[account.coin].apiUrls.broadcastTX(),
      body: {
        tx: txHash,
      },
    });

    yield put(push('/features/send/success', { hash: tx.hash }));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text:
          'There was an error creating the transaction. Please, make sure the address is valid or support@cerebrowallet.com',
      })
    );

    // TODO log error
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
  ]);
}

export default accountSaga;
