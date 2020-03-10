import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import { DayTotalsContainer } from './styled';
import { CurrencySymbols } from '../../../../../dictionaries';
import { getSettings } from '../../../../../store/user/selectors';

interface Props {
  date: Date;
  amount: number;
}

const DayTotals: React.FC<Props> = ({ date, amount }) => {
  const settings = useSelector(getSettings);

  return (
    <DayTotalsContainer>
      <span>{format(date, 'd MMM')}</span>
      <span>
        {amount < 0 ? '-' : ''}
        {settings.currency && CurrencySymbols[settings.currency]}
        {Math.abs(amount)}
      </span>
    </DayTotalsContainer>
  );
};

export default DayTotals;
