import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { userSession } from './utils/blockstack';

import Home from './components/home/Home';
import Features from './components/features/Features';
import Account from './components/account/Account';
import Profile from './components/profile/Profile';
import MyAccounts from './components/shared/MyAccounts/MyAccounts';
import Auth from './components/auth/Auth';
import AuthCallbackHandler from './components/auth/AuthCallbackHandler';
import PrivateRoute from './components/auth/PrivateRoute';

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
                  '/accounts/create',
                  '/accounts/import-private-key',
                  '/accounts/import-public-address',
                  '/account/:accountId',
                ]}
              >
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
      </Route>
    </Switch>
  );
};

export default Routes;
