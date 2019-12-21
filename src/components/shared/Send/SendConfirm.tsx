import React from 'react';
import { File as FileIcon } from 'react-feather';
import styled from 'styled-components';

import { SendSteps } from '../../../enums';

import SendPagination from './SendPagination';
import Button from '../../forms/Button';
import Page from '../../layout/Page';
import WhiteBlock from '../WhiteBlock';

const Title = styled.h4`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  margin-bottom: 0.8125rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`;

const Amount = styled.strong`
  display: block;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-bottom: 0;
`;

const AmountInDollars = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.8125rem;
`;

const Details = styled.dl`
  margin-bottom: 2.5625rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    margin-bottom: 1.4375rem;
  }

  dt {
    flex: 0 1 25%;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${props => props.theme.colors.secondary};
    margin-top: 0.22rem;
    margin-bottom: 0.625rem;
  }

  dd {
    flex: 0 1 75%;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1.0625rem;
    word-break: break-all;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-bottom: 0.625rem;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  font-size: 0.75rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-weight: bold;
  border: 0;
  background: #fff;
  white-space: nowrap;
  padding: 0 1.25rem 0 0;
`;

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
