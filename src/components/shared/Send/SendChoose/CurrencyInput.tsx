import React from 'react';
import styled from 'styled-components';

import { Currencies } from '../../../../enums';

interface WrapperProps {
  currency: Currencies;
}

const Wrapper = styled.div`
  position: relative;

  &:after {
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 1.25rem;
    transform: translateY(-50%);
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary};
    font-size: 1rem;
    line-height: 1.5rem;
    
    ${(props: WrapperProps) =>
      props.currency === Currencies.BTC &&
      `
      content: 'btc';
    `}
    
    ${(props: WrapperProps) =>
      props.currency === Currencies.USD &&
      `
      content: '$';
    `}
    
    ${(props: WrapperProps) =>
      props.currency === Currencies.STX &&
      `
      content: 'stx';
    `}
  }
`;

interface Props {
  currency: Currencies;
  children: React.ReactNode;
  className?: string;
}

const CurrencyInput: React.FC<Props> = ({ currency, children, className }) => {
  return (
    <Wrapper currency={currency} className={className}>
      {children}
    </Wrapper>
  );
};

export default CurrencyInput;
