import { call, put, all } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { showNotification } from '../../layout/actions';
import { NotificationTypes, Statuses } from '../../../dictionaries';
import { importPrivateKey, addAccount, getAccountTxs } from '../actions';
import { generateBTCLikeAddress } from '../../../utils/wallets';
import addKeySaga from './addKey';
import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';
import { push } from 'connected-react-router';

export default function* importPrivateKeySaga({
  payload: { accountName, addressType, keyType, coin, derivationPath, key },
}: ReturnType<typeof importPrivateKey>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Importing account...',
      })
    );

    const accountId = v4();

    const address = yield call(generateBTCLikeAddress, {
      addressType,
      coin: coin.id,
      key,
      derivationPath,
      keyType: keyType.id,
    });

    yield put(
      addAccount({
        address,
        addressType,
        id: accountId,
        coin: coin.id,
        name: accountName || `My ${coin.name} Wallet`,
        derivationPath,
        txComments: {},
        keyType: keyType.id,
      })
    );
    yield put(getAccountTxs(accountId));

    const [syncResult] = yield all([
      call(syncDataToGaiaSaga, { dataType: SyncDataTypes.accounts }),
      call(addKeySaga, { accountId, key, keyType: keyType.id }),
    ]);

    if (syncResult.status === Statuses.Fail) {
      throw syncResult.error;
    }

    yield put(push(`/account/${accountId}`));

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: `Success! Account ${accountName} imported.`,
      })
    );
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text:
          'Failed to import. Please, make sure that the provided data is valid.',
      })
    );

    // TODO log error
    console.error(e);
  }
}
