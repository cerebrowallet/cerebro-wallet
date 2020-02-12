import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import { AccountActionTypes } from './types';
import { getFile, putFile } from '../../utils/blockstack';
import { callApi } from '../../utils/api';
import { createAccount as createAccountAction } from './actions';
import { config } from '../../config';
import { createWallet } from '../../utils/wallets';
import { setAccounts, setExchangeRates } from './actions';
import { getCoinsList, getCurrenciesList } from '../user/selectors';
import { Value } from '../../components/forms/DropDown/DropDown';

function* getAccounts() {
  try {
    const accounts = yield call(getFile, config.gaia.files.accounts);

    if (!accounts) {
      yield call(putFile, {
        fileName: config.gaia.files.accounts,
        file: [],
      });
    }

    yield put(setAccounts(accounts || []));
  } catch (e) {
    console.error(e);
  }
}

function* createAccount({ payload }: ReturnType<typeof createAccountAction>) {
  try {
    const account = yield call(createWallet, payload);

    const existingAccounts = yield call(getFile, config.gaia.files.accounts);
    const accounts = [...existingAccounts, account];

    yield call(putFile, {
      fileName: config.gaia.files.accounts,
      file: accounts,
    });

    yield put(setAccounts(accounts));
  } catch (e) {
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
    console.error(e);
  }
}

function* accountSaga() {
  yield all([
    takeLatest(AccountActionTypes.GET_ACCOUNTS, getAccounts),
    takeLatest(AccountActionTypes.CREATE_ACCOUNT, createAccount),
    takeLatest(AccountActionTypes.GET_EXCHANGE_RATES, getExchangeRates),
  ]);
}

export default accountSaga;
