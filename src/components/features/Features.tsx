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
import Activity from '../shared/Activity/Activity';
import GoBackButton from '../shared/GoBackButton/GoBackButton';
import FeaturesActivity from './FeaturesActivity';

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
          <Route path={`/features/activity/:accountId?/tx/:transactionHash?`}>
            <FeaturesActivity />
          </Route>
        </Switch>
        <GoBackButton />
      </ContentOneCol>
      <Sidebar>
        {location.pathname.includes(`${match.path}/activity`) ? (
          <Activity />
        ) : (
          <FeaturesSidebarMenu />
        )}
      </Sidebar>
    </ContainerOneCol>
  );
};

export default withRouter(Features);
