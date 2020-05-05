import React from 'react';
import { useSelector } from 'react-redux';

import { MANAGE_ACCOUNT_ACTIONS } from '../../../menus';
import { Breakpoints } from '../../../dictionaries';
import {
  getAccountsList,
  getExchangeRates,
} from '../../../store/account/selectors';
import { config } from '../../../config';
import { getSettings } from '../../../store/user/selectors';
import { CurrencySymbols } from '../../../dictionaries';
import { round } from '../../../utils/common';

import { Account } from '../../../store/account/types';
import CurrencyIcon from '../../../components/shared/CurrencyIcon/CurrencyIcon';
import AddAccountIcon from '../../../components/shared/AddAccountIcon/AddAccountIcon';
import { Wrapper, AccountsSidebarMenu } from './styled';

const AccountsList: React.FC = () => {
  const accounts: Account[] = useSelector(getAccountsList);
  const rates = useSelector(getExchangeRates);
  const settings = useSelector(getSettings);

  const accountsMenuItems = accounts.map(
    account => ({
      link: `/account/${account.id}`,
      text: account.name
        ? account.name
        : `My ${config.coins[account.coin].name} Wallet`,
      descText: `${account.balance} ${
        config.coins[account.coin].abbr
      } / ${settings.currency && CurrencySymbols[settings.currency]}${
        rates && settings.currency
          ? round(account.balance * rates[account.coin][settings.currency])
          : 0
      }`,
      icon: account.coin && <CurrencyIcon coin={account.coin} size="large" />,
    }),
    []
  );

  return (
    <Wrapper>
      <h3>My Accounts</h3>
      <AccountsSidebarMenu
        menuItems={[
          ...accountsMenuItems,
          ...MANAGE_ACCOUNT_ACTIONS.map((action) => ({
            ...action,
            icon: <AddAccountIcon Icon={action.icon} />,
            footerItem: true,
          })),
        ]}
        mobileBreakpoint={Breakpoints.xl}
      />
    </Wrapper>
  );
};

export default AccountsList;
