import React from 'react';

import './Activity.scss';

import ActivityFilter from './ActivityFilter/ActivityFilter';
import ActivityList from './ActivityList/ActivityList';

const Activity: React.FC = () => {
  return (
    <section className="activity">
      <ActivityFilter />
      <ActivityList />
    </section>
  );
};

export default Activity;
