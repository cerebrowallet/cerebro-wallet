import { call } from 'redux-saga/effects';

import { updateProfile } from '../actions';
import syncDataToGaiaSaga from './syncDataToGaia';
import { SyncDataTypes } from '../types';

export default function* updateProfileSaga({
  payload: { withoutNotifications },
}: ReturnType<typeof updateProfile>) {
  yield call(syncDataToGaiaSaga, {
    dataType: SyncDataTypes.profile,
    notifications: withoutNotifications
      ? {}
      : {
          start: 'Updating profile...',
          success: 'Profile is successfully updated',
          error: 'Error while updating profile',
        },
  });
}
