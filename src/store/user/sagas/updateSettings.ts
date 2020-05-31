import { call, put } from 'redux-saga/effects';

import { updateSettings } from '../actions';
import { SyncDataTypes } from '../types';
import { getExchangeRates } from '../../account/actions';
import syncDataToGaiaSaga from './syncDataToGaia';

export default function* updateSettingsSaga({
  payload: { withoutNotifications, update },
}: ReturnType<typeof updateSettings>) {
  if (Object.prototype.hasOwnProperty.call(update, 'currency')) {
    yield put(getExchangeRates());
  }

  yield call(syncDataToGaiaSaga, {
    dataType: SyncDataTypes.settings,
    notifications: withoutNotifications
      ? {}
      : {
          start: 'Updating settings...',
          success: 'Settings are successfully updated',
          error: 'Error while updating settings',
        },
  });
}
