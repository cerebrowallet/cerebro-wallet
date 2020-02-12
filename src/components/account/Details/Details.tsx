import React from 'react';
import { RotateCw as RotateIcon } from 'react-feather';
import { useSelector } from 'react-redux';

import { config } from '../../../config';
import {
  getAccountById,
  getExchangeRates,
} from '../../../store/account/selectors';

import {
  WhiteBlockDetails,
  WalletName,
  Icon,
  Balance,
  BalanceInCrypto,
  UpdateBalance,
  BalanceInDollars,
  Addresses,
} from './styled';

import Loader from '../../shared/Loader/Loader';
import LabeledText from '../../shared/LabeledText/LabeledText';
import HashText from '../../shared/HashText/HashText';
import Chart from '../../shared/Chart/Chart';
import Page from '../../layout/Page/Page';
import { getSettings } from '../../../store/user/selectors';
import { CurrencySymbols } from '../../../dictionaries';

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
            <UpdateBalance type="button">
              <RotateIcon />
            </UpdateBalance>
            {account.balance} {config.coins[account.coin].abbr}
          </BalanceInCrypto>
          <BalanceInDollars>
            {rates && settings.currency
              ? account.balance * rates[account.coin][settings.currency]
              : 0}
            {settings.currency && CurrencySymbols[settings.currency]}
          </BalanceInDollars>
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
