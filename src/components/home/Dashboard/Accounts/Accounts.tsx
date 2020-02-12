import React from 'react';
import { useSelector } from 'react-redux';
import { Plus as PlusIcon } from 'react-feather';

import { getAccountsList } from '../../../../store/account/selectors';
import { Account } from '../../../../store/account/types';

import {
  AccountsContainer,
  Header,
  AccountItem,
  AddAccountButton,
  Title,
  ScrollbarTrackY,
} from './styled';

import Scrollbar from '../../../shared/Scrollbar/Scrollbar';
import CurrencyIcon from '../../../shared/CurrencyIcon/CurrencyIcon';
import { config } from '../../../../config';

const Accounts: React.FC = () => {
  const accounts: Account[] = useSelector(getAccountsList);

  return (
    <AccountsContainer>
      <Header>
        <Title>Accounts</Title>
        <AddAccountButton to="account/create">
          <PlusIcon />
        </AddAccountButton>
      </Header>
      <Scrollbar TrackY={ScrollbarTrackY}>
        {accounts.map((account, i) => (
          <AccountItem
            key={`${account.address}-${i}`}
            icon={<CurrencyIcon coin={account.coin} size="lg" />}
            link={`/account/${account.id}`}
            text={account.name}
            descText={`${account.balance} ${config.coins[account.coin.toUpperCase()].abbr} / $100`}
          />
        ))}
      </Scrollbar>
    </AccountsContainer>
  );
};

export default Accounts;
