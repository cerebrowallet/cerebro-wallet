import React from 'react';

import { Coins } from '../../../dictionaries';

import { Icon } from './styled';

interface Props {
  coin: Coins;
  size?: string;
  className?: string;
}

const CurrencyIcon: React.FC<Props> = ({ coin, size, className }) => {
  return <Icon coin={coin} size={size} className={className} />;
};

CurrencyIcon.defaultProps = {
  size: 'normal',
};

export default CurrencyIcon;
