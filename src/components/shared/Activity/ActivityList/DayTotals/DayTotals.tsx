import React from 'react';
import { format } from 'date-fns';

import './DayTotals.scss';

interface Props {
  date: Date;
  amount: number;
}

const DayTotals: React.FC<Props> = ({ date, amount }) => {
  return (
    <div className="day-totals">
      <span className="day-totals__date">{format(date, 'd MMM')}</span>
      <span className="day-totals__amount">
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </div>
  );
};

export default DayTotals;
