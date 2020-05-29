import React from 'react';
import { useSelector } from 'react-redux';
import { Plus as PlusIcon } from 'react-feather';

import { getAccountsListWithDescText } from '../../../../store/account/selectors';

import {
  AccountsContainer,
  Header,
  AccountItem,
  AddAccountButton,
  Title,
  ScrollbarTrackY,
} from './styled';

import Scrollbar from '../../../../components/shared/Scrollbar/Scrollbar';
import CurrencyIcon from '../../../../components/shared/CurrencyIcon/CurrencyIcon';

const Accounts: React.FC = () => {
  const accounts = useSelector(getAccountsListWithDescText);

  return (
    <AccountsContainer>
      <Header>
        <Title>Accounts</Title>
        <AddAccountButton to="account/create">
          <PlusIcon />
        </AddAccountButton>
      </Header>
      <Scrollbar TrackY={ScrollbarTrackY}>
        {accounts ? (
          accounts.map((account, i) => (
            <AccountItem
              key={`${account.address}-${i}`}
              icon={<CurrencyIcon coin={account.coin} size="lg" />}
              link={`/account/${account.id}/details`}
              text={account.name}
              descText={account.descText}
            />
          ))
        ) : (
          <></>
        )}
      </Scrollbar>
    </AccountsContainer>
  );
};

export default Accounts;
