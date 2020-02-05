import React from 'react';
import { Plus as PlusIcon } from 'react-feather';

import Scrollbar from '../../../shared/Scrollbar/Scrollbar';
import { ACCOUNTS } from '../../../../dummyData';
import CurrencyIcon from '../../../shared/CurrencyIcon/CurrencyIcon';
import {
  AccountsContainer,
  Header,
  Account,
  AddAccountButton,
  Title,
  ScrollbarTrackY,
} from './styled';

const Accounts: React.FC = () => {
  return (
    <AccountsContainer>
      <Header>
        <Title>Accounts</Title>
        <AddAccountButton to="account/create">
          <PlusIcon />
        </AddAccountButton>
      </Header>
      <Scrollbar TrackY={ScrollbarTrackY}>
        {ACCOUNTS.map((account, i) => (
          <Account
            key={`${account.address}-${i}`}
            icon={<CurrencyIcon currency={account.currency} size="lg" />}
            link={`/account/${account.address}`}
            text={account.name}
            descText={`${
              account.balance
            } ${account.currency.toUpperCase()} / $100`}
          />
        ))}
      </Scrollbar>
    </AccountsContainer>
  );
};

export default Accounts;
