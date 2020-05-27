import * as bitcoin from 'bitcoinjs-lib';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { v4 } from 'uuid';

import { Coins } from '../dictionaries';
import { AccountTypes } from '../store/account/types';
import { config } from '../config';

const coinTypes = {
  [Coins.BTC]: '0',
  [Coins.BTC_TestNet]: '0',
};

export const createMnemonic = () => generateMnemonic();

const methods = {
  [AccountTypes.bech32]: bitcoin.payments.p2wpkh,
  [AccountTypes.legacy]: bitcoin.payments.p2pkh,
};

export const createWallet = async ({
  coin,
  nextAccountIndex,
  mnemonic,
  type,
}: {
  coin: Coins;
  nextAccountIndex: number;
  mnemonic: string;
  type: Partial<AccountTypes>;
}) => {
  const seed = await mnemonicToSeed(mnemonic);
  const masterNode = bitcoin.bip32.fromSeed(seed, config.networks[coin]);
  const derivationPath = `m/84'/${coinTypes[coin]}'/${nextAccountIndex}'/0/0`;
  const account = masterNode.derivePath(derivationPath);

  const { address } = methods[type]({
    pubkey: account.publicKey,
    network: config.networks[coin],
  });

  return {
    account: {
      address,
      type,
      coin: coin,
      id: v4(),
      balance: 0,
      name: `My ${config.coins[coin].name} Wallet`,
      derivationPath,
    },
    privateKey: account.toWIF(),
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
