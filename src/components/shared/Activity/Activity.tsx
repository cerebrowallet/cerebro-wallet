import React from 'react';
import styled from 'styled-components';

import ActivityFilter from './ActivityFilter';
import ActivityList from './ActivityList/ActivityList';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Activity: React.FC = () => {
  return (
    <Section>
      <ActivityFilter />
      <ActivityList />
    </Section>
  );
};

export default Activity;
