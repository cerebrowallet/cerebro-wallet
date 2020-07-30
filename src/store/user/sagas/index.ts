import { all, takeLatest, takeLeading } from 'redux-saga/effects';
import { UserActionTypes } from '../types';

import getProfileSaga from './getProfile';
import getSettingsSaga from './getSettings';
import subscribeOnNewsSaga from './subscribeOnNews';
import updateProfileSaga from './updateProfile';
import updateSettingsSaga from './updateSettings';
import chooseRandomEmoji from './chooseRandomEmoji';
import handleAuthCallbackSaga from './handleAuthCallback';

function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.GET_PROFILE, getProfileSaga),
    takeLatest(UserActionTypes.GET_SETTINGS, getSettingsSaga),
    takeLatest(UserActionTypes.UPDATE_PROFILE, updateProfileSaga),
    takeLatest(UserActionTypes.UPDATE_SETTINGS, updateSettingsSaga),
    takeLatest(UserActionTypes.SUBSCRIBE_ON_NEWS, subscribeOnNewsSaga),
    takeLatest(UserActionTypes.CHOOSE_EMOJI, chooseRandomEmoji),
    takeLeading(UserActionTypes.HANDLE_AUTH_CALLBACK, handleAuthCallbackSaga),
  ]);
}

export default userSaga;
