import React from 'react';

import { Coins } from '../../../dictionaries';

import TotalBalance from './TotalBalance/TotalBalance';
import Features from './Features/Features';
import Accounts from './Accounts/Accounts';
import Charts from '../../../components/shared/Charts/Charts';
import { DashboardContainer } from './styled';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <TotalBalance />
      <Features />
      <Accounts />
      <Charts coinA={Coins.BTC} coinB={Coins.BTC_TestNet} canChange />
    </DashboardContainer>
  );
};

export default Dashboard;
