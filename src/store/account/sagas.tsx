import { all, call, put, takeLatest } from 'redux-saga/effects';

import { AccountActionTypes } from './types';
import { getFile, putFile } from '../../utils/blockstack';

import { setAccounts } from './actions';

function* getAccounts() {
  try {
    const accounts = yield call(getFile, 'accounts.json');

    if (!accounts) {
      yield call(putFile, {
        fileName: 'accounts.json',
        file: [],
      });
    }

    yield put(setAccounts(accounts || []));
  } catch (e) {
    console.error(e);
  }
}

function* createNewAccount() {
  try {

  } catch (e) {
    console.error(e);
  }
}

function* accountSaga() {
  yield all([
    takeLatest(AccountActionTypes.GET_ACCOUNTS, getAccounts),
    takeLatest(AccountActionTypes.CREATE_NEW_ACCOUNT, createNewAccount),
  ]);
}

export default accountSaga;
