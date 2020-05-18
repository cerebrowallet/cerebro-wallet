import React from 'react';
import { Redirect, withRouter, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { getAccountById, getAccounts } from '../../store/account/selectors';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import Activity from '../../components/shared/Activity/Activity';
import TransactionDetails from '../../components/shared/TransactionDetails/TransactionDetails';

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

  if (account && !txHash) {
    txHash = account?.transactions?.allIds[0];

    if (txHash) {
      return <Redirect to={`/activity/${accountId}/${txHash}`} />;
    }
  }

  return (
    <Page
      layout={PageLayouts.oneColumn}
      sidebarContent={<Activity accountId={accountId} />}
    >
      {accountId && txHash && (
        <TransactionDetails accountId={accountId} txHash={txHash} />
      )}
    </Page>
  );
};

export default withRouter(ActivityPage);
