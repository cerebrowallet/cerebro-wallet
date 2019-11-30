import React from 'react';
import {
  Plus as PlusIcon,
  Key as KeyIcon,
  Eye as EyeIcon,
} from 'react-feather';

import './AccountsActions.scss';

import AccountsActionsButton from './AccountsActionsButton/AccountsActionsButton';

interface Props {
  className?: string;
}

const AccountsActions: React.FC<Props> = ({ className }) => {
  return (
    <section className={`accounts-actions${className ? ` ${className}` : ''}`}>
      <AccountsActionsButton
        link="/account/create"
        Icon={PlusIcon}
        name="Create a new account"
        desc="Manage multiple coins at once"
      />
      <AccountsActionsButton
        link="/account/import-private-key"
        Icon={KeyIcon}
        name="Import Private Key"
        desc="from existing wallet"
      />
      <AccountsActionsButton
        link="/account/import-public-address"
        Icon={EyeIcon}
        name="Import Public Address"
        desc="See what is happening to it"
      />
    </section>
  );
};

export default AccountsActions;
