import React from 'react';
import { useSelector } from 'react-redux';

import { Coins } from '../../../../dictionaries';
import { config } from '../../../../config';
import { enumToArray } from '../../../../utils/common';
import { getChartsFilters } from '../../../../store/account/selectors';

import { Container } from './styled';

import WhiteDropDownMenu, {
  Option,
} from '../../WhiteDropDownMenu/WhiteDropDownMenu';
import CoinValue from '../CoinValue/CoinValue';
import { ChartFilters } from '../../../../store/account/types';

interface Props {
  updateFilter: (payload: Partial<ChartFilters>) => void;
}

const options = enumToArray(Coins).map(([key, value]) => ({
  name: `${config.coins[value].name} ${key}`,
  id: value,
}));

const CoinsFilter: React.FC<Props> = ({ updateFilter }) => {
  const filters = useSelector(getChartsFilters);

  return (
    <Container>
      <WhiteDropDownMenu
        selected={filters.coinA}
        menuItems={options.filter((option) =>
          filters.coinB ? option.id !== filters.coinB : true
        )}
        onChange={(value: Coins) => {
          if (filters.coinA !== value) {
            updateFilter({ coinA: value });
          }
        }}
        valueRenderer={(value: Option) => <CoinValue coin={value.id} />}
        position="right"
      />
      {filters.coinB && (
        <WhiteDropDownMenu
          selected={filters.coinB}
          menuItems={options.filter((option) => option.id !== filters.coinA)}
          onChange={(value: Coins) => {
            if (filters.coinA !== value) {
              updateFilter({ coinB: value });
            }
          }}
          valueRenderer={(value: Option) => <CoinValue coin={value.id} />}
          position="right"
        />
      )}
    </Container>
  );
};

export default CoinsFilter;
