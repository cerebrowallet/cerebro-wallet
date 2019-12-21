import React from 'react';
import {
  ThumbsUp as ThumbsUpIcon,
  CheckCircle as CheckCircleIcon,
} from 'react-feather';
import styled from 'styled-components';

import { SendSteps } from '../../../enums';

import SendPagination from './SendPagination';
import Button from '../../forms/Button';
import HashText from '../HashText';
import Page from '../../layout/Page';
import WhiteBlock from '../WhiteBlock';

const Wrapper = styled.div`
  padding-top: 3.4375rem;
  text-align: center;
`;

const SuccessIcon = styled(CheckCircleIcon)`
  width: 3rem;
  height: 3rem;
  color: ${props => props.theme.colors.alt3};
  margin-bottom: 0.9375rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5625rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

const Hash = styled(HashText)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: underline;
  margin-bottom: 2.25rem;
  justify-content: center;
`;

const SendSuccess: React.FC = () => {
  return (
    <Page
      headerText="Success"
      FooterIcon={ThumbsUpIcon}
      footerText="You are doing everything right, Eugene."
    >
      <WhiteBlock>
        <Wrapper>
          <SuccessIcon />
          <Title>Congratulations!</Title>
          <Text>Your transaction was successfully sent! Hash:</Text>
          <Hash truncate>0x309cc6klklkklkaf2f6b1ec6llklkkb489858489bd</Hash>
          <Button>Ok</Button>
        </Wrapper>
        <SendPagination step={SendSteps.Success} />
      </WhiteBlock>
    </Page>
  );
};

export default SendSuccess;
