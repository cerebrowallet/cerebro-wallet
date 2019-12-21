import React from 'react';
import { TrendingUp as TrendingUpIcon } from 'react-feather';

import exchangeIllustration from '../../../images/exchange-placeholder.png';

import Page from '../../layout/Page';
import Poll from './Poll';

const Exchange: React.FC = () => {
  return (
    <Page
      headerText="Exchange your coins"
      FooterIcon={TrendingUpIcon}
      footerText="Fast way to exchange cryptocurrencies without leaving Cerebro."
    >
      <img src={exchangeIllustration} alt="" />
      <p>
        You are an important and significant voice here and play a crucial role
        in Cerebro development. Which exchanger would you like to use in our
        application?
      </p>
      <Poll />
      <p>We'll announce it publicly in a couple weeks. Stay tuned!</p>
    </Page>
  );
};

export default Exchange;
