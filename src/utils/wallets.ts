import * as bitcoin from 'bitcoinjs-lib';
import { v4 } from 'uuid';

import { Coins } from '../dictionaries';
import { config } from '../config';

export const createWallet = (coin: Coins) => {
  const keyPair = bitcoin.ECPair.makeRandom({
    network: config.networks[coin],
  });

  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: config.networks[coin],
  });

  return {
    address,
    privateKey: keyPair.toWIF(),
    coin: coin,
    id: v4(),
    balance: 0,
    name: `My ${config.coins[coin].name} Wallet`,
  };
};

export const createBTCLikeTransaction = ({
  privateKey,
  utxo,
  receivers,
  coin,
}: {
  privateKey: string;
  utxo: { transaction_hash: string; index: number }[];
  receivers: { address: string; amount: number }[];
  coin: Coins;
}) => {
  const rootKey = bitcoin.ECPair.fromWIF(privateKey, config.networks[coin]);
  const tx = new bitcoin.TransactionBuilder(config.networks[coin]);

  utxo.forEach(
    ({
      transaction_hash,
      index,
    }: {
      transaction_hash: string;
      index: number;
    }) => {
      tx.addInput(transaction_hash, index);
    }
  );

  receivers.forEach(({ address, amount }) => {
    tx.addOutput(address, amount);
  });

  utxo.forEach((item, index) => {
    tx.sign(index, rootKey);
  });

  return tx.build().toHex();
};
