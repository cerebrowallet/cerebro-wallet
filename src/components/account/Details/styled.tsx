import styled from 'styled-components';
import WhiteBlock from '../../shared/WhiteBlock';
import CurrencyIcon from '../../shared/CurrencyIcon/CurrencyIcon';

export const WhiteBlockDetails = styled(WhiteBlock)`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
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

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
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

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    text-align: right;
  }
`;

export const BalanceInCrypto = styled.div`
  font-size: 1.5rem;
  line-height: 1.8125rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const BalanceInDollars = styled.div`
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${props => props.theme.colors.secondary};
`;

export const UpdateBalance = styled.button`
  border: 0;
  background: none;
  cursor: pointer;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Addresses = styled.div`
  margin-bottom: 3.125rem;
`;
