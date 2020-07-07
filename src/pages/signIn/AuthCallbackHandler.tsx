import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { userSession } from '../../utils/blockstack';
import { chooseRandomEmoji } from '../../store/user/actions';

import Loader from '../../components/shared/Loader/Loader';

const AuthCallbackHandler: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userSession.loadUserData()) {
      dispatch(chooseRandomEmoji({ isAuthCallback: true }));
      history.push('/');
    } else {
      history.push('/signin');
    }
  }, [dispatch, history]);

  return <Loader />;
};

export default AuthCallbackHandler;
