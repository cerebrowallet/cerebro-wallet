import { call, put } from 'redux-saga/effects';

import { getFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { Genders, NotificationTypes } from '../../../dictionaries';
import { setProfile } from '../actions';
import { showNotification } from '../../layout/actions';

export default function* getProfileSaga() {
  try {
    const profile = yield call(getFile, config.gaia.files.profile);
    yield put(
      setProfile(
        profile || {
          gender: Genders.incognito,
        }
      )
    );
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
