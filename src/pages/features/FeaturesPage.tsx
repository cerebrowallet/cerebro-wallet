import React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';

import Page, { PageLayouts } from '../../components/layout/Page/Page';
import FeaturesSidebarMenu from './FeaturesMenu';
import TopUpAccount from '../../components/shared/TopUpAccount/TopUpAccount';
import Send from '../../components/shared/Send/Send';
import Exchange from '../../components/shared/Exchange/Exchange';

const FeaturesPage: React.FC<RouteComponentProps<{}>> = ({ match }) => {
  return (
    <Page
      layout={PageLayouts.oneColumn}
      sidebarContent={<FeaturesSidebarMenu />}
    >
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
      </Switch>
    </Page>
  );
};

export default withRouter(FeaturesPage);
