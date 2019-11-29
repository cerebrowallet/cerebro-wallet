import React from 'react';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import MyAccounts from './MyAccounts/MyAccounts';
import AccountsActions from "./AccountsActions/AccountsActions";

const Accounts: React.FC = () => {
  return (
    <section className="content content--features">
      <main className="main" />
      <aside className="sidebar">
        <MyAccounts />
        <AccountsActions />
      </aside>
    </section>
  );
};

export default Accounts;
