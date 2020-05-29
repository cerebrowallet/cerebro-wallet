import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

interface Props extends RouteProps {
  canVisit: boolean;
}

const AccountHolderRoute: React.FC<Props> = ({
  canVisit,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location, match }) =>
        canVisit ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${match.url.replace(/\/$/, '')}/details`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AccountHolderRoute;
