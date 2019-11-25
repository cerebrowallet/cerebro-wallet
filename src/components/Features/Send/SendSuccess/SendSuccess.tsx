import React from 'react';
import {
  ThumbsUp as ThumbsUpIcon,
  CheckCircle as CheckCircleIcon,
} from 'react-feather';

import { SEND_STEPS } from '../constants';
import './SendSuccess.scss';

import SendProgress from '../SendProgress/SendProgress';
import Button from '../../../shared/Button/Button';
import HashText from '../../../shared/HashText/HashText';
import Page from '../../../shared/Page/Page';

const SendSuccess: React.FC = () => {
  return (
    <Page
      headerText="Success"
      FooterIcon={ThumbsUpIcon}
      footerText="You are doing everything right, Eugene."
    >
      <div className="white-block">
        <div className="send-success">
          <CheckCircleIcon className="send-success__icon" />
          <h3 className="send-success__title">Congratulations!</h3>
          <p className="send-success__text">
            Your transaction was successfully sent! Hash:
          </p>
          <HashText className="send-success__text-hash">
            0x309cc6klklkklkaf2f6b1...ec6llklkkb489858489bd
          </HashText>
          <Button>Ok</Button>
        </div>
        <SendProgress step={SEND_STEPS.SUCCESS} />
      </div>
    </Page>
  );
};

export default SendSuccess;
