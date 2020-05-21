import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { setUserData } from '../../store/user/actions';
import { userSession } from '../../utils/blockstack';

const AuthCallbackHandler: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession
        .handlePendingSignIn()
        .then((userData) => {
          dispatch(setUserData(userData));
          history.push('/');
        })
        .catch((e) => {
          // TODO log error && show notification
          history.push('/signin');
        });
    }
  }, [history, dispatch]);

  return null;
};

export default withRouter(AuthCallbackHandler);
