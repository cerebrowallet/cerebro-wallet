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
        .then(
          ({ username, email, identityAddress, profile: { name, image } }) => {
            dispatch(
              setUserData({
                username,
                email,
                id: identityAddress,
                name,
                avatarUrl: image.length > 0 ? image[0].contentUrl : undefined,
              })
            );
            history.push('/');
          }
        );
    }
  }, []);

  return null;
};

export default withRouter(AuthCallbackHandler);
