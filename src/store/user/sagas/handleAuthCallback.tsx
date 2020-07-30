import { put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { chooseRandomEmoji, setAuthFinished } from '../actions';
import { getAuthFinishedFlag } from '../selectors';

export default function* handleAuthCallbackSaga() {
  const authFinished = yield select(getAuthFinishedFlag);

  if (authFinished) {
    return;
  }

  yield put(chooseRandomEmoji({ isAuthCallback: true }));
  yield put(push('/'));

  yield put(setAuthFinished());
}
