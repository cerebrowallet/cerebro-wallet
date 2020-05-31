import { call, put, all } from 'redux-saga/effects';

import { deleteAccount } from '../actions';
import { showNotification } from '../../layout/actions';
import { NotificationTypes, Statuses } from '../../../dictionaries';
import deleteKey from './deleteKey';
import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';

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

    const [syncResult] = yield all([
      call(syncDataToGaiaSaga, {
        dataType: SyncDataTypes.accounts,
      }),
      call(deleteKey, accountId),
    ]);

    yield put(
      showNotification({
        type:
          syncResult.status === Statuses.Success
            ? NotificationTypes.Success
            : NotificationTypes.Error,
        text:
          syncResult.status === Statuses.Success
            ? 'Account was successfully deleted'
            : 'Error while deleting account',
      })
    );
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
