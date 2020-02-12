import * as bitcoin from 'bitcoinjs-lib';
import { generateMnemonic } from 'bip39';
import { v4 } from 'uuid';

import { Coins } from '../dictionaries';
import { config } from '../config';

export const createBTCWallet = () => {
  const keyPair = bitcoin.ECPair.makeRandom({
    network: config.networks.testnet,
  });

  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: config.networks.testnet,
  });

  return {
    address,
    privateKey: keyPair.toWIF(),
    coin: Coins.BTC,
    id: v4(),
    balance: 0,
    name: `My ${config.coins[Coins.BTC].name} Wallet`,
  };
};

export const createWallet = (type: Coins) => {
  return createBTCWallet();
};
