import React from 'react';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

const StyledTotalBalance = styled.section`
  grid-area: total-balance;
  padding: 2rem 1.563rem;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
`;

const TotalBalanceTitle = styled.header`
  font-size: 0.75rem;
  line-height: 0.938rem;
  color: ${props => props.theme.colors.secondary};
`;

const TotalBalanceCurrency = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-left: 0.2rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: ${props => props.theme.colors.secondary};
    vertical-align: middle;
    margin-left: 0.1rem;
  }
`;

const TotalBalanceAmount = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

const TotalBalance: React.FC = () => {
  return (
    <StyledTotalBalance>
      <TotalBalanceTitle>
        Total balance
        <TotalBalanceCurrency>
          USD
          <ChevronDownIcon />
        </TotalBalanceCurrency>
      </TotalBalanceTitle>
      <TotalBalanceAmount>3,458.27</TotalBalanceAmount>
    </StyledTotalBalance>
  );
};

export default TotalBalance;
