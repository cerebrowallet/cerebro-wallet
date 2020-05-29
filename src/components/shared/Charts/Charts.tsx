import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Location } from 'history';

import { ChartPeriods, Coins } from '../../../dictionaries';
import { getCharts } from '../../../store/account/actions';
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
  const settings = useSelector(getSettings);
  const location = useLocation();
  const previous = usePrevious<{ settings: Settings; location: Location }>({
    settings,
    location,
  });

  useEffect(() => {
    if (previous) {
      if (
        previous.settings?.currency !== settings?.currency ||
        previous.location.pathname !== location.pathname
      ) {
        dispatch(getCharts({ coinA, coinB, period: ChartPeriods.ThreeMonth }));
      }
    }
  }, [
    settings,
    previous,
    location.pathname,
    coinA,
    coinB,
    dispatch,
  ]);

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
