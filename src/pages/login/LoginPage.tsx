import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import AuthSidebar from './AuthSidebar/AuthSidebar';
import FeatureSlider from './FeatureSlider/FeatureSlider';

const SIGN_IN_FEATURES = [
  {
    header: 'Decentralized wallet',
    text: `With the old internet, big companies own your funds.
      With Cerebro Wallet, you own your new funds – cryptocurrencies.
       You are in full control of your accounts.`,
  },
  {
    header: 'Fully open-source',
    text:
      'With the old internet, big companies are hiding the source code. WTF!? Cerebro Wallet is open source software with public repository. This means that any user can build it and run it on his own. Verify the code and contribute to wallet development.',
  },
  {
    header: 'Made via Blockstack',
    text:
      'Blockstack provides user-controlled login and storage that enable you to take back control of your identity and data. Creating a Blockstack ID is easy, free, and secure. Blockstack protecting your data from big internet companies.',
  },
  {
    header: 'MultiCurrency solution',
    text:
      'Cerebro Wallet supports Bitcoin (BTC), Blockstack (STX) and fiat wallets, including USD, EUR, GBP, CNY, HKD, INR, JPY, PKR, SEK and other.',
  },
];

const SIGN_UP_FEATURES = [
  {
    header: 'User owned identity',
    text: `With the old internet, big companies own your login. With Blockstack, you own your login and decentralized storage that uses by Cerebro Wallet. Under the hood, Blockstack uses blockchain to keep everything secure and private.`,
  },
  {
    header: 'True data ownership',
    text:
      'With the old internet, big companies own your data. With Blockstack, relax knowing your data is 100% private, and only you can grant access to Cerebro Wallet. Never worry about privacy breaches again.',
  },
  {
    header: 'One ID, 100s of apps',
    text:
      'Discover a universe of new apps, including Cerebro Wallet, where your digital rights are respected. Share, swap, and connect data between apps however you want.',
  },
];

const LoginPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Page layout={PageLayouts.login} sidebarContent={<AuthSidebar />}>
      <FeatureSlider
        slides={match.path === '/signin' ? SIGN_IN_FEATURES : SIGN_UP_FEATURES}
      />
    </Page>
  );
};

export default withRouter(LoginPage);
