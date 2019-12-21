import React from 'react';
import styled from 'styled-components';

import TotalBalance from './TotalBalance';
import Features from './Features';
import Accounts from './Accounts';
import Chart from '../../shared/Chart';

const StyledDashboard = styled.section`
  grid-area: dashboard;
  display: grid;
  grid-template-areas:
    'total-balance'
    'accounts'
    'features-menu';
  grid-gap: 1.3125rem;
  align-self: center;

  @media (max-aspect-ratio: 16/9) {
    align-self: flex-start;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-areas:
      'total-balance features-menu'
      'accounts chart';
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto 3fr;
    grid-gap: 1.25rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding-right: 1.875rem;
    max-width: 60rem;
  }
`;

const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <TotalBalance />
      <Features />
      <Accounts />
      <Chart />
    </StyledDashboard>
  );
};

export default Dashboard;
