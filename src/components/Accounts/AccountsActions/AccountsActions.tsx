import React from 'react';
import { Plus as PlusIcon, Key as KeyIcon, Eye as EyeIcon } from 'react-feather';

import './AccountsActions.scss';

import AccountsActionsButton from './AccountsActionsButton/AccountsActionsButton';

const AccountsActions: React.FC = () => {
  return (
    <section className="accounts-actions">
      <AccountsActionsButton
        onClick={() => {}}
        Icon={PlusIcon}
        name="Create a new account"
        desc="Manage multiple coins at once"
      />
      <AccountsActionsButton
        onClick={() => {}}
        Icon={KeyIcon}
        name="Import Private Key"
        desc="from existing wallet"
      />
      <AccountsActionsButton
        onClick={() => {}}
        Icon={EyeIcon}
        name="Import Public Address"
        desc="See what is happening to it"
      />
    </section>
  );
};

export default AccountsActions;
