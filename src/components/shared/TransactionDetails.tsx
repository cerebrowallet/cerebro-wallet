import React from 'react';
import styled from 'styled-components';

import { Currencies } from '../../enums';

import Page from '../layout/Page';
import LabeledText from './LabeledText';
import CurrencyIcon from './CurrencyIcon';
import HashText from './HashText';

const TopUp = styled.div`
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  padding: 1.875rem 1.5625rem;
  margin-bottom: 3.125rem;
`;

const TopUpHeader = styled.div`
  display: grid;
  grid-template-areas:
    'currency-icon'
    'details';
  margin-bottom: 1.25rem;

  @media (min-width: 420px) {
    grid-template-areas: 'details currency-icon';
    margin-bottom: 0;
  }
`;

const TopUpHeaderDetails = styled.div`
  grid-area: details;
  margin-bottom: 1.5625rem;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-bottom: 0.1875rem;
  }

  span {
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

const TopUpHeaderIcon = styled.div`
  text-align: center;
  grid-area: currency-icon;
  margin-bottom: 1.5625rem;

  @media (min-width: 420px) {
    text-align: right;
    margin-bottom: 0;
  }
`;

const AdditionalInfo = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 75%;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 65%;
  }
`;

const AdditionalInfoComment = styled(LabeledText)`
  padding-left: 0;
  margin: 0;

  label {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

const AdditionalInfoDate = styled(AdditionalInfoComment)`
  margin-bottom: 0.9375rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
    margin-right: 1.25rem;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    justify-content: space-between;
    max-width: 80%;
  }
`;

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
            <CurrencyIcon currency={Currencies.BTC} size="xl" />
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
        <HashText breakAll>1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
      </LabeledText>
      <LabeledText label="To" canCopyText>
        <HashText breakAll>afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19</HashText>
      </LabeledText>
      <LabeledText label="Hash">
        <HashText breakAll>
          ddfklawfm2l3mfg24oi032ivemvk2rkr2i03twrvksnkbsdvbbfr3mitg
        </HashText>
      </LabeledText>
    </Page>
  );
};

export default TransactionDetails;
