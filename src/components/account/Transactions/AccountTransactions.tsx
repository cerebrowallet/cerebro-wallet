import React from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import { getAccountById } from '../../../store/account/selectors';

import { ContainerOneCol } from '../../layout/Container';
import { ContentOneCol } from '../../layout/Content';
import { AccountGoBackButton, AccountSidebar } from '../Account/styled';

import Activity from '../../shared/Activity/Activity';
import TransactionDetails from '../../shared/TransactionDetails/TransactionDetails';
import Loader from '../../shared/Loader/Loader';

const AccountTransactions: React.FC<
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
        to={`/account/${accountId}/tx/${account?.transactions?.allIds[0]}`}
      />
    );
  }

  return (
    <ContainerOneCol>
      <ContentOneCol>
        <TransactionDetails
          accountId={accountId}
          transactionHash={transactionHash}
        />
        <AccountGoBackButton goTo={`/account/${accountId}`} />
      </ContentOneCol>
      <AccountSidebar>
        <Activity accountId={accountId} context="account"/>
      </AccountSidebar>
    </ContainerOneCol>
  );
};

export default withRouter(AccountTransactions);
