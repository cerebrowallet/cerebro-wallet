import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

import { userSession } from '../../utils/blockstack';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userSession.isUserSignedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
