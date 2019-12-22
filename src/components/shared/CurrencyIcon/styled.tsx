import styled from 'styled-components';
import { Currencies } from '../../../enums';
import btcIcon from '../../../images/currencies-icons/btc.svg';
import stxIcon from '../../../images/currencies-icons/stx.svg';

interface IconProps {
  currency: Currencies;
  size?: string;
}

export const Icon = styled.i`
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

  ${(props: IconProps) =>
    props.currency === Currencies.BTC &&
    `
    background-image: url(${btcIcon});    
    
    &:before {
      background: #FF8A00;
    }
  `}

  ${(props: IconProps) =>
    props.currency === Currencies.STX &&
    `
    background-image: url(${stxIcon});    
    
    &:before {
      background: #1313F0;
    }
  `}
  
  ${(props: IconProps) =>
    props.size === 'lg' &&
    `
    width: 2.25rem;
    height: 2.25rem;
  `}
  
  ${(props: IconProps) =>
    props.size === 'xl' &&
    `
    width: 4rem;
    height: 4rem;
  `}
` as any;
