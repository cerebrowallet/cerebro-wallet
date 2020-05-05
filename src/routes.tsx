import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { LocationState } from 'history';
import { useTransition, animated } from 'react-spring';

import { userSession } from './utils/blockstack';
import { usePrevious } from './utils/hooks';

import AuthenticatedWrapper from './pages/login/AuthenticatedWrapper';
import AuthCallbackHandler from './pages/login/AuthCallbackHandler';
import PrivateRoute from './pages/login/PrivateRoute';
import HomePage from './pages/home/HomePage';
import FeaturesPage from './pages/features/FeaturesPage';
import ProfilePage from './pages/profile/ProfilePage';
import MyAccounts from './components/shared/MyAccounts/MyAccounts';
import LoginPage from './pages/login/LoginPage';
import AccountsPage from './pages/accounts/AccountsPage';
import ActivityPage from './pages/activity/ActivityPage';

const Routes: React.FC = () => {
  const location = useLocation();
  const previousLocation: LocationState = usePrevious(location);
  const isPageChanged =
    !!previousLocation &&
    previousLocation.pathname.split('/')[1] !== location.pathname.split('/')[1];

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: isPageChanged ? 0 : 1,
      transform: isPageChanged ? 'scale3d(0.7,0.7,0.7)' : 'scale3d(1,1,1)',
    },
    enter: {
      opacity: 1,
      transform: 'scale3d(1,1,1)',
    },
    leave: {
      opacity: isPageChanged ? 0 : 1,
      transform: isPageChanged ? 'scale3d(0.7,0.7,0.7)' : 'scale3d(1,1,1)',
    },
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
          <LoginPage />
        )}
      </Route>
      <Route>
        <AuthenticatedWrapper>
          {transitions.map(({ item: location, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={location}>
                <PrivateRoute exact path="/">
                  <HomePage />
                </PrivateRoute>
                <PrivateRoute path="/features">
                  <FeaturesPage />
                </PrivateRoute>
                <PrivateRoute path="/activity/:accountId?/:txHash?">
                  <ActivityPage />
                </PrivateRoute>
                <PrivateRoute path="/account">
                  <AccountsPage />
                </PrivateRoute>
                <PrivateRoute path="/my-accounts">
                  <MyAccounts />
                </PrivateRoute>
                <PrivateRoute path="/profile">
                  <ProfilePage />
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
