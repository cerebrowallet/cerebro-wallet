import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router';

import SendChoose from './SendChoose/SendChoose';
import SendConfirm from './SendConfirm';
import SendSuccess from './SendSuccess';

interface Props extends RouteComponentProps {
  account?: string;
}

const Send: React.FC<Props> = ({ match, account }) => {
  return (
    <Switch>
      <Route exact path={match.path}>
        <SendChoose account={account} />
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
