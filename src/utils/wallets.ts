import * as bitcoin from 'bitcoinjs-lib';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { v4 } from 'uuid';
import { Buffer } from 'buffer';

import { Coins } from '../dictionaries';
import { AddressTypes, UXTO } from '../store/account/types';
import { config } from '../config';

const coinTypes = {
  [Coins.BTC]: '0',
  [Coins.BTC_TestNet]: '0',
};

export const createMnemonic = () => generateMnemonic();

export const createWallet = async ({
  coin,
  nextAccountIndex,
  mnemonic,
  addressType,
}: {
  coin: Coins;
  nextAccountIndex: number;
  mnemonic: string;
  addressType: AddressTypes;
}) => {
  const seed = await mnemonicToSeed(mnemonic);
  const masterNode = bitcoin.bip32.fromSeed(seed, config.networks[coin]);
  const derivationPath = `m/84'/${coinTypes[coin]}'/${nextAccountIndex}'/0/0`;
  const account = masterNode.derivePath(derivationPath);

  const createPaymentFn = {
    [AddressTypes.P2PKH]: bitcoin.payments.p2pkh,
    [AddressTypes.SegWit]: bitcoin.payments.p2wpkh,
  };

  const { address } = createPaymentFn[addressType]({
    pubkey: account.publicKey,
    network: config.networks[coin],
  });

  return {
    account: {
      address,
      addressType,
      coin: coin,
      id: v4(),
      name: `My ${config.coins[coin].name} Wallet`,
      derivationPath,
    },
    privateKey: account.toWIF(),
  };
};

export const createBTCLikeTransaction = async ({
  mnemonic,
  utxo,
  receivers,
  coin,
  path,
}: {
  mnemonic: string;
  utxo: UXTO[];
  receivers: { address: string; value: number }[];
  coin: Coins;
  path: string;
}) => {
  const seed = await mnemonicToSeed(mnemonic);
  const hdRoot = bitcoin.bip32.fromSeed(seed);
  const masterFingerprint = hdRoot.fingerprint;
  const childNode = hdRoot.derivePath(path);
  const pubkey = childNode.publicKey;

  const psbt = new bitcoin.Psbt({ network: config.networks[coin] });

  utxo.forEach(({ transaction_hash, index, txHex }: UXTO) => {
    psbt.addInput({
      hash: transaction_hash,
      index,
      nonWitnessUtxo: Buffer.from(txHex, 'hex'),
      bip32Derivation: [
        {
          masterFingerprint,
          path,
          pubkey,
        },
      ],
    });
  });

  receivers.forEach(({ address, value }) => {
    psbt.addOutput({
      address,
      value,
    });
  });

  utxo.forEach((input, index) => {
    psbt.signInputHD(index, hdRoot);
  });

  psbt.finalizeAllInputs();

  return psbt.extractTransaction().toHex();
};
