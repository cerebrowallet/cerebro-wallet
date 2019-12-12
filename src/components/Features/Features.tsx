import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { X as CloseIcon } from 'react-feather';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import FeaturesMenu from '../shared/FeaturesMenu/FeaturesMenu';
import TopUpAccount from '../shared/TopUpAccount/TopUpAccount';
import Send from '../shared/Send/Send';
import Exchange from '../shared/Exchange/Exchange';
import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import Activity from '../shared/Activity/Activity';
import CloseCornerButton from "../shared/CloseCornerButton/CloseCornerButton";

import './Features.scss';

const Features: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <section className="content content--features">
      <Route exact path="/features">
        <Redirect to="/features/receive" />
      </Route>
      <main className="main features">
        <Switch>
          <Route path={`${match.path}/receive`}>
            <TopUpAccount />
          </Route>
          <Route path={`${match.path}/send`}>
            <Send />
          </Route>
          <Route path={`${match.path}/exchange`}>
            <Exchange />
          </Route>
          <Route path={`${match.path}/activity`}>
            <TransactionDetails />
          </Route>
        </Switch>
        <CloseCornerButton />
      </main>
      <aside className="sidebar">
        {location.pathname === `${match.path}/activity` ? (
          <Activity />
        ) : (
          <FeaturesMenu view="sidebar" />
        )}
      </aside>
    </section>
  );
};

export default withRouter(Features);
