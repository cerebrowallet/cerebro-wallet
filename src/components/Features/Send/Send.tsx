import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router';

import SendFill from './SendFill/SendFill';
import SendConfirm from './SendConfirm/SendConfirm';
import SendSuccess from './SendSuccess/SendSuccess';

const Send: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path}>
        <SendFill />
      </Route>
      <Route path={`${match.path}/confirm`}>
        <SendConfirm />
      </Route>
      <Route path={`${match.path}/success`}>
        <SendSuccess />
      </Route>
    </Switch>
  );
};

export default withRouter(Send);
