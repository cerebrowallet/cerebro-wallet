import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChartPeriods, Coins } from '../../../dictionaries';
import { getChartData, resetChart } from '../../../store/account/actions';
import { ChartFilters } from '../../../store/account/types';
import { getSettings } from '../../../store/user/selectors';
import { usePrevious } from '../../../utils/hooks';
import { Settings } from '../../../store/user/types';

import { Container, Header } from './styled';

import TimeFilter from './TimeFilter/TimeFilter';
import CoinsFilter from './CoinsFilter/CoinsFilter';
import CoinValue from './CoinValue/CoinValue';
import ChartContainer from './ChartContainer/ChartContainer';

interface Props {
  coinA?: Coins;
  coinB?: Coins;
  canChange?: boolean;
}

const Charts: React.FC<Props> = ({ coinA, coinB, canChange }) => {
  const dispatch = useDispatch();
  const settings: Settings = useSelector(getSettings);
  const prevSettings = usePrevious<Settings>(settings);

  function getInitialChartData() {
    dispatch(getChartData({ coinA, coinB, period: ChartPeriods.ThreeMonth }));
  }

  useEffect(() => {
    if (settings.currency) {
      getInitialChartData();
    }

    return () => {
      dispatch(resetChart());
    };
  }, []);

  useEffect(() => {
    if (prevSettings && !prevSettings.currency && settings.currency) {
      getInitialChartData();
    }
  }, [settings]);

  function updateFilter(payload: Partial<ChartFilters>) {
    dispatch(getChartData(payload));
  }

  return (
    <Container>
      <Header>
        <TimeFilter updateFilter={updateFilter} />
        {!canChange && coinA ? (
          <CoinValue coin={coinA} />
        ) : (
          <CoinsFilter updateFilter={updateFilter} />
        )}
      </Header>
      <ChartContainer />
    </Container>
  );
};

Charts.defaultProps = {
  coinA: Coins.BTC,
  canChange: false,
};

export default Charts;
