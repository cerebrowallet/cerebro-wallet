import React from 'react';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router';
import styled from 'styled-components';

import { Breakpoints } from '../../enums';
import { useWindowSize } from '../../utils/hooks';

import { ContainerTwoCols } from '../layout/Container';
import { ContentTwoCols } from '../layout/Content';
import Sidebar from '../layout/Sidebar';
import AccountsSidebar from './AccountsSidebar/AccountsSidebar';
import AccountActions from './AccountActions/AccountActions';
import Send from '../shared/Send/Send';
import TopUpAccount from '../shared/TopUpAccount/TopUpAccount';
import Exchange from '../shared/Exchange/Exchange';
import Details from './Details/Details';
import Activity from '../shared/Activity/Activity';
import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import Rename from './Rename';
import ExportPrivateKey from './ExportPrivateKey';
import DeleteAccount from './DeleteAccount';
import CreateAccount from './CreateAccount';
import ImportPrivateKey from './ImportPrivateKey';
import ImportPublicAddress from './ImportPublicAddress';
import CornerCloseButton from '../shared/CornerCloseButton/CornerCloseButton';

const AccountSidebar = styled(Sidebar)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    background: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    background: ${props => props.theme.colors.blockBackground};
  }
`;

const AccountCornerCloseButton = styled(CornerCloseButton)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 1.25rem;
    right: 0.625rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    top: 2.625rem;
    right: 1.25rem;
  }
`;

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const windowSize = useWindowSize();

  return (
    <ContainerTwoCols>
      <ContentTwoCols>
        {match.params.accountId && (
          <AccountActions />
        )}
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
          {windowSize.width > Breakpoints.md && match.params.accountId && (
            <Route exact path={match.url}>
              <Redirect to={`${match.url}/details`} />
            </Route>
          )}
          <Route exact path={`${match.url}/details`}>
            <Details />
          </Route>
          <Route exact path={`${match.url}/receive`}>
            <TopUpAccount account={match.params.accountId} />
          </Route>
          <Route exact path={`${match.url}/send`}>
            <Send account={match.params.accountId} />
          </Route>
          <Route exact path={`${match.url}/exchange`}>
            <Exchange />
          </Route>
          <Route exact path={`${match.url}/rename`}>
            <Rename />
          </Route>
          <Route exact path={`${match.url}/explorer`}>
            Explorer
          </Route>
          <Route exact path={`${match.url}/export-private-key`}>
            <ExportPrivateKey />
          </Route>
          <Route exact path={`${match.url}/delete`}>
            <DeleteAccount />
          </Route>
          <Route exact path={`${match.url}/transactions`}>
            <TransactionDetails />
          </Route>
        </Switch>
        <AccountCornerCloseButton />
      </ContentTwoCols>
      <AccountSidebar>
        <Route exact path={`${match.url}/transactions`}>
          <Activity />
        </Route>
        <Route path={match.url}>
          <AccountsSidebar />
        </Route>
      </AccountSidebar>
    </ContainerTwoCols>
  );
};

export default withRouter(Account);
