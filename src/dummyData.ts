import { Currencies } from './enums';

export const COINS = [
  {
    name: 'Bitcoin',
    code: Currencies.BTC,
  },
  {
    name: 'Stack',
    code: Currencies.STX,
  },
];

export const ACCOUNTS = [
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19',
    name: 'My Bitcoin Wallet',
    balance: 0.00002914,
    currency: Currencies.BTC,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM18',
    name: 'Blockstack',
    balance: 0.00002914,
    currency: Currencies.STX,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19',
    name: 'My Bitcoin Wallet',
    balance: 0.00002914,
    currency: Currencies.BTC,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM18',
    name: 'Blockstack',
    balance: 0.00002914,
    currency: Currencies.STX,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19',
    name: 'My Bitcoin Wallet',
    balance: 0.00002914,
    currency: Currencies.BTC,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM18',
    name: 'Blockstack',
    balance: 0.00002914,
    currency: Currencies.STX,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM19',
    name: 'My Bitcoin Wallet',
    balance: 0.00002914,
    currency: Currencies.BTC,
  },
  {
    address: '1L9NxSdNx92jLy8KdKn3gd528hGDCuzM18',
    name: 'Blockstack',
    balance: 0.00002914,
    currency: Currencies.STX,
  },
];

export const ACCOUNTS_OPTIONS = ACCOUNTS.map(acc => ({
  label: acc.name,
  value: acc.currency,
}));
