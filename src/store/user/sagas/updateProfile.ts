import { call, put } from 'redux-saga/effects';

import { updateProfile, chooseRandomEmoji } from '../actions';
import syncDataToGaiaSaga from './syncDataToGaia';
import { SyncDataTypes } from '../types';

export default function* updateProfileSaga({
  payload: { withoutNotifications, update },
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

  if (Object.prototype.hasOwnProperty.call(update, 'gender')) {
    yield put(chooseRandomEmoji({ isAuthCallback: false }));
  }
}
