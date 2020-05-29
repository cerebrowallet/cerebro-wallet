import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Button, Title } from './styled';
import { ChartPeriods } from '../../../../dictionaries';
import { getChartsFilters } from '../../../../store/account/selectors';
import { enumToArray } from '../../../../utils/common';

interface Props {
  updateFilter: (payload: { period: ChartPeriods }) => void;
}

const TimeFilter: React.FC<Props> = ({ updateFilter }) => {
  const filters = useSelector(getChartsFilters);

  return (
    <Container>
      <Title>Chart</Title>
      {enumToArray(ChartPeriods).map(([key, value]) => (
        <Button
          key={key}
          type="button"
          onClick={() => {
            if (value !== filters.period) {
              updateFilter({ period: value as ChartPeriods });
            }
          }}
          active={filters.period === value}
        >
          {value}
        </Button>
      ))}
    </Container>
  );
};

export default TimeFilter;
