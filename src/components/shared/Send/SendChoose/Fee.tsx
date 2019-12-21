import React from 'react';
import styled from 'styled-components';

import { Currencies } from '../../../../enums';

import CurrencyInput from './CurrencyInput';
import Input from '../../../forms/Input';

const Wrapper = styled(CurrencyInput)`
  margin-bottom: 1.875rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;

const Fee: React.FC = () => {
  return (
    <Wrapper currency={Currencies.BTC}>
      <Input disabled name="fee" />
    </Wrapper>
  );
};

export default Fee;
