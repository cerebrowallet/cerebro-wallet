import React from 'react';
import { Switch, Route } from 'react-router';

import ManageAccount from './ManageAccount/ManageAccount';
import Account from './Account';

const AccountsPage: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path={[
          '/account/create',
          '/account/import-private-key',
          '/account/import-public-address',
        ]}
      >
        <ManageAccount />
      </Route>
      <Route path="/account/:accountId">
        <Account />
      </Route>
    </Switch>
  );
};

export default AccountsPage;
