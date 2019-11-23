import React from 'react';
import {
  ChevronDown as ChevronDownIcon,
  Search as SearchIcon,
} from 'react-feather';

import './EventsFilters.scss';

const EventsFilters: React.FC = () => {
  return (
    <div className="events-filters">
      <button type="button" className="events-filters__show-all-btn">
        Show all
        <ChevronDownIcon className="events-filters__chevron-icon" />
      </button>
      <div className="events-filters__search">
        <input
          type="text"
          className="events-filters__search-input"
          placeholder="Search by hash..."
        />
        <SearchIcon className="events-filters__search-icon" />
      </div>
    </div>
  );
};

export default EventsFilters;
