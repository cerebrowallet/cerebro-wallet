import React from 'react';
import { format, fromUnixTime } from 'date-fns';

import { Box, Date, Price, PriceValue } from './styled';

interface Props {
  active?: boolean;
  payload?: any[];
}

const Tooltip: React.FC<Props> = ({ active, payload }) => {
  if (!active || !payload) {
    return null;
  }

  return (
    <Box>
      <Date>
        {format(fromUnixTime(payload[0].payload.dateTime), 'LLL d, y p')}
      </Date>
      {payload.map((item, i) => (
        <Price key={i}>
          {item.name}:{' '}
          <PriceValue>
            {item.payload.currency}
            {item.payload[item.name]}
          </PriceValue>
        </Price>
      ))}
    </Box>
  );
};

export default Tooltip;
