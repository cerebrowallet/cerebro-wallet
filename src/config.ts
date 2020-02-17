import { Coins } from './dictionaries';

export interface Config {
  coins: {
    [id: string]: {
      name: string;
      abbr: Coins;
      explorer: string;
    };
  };
  networks: {
    [name: string]: {
      messagePrefix: string;
      bech32: string;
      bip32: {
        public: number;
        private: number;
      };
      pubKeyHash: number;
      scriptHash: number;
      wif: number;
    };
  };
  gaia: {
    files: {
      accounts: string;
      profile: string;
      settings: string;
    };
  };
  coursesApiUrl: string;
}

const config: Config = {
  coins: {
    BTC: {
      name: 'Bitcoin',
      abbr: Coins.BTC,
      explorer: 'https://testnet.blockexplorer.com',
    },
  },
  networks: {
    testnet: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
    },
    bitcoin: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },
  },
  gaia: {
    files: {
      settings: 'settings.json',
      profile: 'profile.json',
      accounts: 'accounts.json',
    },
  },
  coursesApiUrl: 'https://min-api.cryptocompare.com/data/pricemulti'
};

export { config };
