import React from 'react';

import './CurrencyIcon.scss';

import { Currencies } from '../../../enums';

interface Props {
  currency: Currencies;
  size?: string;
  className?: string;
}

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
