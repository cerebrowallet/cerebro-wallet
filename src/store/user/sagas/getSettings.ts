import { call, put } from 'redux-saga/effects';

import { getFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { Currencies, NotificationTypes, TimeOuts } from '../../../dictionaries';
import { setSettings } from '../actions';
import { showNotification } from '../../layout/actions';
import { Themes } from '../types';

export default function* getSettingsSaga() {
  try {
    const settings = yield call(getFile, config.gaia.files.settings);
    yield put(
      setSettings(
        settings || {
          currency: Currencies.USD,
          timeout: TimeOuts.ThreeMinutes,
          theme: Themes.light,
        }
      )
    );
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
