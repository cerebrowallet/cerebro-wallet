import { put } from 'redux-saga/effects';

import { syncDataToGaia, updateSettings } from '../actions';
import { SyncDataTypes } from '../types';
import { getExchangeRates } from '../../account/actions';

export default function* updateSettingsSaga({
  payload: { withoutNotifications, update },
}: ReturnType<typeof updateSettings>) {
  if (Object.prototype.hasOwnProperty.call(update, 'currency')) {
    yield put(getExchangeRates());
  }

  yield put(
    syncDataToGaia({
      dataType: SyncDataTypes.settings,
      notifications: withoutNotifications
        ? {}
        : {
            start: 'Updating settings...',
            success: 'Settings are successfully updated',
            error: 'Error while updating settings',
          },
    })
  );
}
