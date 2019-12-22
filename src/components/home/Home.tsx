import React from 'react';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Activity from '../shared/Activity/Activity';
import Footer from './Footer/Footer';
import Sidebar from '../layout/Sidebar';
import Container from '../layout/Container';
import { ContentHome } from '../layout/Content';

const Home: React.FC = () => {
  return (
    <Container>
      <ContentHome>
        <Header />
        <Dashboard />
        <Footer />
      </ContentHome>
      <Sidebar>
        <Activity />
      </Sidebar>
    </Container>
  );
};

export default Home;
