import { put } from 'redux-saga/effects';

import { syncDataToGaia } from '../../user/actions';
import { SyncDataTypes } from '../../user/types';

export default function* updateAccountSaga() {
  yield put(
    syncDataToGaia({
      dataType: SyncDataTypes.accounts,
      notifications: {
        start: 'Saving changes...',
        success: 'Account was successfully updated',
        error: 'Error while updating account',
      },
    })
  );
}
