import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getFile } from '../../utils/blockstack';
import { UserActionTypes, Profile } from './types';
import { setProfileData, setSettings } from './actions';
import { putFile } from '../../utils/blockstack';
import { profileInitialState, settingsInitialState } from './reducer';

function* getProfileData() {
  try {
    let profileData: Profile = yield call(getFile, 'profile.json');

    if (!profileData) {
      profileData = profileInitialState;

      yield call(putFile, {
        fileName: 'profile.json',
        file: profileData,
      });
    }

    yield put(setProfileData(profileData));
  } catch (e) {
    // TODO show error notification
  }
}

function* getSettings() {
  try {
    let settings = yield call(getFile, 'settings.json');

    if (!settings) {
      settings = settingsInitialState;

      yield call(putFile, {
        fileName: 'settings.json',
        file: settings,
      });
    }

    yield put(setSettings(settings));
  } catch (e) {
    // TODO show error notification
  }
}

function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.GET_PROFILE_DATA, getProfileData),
    takeLatest(UserActionTypes.GET_SETTINGS, getSettings),
  ]);
}

export default userSaga;
