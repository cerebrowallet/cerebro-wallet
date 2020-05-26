import { call, put } from 'redux-saga/effects';

import { callApi } from '../../../utils/api';
import { config } from '../../../config';
import { setRecommendedBTCFee } from '../actions';

export default function* getRecommendedBTCFeeSaga() {
  try {
    const { fastestFee } = yield call(callApi, {
      method: 'get',
      url: config.getRecommendedBTCLikeFeesApiUrl,
    });

    yield put(setRecommendedBTCFee(fastestFee));
  } catch (e) {
    console.error(e);
  }
}
