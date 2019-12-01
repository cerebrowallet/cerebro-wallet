import React from 'react';

import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import './AccountsListSidebar.scss';

import AccountsList from '../../shared/AccountsList/AccountsList';
import AddAccount from '../../shared/AddAccount/AddAccount';

const AccountsListSidebar: React.FC = () => {
  const windowSize = useWindowSize();

  return (
    <section className="accounts-list-sidebar">
      <h3 className="accounts-list-sidebar__header">My Accounts</h3>
      <AccountsList
        view="sidebar"
        className="accounts-list--my-accounts"
        mobileMenuFooter={<AddAccount className="add-account--sidebar add-account--mobile" />}
      />
      {windowSize.width > Breakpoints.xl && <AddAccount className="add-account--sidebar" />}
    </section>
  );
};

export default AccountsListSidebar;
