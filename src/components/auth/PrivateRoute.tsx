import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
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
