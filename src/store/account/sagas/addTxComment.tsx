import { call } from 'redux-saga/effects';

import syncDataToGaiaSaga from '../../user/sagas/syncDataToGaia';
import { SyncDataTypes } from '../../user/types';

export default function* addTxCommentSaga() {
  yield call(syncDataToGaiaSaga, {
    dataType: SyncDataTypes.accounts,
    notifications: {
      success: 'Transaction comment was successfully added',
      error: 'Error while adding transaction comment',
    },
  });
}
