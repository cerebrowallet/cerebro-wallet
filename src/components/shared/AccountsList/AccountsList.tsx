import React from 'react';

import './AccountsList.scss';
import { Currencies } from '../../../enums';


import Scrollbar from '../Scrollbar/Scrollbar';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import IconMenuItem from '../IconButton/IconButton';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

export interface Props {
  className?: string;
  view?: 'sidebar' | 'dashboard';
  mobileMenuFooter?: React.ReactNode;
}

const AccountsList: React.FC<Props> = ({ className, view, mobileMenuFooter }) => {
  const ACCOUNTS = [
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.BTC}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM18',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.STX}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM16',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.BTC}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM15',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.STX}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM13',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.BTC}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM12',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.STX}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM00',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.BTC}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM01',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.STX}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM99',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.BTC}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
    {
      link: '/account/1L9NxSdNx92jLy8KdKn3gd528hGDCuzM98',
      text: 'My Bitcoin Wallet',
      descText: '0.00002914 BTC / $100',
      icon: (
        <CurrencyIcon
          currency={Currencies.STX}
          size="large"
          className="accounts-list__currency-icon"
        />
      ),
    },
  ];

  return (
    <div className={`accounts-list${className ? ` ${className}` : ''}`}>
      <Scrollbar wrapperClass="scrollbar--accounts-list">
        {view === 'sidebar' ? (
          <SidebarMenu
            menuItems={ACCOUNTS}
            itemClassName="accounts-list__item"
            mobileMenuFooter={mobileMenuFooter}
          />
        ) : (
          ACCOUNTS.map(account => (
            <IconMenuItem
              key={account.link}
              icon={account.icon}
              link={account.link}
              text={account.text}
              descText={account.descText}
              className="accounts-list__item"
            />
          ))
        )}
      </Scrollbar>
    </div>
  );
};

export default AccountsList;
