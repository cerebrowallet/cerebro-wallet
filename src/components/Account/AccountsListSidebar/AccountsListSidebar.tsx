import React from 'react';

import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import './AccountsListSidebar.scss';

import AccountsList from '../../shared/AccountsList/AccountsList';
import AccountsActions from '../AccountsActions/AccountsActions';

const AccountsListSidebar: React.FC = () => {
  const windowSize = useWindowSize();

  return (
    <section className="accounts-list-sidebar">
      <h3 className="accounts-list-sidebar__header">My Accounts</h3>
      <AccountsList
        view="sidebar"
        className="accounts-list--my-accounts"
        mobileMenuFooter={<AccountsActions className="accounts-actions--mobile" />}
      />
      {windowSize.width > Breakpoints.md && <AccountsActions />}
    </section>
  );
};

export default AccountsListSidebar;
