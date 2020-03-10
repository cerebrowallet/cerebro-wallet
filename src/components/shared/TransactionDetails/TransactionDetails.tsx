import React from 'react';

import { Coins } from '../../../dictionaries';

import Page from '../../layout/Page/Page';
import LabeledText from '../LabeledText/LabeledText';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import Hash from '../Hash/Hash';
import {
  TopUp,
  TopUpHeader,
  TopUpHeaderDetails,
  TopUpHeaderIcon,
  AdditionalInfo,
  AdditionalInfoDate,
  AdditionalInfoComment,
  Details,
} from './styled';

const TransactionDetails: React.FC = () => {
  return (
    <Page>
      <TopUp>
        <TopUpHeader>
          <TopUpHeaderDetails>
            <h3>– 0.00002914 BTC</h3>
            <span>– $103</span>
          </TopUpHeaderDetails>
          <TopUpHeaderIcon>
            <CurrencyIcon coin={Coins.BTC} size="xl" />
          </TopUpHeaderIcon>
        </TopUpHeader>
        <AdditionalInfo>
          <AdditionalInfoDate label="Date">
            11:00 pm Nov 3, 2019
          </AdditionalInfoDate>
          <AdditionalInfoComment label="Comment">
            Type something
          </AdditionalInfoComment>
        </AdditionalInfo>
      </TopUp>
      <Details>
        <LabeledText label="Status">Success</LabeledText>
        <LabeledText label="Confirmations">1394492</LabeledText>
        <LabeledText label="Network fee">0.0001 BTC</LabeledText>
      </Details>
      <LabeledText label="From">
        <Hash breakAll value="1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19" />
      </LabeledText>
      <LabeledText label="To" canCopyText>
        <Hash breakAll value="afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19" />
      </LabeledText>
      <LabeledText label="Hash">
        <Hash
          breakAll
          value="ddfklawfm2l3mfg24oi032ivemvk2rkr2i03twrvksnkbsdvbbfr3mitg"
        />
      </LabeledText>
    </Page>
  );
};

export default TransactionDetails;
