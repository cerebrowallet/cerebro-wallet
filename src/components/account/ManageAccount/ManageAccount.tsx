import React from 'react';
import { Route, Switch } from 'react-router';

import { ContentOneCol } from '../../layout/Content';
import CreateAccount from '../CreateAccount';
import ImportPrivateKey from '../ImportPrivateKey';
import ImportPublicAddress from '../ImportPublicAddress';
import { AccountGoBackButton } from '../Account/styled';
import { AccountSidebar } from '../../layout/Sidebar';
import AccountsList from '../AccountsList/AccountsList';
import { ContainerOneCol } from '../../layout/Container';

const ManageAccount: React.FC = () => {
  return (
    <ContainerOneCol>
      <ContentOneCol>
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
        <AccountGoBackButton />
      </ContentOneCol>
      <AccountSidebar>
        <AccountsList />
      </AccountSidebar>
    </ContainerOneCol>
  );
};

export default ManageAccount;
