import React from 'react';
import { useLocation } from 'react-router';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect,
} from 'react-router-dom';

import { ContainerOneCol } from '../layout/Container';
import { ContentOneCol } from '../layout/Content';
import Sidebar from '../layout/Sidebar';

import FeaturesSidebarMenu from './FeaturesSidebarMenu';
import TopUpAccount from '../shared/TopUpAccount/TopUpAccount';
import Send from '../shared/Send/Send';
import Exchange from '../shared/Exchange/Exchange';
import TransactionDetails from '../shared/TransactionDetails/TransactionDetails';
import Activity from '../shared/Activity/Activity';
import CornerCloseButton from '../shared/CornerCloseButton/CornerCloseButton';

const Features: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  const location = useLocation();

  return (
    <ContainerOneCol>
      <ContentOneCol>
        <Switch>
          <Route exact path="/features">
            <Redirect to="/features/receive" />
          </Route>
          <Route path={`${match.path}/receive`}>
            <TopUpAccount />
          </Route>
          <Route path={`${match.path}/send`}>
            <Send />
          </Route>
          <Route path={`${match.path}/exchange`}>
            <Exchange />
          </Route>
          <Route path={`${match.path}/activity`}>
            <TransactionDetails />
          </Route>
        </Switch>
        <CornerCloseButton />
      </ContentOneCol>
      <Sidebar>
        {location.pathname === `${match.path}/activity` ? (
          <Activity />
        ) : (
          <FeaturesSidebarMenu />
        )}
      </Sidebar>
    </ContainerOneCol>
  );
};

export default withRouter(Features);
