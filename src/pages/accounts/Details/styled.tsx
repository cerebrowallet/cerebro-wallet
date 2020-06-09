import styled from 'styled-components';

import { Breakpoints } from '../../../dictionaries';

import WhiteBlock from '../../../components/shared/WhiteBlock';
import CurrencyIcon from '../../../components/shared/CurrencyIcon/CurrencyIcon';

export const WhiteBlockDetails = styled(WhiteBlock)`
  @media (min-width: ${Breakpoints.sm}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WalletName = styled.div`
  font-size: 1.125rem;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  margin-bottom: 1.875rem;
  word-break: break-word;

  @media (min-width: ${Breakpoints.sm}px) {
    margin-bottom: 0;
  }
`;

export const Icon = styled(CurrencyIcon)`
  width: 4rem;
  height: 4rem;
  margin-right: 0.9375rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const Balance = styled.div`
  text-align: center;

  @media (min-width: ${Breakpoints.sm}px) {
    text-align: right;
  }
`;

export const BalanceInCrypto = styled.div`
  font-size: 1.5rem;
  line-height: 1.8125rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const BalanceInLocalCurrency = styled.div`
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Addresses = styled.div`
  margin-bottom: 3.125rem;
`;
