import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userSession } from '../../utils/blockstack';
import {
  getProfileData,
  getSettings,
  setUserData,
} from '../../store/user/actions';
import { getAccounts } from '../../store/account/actions';

interface Props {
  children: React.ReactNode;
}

const AuthenticatedWrapper: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      dispatch(getProfileData());
      dispatch(getSettings());
      dispatch(setUserData(userSession.loadUserData()));
      dispatch(getAccounts());
    }
  }, []);

  return <>{children}</>;
};

export default AuthenticatedWrapper;
