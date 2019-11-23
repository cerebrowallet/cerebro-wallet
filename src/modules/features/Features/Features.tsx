import React from 'react';
import { useHistory } from 'react-router';
import { X as CloseIcon } from 'react-feather';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import ActionsMenu from '../ActionsMenu/ActionsMenu';
import CircleButton from '../../shared/CircleButton/CircleButton';
import Receive from '../Receive/Receive';
import Send from '../Send/Send';

import './Features.scss';

const Features: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  const history = useHistory();

  return (
    <section className="content content--features">
      <Route exact path="/features">
        <Redirect to="/features/receive" />
      </Route>
      <main className="main">
        <Switch>
          <Route path={`${match.path}/receive`}>
            <Receive />
          </Route>
          <Route path={`${match.path}/send`}>
            <Send />
          </Route>
          <Route path={`${match.path}/exchange`}>
            <section className="send"></section>
          </Route>
          <Route path={`${match.path}/activity`}>
            <section className="activity"></section>
          </Route>
        </Switch>
        <CircleButton
          className="close-page-btn"
          onClick={() => history.push('/')}
        >
          <CloseIcon />
        </CircleButton>
      </main>
      <aside className="sidebar">
        <ActionsMenu wrapperCssClass="actions-menu--sidebar" />
      </aside>
    </section>
  );
};

export default withRouter(Features);
