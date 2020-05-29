import { all, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from '../types';

import getProfileSaga from './getProfile';
import getSettingsSaga from './getSettings';
import subscribeOnNewsSaga from './subscribeOnNews';
import updateProfileSaga from './updateProfile';
import updateSettingsSaga from './updateSettings';
import syncDataToGaiaSaga from './syncDataToGaia';

function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.GET_PROFILE, getProfileSaga),
    takeLatest(UserActionTypes.GET_SETTINGS, getSettingsSaga),
    takeLatest(UserActionTypes.UPDATE_PROFILE, updateProfileSaga),
    takeLatest(UserActionTypes.UPDATE_SETTINGS, updateSettingsSaga),
    takeLatest(UserActionTypes.SUBSCRIBE_ON_NEWS, subscribeOnNewsSaga),
    takeLatest(UserActionTypes.SYNC_DATA_TO_GAIA, syncDataToGaiaSaga),
  ]);
}

export default userSaga;
