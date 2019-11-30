import React from 'react';
import { useHistory } from 'react-router';

import './MyAccounts.scss';

import IconMenuItem from '../shared/IconMenuItem/IconMenuItem';
import { Currencies } from '../../enums';
import CurrencyIcon from '../shared/CurrencyIcon/CurrencyIcon';
import AccountsActionsButton from '../Account/AccountsActions/AccountsActionsButton/AccountsActionsButton';
import {
  Eye as EyeIcon,
  Key as KeyIcon,
  Plus as PlusIcon,
  X as CloseIcon,
} from 'react-feather';
import CircleButton from '../shared/CircleButton/CircleButton';

const MyAccounts: React.FC = () => {
  const history = useHistory();

  return (
    <section className="my-accounts">
      <div className="my-accounts__content">
        <h3 className="my-accounts__header">My accounts</h3>
        <div className="my-accounts__items">
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="My Bitcoin Wallet"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.STX} size="large" />}
            text="Blockstack"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="Bitcoin"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="My Bitcoin Wallet"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.STX} size="large" />}
            text="Blockstack"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="Bitcoin"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="My Bitcoin Wallet"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.STX} size="large" />}
            text="Blockstack"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
          <IconMenuItem
            link="/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19"
            icon={<CurrencyIcon currency={Currencies.BTC} size="large" />}
            text="Bitcoin"
            descText="0.00002914 STX / $100"
            className="icon-menu-item--my-accounts"
          />
        </div>
        <h3 className="my-accounts__header">Manage</h3>
        <div className="my-accounts__items">
          <AccountsActionsButton
            link="/account/create"
            Icon={PlusIcon}
            name="Create a new account"
            desc="Manage multiple coins at once"
            className="accounts-actions-btn--my-accounts"
          />
          <AccountsActionsButton
            link="/account/import-private-key"
            Icon={KeyIcon}
            name="Import Private Key"
            desc="from existing wallet"
            className="accounts-actions-btn--my-accounts"
          />
          <AccountsActionsButton
            link="/account/import-public-address"
            Icon={EyeIcon}
            name="Import Public Address"
            desc="See what is happening to it"
            className="accounts-actions-btn--my-accounts"
          />
        </div>
      </div>
      <CircleButton
        className="close-page-btn"
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </CircleButton>
    </section>
  );
};

export default MyAccounts;
