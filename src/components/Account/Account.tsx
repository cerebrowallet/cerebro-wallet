import React from 'react';
import { useHistory } from "react-router";

import AccountsListSidebar from './AccountsListSidebar/AccountsListSidebar';
import AccountsActions from "./AccountsActions/AccountsActions";
import {X as CloseIcon} from "react-feather";
import CircleButton from "../shared/CircleButton/CircleButton";

const Account: React.FC = () => {
  const history = useHistory();

  return (
    <section className="content content--features">
      <main className="main">
        <CircleButton
          className="close-page-btn"
          onClick={() => history.push('/')}
        >
          <CloseIcon />
        </CircleButton>
      </main>
      <aside className="sidebar">
        <AccountsListSidebar />
      </aside>
    </section>
  );
};

export default Account;
