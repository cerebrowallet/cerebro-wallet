import React from 'react';

import { Currencies } from '../../../../../enums';

import { Container } from './styled';

interface Props {
  currency: Currencies;
  children: React.ReactNode;
  className?: string;
}

const CurrencyInput: React.FC<Props> = ({ currency, children, className }) => {
  return (
    <Container currency={currency} className={className}>
      {children}
    </Container>
  );
};

export default CurrencyInput;
