import React from 'react';

import './TransactionDetails.scss';
import Currencies from '../../../currencies';

import Page from '../../shared/Page/Page';
import LabeledText from '../../shared/LabeledText/LabeledText';
import CurrencyIcon from '../../shared/CurrencyIcon/CurrencyIcon';
import HashText from '../../shared/HashText/HashText';

const TransactionDetails: React.FC = () => {
  return (
    <Page>
      <section className="tr-details">
        <div className="tr-details__top-up">
          <div className="tr-details__top-up-header">
            <div className="tr-details__top-up-header-details">
              <h3 className="tr-details__top-up-amount-in-crypto">
                – 0.00002914 BTC
              </h3>
              <span className="tr-details__top-up-amount-in-dollars">
                – $103
              </span>
            </div>
            <div className="tr-details__top-up-header-icon">
              <CurrencyIcon
                currency={Currencies.BTC}
                className="currency--btc currency--xl"
              />
            </div>
          </div>
          <div className="tr-details__top-up-content">
            <LabeledText
              label="Date"
              className="labeled-text--small labeled-text--no-left-padding labeled-text--no-margin tr-details__top-up-content-date"
            >
              11:00 pm Nov 3, 2019
            </LabeledText>
            <LabeledText
              label="Comment"
              className="labeled-text--small labeled-text--no-left-padding labeled-text--no-margin"
            >
              Type something
            </LabeledText>
          </div>
        </div>
        <div className="tr-details__details">
          <LabeledText label="Status">Success</LabeledText>
          <LabeledText label="Confirmations">1394492</LabeledText>
          <LabeledText label="Network fee">0.0001 BTC</LabeledText>
        </div>
        <LabeledText label="From">
          <HashText breakAll>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
        </LabeledText>
        <LabeledText label="To" canCopyText>
          <HashText breakAll>afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
        </LabeledText>
        <LabeledText label="Hash">
          <HashText breakAll>ddfklawfm2l3mfg24oi032ivemvk2rkr2i03twrvksnkbsdvbbfr3mitg</HashText>
        </LabeledText>
      </section>
    </Page>
  );
};

export default TransactionDetails;
