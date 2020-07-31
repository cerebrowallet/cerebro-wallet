import {
  Eye as EyeIcon,
  Filter as FilterIcon,
  Key as KeyIcon,
  Navigation as NavigationIcon,
  Plus as PlusIcon,
  // Repeat as RepeatIcon,
} from 'react-feather';

export const FEATURES = [
  {
    link: '/features/receive',
    text: 'Receive',
    descText: 'Top up my accounts',
    icon: PlusIcon,
  },
  {
    link: '/features/send',
    text: 'Send',
    descText: 'Transfer to others',
    icon: NavigationIcon,
  },
  // {
  //   link: '/features/exchange',
  //   text: 'Exchange',
  //   descText: 'Trade your funds instantly',
  //   icon: RepeatIcon,
  // },
  {
    link: '/activity',
    text: 'Activity',
    descText: 'Transactions history',
    icon: FilterIcon,
  },
];

export const MANAGE_ACCOUNT_ACTIONS = [
  {
    link: '/account/create',
    text: 'Create a new accounts',
    descText: 'Manage multiple coins at once',
    icon: PlusIcon,
  },
  {
    link: '/account/import-private-key',
    text: 'Import Private Key',
    descText: 'from existing wallet',
    icon: KeyIcon,
  },
  {
    link: '/account/import-public-address',
    text: 'Import Public Address',
    descText: 'See what is happening to it',
    icon: EyeIcon,
  },
];
