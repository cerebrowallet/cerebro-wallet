import React from 'react';

import './CurrencyInput.scss';

const Currencies = {
  btc: 'btc',
  $: 'us-dollar',
} as const;

interface Props {
  currency: keyof typeof Currencies;
  children: React.ReactNode;
  className?: string;
}

const CurrencyInput: React.FC<Props> = ({ currency, children, className }) => {
  return (
    <div
      className={`currency-input currency-input--${Currencies[currency]}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
};

export default CurrencyInput;
