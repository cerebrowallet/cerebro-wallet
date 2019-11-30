import React from 'react';

import './Dashboard.scss';

import TotalBalance from './TotalBalance/TotalBalance';
import FeaturesMenu from '../../shared/FeaturesMenu/FeaturesMenu';
import AccountsDashboard from './AccountsDashboard/AccountsDashboard';
import AccountsList from '../../shared/AccountsList/AccountsList';
import Chart from './Chart/Chart';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <TotalBalance />
      <FeaturesMenu view="dashboard" />
      <AccountsDashboard>
        <AccountsList />
      </AccountsDashboard>
      <Chart />
    </section>
  );
};

export default Dashboard;
