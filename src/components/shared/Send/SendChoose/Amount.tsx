import React from 'react';
import styled from 'styled-components';

import { Currencies } from '../../../../enums';

import FormGroup from '../../../forms/FormGroup';
import Input from '../../../forms/Input';
import CurrencyInput from './CurrencyInput';

const Wrapper = styled(FormGroup)`
  position: relative;
`;

const SendAllButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: 0;
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
`;

const InputsWrapper = styled.div`
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    width: 100%;
  }
`;

const AmountInCrypto = styled(CurrencyInput)`
  border-bottom: 1px solid #fff;
  flex: 50%;

  input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    border-right: 1px solid #fff;
  }
`;

const AmountInDollars = styled(CurrencyInput)`
  flex: 50%;

  input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const Amount: React.FC = () => {
  return (
    <Wrapper label="Amount">
      <SendAllButton type="button">Send all</SendAllButton>
      <InputsWrapper>
        <AmountInCrypto currency={Currencies.BTC}>
          <Input name="amount" required />
        </AmountInCrypto>
        <AmountInDollars currency={Currencies.USD}>
          <Input name="amountInDollars" required />
        </AmountInDollars>
      </InputsWrapper>
    </Wrapper>
  );
};

export default Amount;
