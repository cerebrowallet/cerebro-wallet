import React from 'react';

import { ActivityContainer } from './styled';

import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityList from './ActivityList/ActivityList';

interface Props {
  accountId?: string;
}

const Activity: React.FC<Props> = ({ accountId }) => {
  return (
    <ActivityContainer>
      <ActivityHeader accountId={accountId} />
      <ActivityList />
    </ActivityContainer>
  );
};

export default Activity;
