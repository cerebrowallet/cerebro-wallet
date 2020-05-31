import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';

export default function* deleteKeySaga(accountId: string) {
  const keys = yield call(getFile, config.gaia.files.keys);
  delete keys[accountId];
  yield call(putFile, { fileName: config.gaia.files.keys, file: keys });
}
