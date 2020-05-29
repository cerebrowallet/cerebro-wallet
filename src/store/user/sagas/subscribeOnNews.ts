import {
  setSubscribeOnNewsStatus,
  subscribeOnNews,
  updateSettings,
} from '../actions';
import { call, delay, put } from 'redux-saga/effects';
import { Statuses } from '../../../dictionaries';
import { callApi } from '../../../utils/api';

export default function* subscribeOnNewsSaga({
  payload: email,
}: ReturnType<typeof subscribeOnNews>) {
  yield put(setSubscribeOnNewsStatus(Statuses.InProgress));

  try {
    const res = yield call(callApi, {
      method: 'put',
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: {
        list_ids: [process.env.REACT_APP_LIST_ID],
        contacts: [{ email }],
      },
    });

    if (res.errors && res.errors.length > 0) {
      throw new Error();
    }

    yield put(
      updateSettings({
        update: {
          email,
        },
        withoutNotifications: true,
      })
    );

    yield put(setSubscribeOnNewsStatus(Statuses.Success));
  } catch (e) {
    yield put(setSubscribeOnNewsStatus(Statuses.Fail));

    // TODO log error
    console.error(e);
  }

  yield delay(5000);

  yield put(setSubscribeOnNewsStatus(null));
}
