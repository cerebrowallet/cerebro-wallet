import React from 'react';
import { RotateCw as RotateIcon } from 'react-feather';

import { Currencies } from '../../../enums';

import LabeledText from '../../shared/LabeledText/LabeledText';
import HashText from '../../shared/HashText/HashText';
import Chart from '../../shared/Chart/Chart';
import Page from '../../layout/Page/Page';
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

const Details: React.FC = () => {
  return (
    <Page className="details">
      <WhiteBlockDetails>
        <WalletName>
          <Icon currency={Currencies.BTC} size="lg" />
          <span>My Bitcoin Wallet</span>
        </WalletName>
        <Balance>
          <BalanceInCrypto>
            <UpdateBalance type="button">
              <RotateIcon />
            </UpdateBalance>
            0.00002914 BTC
          </BalanceInCrypto>
          <BalanceInDollars>100$</BalanceInDollars>
        </Balance>
      </WhiteBlockDetails>
      <Addresses>
        <LabeledText label="Public address">
          <HashText breakAll>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
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
