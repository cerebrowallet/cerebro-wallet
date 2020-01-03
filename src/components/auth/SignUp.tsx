import React from 'react';

import Background from './Background/Background';
import FeatureSlider from './FeatureSlider/FeatureSlider';

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

const SignUp: React.FC = () => {
  return (
    <Background>
      <FeatureSlider slides={SIGN_UP_FEATURES} />
    </Background>
  );
};

export default SignUp;
