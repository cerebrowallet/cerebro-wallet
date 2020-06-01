import React from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  getCharts,
  getChartsFilters,
} from '../../../../store/account/selectors';
import { Container } from './styled';
import { getSettings } from '../../../../store/user/selectors';
import { config } from '../../../../config';
import { Coins } from '../../../../dictionaries';
import { Theme } from '../../../../styles/types';

import CustomTooltip from './Tooltip/Tooltip';
import Loader from '../../Loader/Loader';
import { Themes } from '../../../../store/user/types';

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
  const filters = useSelector(getChartsFilters);
  const data = useSelector(getCharts);
  const settings = useSelector(getSettings);

  if (data === null || !settings) {
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
            stroke={
              settings.theme === Themes.light
                ? 'none'
                : config.coins[filters.coinA].color
            }
            fill={
              settings.theme === Themes.light
                ? config.coins[filters.coinA].color
                : 'none'
            }
            strokeWidth={2}
            fillOpacity={0.2}
            activeDot={getDotStyles(filters.coinA, theme.colors.tertiary)}
          />
          {filters.coinB && (
            <Area
              type="monotone"
              dataKey={filters.coinB}
              stroke={
                settings.theme === Themes.light
                  ? 'none'
                  : config.coins[filters.coinB].color
              }
              strokeWidth={2}
              fill={
                settings.theme === Themes.light
                  ? config.coins[filters.coinB].color
                  : 'none'
              }
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
