import React from 'react';
import styled from 'styled-components';

import { ACCOUNTS } from '../../dummyData';
import { CREATE_ACCOUNT_ACTIONS } from '../../menus';

import IconButton from './IconButton';
import CurrencyIcon from './CurrencyIcon';
import AddAccountIcon from './AddAccountIcon';
import CornerCloseButton from './CornerCloseButton';

const Wrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: linear-gradient(237.99deg, #4e6b81 0%, #2a4355 100%);
  overflow-y: auto;
`;

const Content = styled.div`
  max-width: 57.5rem;
  margin: 3.125rem auto;
  padding: 0 1.25rem;
`;

const Header = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 2.1875rem;
  color: #fff;
`;

const Items = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  margin-bottom: 3.125rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const AccountButton = styled(IconButton)`
  position: relative;
  background: #fff;
  max-width: none;
  transition: top 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  top: 0;
  margin-bottom: 0 !important;

  i {
    margin-right: 0.9375rem;
  }

  &:hover {
    background: #fff;
    top: -0.125rem;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
      0px 10px 10px rgba(0, 0, 0, 0.04);
  }
`;

const MyAccounts: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Header>My accounts</Header>
        <Items>
          {ACCOUNTS.map((account, i) => (
            <AccountButton
              key={`${account.address}-${i}`}
              link={`/account/${account.address}}`}
              icon={<CurrencyIcon currency={account.currency} size="lg" />}
              text={account.name}
              descText={`${
                account.balance
              } ${account.currency.toUpperCase()} / $100`}
            />
          ))}
        </Items>
        <Header>Manage</Header>
        <Items>
          {CREATE_ACCOUNT_ACTIONS.map((action, i) => (
            <AccountButton
              key={`${action.link}-${i}`}
              link={`/account/${action.link}}`}
              icon={<AddAccountIcon Icon={action.icon} />}
              text={action.text}
              descText={action.descText}
            />
          ))}
        </Items>
      </Content>
      <CornerCloseButton />
    </Wrapper>
  );
};

export default MyAccounts;
