import React from 'react';
import { Route, Switch } from 'react-router';

import Page, { PageLayouts } from '../../../components/layout/Page/Page';
import CreateAccount from './CreateAccount';
import ImportPrivateKey from './ImportPrivateKey';
import ImportPublicAddress from './ImportPublicAddress';
import AccountsList from '../AccountsList/AccountsList';

const ManageAccount: React.FC = () => {
  return (
    <Page layout={PageLayouts.oneColumn} sidebarContent={<AccountsList />}>
      <Switch>
        <Route exact path="/account/create">
          <CreateAccount />
        </Route>
        <Route exact path="/account/import-private-key">
          <ImportPrivateKey />
        </Route>
        <Route exact path="/account/import-public-address">
          <ImportPublicAddress />
        </Route>
      </Switch>
    </Page>
  );
};

export default ManageAccount;
