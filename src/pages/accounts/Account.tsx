import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router';

import { getAccountById } from '../../store/account/selectors';
import { Breakpoints } from '../../dictionaries';
import { useWindowSize } from '../../utils/hooks';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import AccountsList from './AccountsList/AccountsList';
import AccountActions from './AccountActions/AccountActions';
import Send from '../../components/shared/Send/Send';
import TopUpAccount from '../../components/shared/TopUpAccount/TopUpAccount';
import Exchange from '../../components/shared/Exchange/Exchange';
import Details from './Details/Details';
import Rename from './Rename';
import ExportPrivateKey from './ExportPrivateKey';
import DeleteAccount from './DeleteAccount';
import Loader from '../../components/shared/Loader/Loader';

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const windowSize = useWindowSize();
  const { accountId } = match.params;
  const account = useSelector(getAccountById(accountId));

  if (!account) {
    return <Loader />;
  }

  return (
    <Page layout={PageLayouts.twoColumns} sidebarContent={<AccountsList />}>
      <AccountActions account={account} />
      <Switch>
        <Route exact path={`${match.url}/details`}>
          <Details accountId={accountId} />
        </Route>
        <Route exact path={`${match.url}/receive`}>
          <TopUpAccount accountId={accountId} />
        </Route>
        <Route exact path={`${match.url}/send`}>
          <Send accountId={accountId} />
        </Route>
        <Route exact path={`${match.url}/exchange`}>
          <Exchange />
        </Route>
        <Route exact path={`${match.url}/rename`}>
          <Rename accountId={accountId} />
        </Route>
        <Route exact path={`${match.url}/export-private-key`}>
          <ExportPrivateKey accountId={accountId} />
        </Route>
        <Route exact path={`${match.url}/delete`}>
          <DeleteAccount accountId={accountId} />
        </Route>
        {windowSize.width > Breakpoints.md && match.params.accountId && (
          <Route path={match.url}>
            <Redirect to={`${match.url.replace(/\/$/, '')}/details`} />
          </Route>
        )}
      </Switch>
    </Page>
  );
};

export default withRouter(Account);
