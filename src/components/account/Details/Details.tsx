import React from 'react';
import { useSelector } from 'react-redux';

import { config } from '../../../config';
import {
  getAccountById,
  getExchangeRates,
} from '../../../store/account/selectors';
import { round } from '../../../utils/common';
import { getSettings } from '../../../store/user/selectors';
import { CurrencySymbols } from '../../../dictionaries';

import {
  WhiteBlockDetails,
  WalletName,
  Icon,
  Balance,
  BalanceInCrypto,
  BalanceInLocalCurrency,
  Addresses,
} from './styled';

import UpdateBalance from './UpdateBalance/UpdateBalance';
import Loader from '../../shared/Loader/Loader';
import LabeledText from '../../shared/LabeledText/LabeledText';
import HashText from '../../shared/HashText/HashText';
import Chart from '../../shared/Chart/Chart';
import Page from '../../layout/Page/Page';

interface Props {
  accountId: string;
}

const Details: React.FC<Props> = ({ accountId }) => {
  const account = useSelector(getAccountById(accountId));
  const rates = useSelector(getExchangeRates);
  const settings = useSelector(getSettings);

  if (!account) {
    return <Loader />;
  }

  return (
    <Page className="details">
      <WhiteBlockDetails>
        <WalletName>
          <Icon coin={account.coin} size="lg" />
          <span>{account.name}</span>
        </WalletName>
        <Balance>
          <BalanceInCrypto>
            <UpdateBalance accountId={account.id} />
            {account.balance} {config.coins[account.coin].abbr}
          </BalanceInCrypto>
          <BalanceInLocalCurrency>
            {rates && settings.currency
              ? round(account.balance * rates[account.coin][settings.currency])
              : 0}
            {settings.currency && CurrencySymbols[settings.currency]}
          </BalanceInLocalCurrency>
        </Balance>
      </WhiteBlockDetails>
      <Addresses>
        <LabeledText label="Public address">
          <HashText breakAll>{account.address}</HashText>
        </LabeledText>
        <LabeledText label="Legacy format" canCopyText>
          <HashText breakAll>
            afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
          </HashText>
        </LabeledText>
      </Addresses>
      <Chart />
    </Page>
  );
};

export default Details;
