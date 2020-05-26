import { addTx, makeTx, setCreateTxResult } from '../actions';
import { call, put, select } from 'redux-saga/effects';
import { getAccountById } from '../selectors';
import { callApi, getQueryString } from '../../../utils/api';
import { config } from '../../../config';
import { createBTCLikeTransaction } from '../../../utils/wallets';
import { TransferToTypes } from '../../../components/shared/Send/Send';
import { toSatoshi } from '../../../utils/common';
import { Statuses } from '../../../dictionaries';
import { getPrivateKeySaga } from './privateKeysSagas';

export default function* makeTxSaga({
  payload: txDraftValues,
}: ReturnType<typeof makeTx>) {
  try {
    if (!txDraftValues.transferFrom || !txDraftValues.transferTo) {
      throw new Error('');
    }

    const transferFromAccount = yield select(
      getAccountById(txDraftValues.transferFrom?.id)
    );

    if (!transferFromAccount) {
      throw new Error('Transfer from account is not found.');
    }

    const addressInfoResult = yield call(callApi, {
      method: 'get',
      url: config.coins[transferFromAccount.coin].apiUrls.getAddressInfo(
        transferFromAccount.address
      ),
      queryParams: {
        unspentOnly: true,
      },
    });

    if (addressInfoResult.data === null) {
      throw new Error(addressInfoResult.context.error);
    }

    const addressInfo = addressInfoResult.data[transferFromAccount.address];

    const txAmount = parseFloat(txDraftValues.amount);
    const txFee = parseFloat(txDraftValues.fee);
    const privateKey = yield call(getPrivateKeySaga, transferFromAccount.id);

    const txHash = createBTCLikeTransaction({
      privateKey,
      utxo: addressInfo.utxo,
      receivers: [
        {
          address:
            txDraftValues.transferToType === TransferToTypes.Account &&
            typeof txDraftValues.transferTo !== 'string'
              ? txDraftValues.transferTo.address
              : txDraftValues.transferTo,
          amount: toSatoshi(txAmount),
        },
        {
          address: transferFromAccount.address,
          amount:
            toSatoshi(transferFromAccount.balance) -
            toSatoshi(txAmount) -
            toSatoshi(txFee),
        },
      ],
      coin: transferFromAccount.coin,
    });

    const broadcastTxResult = yield call(callApi, {
      method: 'post',
      url: config.coins[transferFromAccount.coin].apiUrls.broadcastTx,
      body: getQueryString({
        data: txHash,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    if (broadcastTxResult.data === null) {
      throw new Error(broadcastTxResult.context.error);
    }

    yield put(
      setCreateTxResult({
        status: Statuses.Success,
        txHash: broadcastTxResult.data.transaction_hash,
      })
    );

    yield put(
      addTx({
        accountId: transferFromAccount.id,
        tx: {
          hash: broadcastTxResult.data.transaction_hash,
          amount: txAmount,
          date: new Date().toString(),
        },
      })
    );
  } catch (e) {
    yield put(
      setCreateTxResult({
        status: Statuses.Fail,
      })
    );

    // TODO log error
    console.error(e);
  }
}
