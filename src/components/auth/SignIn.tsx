import React from 'react';

import Background from './Background/Background';
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
      'Blockstack provides user-controlled auth and storage that enable you to take back control of your identity and data. Creating a Blockstack ID is easy, free, and secure. Blockstack protecting your data from big internet companies.',
  },
  {
    header: 'MultiCurrency solution',
    text:
      'Cerebro Wallet supports Bitcoin (BTC), Blockstack (STX) and fiat currencies, including USD, EUR, GBP, CNY, HKD, INR, JPY, PKR, SEK and other.',
  },
];

const SignIn: React.FC = () => {
  return (
    <Background>
      <FeatureSlider slides={SIGN_IN_FEATURES} />
    </Background>
  );
};

export default SignIn;
