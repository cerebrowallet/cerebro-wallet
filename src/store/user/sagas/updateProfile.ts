import { put } from 'redux-saga/effects';

import { syncDataToGaia, updateProfile } from '../actions';
import { SyncDataTypes } from '../types';

export default function* updateProfileSaga({
  payload: { withoutNotifications },
}: ReturnType<typeof updateProfile>) {
  yield put(
    syncDataToGaia({
      dataType: SyncDataTypes.profile,
      notifications: withoutNotifications
        ? {}
        : {
            start: 'Updating profile...',
            success: 'Profile is successfully updated',
            error: 'Error while updating profile',
          },
    })
  );
}
