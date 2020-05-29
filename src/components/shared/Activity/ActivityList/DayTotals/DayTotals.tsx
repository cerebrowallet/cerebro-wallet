import React from 'react';
import { format } from 'date-fns';

import { DayTotalsContainer } from './styled';
import { Currencies, CurrencySymbols } from '../../../../../dictionaries';

interface Props {
  date: Date;
  amount: number;
  currency: Currencies;
}

const DayTotals: React.FC<Props> = ({ date, amount, currency }) => {
  return (
    <DayTotalsContainer>
      <span>{format(date, 'd MMM')}</span>
      <span>
        {amount < 0 ? '-' : ''}
        {CurrencySymbols[currency]}
        {Math.abs(amount)}
      </span>
    </DayTotalsContainer>
  );
};

export default DayTotals;
