import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { createMnemonic } from '../../../utils/wallets';
import { KeyTypes } from '../types';

export default function* getKeySaga(accountId?: string) {
  let keys = yield call(getFile, config.gaia.files.keys);

  if (!keys) {
    keys = {
      cerebro: {
        key: createMnemonic(),
        keyType: KeyTypes.Mnemonic,
      },
    };

    yield call(putFile, {
      fileName: config.gaia.files.keys,
      file: keys,
    });
  }

  const key =
    accountId && keys[accountId] ? keys[accountId].key : keys.cerebro.key;

  if (!key) {
    throw new Error(`Key for account with ID: ${accountId} not found.`);
  }

  return key;
}
