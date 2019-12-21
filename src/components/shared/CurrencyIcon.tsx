import React from 'react';
import styled from 'styled-components';

import btcIcon from '../../images/currencies-icons/btc.svg';
import stxIcon from '../../images/currencies-icons/stx.svg';

import { Currencies } from '../../enums';

interface Props {
  currency: Currencies;
  size?: string;
  className?: string;
}

const Icon = styled.i`
  position: relative;
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  background-size: 50% 50%;
  background-position: center center;
  background-repeat: no-repeat;

  &:before {
    display: block;
    position: absolute;
    border-radius: 100%;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    content: '';
  }

  ${(props: Props) =>
    props.currency === Currencies.BTC &&
    `
    background-image: url(${btcIcon});    
    
    &:before {
      background: #FF8A00;
    }
  `}

  ${(props: Props) =>
    props.currency === Currencies.STX &&
    `
    background-image: url(${stxIcon});    
    
    &:before {
      background: #1313F0;
    }
  `}
  
  ${(props: Props) => props.size === 'lg' && `
    width: 2.25rem;
    height: 2.25rem;
  `}
  
  ${(props: Props) => props.size === 'xl' && `
    width: 4rem;
    height: 4rem;
  `}
` as any;

const CurrencyIcon: React.FC<Props> = ({ currency, size, className }) => {
  return <Icon currency={currency} size={size} className={className} />;
};

CurrencyIcon.defaultProps = {
  size: 'normal',
};

export default CurrencyIcon;
