import React from 'react';
import { Redirect, withRouter, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { getAccountById, getAccounts } from '../../store/account/selectors';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import Activity from '../../components/shared/Activity/Activity';
import TransactionDetails from '../../components/shared/TransactionDetails/TransactionDetails';
import Loader from '../../components/shared/Loader/Loader';

const ActivityPage: React.FC = () => {
  const accounts = useSelector(getAccounts);
  let {
    accountId,
    txHash,
  }: { accountId?: string; txHash?: string } = useParams();

  if (!accountId) {
    accountId = accounts?.allIds[0];
  }

  const account = useSelector(getAccountById(accountId));

  if (
    accountId === undefined ||
    !account?.transactions ||
    account?.transactions.allIds.length === 0
  ) {
    return <Redirect to="/" />;
  }

  if (!account) {
    return <Loader withMargin />;
  }

  if (!txHash) {
    return (
      <Redirect
        to={`/activity/${accountId}/${account?.transactions?.allIds[0]}`}
      />
    );
  }

  return (
    <Page
      layout={PageLayouts.oneColumn}
      sidebarContent={<Activity accountId={accountId} />}
    >
      <TransactionDetails accountId={accountId} txHash={txHash} />
    </Page>
  );
};

export default withRouter(ActivityPage);
