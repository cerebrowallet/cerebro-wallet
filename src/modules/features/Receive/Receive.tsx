import React from 'react';
import {
  ChevronDown as ChevronDownIcon,
  Share2 as ShareIcon,
} from 'react-feather';

import FormGroup from '../../shared/FormGroup/FormGroup';
import QRCode from './QRCode/QRCode';
import LabeledText from '../../shared/LabeledText/LabeledText';
import DropDown from '../../shared/DropDown/DropDown';

const Receive: React.FC = () => {
  return (
    <section className="page">
      <header className="page__header">Top up account</header>
      <section className="page__content">
        <section className="white-block">
          <FormGroup label="Account">
            {/*<DropDown*/}
            {/*  options={[*/}
            {/*    {*/}
            {/*      label: 'Bitcoin',*/}
            {/*      value: '1JfkskjdaPPa61K2fvpyRLCdd8so1iuXR1',*/}
            {/*    },*/}
            {/*  ]}*/}
            {/*  name="account"*/}
            {/*/>*/}
          </FormGroup>
        </section>
        <QRCode />
        <LabeledText label="Public address">
          1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
        </LabeledText>
        <LabeledText label="Legacy format" canCopyText>
          afclqmv21L9NxSdNx92jLy8KdKn3gd528hGDCuzM19
        </LabeledText>
      </section>
      <footer className="page-footer">
        <ShareIcon className="page-footer__icon" />
        You can share this address with anyone who want to send money to you.
      </footer>
    </section>
  );
};

export default Receive;
