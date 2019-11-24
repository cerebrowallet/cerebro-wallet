import React from 'react';

import './HashText.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

// TODO truncate text in the middle
const HashText: React.FC<Props> = ({ children, className }) => {
  return (
    <span className={`hash-text${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  );
};

export default HashText;
