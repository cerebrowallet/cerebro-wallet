import * as bitcoin from 'bitcoinjs-lib';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { Buffer } from 'buffer';

import { Coins } from '../dictionaries';
import { AddressTypes, KeyTypes, UXTO } from '../store/account/types';
import { config } from '../config';

export const createMnemonic = () => generateMnemonic();

export const generateBTCLikeAddress = async ({
  coin,
  key,
  keyType,
  addressType,
  derivationPath,
}: {
  coin: Coins;
  key: string;
  derivationPath?: string;
  addressType: AddressTypes;
  keyType: KeyTypes;
}) => {
  let publicKey;

  if (keyType === KeyTypes.PrivateKey) {
    const keyPair = bitcoin.ECPair.fromPrivateKey(Buffer.from(key, 'hex'));
    publicKey = keyPair.publicKey;
  } else if (keyType === KeyTypes.WIF) {
    const keyPair = bitcoin.ECPair.fromWIF(key);
    publicKey = keyPair.publicKey;
  } else {
    const seed = await mnemonicToSeed(key);
    const masterNode = bitcoin.bip32.fromSeed(seed, config.networks[coin]);
    const account = masterNode.derivePath(derivationPath || "m/84'/0'/0'/0/0");
    publicKey = account.publicKey;
  }

  const createPaymentFn = {
    [AddressTypes.P2PKH]: bitcoin.payments.p2pkh,
    [AddressTypes.SegWit]: bitcoin.payments.p2wpkh,
  };

  const { address } = createPaymentFn[addressType]({
    pubkey: publicKey,
    network: config.networks[coin],
  });

  return address;
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

export const getNodeFromMnemonic = async ({
  mnemonic,
  derivationPath,
}: {
  mnemonic: string;
  derivationPath: string;
}) => {
  const seed = await mnemonicToSeed(mnemonic);
  const hdRoot = bitcoin.bip32.fromSeed(seed);
  return hdRoot.derivePath(derivationPath);
};
