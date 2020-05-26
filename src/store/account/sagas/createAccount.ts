import { call, put, all, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createAccount, addAccount } from '../actions';
import { showNotification } from '../../layout/actions';
import { NotificationTypes } from '../../../dictionaries';
import { createWallet } from '../../../utils/wallets';
import getMnemonic from './getMnemonic';
import { savePrivateKeySaga } from './privateKeysSagas';
import {
  getCoinLastIndexSaga,
  incrementCoinLastIndexSaga,
} from './coinLastIndexesSagas';
import { syncDataToGaia } from '../../user/actions';
import { SyncDataTypes, UserActionTypes } from '../../user/types';

export default function* createAccountSaga({
  payload: coin,
}: ReturnType<typeof createAccount>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Creating accounts...',
      })
    );

    const nextAccountIndex = yield call(getCoinLastIndexSaga, coin);

    const mnemonic = yield call(getMnemonic);
    const { account, privateKey } = yield call(createWallet, {
      coin,
      nextAccountIndex,
      mnemonic,
    });

    yield all([
      call(savePrivateKeySaga, { accountId: account.id, privateKey }),
      call(incrementCoinLastIndexSaga, coin),
    ]);

    yield put(addAccount(account));
    yield put(syncDataToGaia({ dataType: SyncDataTypes.accounts }));

    const { type, payload } = yield take([
      UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS,
      UserActionTypes.SYNC_DATA_TO_GAIA_ERROR,
    ]);

    if (type === UserActionTypes.SYNC_DATA_TO_GAIA_ERROR) {
      throw payload instanceof Error
        ? payload
        : new Error('Error on syncing accounts to Gaia');
    }

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Account was successfully created',
      })
    );

    yield put(push(`/account/${account.id}`));
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
