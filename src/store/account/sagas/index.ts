import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { AccountActionTypes } from '../types';

import getAccountsSaga from './getAccounts';
import getAccountTxsSaga from './getAccountTxs';
import createAccountSaga from './createAccount';
import getExchangeRatesSaga from './getExchangeRates';
import updateAccountSaga from './updateAccount';
import deleteAccountSaga from './deleteAccount';
import getTxDetailsSaga from './getTxDetails';
import getRecommendedBTCFeeSaga from './getRecommendedBTCFee';
import makeTxSaga from './makeTx';
import addTxCommentSaga from './addTxComment';
import getChartsSaga from './getCharts';
import importPublicAddressSaga from './importPublicAddress';
import importPrivateKeySaga from './importPrivateKey';

function* accountSaga() {
  yield all([
    takeLatest(AccountActionTypes.GET_ACCOUNTS, getAccountsSaga),
    takeEvery(AccountActionTypes.GET_ACCOUNT_TXS, getAccountTxsSaga),
    takeLatest(AccountActionTypes.CREATE_ACCOUNT, createAccountSaga),
    takeLatest(AccountActionTypes.GET_EXCHANGE_RATES, getExchangeRatesSaga),
    takeLatest(AccountActionTypes.UPDATE_ACCOUNT_IN_GAIA, updateAccountSaga),
    takeLatest(AccountActionTypes.DELETE_ACCOUNT, deleteAccountSaga),
    takeLatest(AccountActionTypes.GET_TX_DETAILS, getTxDetailsSaga),
    takeLatest(
      AccountActionTypes.GET_RECOMMENDED_BTC_FEE,
      getRecommendedBTCFeeSaga
    ),
    takeLatest(AccountActionTypes.MAKE_TX, makeTxSaga),
    takeLatest(AccountActionTypes.ADD_TX_COMMENT, addTxCommentSaga),
    takeLatest(AccountActionTypes.GET_CHARTS, getChartsSaga),
    takeLatest(
      AccountActionTypes.IMPORT_PUBLIC_ADDRESS,
      importPublicAddressSaga
    ),
    takeLatest(AccountActionTypes.IMPORT_PRIVATE_KEY, importPrivateKeySaga),
  ]);
}

export default accountSaga;
