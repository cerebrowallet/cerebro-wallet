import React from 'react';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Activity from '../../components/shared/Activity/Activity';
import Footer from './Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <Page layout={PageLayouts.dashboard} sidebarContent={<Activity />}>
      <Header />
      <Dashboard />
      <Footer />
    </Page>
  );
};

export default HomePage;
