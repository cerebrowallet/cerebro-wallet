import React from 'react';
import { useSelector } from 'react-redux';

import { Coins, CurrencySymbols } from '../../dictionaries';
import { getSettings } from '../../store/user/selectors';
import { getExchangeRates } from '../../store/account/selectors';
import { round } from '../../utils/common';

interface Props {
  coin: Coins;
  amount: number;
  format?: string;
}

const FormatAmount: React.FC<Props> = ({ coin, amount }) => {
  const settings = useSelector(getSettings);
  const rates = useSelector(getExchangeRates);

  if (!rates || !settings) {
    return null;
  }

  return (
    <>
      {amount < 0 ? '— ' : ''}
      {CurrencySymbols[settings.currency]}
      {round(amount * rates[coin][settings.currency])}
    </>
  );
};

export default FormatAmount;
