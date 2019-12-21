import React from 'react';
import { RotateCw as RotateIcon } from 'react-feather';
import styled from 'styled-components';

import { Currencies } from '../../enums';

import CurrencyIcon from '../shared/CurrencyIcon';
import LabeledText from '../shared/LabeledText';
import HashText from '../shared/HashText';
import Chart from '../shared/Chart';
import Page from '../layout/Page';
import WhiteBlock from '../shared/WhiteBlock';

const WhiteBlockDetails = styled(WhiteBlock)`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const WalletName = styled.div`
  font-size: 1.125rem;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  margin-bottom: 1.875rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;

const Icon = styled(CurrencyIcon)`
  width: 4rem;
  height: 4rem;
  margin-right: 0.9375rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Balance = styled.div`
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    text-align: right;
  }
`;

const BalanceInCrypto = styled.div`
  font-size: 1.5rem;
  line-height: 1.8125rem;
  font-weight: 600;
  white-space: nowrap;
`;

const BalanceInDollars = styled.div`
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${props => props.theme.colors.secondary};
`;

const UpdateBalance = styled.button`
  border: 0;
  background: none;
  cursor: pointer;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

const Addresses = styled.div`
  margin-bottom: 3.125rem;
`;

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
