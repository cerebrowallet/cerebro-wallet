import { call, put, select } from 'redux-saga/effects';
import { saveAs } from 'file-saver';
import * as bitcoin from 'bitcoinjs-lib';
import { Buffer } from 'buffer';

import { exportPrivateKey } from '../actions';
import getKey from './getKey';
import { getAccountById } from '../selectors';
import { KeyTypes, AddressTypes } from '../types';
import { showNotification } from '../../layout/actions';
import { NotificationTypes } from '../../../dictionaries';
import { getNodeFromMnemonic } from '../../../utils/wallets';

export default function* exportPrivateKeySaga({
  payload: { accountId, keyType },
}: ReturnType<typeof exportPrivateKey>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Exporting private key...',
      })
    );

    const account = yield select(getAccountById(accountId));
    const key = yield call(getKey, accountId);

    if (!account) {
      throw new Error(`Account with ID: ${accountId} not found`);
    }

    const { name, coin, addressType, address, derivationPath } = account;

    let text = `Wallet: ${name} (${coin})\n`;
    text += `${
      addressType === AddressTypes.SegWit ? 'Address' : 'Legacy Address'
    }: ${address}\n`;

    if (
      keyType === KeyTypes.Mnemonic &&
      account.keyType !== KeyTypes.Mnemonic
    ) {
      throw new Error('Export format (mnemonic) is not supported by account.');
    }

    if (keyType === KeyTypes.Mnemonic) {
      text += `Mnemonic: ${key}\nDerivation Path: ${derivationPath}`;
    } else if (account.keyType === keyType) {
      text += `${
        keyType === KeyTypes.PrivateKey ? 'Private Key' : 'WIF'
      }: ${key}\n`;
    } else if (keyType === KeyTypes.PrivateKey) {
      const node =
        account.keyType === KeyTypes.Mnemonic
          ? yield call(getNodeFromMnemonic, {
              mnemonic: key,
              derivationPath: account.derivationPath,
            })
          : bitcoin.ECPair.fromWIF(key);
      text += `Private Key: ${
        node.privateKey && node.privateKey.toString('hex')
      }\n`;
    } else if (keyType === KeyTypes.WIF) {
      const node =
        account.keyType === KeyTypes.Mnemonic
          ? yield call(getNodeFromMnemonic, {
              mnemonic: key,
              derivationPath: account.derivationPath,
            })
          : bitcoin.ECPair.fromPrivateKey(Buffer.from(key, 'hex'));
      text += `WIF: ${node.toWIF()}\n`;
    }

    const formats = {
      [KeyTypes.Mnemonic]: 'mnemonic',
      [KeyTypes.WIF]: 'wif',
      [KeyTypes.PrivateKey]: 'private-key',
    };

    saveAs(
      new Blob([text], { type: 'text/plain;charset=utf-8' }),
      `${account.name}-${formats[keyType]}.txt`
    );

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: `Success! Account ${account.name} exported.`,
      })
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Failed to export.',
      })
    );

    // TODO log error
    console.error(e);
  }
}
