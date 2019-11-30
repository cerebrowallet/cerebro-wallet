import React from 'react';
import { useHistory } from 'react-router';

import './MyAccounts.scss';

import IconMenuItem from '../shared/IconMenuItem/IconMenuItem';
import { Currencies } from '../../enums';
import CurrencyIcon from '../shared/CurrencyIcon/CurrencyIcon';
import AddAccount from '../shared/AddAccount/AddAccount';
import { X as CloseIcon } from 'react-feather';
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
        <AddAccount
          className="my-accounts__items add-account--my-accounts"
          buttonClassName="icon-menu-item--my-accounts"
        />
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
