import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './components/home/Home';
import Features from './components/features/Features';
import Account from './components/account/Account';
import Profile from './components/profile/Profile';
import MyAccounts from './components/shared/MyAccounts/MyAccounts';
import Auth from './components/auth/Auth';

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
      <Route path={['/signup', '/signin']}>
        <Auth />
      </Route>
      <Route>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/features">
                <Features />
              </Route>
              <Route
                path={[
                  '/accounts/create',
                  '/accounts/import-private-key',
                  '/accounts/import-public-address',
                  '/account/:accountId',
                ]}
              >
                <Account />
              </Route>
              <Route path="/my-accounts">
                <MyAccounts />
              </Route>
              <Route path={['/profile', '/settings']}>
                <Profile />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </Route>
    </Switch>
  );
};

export default Routes;
