import React from 'react';
import { File as FileIcon } from 'react-feather';

import { SendSteps } from '../../../../dictionaries';

import SendPagination from '../SendPagination/SendPagination';
import Button from '../../../forms/Button/Button';
import Page from '../../../layout/Page/Page';
import WhiteBlock from '../../WhiteBlock';
import {
  Title,
  Amount,
  AmountInDollars,
  Details,
  Actions,
  BackButton,
} from './styled';

const SendConfirm: React.FC = () => {
  return (
    <Page
      headerText="Confirm"
      FooterIcon={FileIcon}
      footerText="Please check details and confirm transaction."
    >
      <WhiteBlock>
        <Title>You want to spend</Title>
        <Amount>0.00032142 BTC</Amount>
        <AmountInDollars>$2.91</AmountInDollars>
        <Details>
          <dt>From</dt>
          <dd>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</dd>
          <dt>To</dt>
          <dd>1LjDjujdaPPa61K2fvpyRLCdd8so1iuXR1</dd>
          <dt>Network fee</dt>
          <dd>0.0001 BTC</dd>
          <dt>Will receive</dt>
          <dd>0.00022142 BTC</dd>
        </Details>
        <Actions>
          <BackButton type="button">&larr; Back</BackButton>
          <Button type="button">Confirm</Button>
        </Actions>
        <SendPagination step={SendSteps.Confirm} />
      </WhiteBlock>
    </Page>
  );
};

export default SendConfirm;
