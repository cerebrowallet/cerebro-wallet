import React from 'react';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import EventsFilters from '../EventsFilters/EventsFilters';
import EventsList from '../../shared/SidebarList/EventsList';
import Footer from '../Footer/Footer';

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
        <EventsFilters />
        <EventsList />
      </aside>
    </section>
  );
};

export default Home;
