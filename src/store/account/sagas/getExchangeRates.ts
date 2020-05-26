import { call, put, select } from 'redux-saga/effects';

import { getCoinsList, getCurrenciesList } from '../../user/selectors';
import { callApi } from '../../../utils/api';
import { config } from '../../../config';
import { Value } from '../../../components/forms/DropDown/DropDown';
import { Coins, NotificationTypes } from '../../../dictionaries';
import { setExchangeRates } from '../actions';
import { showNotification } from '../../layout/actions';

export default function* getExchangeRatesSaga() {
  try {
    const coins = yield select(getCoinsList);
    const currencies = yield select(getCurrenciesList);

    const rates = yield call(callApi, {
      method: 'get',
      url: `${config.getCoursesApiUrl}`,
      queryParams: {
        fsyms: coins.map((coin: Value) => coin.id).join(','),
        tsyms: currencies
          .filter((coin: Value) => coin.id !== Coins.BTC_TestNet)
          .map((currency: Value) => currency.id),
      },
    });

    if (Coins.BTC_TestNet) {
      rates[Coins.BTC_TestNet] = rates[Coins.BTC];
    }

    yield put(setExchangeRates(rates));
  } catch (e) {
    yield put(
      showNotification({
        type: NotificationTypes.Error,
        text: 'Error while getting exchange rates',
      })
    );

    // TODO log error
    console.error(e);
  }
}
