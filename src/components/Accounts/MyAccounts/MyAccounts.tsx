import React from 'react';

import './MyAccounts.scss';

import AccountsList from '../../shared/AccountsList/AccountsList';

const MyAccounts: React.FC = () => {
  return (
    <section className="my-accounts">
      <h3 className="my-accounts__header">My Accounts</h3>
      <AccountsList className="accounts-list--my-accounts" />
    </section>
  );
};

export default MyAccounts;
