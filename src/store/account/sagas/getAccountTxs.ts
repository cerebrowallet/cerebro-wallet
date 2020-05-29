import { call, put, select } from 'redux-saga/effects';

import { callApi } from '../../../utils/api';
import { config } from '../../../config';
import { showNotification } from '../../layout/actions';
import { getAccountTxs, setAccountTxs } from '../actions';
import { NotificationTypes } from '../../../dictionaries';
import { getAccountById } from '../selectors';
import { normalizeTxs } from './importPublicAddress';

export default function* getAccountTxsSaga({
  payload: { accountId },
}: ReturnType<typeof getAccountTxs>) {
  try {
    const account = yield select(getAccountById(accountId));

    if (!account) {
      throw new Error(`Account with id: ${accountId} was not found`);
    }

    const result = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.getAddressInfo(account.address),
      queryParams: {
        transaction_details: true,
      },
    });

    if (result.data === null) {
      throw new Error(result.context.error);
    }

    const txs = normalizeTxs(result.data[account.address].transactions);

    yield put(setAccountTxs(account.id, txs));
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
