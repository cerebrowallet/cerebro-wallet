import { put } from 'redux-saga/effects';

import { syncDataToGaia } from '../../user/actions';
import { SyncDataTypes } from '../../user/types';

export default function* addTxCommentSaga() {
  yield put(
    syncDataToGaia({
      dataType: SyncDataTypes.accounts,
      notifications: {
        success: 'Transaction comment was successfully added',
        error: 'Error while adding transaction comment',
      },
    })
  );
}
