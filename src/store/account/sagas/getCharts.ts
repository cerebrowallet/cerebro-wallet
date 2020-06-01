import { all, call, put, select, take } from 'redux-saga/effects';

import { getSettings } from '../../user/selectors';
import { UserActionTypes } from '../../user/types';
import { getChartsFilters } from '../selectors';
import { ChartPeriods, Coins } from '../../../dictionaries';
import { config } from '../../../config';
import { callApi } from '../../../utils/api';
import { setCharts } from '../actions';

export default function* getChartsSaga() {
  try {
    yield put(setCharts(null));

    let settings = yield select(getSettings);
    const filters = yield select(getChartsFilters);

    if (!settings) {
      const { payload } = yield take(UserActionTypes.SET_SETTINGS);
      settings = payload;
    }

    const params = {
      [ChartPeriods.Day]: { aggregate: 1, limit: 24, api: 'histohour' },
      [ChartPeriods.Week]: { aggregate: 24, limit: 7, api: 'histohour' },
      [ChartPeriods.Month]: { aggregate: 1, limit: 30, api: 'histoday' },
      [ChartPeriods.ThreeMonth]: { aggregate: 1, limit: 90, api: 'histoday' },
      [ChartPeriods.Year]: { aggregate: 1, limit: 365, api: 'histoday' },
    };
    const periodBasedParams = params[filters.period as ChartPeriods];

    const getArgs = (coin: Coins) => ({
      method: 'get',
      url: `${config.getChartsApiUrl}/${periodBasedParams.api}`,
      queryParams: {
        aggregate: periodBasedParams.aggregate,
        limit: periodBasedParams.limit,
        fsym: coin === Coins.BTC_TestNet ? Coins.BTC : coin,
        tsym: settings?.currency,
      },
    });

    const calls: any[] = [call(callApi, getArgs(filters.coinA))];

    if (filters.coinB) {
      calls.push(call(callApi, getArgs(filters.coinB)));
    }

    const results = yield all(calls);

    const data = results.reduce(
      (
        acc: any,
        el: {
          Response: 'Success' | 'Error';
          Data: { Data: { time: number; close: number }[] };
        },
        i: number
      ) => {
        const a = acc;

        if (!el || el.Response !== 'Success') {
          return a;
        }

        a[i === 0 ? filters.coinA : filters.coinB] = el.Data.Data.map(
          (item) => ({
            dateTime: item.time,
            value: item.close,
          })
        );
        return a;
      },
      {}
    );

    yield put(setCharts(data));
  } catch (e) {
    console.error(e);
  }
}
