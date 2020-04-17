import React from 'react';
import {
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import { useSelector } from 'react-redux';
import { getAccountById, getAccounts } from '../../store/account/selectors';
import Loader from '../shared/Loader/Loader';

const FeaturesActivity: React.FC<
  RouteComponentProps<{ accountId?: string; transactionHash?: string }>
> = ({ match }) => {
  const accounts = useSelector(getAccounts);
  let { accountId, transactionHash } = match.params;

  if (!accountId) {
    accountId = accounts?.allIds[0];
  }

  const account = useSelector(getAccountById(accountId));

  if (accountId === undefined) {
    return (
      <Redirect
        to="/"
      />
    )
  }

  if (!account) {
    return <Loader withMargin />;
  }

  if (!transactionHash) {
    return (
      <Redirect
        to={`/features/activity/${accountId}/tx/${account?.transactions?.allIds[0]}`}
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
