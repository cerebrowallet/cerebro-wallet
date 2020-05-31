import { call, put, select } from 'redux-saga/effects';

import { getAccounts } from '../../account/selectors';
import { getProfile, getSettings } from '../selectors';
import { putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { showNotification } from '../../layout/actions';
import { SyncDataTypes } from '../types';
import { NotificationTypes, Statuses } from '../../../dictionaries';

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
  dataType,
  notifications,
}: {
  dataType: SyncDataTypes;
  notifications?: {
    start?: string;
    success?: string;
    error?: string;
  };
}) {
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

    return {
      status: Statuses.Success,
    };
  } catch (e) {
    if (notifications?.error) {
      yield put(
        showNotification({
          type: NotificationTypes.Error,
          text: notifications.error,
        })
      );
    }

    return {
      status: Statuses.Fail,
      error: e,
    };
  }
}
