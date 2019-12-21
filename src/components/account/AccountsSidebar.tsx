import React from 'react';
import styled from 'styled-components';

import { ACCOUNTS } from '../../dummyData';
import { CREATE_ACCOUNT_ACTIONS } from '../../menus';
import { Breakpoints } from '../../enums';

import SidebarMenuContainer from '../../containers/SidebarMenuContainer';
import CurrencyIcon from '../shared/CurrencyIcon';
import AddAccountIcon from '../shared/AddAccountIcon';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 2.8125rem 1.875rem 1.875rem;
  }

  h3 {
    display: none;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 0 0.625rem 2.3125rem;

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
      display: block;
    }
  }

  a {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

const AccountsSidebarMenu = styled(SidebarMenuContainer)`
  padding: 2.1875rem 1.25rem 0;
  justify-items: left;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: none;
    margin: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 0;
  }

  i {
    margin-right: 0.9375rem;
  }
`;

const MENU_ITEMS = [
  ...ACCOUNTS.map(acc => ({
    link: `/account/${acc.address}`,
    text: acc.name,
    descText: `${acc.balance} ${acc.currency.toUpperCase()} / $100`,
    icon: <CurrencyIcon currency={acc.currency} size="large" />,
  })),
  ...CREATE_ACCOUNT_ACTIONS.map(opt => ({
    ...opt,
    icon: <AddAccountIcon Icon={opt.icon} />,
    footerItem: true,
  })),
];

const AccountsSidebar: React.FC = () => {
  return (
    <Wrapper>
      <h3>My Accounts</h3>
      <AccountsSidebarMenu
        menuItems={MENU_ITEMS}
        mobileBreakpoint={Breakpoints.xl}
      />
    </Wrapper>
  );
};

export default AccountsSidebar;
