import React from 'react';
import {
  useHistory,
  Switch,
  Route,
  RouteComponentProps,
  withRouter, Redirect,
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

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const history = useHistory();
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
              <Route exact path={match.url}>
                <Redirect to={`${match.url}/details`} />
              </Route>
              <AccountActions />
            </aside>
          )}
          <Switch>
            <Route exact path={`${match.url}/details`}>
              <main className="account__content">
                Details
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
                Rename
              </main>
            </Route>
            <Route exact path={`${match.url}/explorer`}>
              <main className="account__content">
                Explorer
              </main>
            </Route>
            <Route exact path={`${match.url}/private-key`}>
              <main className="account__content">
                Private key
              </main>
            </Route>
            <Route exact path={`${match.url}/delete`}>
              <main className="account__content">
                Delete
              </main>
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
      {windowSize.width < Breakpoints.md ? (
        <Route exact path={match.url}>
          <aside className="sidebar">
            <AccountsListSidebar />
          </aside>
        </Route>
      ) : (
        <aside className="sidebar">
          <AccountsListSidebar />
        </aside>
      )}
    </section>
  );
};

export default withRouter(Account);
