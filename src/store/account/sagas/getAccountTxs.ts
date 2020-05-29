import { call, put, select } from 'redux-saga/effects';

import { Transactions } from '../types';
import { callApi } from '../../../utils/api';
import { config } from '../../../config';
import { toBTC } from '../../../utils/common';
import { showNotification } from '../../layout/actions';
import { getAccountTxs, setAccountTxs } from '../actions';
import { NotificationTypes } from '../../../dictionaries';
import { getAccountById } from '../selectors';

interface BlockChairTx {
  hash: string;
  balance_change: number;
  time: string;
}

export default function* getAccountTxsSaga({
  payload: { accountId },
}: ReturnType<typeof getAccountTxs>) {
  try {
    const account = yield select(getAccountById(accountId));

    if (!account) {
      throw new Error(`Account with id: ${accountId} was not found`);
    }

    const result = yield call(callApi, {
      method: 'get',
      url: config.coins[account.coin].apiUrls.getAddressInfo(account.address),
      queryParams: {
        transaction_details: true,
      },
    });

    if (result.data === null) {
      throw new Error(result.context.error);
    }

    const txs = result.data[account.address].transactions.reduce(
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

    yield put(setAccountTxs(account.id, txs));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting accounts details',
      })
    );

    // TODO log error
    console.error(e);
  }
}
