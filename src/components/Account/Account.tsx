import React from 'react';
import {
  useHistory,
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
  useLocation,
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

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const history = useHistory();
  const location = useLocation();
  const windowSize = useWindowSize();

  return (
    <section className="content content--account">
      <main className="main">
        <section className="account">
          {windowSize.width < Breakpoints.md ? (
            <Route exact path={match.url}>
              <aside className="account__menu">
                <AccountActions />
              </aside>
            </Route>
          ) : (
            <aside className="account__menu">
              {windowSize.width > Breakpoints.md && (
                <Route exact path={match.url}>
                  <Redirect to={`${match.url}/details`} />
                </Route>
              )}
              <AccountActions />
            </aside>
          )}
          <Switch>
            <Route exact path={`${match.url}/details`}>
              <main className="account__content">
                <Details />
              </main>
            </Route>
            <Route exact path={`${match.url}/receive`}>
              <main className="account__content">
                <TopUpAccount account={match.params.accountId} />
              </main>
            </Route>
            <Route exact path={`${match.url}/send`}>
              <main className="account__content">
                <Send account={match.params.accountId} />
              </main>
            </Route>
            <Route exact path={`${match.url}/exchange`}>
              <main className="account__content">
                <Exchange />
              </main>
            </Route>
            <Route exact path={`${match.url}/rename`}>
              <main className="account__content">
                <Rename />
              </main>
            </Route>
            <Route exact path={`${match.url}/explorer`}>
              <main className="account__content">Explorer</main>
            </Route>
            <Route exact path={`${match.url}/export-private-key`}>
              <main className="account__content">
                <ExportPrivateKey />
              </main>
            </Route>
            <Route exact path={`${match.url}/delete`}>
              <main className="account__content">
                <DeleteAccount />
              </main>
            </Route>
            <Route exact path={`${match.url}/transactions`}>
              <TransactionDetails />
            </Route>
          </Switch>
        </section>
        <CircleButton
          className="close-page-btn"
          onClick={() => history.push('/')}
        >
          <CloseIcon />
        </CircleButton>
      </main>
      <aside className="sidebar">
        {((windowSize.width < Breakpoints.md && match.isExact) ||
          windowSize.width > Breakpoints.md) &&
          !location.pathname.includes('transaction') && <AccountsListSidebar />}
        <Route exact path={`${match.url}/transactions`}>
          <Activity />
        </Route>
      </aside>
    </section>
  );
};

export default withRouter(Account);
