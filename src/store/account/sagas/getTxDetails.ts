import { all, call, put, select } from 'redux-saga/effects';

import { getTxDetails, updateTx } from '../actions';
import { getAccountById } from '../selectors';
import { callApi } from '../../../utils/api';
import { config } from '../../../config';
import { toBTC } from '../../../utils/common';

export default function* getTxDetailsSaga({
  payload: { txHash, accountId },
}: ReturnType<typeof getTxDetails>) {
  try {
    const account = yield select(getAccountById(accountId));

    const [
      { data: blockChainStats, context: blockChainStatsContext },
      { data: txDetails, context: txDetailsContext },
    ] = yield all([
      call(callApi, {
        method: 'get',
        url: config.coins[account.coin].apiUrls.getBlockChainStats,
      }),
      call(callApi, {
        method: 'get',
        url: config.coins[account.coin].apiUrls.getTxInfo(txHash),
      }),
    ]);

    if (blockChainStats === null) {
      throw new Error(blockChainStatsContext.error);
    }

    if (txDetails === null) {
      throw new Error(txDetailsContext.error);
    }

    const blockChainHeight = blockChainStats.blocks;

    const actions = Object.values(txDetails).map((tx: any) => {
      const isSpentTx = !!tx.inputs.find(
        (input: any) => input.recipient === account.address
      );

      let to;
      if (isSpentTx) {
        const output = tx.outputs.find(
          (out: any) => out.recipient !== account.address
        );
        to = output.recipient;
      } else {
        to = account.address;
      }

      return put(
        updateTx(accountId, txHash, {
          fee: toBTC(tx.transaction.fee),
          confirmations:
            tx.transaction.block_id > 0
              ? blockChainHeight - tx.transaction.block_id
              : 0,
          from: tx.inputs[0].recipient,
          to,
        })
      );
    });

    yield all(actions);
  } catch (e) {

    // TODO log error
    console.error(e);
  }
}
