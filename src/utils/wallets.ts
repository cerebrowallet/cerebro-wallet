import * as bitcoin from 'bitcoinjs-lib';
import { generateMnemonic } from 'bip39';
import { v4 } from 'uuid';

import { Coins } from '../dictionaries';
import { config } from '../config';
import { toSatoshi } from './common';

export const createBTCWallet = () => {
  const keyPair = bitcoin.ECPair.makeRandom({
    network: config.networks.BTC,
  });

  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: config.networks.BTC,
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

export const createBTCLikeTransaction = ({
  privateKey,
  uxto,
  receivers,
  coin,
}: {
  privateKey: string;
  uxto: { tx_hash: string; tx_output_n: number }[];
  receivers: { address: string; amount: number }[];
  coin: Coins;
}) => {
  const rootKey = bitcoin.ECPair.fromWIF(privateKey, config.networks[coin]);
  const tx = new bitcoin.TransactionBuilder(config.networks[coin]);

  uxto.forEach(
    ({ tx_hash, tx_output_n }: { tx_hash: string; tx_output_n: number }) => {
      tx.addInput(tx_hash, tx_output_n);
    }
  );

  receivers.forEach(({ address, amount }) => {
    tx.addOutput(address, amount);
  });

  uxto.forEach((item, index) => {
    tx.sign(index, rootKey);
  });

  return tx.build().toHex();
};
