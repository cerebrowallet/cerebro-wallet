import React from 'react';
import { Switch, Route } from 'react-router';

import { ContainerAuth } from '../layout/Container';
import { ContentAuth } from '../layout/Content';
import Sidebar from '../layout/Sidebar';
import AuthSidebar from './AuthSidebar/AuthSidebar';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth: React.FC = () => {
  return (
    <ContainerAuth>
      <ContentAuth>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </ContentAuth>
      <Sidebar>
        <AuthSidebar />
      </Sidebar>
    </ContainerAuth>
  );
};

export default Auth;
