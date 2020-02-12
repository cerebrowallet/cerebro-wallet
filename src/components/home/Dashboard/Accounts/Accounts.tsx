import React from 'react';
import { useSelector } from 'react-redux';
import { Plus as PlusIcon } from 'react-feather';

import {
  getAccountsList,
  getExchangeRates,
} from '../../../../store/account/selectors';
import { Account } from '../../../../store/account/types';
import { config } from '../../../../config';
import { getSettings } from '../../../../store/user/selectors';
import { CurrencySymbols } from '../../../../dictionaries';

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

const Accounts: React.FC = () => {
  const accounts: Account[] = useSelector(getAccountsList);
  const rates = useSelector(getExchangeRates);
  const settings = useSelector(getSettings);

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
            descText={`${account.balance} ${
              config.coins[account.coin].abbr
            } / ${settings.currency && CurrencySymbols[settings.currency]}${
              rates && settings.currency
                ? account.balance * rates[account.coin][settings.currency]
                : 0
            }`}
          />
        ))}
      </Scrollbar>
    </AccountsContainer>
  );
};

export default Accounts;
