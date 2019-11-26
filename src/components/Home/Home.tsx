import React from 'react';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Activity from '../shared/Activity/Activity';
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
        <Activity />
      </aside>
    </section>
  );
};

export default Home;
