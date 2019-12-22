import React from 'react';

import { Currencies } from '../../../enums';

import { Icon } from './styled';

interface Props {
  currency: Currencies;
  size?: string;
  className?: string;
}

const CurrencyIcon: React.FC<Props> = ({ currency, size, className }) => {
  return <Icon currency={currency} size={size} className={className} />;
};

CurrencyIcon.defaultProps = {
  size: 'normal',
};

export default CurrencyIcon;
