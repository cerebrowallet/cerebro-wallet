import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userSession } from '../../utils/blockstack';
import {
  getProfile,
  getSettings,
  setUserData,
} from '../../store/user/actions';
import { getAccounts, getExchangeRates } from '../../store/account/actions';

interface Props {
  children: React.ReactNode;
}

const AuthenticatedWrapper: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      dispatch(getProfile());
      dispatch(getSettings());
      dispatch(setUserData(userSession.loadUserData()));
      dispatch(getAccounts());
      dispatch(getExchangeRates());
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthenticatedWrapper;
