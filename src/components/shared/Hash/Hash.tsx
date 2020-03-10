import React from 'react';

import { Span } from './styled';

interface Props {
  value: string;
  className?: string;
  truncate?: boolean;
  breakAll?: boolean;
}

// TODO truncate text in the middle
const Hash: React.FC<Props> = ({
  value,
  className,
  truncate,
  breakAll,
}) => {
  return (
    <Span className={className} truncate={truncate} breakAll={breakAll}>
      {truncate ? `${value.slice(0, 6)}...${value.slice(-7)}` : value}
    </Span>
  );
};

export default Hash;
