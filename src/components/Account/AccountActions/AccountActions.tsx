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

import './AccountActions.scss';
import { Breakpoints } from '../../../enums';
import { useWindowSize } from '../../../hooks';

import IconButton from '../../shared/IconButton/IconButton';

const AccountActions: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  const windowSize = useWindowSize();

  if (windowSize.width < Breakpoints.md && !match.isExact) {
    return null;
  }

  return (
    <nav className="account-actions">
      <IconButton
        link={`${match.url}/details`}
        icon={<InfoIcon />}
        text="Details"
        descText="About account"
      />
      <IconButton
        link={`${match.url}/receive`}
        icon={<PlusIcon />}
        text="Receive"
        descText="Top up my account"
      />
      <IconButton
        link={`${match.url}/send`}
        icon={<NavigationIcon />}
        text="Send"
        descText="Transfer to others"
      />
      <IconButton
        link={`${match.url}/exchange`}
        icon={<RepeatIcon />}
        text="Exchange"
        descText="Trade your funds instantly"
      />
      <IconButton
        link={`${match.url}/transactions`}
        icon={<ListIcon />}
        text="Transactions"
        descText="Your funds flow"
      />
      <IconButton
        link={`${match.url}/rename`}
        icon={<EditIcon />}
        text="Rename"
        descText="Unique account name"
      />
      <IconButton
        link={`${match.url}/explorer`}
        icon={<LinkIcon />}
        text="Blockexplorer"
        descText="Show public information"
      />
      <IconButton
        link={`${match.url}/export-private-key`}
        icon={<KeyIcon />}
        text="Private Key"
        descText="Not for prying eyes"
      />
      <IconButton
        link={`${match.url}/delete`}
        icon={<TrashIcon />}
        text="Delete"
        descText="Be careful"
      />
    </nav>
  );
};

export default withRouter(AccountActions);
