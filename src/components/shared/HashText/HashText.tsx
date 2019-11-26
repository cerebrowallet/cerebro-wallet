import React from 'react';

import './HashText.scss';

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
    <span
      className={`hash-text${truncate ? ' hash-text--truncate' : ''}${
        breakAll ? ' hash-text--break-all' : ''
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </span>
  );
};

export default HashText;
