import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getFile, putFile } from '../../utils/blockstack';
import { callApi } from '../../utils/api';
import { Themes, UserActionTypes } from './types';
import { config } from '../../config';
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

function* getProfileData() {
  try {
    let profile = yield call(getFile, config.gaia.files.profile);

    if (!profile) {
      profile = {
        gender: Genders.incognito,
      };

      yield call(putFile, {
        fileName: config.gaia.files.profile,
        file: profile,
      });
    }

    yield put(setProfileData(profile));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting profile',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* getSettings() {
  try {
    let settings = yield call(getFile, config.gaia.files.settings);

    if (!settings) {
      settings = {
        currency: Currencies.USD,
        timeout: TimeOuts.ThreeMinutes,
        theme: Themes.light,
      };

      yield call(putFile, {
        fileName: config.gaia.files.settings,
        file: settings,
      });
    }

    yield put(setSettings(settings));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting settings',
      })
    );

    // TODO log error
    console.error(e);
  }
}

function* updateData({
  file,
  update,
  withoutNotifications,
  notifications: { progress, success, fail },
}: {
  file: string;
  update: {
    [field: string]: any;
  };
  withoutNotifications?: boolean;
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
      file: update,
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
    if (!withoutNotifications) {
      yield put(
        showNotification({
          type: NotificationTypes.Success,
          text: fail,
        })
      );
    }

    // TODO log error
    console.error(e);
  }
}

function* updateProfile({
  payload: { withoutNotifications },
}: ReturnType<typeof updateProfileAction>) {
  const profile = yield select(getProfileDataSelector);

  yield call(updateData, {
    file: config.gaia.files.profile,
    update: profile,
    withoutNotifications,
    notifications: {
      progress: 'Updating profile...',
      success: 'ProfilePage is successfully updated',
      fail: 'Error while updating profile',
    },
  });
}

function* updateSettings({
  payload: { withoutNotifications },
}: ReturnType<typeof updateSettingsAction>) {
  const settings = yield select(getSettingsSelector);

  yield call(updateData, {
    file: config.gaia.files.settings,
    update: settings,
    withoutNotifications,
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
