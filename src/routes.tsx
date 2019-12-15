import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Account from './components/Account/Account';
import MyAccounts from './components/MyAccounts/MyAccounts';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const Routes: React.FC = () => {
  return (
    <Switch>
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
          '/accounts/:accountId',
        ]}
      >
        <Account />
      </Route>
      <Route path="/my-accounts">
        <MyAccounts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Switch>
  );
};

export default Routes;
