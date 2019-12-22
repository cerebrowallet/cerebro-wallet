import React from 'react';
import { format } from 'date-fns';

import { DayTotalsContainer } from './styled';

interface Props {
  date: Date;
  amount: number;
}

const DayTotals: React.FC<Props> = ({ date, amount }) => {
  return (
    <DayTotalsContainer>
      <span>{format(date, 'd MMM')}</span>
      <span>
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </DayTotalsContainer>
  );
};

export default DayTotals;
