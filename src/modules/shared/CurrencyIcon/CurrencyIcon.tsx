import React from 'react';

import './CurrencyIcon.scss';

interface Props {
  currency: string;
  size?: string;
  className?: string;
};

const CurrencyIcon: React.FC<Props> = ({ currency, size, className }) => {
  return (
    <i
      className={`currency currency--${currency}${
        size === 'large' ? ' currency--large' : ''
      } ${className || ''}`}
    />
  );
};

CurrencyIcon.defaultProps = {
  size: 'normal',
};

export default CurrencyIcon;
