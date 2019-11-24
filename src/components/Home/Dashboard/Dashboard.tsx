import React from 'react';

import './Dashboard.scss';

import TotalBalance from './TotalBalance/TotalBalance';
import FeaturesMenu from '../../Features/FeaturesMenu/FeaturesMenu';
import Accounts from './Accounts/Accounts';
import Chart from './Chart/Chart';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <TotalBalance />
      <FeaturesMenu wrapperCssClass="features-menu--dashboard" />
      <Accounts />
      <Chart />
    </section>
  )
};

export default Dashboard;
