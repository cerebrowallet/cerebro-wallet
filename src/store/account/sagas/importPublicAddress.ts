import { call, put } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { callApi } from '../../../utils/api';

import { importPublicAddress, addAccount, setAccountTxs } from '../actions';
import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { config } from '../../../config';
import { Transactions, BlockChairTx } from '../types';
import { toBTC } from '../../../utils/common';
import { SyncDataTypes } from '../../user/types';
import { showNotification } from '../../layout/actions';
import { NotificationTypes, Statuses } from '../../../dictionaries';
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
        keyType: null,
        txComments: {},
      })
    );
    yield put(
      setAccountTxs(accountId, normalizeTxs(result.data[address].transactions))
    );

    const syncResult = yield call(syncDataToGaiaSaga, {
      dataType: SyncDataTypes.accounts,
    });

    if (syncResult.status === Statuses.Fail) {
      throw syncResult.error;
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
