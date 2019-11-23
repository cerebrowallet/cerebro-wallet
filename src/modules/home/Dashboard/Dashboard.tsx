import React from 'react';

import './Dashboard.scss';

import TotalBalance from '../../shared/TotalBalance/TotalBalance';
import ActionsMenu from '../../features/ActionsMenu/ActionsMenu';
import Accounts from '../Accounts/Accounts';
import Chart from '../Chart/Chart';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <TotalBalance />
      <ActionsMenu wrapperCssClass="actions-menu--dashboard" />
      <Accounts />
      <Chart />
    </section>
  )
};

export default Dashboard;
