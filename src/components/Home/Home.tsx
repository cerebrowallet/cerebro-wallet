import React from 'react';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import ActivityFilter from './ActivityFilter/ActivityFilter';
import Activity from './Activity/Activity';
import Footer from './Footer/Footer';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <section className="content">
      <main className="main home">
        <Header />
        <Dashboard />
        <Footer />
      </main>
      <aside className="sidebar">
        <ActivityFilter />
        <Activity />
      </aside>
    </section>
  );
};

export default Home;
