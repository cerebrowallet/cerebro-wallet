import React from 'react';
import { Plus as PlusIcon } from 'react-feather';
import styled from 'styled-components';

import Scrollbar, { StyledTrackY } from '../../Scrollbar';
import { ACCOUNTS } from '../../../dummyData';
import CurrencyIcon from '../../shared/CurrencyIcon';
import IconButton from '../../shared/IconButton';

const StyledAccounts = styled.section`
  position: relative;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  grid-area: accounts;
  display: flex;
  flex-direction: column;
  padding: 1.3125rem 1.0625rem 0.9375rem 0.9375rem;

  &:after {
    position: absolute;
    display: none;
    content: '';
    height: 2.625rem;
    z-index: 1;
    width: 100%;
    left: 0;
    bottom: 0.9375rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      ${props => props.theme.colors.blockBackground} 100%
    );
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    &:after {
      display: block;
    }
  }
`;

const AccountsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8125rem 0 0.9375rem;
  margin-bottom: 1.5625rem;
`;

const AccountsTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${props => props.theme.colors.secondary};
`;

const AccountsAddButton = styled.button`
  width: 2.25rem;
  height: 1.5625rem;
  border-radius: 1.6875rem;
  background: #f7f7f7;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    color: ${props => props.theme.colors.secondary};
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const AccountButton = styled(IconButton)`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 0.8125rem 0.625rem;
  border-radius: 1.25rem;
  transition: background-color 0.15s ease-in;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}}) {
    &:last-child {
      margin-bottom: 1.5625rem;
    }
  }

  &:focus {
    outline: none;
  }

  &.active {
    background: ${props => props.theme.colors.tertiary};

    &:hover {
      background: ${props => props.theme.colors.tertiary};
    }
  }
  
  i {
    margin-right: 0.9375rem;
  }
`;

const TrackY = styled(StyledTrackY)`
  right: -0.7rem;
`;

const Accounts: React.FC = () => {
  return (
    <StyledAccounts>
      <AccountsHeader>
        <AccountsTitle>Accounts</AccountsTitle>
        <AccountsAddButton>
          <PlusIcon />
        </AccountsAddButton>
      </AccountsHeader>
      <Scrollbar TrackY={TrackY}>
        {ACCOUNTS.map((account, i) => (
          <AccountButton
            key={`${account.address}-${i}`}
            icon={<CurrencyIcon currency={account.currency} size="lg" />}
            link={`/account/${account.address}`}
            text={account.name}
            descText={`${
              account.balance
            } ${account.currency.toUpperCase()} / $100`}
          />
        ))}
      </Scrollbar>
    </StyledAccounts>
  );
};

export default Accounts;
