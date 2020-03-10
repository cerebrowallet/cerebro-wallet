import React from 'react';
import { ThumbsUp as ThumbsUpIcon } from 'react-feather';

import { SendSteps } from '../../../../dictionaries';

import SendPagination from '../SendPagination/SendPagination';
import Button from '../../../forms/Button/Button';
import Page from '../../../layout/Page/Page';
import WhiteBlock from '../../WhiteBlock';
import { Container, SuccessIcon, Text, Title, HashText } from './styled';

const SendSuccess: React.FC = () => {
  return (
    <Page
      headerText="Success"
      FooterIcon={ThumbsUpIcon}
      footerText="You are doing everything right, Eugene."
    >
      <WhiteBlock>
        <Container>
          <SuccessIcon />
          <Title>Congratulations!</Title>
          <Text>Your transaction was successfully sent! Hash:</Text>
          <HashText
            truncate
            value="0x309cc6klklkklkaf2f6b1ec6llklkkb489858489bd"
          />
          <Button>Ok</Button>
        </Container>
        <SendPagination step={SendSteps.Success} />
      </WhiteBlock>
    </Page>
  );
};

export default SendSuccess;
