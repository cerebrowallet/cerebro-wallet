import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router';

import SendForm from './SendForm/SendForm';
import SendConfirm from './SendConfirm/SendConfirm';
import SendSuccess from './SendSuccess/SendSuccess';

interface Props extends RouteComponentProps {
  accountId?: string;
}

const Send: React.FC<Props> = ({ match, accountId }) => {
  return (
    <Switch>
      <Route exact path={match.path}>
        <SendForm accountId={accountId} />
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
