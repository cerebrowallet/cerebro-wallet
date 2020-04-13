import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router';

import { getAccountById } from '../../../store/account/selectors';
import { Breakpoints } from '../../../dictionaries';
import { useWindowSize } from '../../../utils/hooks';
import { config } from '../../../config';

import { AccountGoBackButton } from './styled';
import { AccountSidebar } from '../../layout/Sidebar';
import { ContainerTwoCols } from '../../layout/Container';
import { ContentTwoCols } from '../../layout/Content';

import AccountsList from '../AccountsList/AccountsList';
import AccountActions from '../AccountActions/AccountActions';
import Send from '../../shared/Send/Send';
import TopUpAccount from '../../shared/TopUpAccount/TopUpAccount';
import Exchange from '../../shared/Exchange/Exchange';
import Details from '../Details/Details';
import Rename from '../Rename';
import ExportPrivateKey from '../ExportPrivateKey';
import DeleteAccount from '../DeleteAccount';
import Loader from '../../shared/Loader/Loader';

const Account: React.FC<RouteComponentProps<{ accountId: string }>> = ({
  match,
}) => {
  const windowSize = useWindowSize();
  const { accountId } = match.params;
  const account = useSelector(getAccountById(accountId));

  if (!account) {
    return <Loader withMargin />;
  }

  return (
    <ContainerTwoCols>
      <ContentTwoCols>
        <AccountActions accountId={accountId} />
        <Switch>
          {windowSize.width > Breakpoints.md && match.params.accountId && (
            <Route exact path={match.url}>
              <Redirect to={`${match.url.replace(/\/$/, '')}/details`} />
            </Route>
          )}
          <Route exact path={`${match.url}/details`}>
            <Details accountId={accountId} />
          </Route>
          <Route exact path={`${match.url}/receive`}>
            <TopUpAccount accountId={accountId} />
          </Route>
          <Route exact path={`${match.url}/send`}>
            <Send account={accountId} />
          </Route>
          <Route exact path={`${match.url}/exchange`}>
            <Exchange />
          </Route>
          <Route exact path={`${match.url}/rename`}>
            <Rename accountId={accountId} />
          </Route>
          <Route exact path={`${match.url}/explorer`}>
            <a
              href={`${config.coins[account.coin].explorer}/address/${account.address}`}
            >
              Explorer
            </a>
          </Route>
          <Route exact path={`${match.url}/export-private-key`}>
            <ExportPrivateKey accountId={accountId} />
          </Route>
          <Route exact path={`${match.url}/delete`}>
            <DeleteAccount accountId={accountId} />
          </Route>
        </Switch>
        <AccountGoBackButton goTo="/" />
      </ContentTwoCols>
      <AccountSidebar>
        <AccountsList />
      </AccountSidebar>
    </ContainerTwoCols>
  );
};

export default withRouter(Account);
