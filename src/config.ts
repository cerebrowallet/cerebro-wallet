import { Coins } from './dictionaries';

enum Chains {
  BTC = 'bitcoin',
  BTC_TestNet = 'bitcoin/testnet',
}

const getExplorerUrl = (chain: Chains) => `https://blockchair.com/${chain}`;

const getCoinApiUrls = (chain: Chains) => ({
  getAddressInfo: (address: string) =>
    `https://api.blockchair.com/${chain}/dashboards/address/${address}`,
  getTxInfo: (txHash: string) =>
    `https://api.blockchair.com/${chain}/dashboards/transaction/${txHash}`,
  broadcastTx: `https://api.blockchair.com/${chain}/push/transaction`,
  getBlockChainStats: `https://api.blockchair.com/${chain}/stats`,
});

export interface Config {
  coins: {
    [id: string]: {
      name: string;
      abbr: Coins;
      explorerUrl: string;
      apiUrls: {
        getAddressInfo: (address: string) => string;
        getTxInfo: (hash: string) => string;
        broadcastTx: string;
        getBlockChainStats: string;
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
  getCoursesApiUrl: string;
  getRecommendedBTCLikeFeesApiUrl: string;
}

const config: Config = {
  coins: {
    BTC: {
      name: 'Bitcoin',
      abbr: Coins.BTC,
      explorerUrl: getExplorerUrl(Chains.BTC),
      apiUrls: getCoinApiUrls(Chains.BTC),
    },
    BTC_TestNet: {
      name: 'Bitcoin TestNet',
      abbr: Coins.BTC_TestNet,
      explorerUrl: getExplorerUrl(Chains.BTC_TestNet),
      apiUrls: getCoinApiUrls(Chains.BTC_TestNet),
    },
  },
  networks: {
    BTC_TestNet: {
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
    BTC: {
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
  getCoursesApiUrl: 'https://min-api.cryptocompare.com/data/pricemulti',
  getRecommendedBTCLikeFeesApiUrl:
    'https://bitcoinfees.earn.com/api/v1/fees/recommended',
};

export { config };
