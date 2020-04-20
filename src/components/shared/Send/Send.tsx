import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router';

import { getAccountById } from '../../../store/account/selectors';

import SendForm from './SendForm/SendForm';
import SendConfirm from './SendConfirm/SendConfirm';
import SendSuccess from './SendSuccess/SendSuccess';

interface Props extends RouteComponentProps {
  accountId?: string;
}

const Send: React.FC<Props> = ({ match, accountId }) => {
  const account = useSelector(getAccountById(accountId));

  return (
    <Switch>
      <Route exact path={match.path}>
        <SendForm account={account} />
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
