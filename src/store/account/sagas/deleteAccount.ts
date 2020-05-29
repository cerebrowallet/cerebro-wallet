import { call, put, take } from 'redux-saga/effects';

import { deleteAccount } from '../actions';
import { showNotification } from '../../layout/actions';
import { NotificationTypes } from '../../../dictionaries';
import { deletePrivateKeySaga } from './privateKeysSagas';
import { syncDataToGaia } from '../../user/actions';
import { SyncDataTypes, UserActionTypes } from '../../user/types';

export default function* deleteAccountSaga({
  payload: { accountId, accountName },
}: ReturnType<typeof deleteAccount>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: `Deleting account ${accountName}...`,
      })
    );

    yield call(deletePrivateKeySaga, accountId);
    yield put(syncDataToGaia({ dataType: SyncDataTypes.accounts }));

    const { type, payload } = yield take([
      UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS,
      UserActionTypes.SYNC_DATA_TO_GAIA_ERROR,
    ]);

    if (type === UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS) {
      yield put(
        showNotification({
          type: NotificationTypes.Success,
          text: 'Account was successfully deleted',
        })
      );
    } else {
      throw payload;
    }
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
