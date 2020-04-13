import React from 'react';

import { Wrapper } from './styled';

import ActivityFilter from './ActivityFilter/ActivityFilter';
import ActivitySearch from './ActivitySearch/ActivitySearch';

interface Props {
  accountId?: string;
}

const ActivityHeader: React.FC<Props> = ({ accountId }) => {
  return (
    <Wrapper>
      <ActivityFilter accountId={accountId} />
      <ActivitySearch />
    </Wrapper>
  );
};

export default ActivityHeader;
