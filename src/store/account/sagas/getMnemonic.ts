import { call } from 'redux-saga/effects';

import { getFile, putFile } from '../../../utils/blockstack';
import { config } from '../../../config';
import { createMnemonic } from '../../../utils/wallets';

export default function* getMnemonicSaga() {
  let mnemonic = yield call(getFile, config.gaia.files.mnemonic);

  if (!mnemonic) {
    mnemonic = createMnemonic();

    yield call(putFile, {
      fileName: config.gaia.files.mnemonic,
      file: mnemonic,
    });
  }

  return mnemonic;
}
