import React from 'react';

import { ActivityContainer } from './styled';

import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityList from './ActivityList/ActivityList';

interface Props {
  accountId?: string;
  context?: string;
}

const Activity: React.FC<Props> = ({ accountId, context }) => {
  return (
    <ActivityContainer>
      <ActivityHeader accountId={accountId} />
      <ActivityList context={context} />
    </ActivityContainer>
  );
};

export default Activity;
