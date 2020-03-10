import React from 'react';

import { ContainerOneCol } from '../../layout/Container';
import { ContentOneCol } from '../../layout/Content';
import { AccountSidebar } from '../Account/styled';

import Activity from '../../shared/Activity/Activity';
import TransactionDetails from '../../shared/TransactionDetails/TransactionDetails';

interface Props {
  accountId: string;
}

const Transactions: React.FC<Props> = ({ accountId }) => {
  return (
    <ContainerOneCol>
      <ContentOneCol>
        <TransactionDetails />
      </ContentOneCol>
      <AccountSidebar>
        <Activity />
      </AccountSidebar>
    </ContainerOneCol>
  );
};

export default Transactions;
