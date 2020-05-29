import { call, put, select } from 'redux-saga/effects';

import { getAccounts } from '../../account/selectors';
import { getProfile, getSettings } from '../selectors';
import { putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import {
  syncDataToGaiaSuccess,
  syncDataToGaiaError,
  syncDataToGaia,
} from '../actions';
import { showNotification } from '../../layout/actions';
import { SyncDataTypes } from '../types';
import { NotificationTypes } from '../../../dictionaries';

const dataTypesSources = {
  [SyncDataTypes.accounts]: {
    file: config.gaia.files.accounts,
    selector: getAccounts,
  },
  [SyncDataTypes.profile]: {
    file: config.gaia.files.profile,
    selector: getProfile,
  },
  [SyncDataTypes.settings]: {
    file: config.gaia.files.settings,
    selector: getSettings,
  },
};

export default function* syncDataToGaiaSaga({
  payload: { dataType, notifications },
}: ReturnType<typeof syncDataToGaia>) {
  try {
    if (notifications?.start) {
      yield put(
        showNotification({
          type: NotificationTypes.Default,
          text: notifications.start,
        })
      );
    }

    const type = dataTypesSources[dataType];
    const data = yield select(type.selector);

    yield call(putFile, {
      fileName: type.file,
      file: data,
    });

    if (notifications?.success) {
      yield put(
        showNotification({
          type: NotificationTypes.Success,
          text: notifications.success,
        })
      );
    }

    yield put(syncDataToGaiaSuccess());
  } catch (e) {
    if (notifications?.error) {
      yield put(
        showNotification({
          type: NotificationTypes.Error,
          text: notifications.error,
        })
      );
    }

    yield put(syncDataToGaiaError(e));

    // TODO log error
    console.error(e);
  }
}
