import React from 'react';
import {
  useHistory,
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router';
import { X as CloseIcon } from 'react-feather';

import './Account.scss';

import { Breakpoints } from '../../enums';
import { useWindowSize } from '../../hooks';

import AccountsListSidebar from './AccountsListSidebar/AccountsListSidebar';
import CircleButton from '../shared/CircleButton/CircleButton';
import AccountActions from './AccountActions/AccountActions';
import Send from '../shared/Send/Send';
import TopUpAccount from '../shared/TopUpAccount/TopUpAccount';
import Exchange from '../shared/Exchange/Exchange';
import Details from './Details/Details';
import Activity from '../shared/Activity/Activity';
import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import Rename from './Rename/Rename';
import ExportPrivateKey from './ExportPrivateKey/ExportPrivateKey';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import CreateAccount from './CreateAccount/CreateAccount';
import ImportPrivateKey from './ImportPrivateKey/ImportPrivateKey';
import ImportPublicAddress from './ImportPublicAddress/ImportPublicAddress';

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const history = useHistory();
  const windowSize = useWindowSize();

  return (
    <main className="content content--account">
      <section className="main">
        <div className="account">
          {match.params.accountId && (
            <aside className="account__menu">
              <AccountActions />
            </aside>
          )}
          <div
            className={`account__content${
              !match.params.accountId ? ' account__content--left-pad' : ''
            }`}
          >
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
          </div>
        </div>
        <CircleButton
          className="close-page-btn"
          onClick={() => history.push('/')}
        >
          <CloseIcon />
        </CircleButton>
      </section>
      <aside className="sidebar">
        <Route exact path={`${match.url}/transactions`}>
          <Activity />
        </Route>
        <Route path={match.url}>
          <AccountsListSidebar />
        </Route>
      </aside>
    </main>
  );
};

export default withRouter(Account);
