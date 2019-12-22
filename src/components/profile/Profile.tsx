import React from 'react';
import { Switch, Route } from 'react-router';

import ProfileMenu from './ProfileMenu';
import CornerCloseButton from '../shared/CornerCloseButton/CornerCloseButton';
import { ContentOneCol } from '../layout/Content';
import { ContainerOneCol } from '../layout/Container';
import Sidebar from '../layout/Sidebar';
import ProfileDetails from './ProfileDetails';
import Settings from './Settings';

const Profile: React.FC = () => {
  return (
    <ContainerOneCol>
      <ContentOneCol>
        <Switch>
          <Route path="/profile">
            <ProfileDetails />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
        <CornerCloseButton />
      </ContentOneCol>
      <Sidebar>
        <ProfileMenu />
      </Sidebar>
    </ContainerOneCol>
  );
};

export default Profile;
