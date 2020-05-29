import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';

export function* getPrivateKeySaga(accountId: string) {
  const keys = yield call(getFile, config.gaia.files.privateKeys);
  return keys[accountId];
}

export function* savePrivateKeySaga({
  accountId,
  privateKey,
}: {
  accountId: string;
  privateKey: string;
}) {
  let privateKeys = yield call(getFile, config.gaia.files.privateKeys);

  if (!privateKeys) {
    privateKeys = {};
  }

  privateKeys[accountId] = privateKey;

  yield call(putFile, {
    fileName: config.gaia.files.privateKeys,
    file: privateKeys,
  });
}

export function* deletePrivateKeySaga(accountId: string) {
  const keys = yield call(getFile, config.gaia.files.privateKeys);
  delete keys[accountId];
  yield call(putFile, { fileName: config.gaia.files.privateKeys, file: keys });
}
