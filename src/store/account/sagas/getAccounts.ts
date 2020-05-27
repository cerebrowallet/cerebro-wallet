import { all, call, put, take, select } from 'redux-saga/effects';

import { AccountActionTypes, Accounts, AccountTypes } from '../types';
import { getFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { setAccounts, createAccount, getAccountTxs } from '../actions';
import { showNotification } from '../../layout/actions';
import { getAccounts } from '../selectors';
import { NotificationTypes, Coins } from '../../../dictionaries';

export default function* getAccountsSaga() {
  try {
    let accounts: Accounts = yield call(getFile, config.gaia.files.accounts);

    if (!accounts) {
      yield put(createAccount(Coins.BTC, AccountTypes.bech32));

      const { type } = yield take([
        AccountActionTypes.CREATE_ACCOUNT_SUCCESS,
        AccountActionTypes.CREATE_ACCOUNT_FAIL,
      ]);

      if (type === AccountActionTypes.CREATE_ACCOUNT_SUCCESS) {
        accounts = yield select(getAccounts);
      }

      if (type === AccountActionTypes.CREATE_ACCOUNT_FAIL) {
        throw new Error('Error while creating first account');
      }
    }

    yield put(setAccounts(accounts));
    yield all(
      accounts.allIds.map((accountId) => put(getAccountTxs(accountId)))
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
