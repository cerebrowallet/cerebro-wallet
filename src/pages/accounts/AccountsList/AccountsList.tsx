import React from 'react';
import { useSelector } from 'react-redux';

import { MANAGE_ACCOUNT_ACTIONS } from '../../../menus';
import { Breakpoints } from '../../../dictionaries';
import { getAccountsListWithDescText } from '../../../store/account/selectors';
import { Wrapper, AccountsSidebarMenu } from './styled';

import CurrencyIcon from '../../../components/shared/CurrencyIcon/CurrencyIcon';
import AddAccountIcon from '../../../components/shared/AddAccountIcon/AddAccountIcon';

const AccountsList: React.FC = () => {
  const accounts = useSelector(getAccountsListWithDescText);

  return (
    <Wrapper>
      <h3>My Accounts</h3>
      <AccountsSidebarMenu
        menuItems={[
          ...(accounts || []).map(
            (account) => ({
              link: `/account/${account.id}`,
              text: account.name,
              descText: account.descText,
              icon: <CurrencyIcon coin={account.coin} size="large" />,
            }),
            []
          ),
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
