import React from 'react';
import { Route, Redirect } from 'react-router';

const auth: { isAuthenticated: boolean } = { isAuthenticated: true };

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
