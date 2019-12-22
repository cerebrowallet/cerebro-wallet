import React from 'react';

import { Currencies } from '../../../../../enums';

import Input from '../../../../forms/Input/Input';
import {
  Container,
  SendAllButton,
  InputsContainer,
  AmountInCrypto,
  AmountInDollars,
} from './styled';

const Amount: React.FC = () => {
  return (
    <Container label="Amount">
      <SendAllButton type="button">Send all</SendAllButton>
      <InputsContainer>
        <AmountInCrypto currency={Currencies.BTC}>
          <Input name="amount" required />
        </AmountInCrypto>
        <AmountInDollars currency={Currencies.USD}>
          <Input name="amountInDollars" required />
        </AmountInDollars>
      </InputsContainer>
    </Container>
  );
};

export default Amount;
