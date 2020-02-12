import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getFile, putFile } from '../../utils/blockstack';
import { callApi } from '../../utils/api';
import { Profile, UserActionTypes } from './types';
import {
  setProfileData,
  setSettings,
  setSubscribeOnNewsStatus,
  subscribeOnNews as subscribeOnNewsAction,
  updateProfile as updateProfileAction,
  updateSettings as updateSettingsAction,
} from './actions';
import {
  getSettings as getSettingsSelector,
  getProfileData as getProfileDataSelector,
} from './selectors';
import { showNotification } from '../layout/actions';
import {
  Currencies,
  Genders,
  NotificationTypes,
  Statuses,
  TimeOuts,
} from '../../dictionaries';

function* getData({
  file,
  initialState,
  action,
  notifications: { error },
}: {
  file: string;
  initialState: any;
  notifications: {
    error: string;
  };
  action: (data: any) => any;
}): SagaIterator {
  try {
    let data = yield call(getFile, file);

    if (!data) {
      debugger;
    }

    if (!data) {
      data = initialState;

      yield call(putFile, {
        fileName: file,
        file: data,
      });
    }

    yield put(action(data));
  } catch (e) {
    // TODO log error
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: error,
      })
    );
  }
}

function* getProfileData() {
  yield call(getData, {
    file: 'profile.json',
    initialState: {
      gender: Genders.incognito,
    },
    notifications: {
      error: 'Error while getting profile',
    },
    action: setProfileData,
  });
}

function* getSettings() {
  yield call(getData, {
    file: 'settings.json',
    initialState: {
      currency: Currencies.USD,
      timeout: TimeOuts.ThreeMinutes,
    },
    notifications: {
      error: 'Error while getting settings',
    },
    action: setSettings,
  });
}

function* updateData({
  file,
  update,
  initialData,
  withoutNotifications,
  notifications: { progress, success, fail },
}: {
  file: string;
  update: {
    [field: string]: any;
  };
  withoutNotifications?: boolean;
  initialData: any;
  notifications: {
    progress: string;
    success: string;
    fail: string;
  };
}): SagaIterator {
  try {
    if (!withoutNotifications) {
      yield put(
        showNotification({
          type: NotificationTypes.Default,
          text: progress,
        })
      );
    }

    yield call(putFile, {
      fileName: file,
      file: {
        ...initialData,
        ...update,
      },
    });

    if (!withoutNotifications) {
      yield put(
        showNotification({
          type: NotificationTypes.Success,
          text: success,
        })
      );
    }
  } catch (e) {
    // TODO log error
    if (!withoutNotifications) {
      yield put(
        showNotification({
          type: NotificationTypes.Success,
          text: fail,
        })
      );
    }
  }
}

function* updateProfile({
  payload: { update, withoutNotifications },
}: ReturnType<typeof updateProfileAction>) {
  const initialData = yield select(getProfileDataSelector);

  yield call(updateData, {
    file: 'profile.json',
    update,
    withoutNotifications,
    initialData,
    notifications: {
      progress: 'Updating profile...',
      success: 'Profile is successfully updated',
      fail: 'Error while updating profile',
    },
  });
}

function* updateSettings({
  payload: { update, withoutNotifications },
}: ReturnType<typeof updateSettingsAction>) {
  const { email, timeout, currency } = yield select(getSettingsSelector);

  yield call(updateData, {
    file: 'settings.json',
    update,
    withoutNotifications,
    initialData: {
      email,
      timeout,
      currency,
    },
    notifications: {
      progress: 'Updating settings...',
      success: 'Settings are successfully updated',
      fail: 'Error while updating settings',
    },
  });
}

function* subscribeOnNews({
  payload: email,
}: ReturnType<typeof subscribeOnNewsAction>) {
  yield put(
    setSubscribeOnNewsStatus({
      status: Statuses.InProgress,
    })
  );

  try {
    const res = yield call(callApi, {
      method: 'put',
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        list_ids: [process.env.REACT_APP_LIST_ID],
        contacts: [{ email }],
      },
    });

    if (res.errors && res.errors.length > 0) {
      throw new Error();
    }

    yield put(
      updateSettingsAction({
        update: {
          email,
        },
        withoutNotifications: true,
      })
    );

    yield put(
      setSubscribeOnNewsStatus({
        status: Statuses.Success,
      })
    );
  } catch (e) {
    yield put(
      setSubscribeOnNewsStatus({
        status: Statuses.Fail,
      })
    );
    // TODO log error
  }

  yield delay(5000);

  yield put(
    setSubscribeOnNewsStatus({
      status: undefined,
    })
  );
}

function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.GET_PROFILE_DATA, getProfileData),
    takeLatest(UserActionTypes.GET_SETTINGS, getSettings),
    takeLatest(UserActionTypes.UPDATE_PROFILE, updateProfile),
    takeLatest(UserActionTypes.UPDATE_SETTINGS, updateSettings),
    takeLatest(UserActionTypes.SUBSCRIBE_ON_NEWS, subscribeOnNews),
  ]);
}

export default userSaga;
