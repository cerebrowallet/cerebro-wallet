import React from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

import {
  getChartData,
  getChartFilters,
} from '../../../../store/account/selectors';
import { Container } from './styled';
import { config } from '../../../../config';
import { Coins } from '../../../../dictionaries';
Themes} from '../../../../utils/styled';

import CustomTooltip from './Tooltip/Tooltip';
import Loader from '../../Loader/Loader';

function getDotStyles(coin: Coins, fillColor: string) {
  return {
    fill: fillColor,
    strokeOpacity: 0.2,
    stroke: config.coins[coin].color,
    strokeWidth: 1,
    r: 3,
  };
}

interface Props {
  theme: Theme;
}

const ChartContainer: React.FC<Props> = ({ theme }) => {
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
            activeDot={getDotStyles(filters.coinA, theme.colors.tertiary)}
          />
          {filters.coinB && (
            <Area
              type="monotone"
              dataKey={filters.coinB}
              stroke="none"
              fill={config.coins[filters.coinB].color}
              fillOpacity={0.2}
              activeDot={getDotStyles(filters.coinB, theme.colors.tertiary)}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default withTheme(ChartContainer);
