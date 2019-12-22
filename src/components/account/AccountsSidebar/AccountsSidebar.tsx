import React from 'react';

import { ACCOUNTS } from '../../../dummyData';
import { CREATE_ACCOUNT_ACTIONS } from '../../../menus';
import { Breakpoints } from '../../../enums';

import CurrencyIcon from '../../shared/CurrencyIcon/CurrencyIcon';
import AddAccountIcon from '../../shared/AddAccountIcon/AddAccountIcon';
import { Wrapper, AccountsSidebarMenu } from './styled';

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
