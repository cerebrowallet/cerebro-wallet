import React from 'react';

import { ActivityContainer } from './styled';

import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityList from './ActivityList/ActivityList';

const Activity: React.FC = () => {
  return (
    <ActivityContainer>
      <ActivityHeader />
      <ActivityList />
    </ActivityContainer>
  );
};

export default Activity;
