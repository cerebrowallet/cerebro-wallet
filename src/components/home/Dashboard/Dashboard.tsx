import React from 'react';

import TotalBalance from './TotalBalance/TotalBalance';
import Features from './Features/Features';
import Accounts from './Accounts/Accounts';
import Chart from '../../shared/Chart/Chart';
import { DashboardContainer } from './styled';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <TotalBalance />
      <Features />
      <Accounts />
      <Chart />
    </DashboardContainer>
  );
};

export default Dashboard;
