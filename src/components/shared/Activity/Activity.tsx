import React from 'react';

import { ActivityContainer } from './styled';
import ActivityFilter from './ActivityFilter/ActivityFilter';
import ActivityList from './ActivityList/ActivityList';

const Activity: React.FC = () => {
  return (
    <ActivityContainer>
      <ActivityFilter />
      <ActivityList />
    </ActivityContainer>
  );
};

export default Activity;
