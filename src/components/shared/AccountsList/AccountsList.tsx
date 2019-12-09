import React from 'react';

import './AccountsList.scss';
import { ACCOUNTS } from '../../../dummyData';

import Scrollbar from '../Scrollbar/Scrollbar';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import IconMenuItem from '../IconButton/IconButton';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

import { Breakpoints } from '../../../enums';

const MENU_ITEMS = ACCOUNTS.map(acc => ({
  link: `/account/${acc.address}`,
  text: acc.name,
  descText: `${acc.balance} ${acc.currency.toUpperCase()} / $100`,
  icon: (
    <CurrencyIcon
      currency={acc.currency}
      size="large"
      className="accounts-list__currency-icon"
    />
  )
}));

export interface Props {
  className?: string;
  view?: 'sidebar' | 'dashboard';
  mobileMenuFooter?: React.ReactNode;
}

const AccountsList: React.FC<Props> = ({
  className,
  view,
  mobileMenuFooter,
}) => {
  return (
    <div className={`accounts-list${className ? ` ${className}` : ''}`}>
      <Scrollbar wrapperClass="scrollbar--accounts-list">
        {view === 'sidebar' ? (
          <SidebarMenu
            menuItems={MENU_ITEMS}
            wrapperClassName="sidebar-menu--accounts-list"
            itemClassName="accounts-list__item"
            mobileMenuFooter={mobileMenuFooter}
            mobileBreakpoint={Breakpoints.xl}
          />
        ) : (
          MENU_ITEMS.map((account, i) => (
            <IconMenuItem
              key={`${account.link}-${i}`}
              icon={account.icon}
              link={account.link}
              text={account.text}
              descText={account.descText}
              className="accounts-list__item"
            />
          ))
        )}
      </Scrollbar>
    </div>
  );
};

export default AccountsList;
