import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { Coins } from '../../../dictionaries';

export function* getCoinLastIndexSaga(coin: Coins) {
  const lastIndexes = yield call(getFile, config.gaia.files.coinLastIndexes);
  return lastIndexes && lastIndexes[coin] ? lastIndexes[coin] : 0;
}

export function* incrementCoinLastIndexSaga(coin: Coins) {
  let lastIndexes = yield call(getFile, config.gaia.files.coinLastIndexes);

  if (!lastIndexes) {
    lastIndexes = {};
  }

  if (!lastIndexes[coin]) {
    lastIndexes[coin] = 0;
  }

  lastIndexes[coin] += 1;

  yield call(putFile, {
    fileName: config.gaia.files.coinLastIndexes,
    file: lastIndexes,
  });
}
