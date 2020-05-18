import React from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

import {
  getChartData,
  getChartFilters,
} from '../../../../store/account/selectors';
import { Container } from './styled';
import { config } from '../../../../config';
import { Coins } from '../../../../dictionaries';

import CustomTooltip from './Tooltip/Tooltip';
import Loader from '../../Loader/Loader';

function getDotStyles(coin: Coins) {
  return {
    fill: '#fff',
    strokeOpacity: 0.2,
    stroke: config.coins[coin].color,
    strokeWidth: 1,
    r: 3,
  };
}

const ChartContainer: React.FC = () => {
  const filters = useSelector(getChartFilters);
  const data = useSelector(getChartData);

  if (data === null) {
    return <Loader />;
  }

  return (
    <Container>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 80,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            dataKey={filters.coinA}
            stroke="none"
            fill={config.coins[filters.coinA].color}
            fillOpacity={0.2}
            activeDot={getDotStyles(filters.coinA)}
          />
          {filters.coinB && (
            <Area
              type="monotone"
              dataKey={filters.coinB}
              stroke="none"
              fill={config.coins[filters.coinB].color}
              fillOpacity={0.2}
              activeDot={getDotStyles(filters.coinB)}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default ChartContainer;
