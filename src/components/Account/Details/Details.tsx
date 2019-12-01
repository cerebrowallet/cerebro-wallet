import React from 'react';
import { RotateCw as RotateIcon } from 'react-feather';

import { Currencies } from '../../../enums';

import './Details.scss';

import CurrencyIcon from '../../shared/CurrencyIcon/CurrencyIcon';
import LabeledText from '../../shared/LabeledText/LabeledText';
import HashText from '../../shared/HashText/HashText';
import Chart from '../../shared/Chart/Chart';
import Page from '../../shared/Page/Page';

const Details: React.FC = () => {
  return (
    <Page className="details">
      <section className="white-block details__info">
        <div className="details__name">
          <CurrencyIcon
            currency={Currencies.BTC}
            size="large"
            className="details__currency-icon"
          />
          <span>My Bitcoin Wallet</span>
        </div>
        <div className="details__balance">
          <div className="details__balance-in-crypto">
            <button type="button" className="details__update-balance">
              <RotateIcon className="details__update-balance-icon" />
            </button>
            0.00002914 BTC
          </div>
          <div className="details__balance-in-dollars">100$</div>
        </div>
      </section>
      <div className="details__addresses">
        <LabeledText label="Public address">
          <HashText breakAll>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
        </LabeledText>
        <LabeledText label="Legacy format" canCopyText>
          <HashText breakAll>
            afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
          </HashText>
        </LabeledText>
      </div>
      <Chart className="details__chart" />
    </Page>
  );
};

export default Details;
