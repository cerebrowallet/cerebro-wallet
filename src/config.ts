import { Coins } from './dictionaries';

export interface Config {
  coins: {
    [id: string]: {
      name: string;
      abbr: Coins;
      explorer: string;
      apiUrls: {
        accountDetails: (address: string) => string;
        transactionDetails: (hash: string) => string;
        unconfirmedTransactions: (address: string) => string;
        broadcastTX: () => string;
        recommendedFee: () => string;
      };
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
      explorer: 'https://api.blockcypher.com/v1/btc/test3',
      apiUrls: {
        accountDetails: (address: string) =>
          `https://api.blockcypher.com/v1/btc/test3/addrs/${address}`,
        transactionDetails: (address: string) =>
          `https://api.blockcypher.com/v1/btc/test3/txs/${address}`,
        unconfirmedTransactions: (address: string) =>
          `https://api.blockcypher.com/v1/btc/test3/txs/${address}`,
        broadcastTX: () => 'https://api.blockcypher.com/v1/btc/test3/txs/push',
        recommendedFee: () => 'https://bitcoinfees.earn.com/api/v1/fees/recommended',
      },
    },
  },
  networks: {
    BTC: {
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
    // BTC: {
    //   messagePrefix: '\x18Bitcoin Signed Message:\n',
    //   bech32: 'bc',
    //   bip32: {
    //     public: 0x0488b21e,
    //     private: 0x0488ade4,
    //   },
    //   pubKeyHash: 0x00,
    //   scriptHash: 0x05,
    //   wif: 0x80,
    // },
  },
  gaia: {
    files: {
      settings: 'settings.json',
      profile: 'profile.json',
      accounts: 'accounts.json',
    },
  },
  coursesApiUrl: 'https://min-api.cryptocompare.com/data/pricemulti',
};

export { config };
