import { call } from 'redux-saga/effects';

import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';

export default function* updateAccountSaga() {
  yield call(syncDataToGaiaSaga, {
    dataType: SyncDataTypes.accounts,
    notifications: {
      start: 'Saving changes...',
      success: 'Account was successfully updated',
      error: 'Error while updating account',
    },
  });
}
