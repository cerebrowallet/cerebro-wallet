import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { KeyTypes } from '../types';

export default function* addKeySaga({
  accountId,
  key,
  keyType,
}: {
  accountId: string;
  key: string;
  keyType: KeyTypes;
}) {
  const keys = yield call(getFile, config.gaia.files.keys);

  yield call(putFile, {
    fileName: config.gaia.files.keys,
    file: {
      ...keys,
      [accountId]: { key, keyType },
    },
  });
}
