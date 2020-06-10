import { call } from 'redux-saga/effects';

import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';
import { updateAccount } from '../actions';

export default function* updateAccountSaga({
  payload: { notifications },
}: ReturnType<typeof updateAccount>) {
  yield call(syncDataToGaiaSaga, {
    dataType: SyncDataTypes.accounts,
    notifications: {
      start: notifications?.start || 'Saving changes...',
      success: notifications?.success || 'Account was successfully updated',
      error: notifications?.error || 'Error while updating account',
    },
  });
}
