import { call, put } from 'redux-saga/effects';

import { getFile, userSession } from '../../../utils/blockstack';
import { config } from '../../../config';
import { Genders, NotificationTypes } from '../../../dictionaries';
import { setProfile } from '../actions';
import { showNotification } from '../../layout/actions';

export default function* getProfileSaga() {
  try {
    const gaiaData = yield call(getFile, config.gaia.files.profile);
    const blockstackData = userSession.loadUserData();
    const profile = gaiaData || { gender: Genders.incognito };

    yield put(
      setProfile({
        ...profile,
        avatarUrl:
          profile.avatarUrl ||
          blockstackData?.profile?.image?.[0]?.contentUrl ||
          null,
        hasBlockstackProfile: !!blockstackData?.profile?.image?.[0]?.contentUrl,
        blockstack: {
          address: blockstackData.identityAddress,
          username: blockstackData.username,
          name: blockstackData?.profile?.name || null,
        },
      })
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
