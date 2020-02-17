import React from 'react';
import {
  Info as InfoIcon,
  Plus as PlusIcon,
  Navigation as NavigationIcon,
  Repeat as RepeatIcon,
  List as ListIcon,
  Edit3 as EditIcon,
  Link as LinkIcon,
  Key as KeyIcon,
  Trash as TrashIcon,
} from 'react-feather';
import { RouteComponentProps, withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import { Breakpoints } from '../../../dictionaries';
import { useWindowSize } from '../../../utils/hooks';
import { ActionButton } from './styled';
import { getAccountById } from '../../../store/account/selectors';
import { config } from '../../../config';

interface Props extends RouteComponentProps {
  accountId: string;
}

const AccountActions: React.FC<Props> = ({ match, accountId }) => {
  const windowSize = useWindowSize();
  const account = useSelector(getAccountById(accountId));

  if (!account || (windowSize.width < Breakpoints.md && !match.isExact)) {
    return null;
  }

  return (
    <nav>
      <ActionButton
        link={`${match.url}/details`}
        icon={<InfoIcon />}
        text="Details"
        descText="About account"
      />
      <ActionButton
        link={`${match.url}/receive`}
        icon={<PlusIcon />}
        text="Receive"
        descText="Top up my account"
      />
      <ActionButton
        link={`${match.url}/send`}
        icon={<NavigationIcon />}
        text="Send"
        descText="Transfer to others"
      />
      <ActionButton
        link={`${match.url}/exchange`}
        icon={<RepeatIcon />}
        text="Exchange"
        descText="Trade your funds instantly"
      />
      <ActionButton
        link={`${match.url}/transactions`}
        icon={<ListIcon />}
        text="Transactions"
        descText="Your funds flow"
      />
      <ActionButton
        link={`${match.url}/rename`}
        icon={<EditIcon />}
        text="Rename"
        descText="Unique account name"
      />
      <ActionButton
        link={`${config.coins[account.coin].explorer}/address/${account.address}`}
        icon={<LinkIcon />}
        text="Blockexplorer"
        descText="Show public information"
      />
      <ActionButton
        link={`${match.url}/export-private-key`}
        icon={<KeyIcon />}
        text="Private Key"
        descText="Not for prying eyes"
      />
      <ActionButton
        link={`${match.url}/delete`}
        icon={<TrashIcon />}
        text="Delete"
        descText="Be careful"
      />
    </nav>
  );
};

export default withRouter(AccountActions);
