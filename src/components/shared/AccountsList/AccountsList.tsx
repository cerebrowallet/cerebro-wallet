import React from 'react';

import './AccountsList.scss';
import { ACCOUNTS } from '../../../dummyData';

import Scrollbar from '../Scrollbar/Scrollbar';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import IconMenuItem from '../IconButton/IconButton';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import AddAccount from '../AddAccount/AddAccount';

import { Breakpoints } from '../../../enums';
import {
  Eye as EyeIcon,
  Key as KeyIcon,
  Plus as PlusIcon,
} from 'react-feather';
import AddAccountIcon from '../AddAccount/AddAccountIcon/AddAccountIcon';

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
  ),
}));

export interface Props {
  className?: string;
  view?: 'sidebar' | 'dashboard';
}

const AccountsList: React.FC<Props> = ({ className, view }) => {
  return (
    <div className={`accounts-list${className ? ` ${className}` : ''}`}>
      <Scrollbar wrapperClass="scrollbar--accounts-list">
        {view === 'sidebar' ? (
          <SidebarMenu
            menuItems={[
              ...MENU_ITEMS,
              {
                link: '/account/create',
                text: 'Create a new account',
                descText: 'Manage multiple coins at once',
                icon: <AddAccountIcon icon={<PlusIcon />} />,
                className: 'sidebar-menu__item--add-account',
              },
              {
                link: '/account/import-private-key',
                text: 'Import Private Key',
                descText: 'from existing wallet',
                icon: <AddAccountIcon icon={<KeyIcon />} />,
                className: 'sidebar-menu__item--add-account',
              },
              {
                link: '/account/import-public-address',
                text: 'Import Public Address',
                descText: 'See what is happening to it',
                icon: <AddAccountIcon icon={<EyeIcon />} />,
                className: 'sidebar-menu__item--add-account',
              },
            ]}
            wrapperClassName="sidebar-menu--accounts-list"
            itemClassName="accounts-list__item"
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
