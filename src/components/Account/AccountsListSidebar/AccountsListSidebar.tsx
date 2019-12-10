import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import './AccountsListSidebar.scss';

import AccountsList from '../../shared/AccountsList/AccountsList';
import AddAccount from '../../shared/AddAccount/AddAccount';

const AccountsListSidebar: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  const windowSize = useWindowSize();

  if (windowSize.width < Breakpoints.md && !match.isExact) {
    return null;
  }

  return (
    <section className="accounts-list-sidebar">
      <h3 className="accounts-list-sidebar__header">My Accounts</h3>
      <AccountsList
        view="sidebar"
        className="accounts-list--my-accounts"
      />
      {windowSize.width > Breakpoints.xl && (
        <AddAccount className="add-account--sidebar" />
      )}
    </section>
  );
};

export default withRouter(AccountsListSidebar);
