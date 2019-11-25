import React from 'react';
import { File as FileIcon } from 'react-feather';

import { SEND_STEPS } from '../constants';
import SendProgress from '../SendProgress/SendProgress';
import Button from '../../../shared/Button/Button';
import Page from '../../../shared/Page/Page';

import './SendConfirm.scss';

const SendConfirm: React.FC = () => {
  return (
    <Page
      headerText="Confirm"
      FooterIcon={FileIcon}
      footerText="Please check details and confirm transaction."
    >
      <div className="white-block">
        <div className="send-confirm">
          <h4 className="send-confirm__title">You want to spend</h4>
          <strong className="send-confirm__amount">0.00032142 BTC</strong>
          <span className="send-confirm__amount-in-dollars">$2.91</span>
          <dl className="send-confirm__details">
            <dt className="send-confirm__details-name">From</dt>
            <dd className="send-confirm__details-value">
              1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
            </dd>
            <dt className="send-confirm__details-name">To</dt>
            <dd className="send-confirm__details-value">
              1LjDjujdaPPa61K2fvpyRLCdd8so1iuXR1
            </dd>
            <dt className="send-confirm__details-name">Network fee</dt>
            <dd className="send-confirm__details-value">0.0001 BTC</dd>
            <dt className="send-confirm__details-name">Will receive</dt>
            <dd className="send-confirm__details-value">0.00022142 BTC</dd>
          </dl>
        </div>
        <div className="send-confirm-actions">
          <button type="button" className="send-confirm-actions__back">
            &larr; Back
          </button>
          <Button type="button" className="button--send-confirm">
            Confirm
          </Button>
        </div>
        <SendProgress step={SEND_STEPS.CONFIRM} />
      </div>
    </Page>
  );
};

export default SendConfirm;
