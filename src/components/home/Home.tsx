import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Activity from '../shared/Activity/Activity';
import Footer from './Footer';
import Sidebar from '../layout/Sidebar';
import Container from '../layout/Container';
import Content from '../layout/Content';

const ContentHome = styled(Content)`
  display: grid;
  grid-gap: 1.3125rem;
  padding: 0.9375rem 1.25rem 1.5625rem;
  grid-template-areas:
    'header'
    'dashboard'
    'footer';

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-rows: auto 1fr auto;
    padding: 2.188rem 1.875rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    padding-left: 4.6875rem;
  }
`;

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
