import React from 'react';
import {
  ChevronDown as ChevronDownIcon,
  Search as SearchIcon,
} from 'react-feather';

import './ActivityFilter.scss';

const ActivityFilter: React.FC = () => {
  return (
    <div className="activity-filter">
      <button type="button" className="activity-filter__show-all-btn">
        Show all
        <ChevronDownIcon className="activity-filter__chevron-icon" />
      </button>
      <div className="activity-filter__search">
        <input
          type="text"
          className="activity-filter__search-input"
          placeholder="Search by hash..."
        />
        <SearchIcon className="activity-filter__search-icon" />
      </div>
    </div>
  );
};

export default ActivityFilter;
