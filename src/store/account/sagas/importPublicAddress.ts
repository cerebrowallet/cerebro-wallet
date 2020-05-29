import { call, put, take } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { callApi } from '../../../utils/api';

import { importPublicAddress, addAccount, setAccountTxs } from '../actions';
import { syncDataToGaia } from '../../user/actions';
import { config } from '../../../config';
import { Transactions, BlockChairTx } from '../types';
import { toBTC } from '../../../utils/common';
import { SyncDataTypes, UserActionTypes } from '../../user/types';
import { showNotification } from '../../layout/actions';
import { NotificationTypes } from '../../../dictionaries';
import { push } from 'connected-react-router';

export function normalizeTxs(txs: BlockChairTx[]) {
  return txs.reduce(
    (txs: Transactions, tx: BlockChairTx) => {
      const acc: Transactions = txs;

      acc.byIds[tx.hash] = {
        hash: tx.hash,
        amount: toBTC(tx.balance_change),
        date: tx.time,
      };
      acc.allIds.push(tx.hash);

      return acc;
    },
    {
      byIds: {},
      allIds: [],
    }
  );
}

export default function* importPublicAddressSaga({
  payload: { name, address, coin },
}: ReturnType<typeof importPublicAddress>) {
  try {
    yield put(
      showNotification({
        type: NotificationTypes.Default,
        text: 'Importing account...',
      })
    );

    const result = yield call(callApi, {
      method: 'get',
      url: config.coins[coin.id].apiUrls.getAddressInfo(address),
      queryParams: {
        transaction_details: true,
      },
    });

    if (result.data === null) {
      throw new Error(result.context.error);
    }

    const accountId = v4();
    const accountName = name || `My ${config.coins[coin.id].name} Wallet`;

    yield put(
      addAccount({
        address,
        addressType: null,
        coin: coin.id,
        id: accountId,
        name: accountName,
        derivationPath: null,
        isPublicImport: true,
        txComments: {},
      })
    );
    yield put(
      setAccountTxs(accountId, normalizeTxs(result.data[address].transactions))
    );

    yield put(syncDataToGaia({ dataType: SyncDataTypes.accounts }));

    const { type: syncResult, payload } = yield take([
      UserActionTypes.SYNC_DATA_TO_GAIA_SUCCESS,
      UserActionTypes.SYNC_DATA_TO_GAIA_ERROR,
    ]);

    if (syncResult === UserActionTypes.SYNC_DATA_TO_GAIA_ERROR) {
      throw payload instanceof Error
        ? payload
        : new Error('Error on syncing accounts to Gaia');
    }

    yield put(
      showNotification({
        type: NotificationTypes.Success,
        text: `Success! Account ${accountName} imported.`,
      })
    );

    yield put(push(`/account/${accountId}`));
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
