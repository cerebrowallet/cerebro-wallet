import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';
import ProfileDetails from './ProfileDetails';
import Settings from './Settings';
import Page, { PageLayouts } from '../../components/layout/Page/Page';

const ProfilePage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Page layout={PageLayouts.oneColumn} sidebarContent={<ProfileMenu />}>
      <Switch>
        <Route path={`${match.url}/details`}>
          <ProfileDetails />
        </Route>
        <Route path={`${match.url}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </Page>
  );
};

export default withRouter(ProfilePage);
