import React from 'react';

import { Wrapper } from './styled';

import ActivityFilter from './ActivityFilter/ActivityFilter';
import ActivitySearch from './ActivitySearch/ActivitySearch';

const ActivityHeader: React.FC = () => {
  return (
    <Wrapper>
      <ActivityFilter />
      <ActivitySearch />
    </Wrapper>
  );
};

export default ActivityHeader;
