import React from 'react';
import {
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import { useSelector } from 'react-redux';
import { getAccountById } from '../../store/account/selectors';
import Loader from '../shared/Loader/Loader';

const FeaturesActivity: React.FC<
  RouteComponentProps<{ accountId: string; transactionHash?: string }>
> = ({ match }) => {
  let { accountId, transactionHash } = match.params;
  const account = useSelector(getAccountById(accountId));

  if (!account) {
    return <Loader withMargin />;
  }

  if (!transactionHash) {
    return (
      <Redirect
        to={`/features/activity/${accountId}/${account?.transactions?.allIds[0]}`}
      />
    );
  }

  return (
    <TransactionDetails
      accountId={accountId}
      transactionHash={transactionHash}
    />
  );
};

export default withRouter(FeaturesActivity);
