import React from 'react';
import {
  Plus as PlusIcon,
  Key as KeyIcon,
  Eye as EyeIcon,
} from 'react-feather';

import './AddAccount.scss';

import IconMenuItem from '../IconMenuItem/IconMenuItem';
import AddAccountIcon from './AddAccountIcon/AddAccountIcon';

interface Props {
  className?: string;
  buttonClassName?: string;
}

const AddAccount: React.FC<Props> = ({ className, buttonClassName }) => {
  const btnClass = `icon-menu-item--add-account${
    buttonClassName ? ` ${buttonClassName}` : ''
  }`;

  return (
    <section className={`add-account${className ? ` ${className}` : ''}`}>
      <IconMenuItem
        link="/account/create"
        icon={<AddAccountIcon icon={<PlusIcon />} />}
        text="Create a new account"
        descText="Manage multiple coins at once"
        className={btnClass}
      />
      <IconMenuItem
        link="/account/import-private-key"
        icon={<AddAccountIcon icon={<KeyIcon />} />}
        text="Import Private Key"
        descText="from existing wallet"
        className={btnClass}
      />
      <IconMenuItem
        link="/account/import-public-address"
        icon={<AddAccountIcon icon={<EyeIcon />} />}
        text="Import Public Address"
        descText="See what is happening to it"
        className={btnClass}
      />
    </section>
  );
};

export default AddAccount;
