import styled from 'styled-components';
import { Currencies } from '../../../../../enums';

interface ContainerProps {
  currency: Currencies;
}

export const Container = styled.div`
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
    
    ${(props: ContainerProps) =>
      props.currency === Currencies.BTC &&
      `
      content: 'btc';
    `}
    
    ${(props: ContainerProps) =>
      props.currency === Currencies.USD &&
      `
      content: '$';
    `}
    
    ${(props: ContainerProps) =>
      props.currency === Currencies.STX &&
      `
      content: 'stx';
    `}
  }
`;
