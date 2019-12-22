import React from 'react';
import {
  ChevronDown as ChevronDownIcon,
  Search as SearchIcon,
} from 'react-feather';

import { ActivityFilterContainer, Search, ShowAllButton } from './styled';

const ActivityFilter: React.FC = () => {
  return (
    <ActivityFilterContainer>
      <ShowAllButton type="button">
        Show all
        <ChevronDownIcon />
      </ShowAllButton>
      <Search>
        <input type="text" placeholder="Search by hash..." />
        <SearchIcon />
      </Search>
    </ActivityFilterContainer>
  );
};

export default ActivityFilter;
