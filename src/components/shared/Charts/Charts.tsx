import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ChartPeriods, Coins } from '../../../dictionaries';
import { getCharts } from '../../../store/account/actions';
import { ChartFilters } from '../../../store/account/types';

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

  useEffect(() => {
    dispatch(getCharts({ coinA, coinB, period: ChartPeriods.ThreeMonth }));
  }, [dispatch, coinA, coinB]);

  function updateFilter(payload: Partial<ChartFilters>) {
    dispatch(getCharts(payload));
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
