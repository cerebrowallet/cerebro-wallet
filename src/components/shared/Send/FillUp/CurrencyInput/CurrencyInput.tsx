import React from 'react';

import {
  Currencies,
  CurrencySymbols,
  Coins,
} from '../../../../../dictionaries';

import { Container, CurrencySign } from './styled';

interface Props {
  currency?: Currencies;
  coin?: Coins;
  children: React.ReactNode;
  className?: string;
}

const CurrencyInput: React.FC<Props> = ({
  currency,
  coin,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      {children}
      <CurrencySign>
        {!!currency && !coin && CurrencySymbols[currency]}
        {!currency && !!coin && coin}
      </CurrencySign>
    </Container>
  );
};

export default CurrencyInput;
