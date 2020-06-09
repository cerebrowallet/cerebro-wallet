import { call, put, all, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { v4 } from 'uuid';

import { createAccount, addAccount } from '../actions';
import { showNotification } from '../../layout/actions';
import { Coins, NotificationTypes, Statuses } from '../../../dictionaries';
import { generateBTCLikeAddress } from '../../../utils/wallets';
import { getAccounts } from '../selectors';
import getKey from './getKey';
import {
  getCoinLastIndexSaga,
  incrementCoinLastIndexSaga,
} from './coinLastIndexesSagas';
import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';
import { config } from '../../../config';
import { KeyTypes } from '../types';

const coinTypes = {
  [Coins.BTC]: '0',
  [Coins.BTC_TestNet]: '0',
};

export default function* createAccountSaga({
  payload: { coin, addressType },
}: ReturnType<typeof createAccount>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Creating account...',
      })
    );

    const [nextAccountIndex, key] = yield all([
      call(getCoinLastIndexSaga, coin),
      call(getKey),
    ]);
    const derivationPath = `m/84'/${coinTypes[coin]}'/${nextAccountIndex}'/0/0`;
    const accountId = v4();

    const address = yield call(generateBTCLikeAddress, {
      addressType,
      coin,
      key,
      keyType: KeyTypes.Mnemonic,
      derivationPath,
    });

    yield call(incrementCoinLastIndexSaga, coin);

    const coinName = config.coins[coin].name;
    const accounts = yield select(getAccounts);
    const sameCoinAccountsIdsWithDefaultName = accounts
      ? accounts.allIds.filter((accountId: string) => {
          const account = accounts.byIds[accountId];
          return account.coin === coin && account.name === coinName;
        })
      : [];

    yield put(
      addAccount({
        address,
        addressType,
        id: accountId,
        coin,
        name:
          sameCoinAccountsIdsWithDefaultName.length === 0
            ? coinName
            : `${coinName} ${sameCoinAccountsIdsWithDefaultName.length + 1}`,
        derivationPath,
        txComments: {},
        keyType: KeyTypes.Mnemonic,
      })
    );
    const result = yield call(syncDataToGaiaSaga, {
      dataType: SyncDataTypes.accounts,
    });

    if (result.status === Statuses.Fail) {
      throw result.error;
    }

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: 'Account was successfully created',
      })
    );

    yield put(push(`/account/${accountId}`));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while creating accounts',
      })
    );

    // TODO log error
    console.error(e);
  }
}
