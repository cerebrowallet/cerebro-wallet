import React from 'react';

import { Span } from './styled';

interface Props {
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
  breakAll?: boolean;
}

// TODO truncate text in the middle
const HashText: React.FC<Props> = ({
  children,
  className,
  truncate,
  breakAll,
}) => {
  return (
    <Span className={className} truncate={truncate} breakAll={breakAll}>
      {children}
    </Span>
  );
};

export default HashText;
