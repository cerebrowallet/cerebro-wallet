import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { getAccounts, getTxs } from '../../store/account/selectors';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import Activity from '../../components/shared/Activity/Activity';
import TransactionDetails from '../../components/shared/TransactionDetails/TransactionDetails';

const ActivityPage: React.FC = () => {
  const accounts = useSelector(getAccounts);
  const txs = useSelector(getTxs);
  const params: { accountId?: string; txHash?: string } = useParams();
  const accountId = params.accountId || accounts?.allIds[0];
  const account = accountId ? accounts?.byIds[accountId] : null;
  let { txHash } = params;

  if (account && !txHash) {
    txHash = txs?.[account.id]?.allIds[0];

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

export default ActivityPage;
