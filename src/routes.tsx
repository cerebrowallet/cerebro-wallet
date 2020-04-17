import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { userSession } from './utils/blockstack';

import PrivateRoute from './components/auth/PrivateRoute';
import AuthenticatedWrapper from './components/auth/AuthenticatedWrapper';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Account from './components/account/Account/Account';
import Profile from './components/profile/Profile';
import MyAccounts from './components/shared/MyAccounts/MyAccounts';
import Auth from './components/auth/Auth';
import AuthCallbackHandler from './components/auth/AuthCallbackHandler';
import ManageAccount from './components/account/ManageAccount/ManageAccount';
import Transactions from './components/account/Transactions/AccountTransactions';

const Routes: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'scale3d(0.7,0.7,0.7)' },
    enter: { opacity: 1, transform: 'scale3d(1,1,1)' },
    leave: { opacity: 0, transform: 'scale3d(0.7,0.7,0.7)' },
    config: { tension: 550, friction: 45 },
  });

  return (
    <Switch>
      <Route path="/auth-callback">
        <AuthCallbackHandler />
      </Route>
      <Route path={['/signup', '/signin']}>
        {userSession.isUserSignedIn() ? (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
          <Auth />
        )}
      </Route>
      <Route>
        <AuthenticatedWrapper>
          {transitions.map(({ item: location, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={location}>
                <PrivateRoute exact path="/">
                  <Home />
                </PrivateRoute>
                <PrivateRoute path="/features">
                  <Features />
                </PrivateRoute>
                <PrivateRoute
                  path={[
                    '/account/create',
                    '/account/import-private-key',
                    '/account/import-public-address',
                  ]}
                >
                  <ManageAccount />
                </PrivateRoute>
                <PrivateRoute path="/account/:accountId/tx/:transactionHash?">
                  <Transactions />
                </PrivateRoute>
                <PrivateRoute path="/account/:accountId">
                  <Account />
                </PrivateRoute>
                <PrivateRoute path="/my-accounts">
                  <MyAccounts />
                </PrivateRoute>
                <PrivateRoute path={['/profile', '/settings']}>
                  <Profile />
                </PrivateRoute>
              </Switch>
            </animated.div>
          ))}
        </AuthenticatedWrapper>
      </Route>
    </Switch>
  );
};

export default Routes;
