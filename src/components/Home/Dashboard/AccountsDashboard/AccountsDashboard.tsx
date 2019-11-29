import React from 'react';
import { Plus as PlusIcon } from 'react-feather';

import './AccountsDashboard.scss';

import { Props as AccountsListProps } from '../../../shared/AccountsList/AccountsList';

interface Props {
  children: React.ReactNode;
}

const AccountsDashboard: React.FC<Props> = ({ children }) => {
  return (
    <section className="accounts-dashboard">
      <header className="accounts-dashboard__header">
        <span className="accounts-dashboard__title">Accounts</span>
        <button type="button" className="accounts-dashboard__add">
          <PlusIcon className="accounts-dashboard__add-icon" />
        </button>
      </header>
      {children}
    </section>
  );
};

export default AccountsDashboard;
