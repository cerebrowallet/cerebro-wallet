import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Normalize from './styles/normalize';
import Globals from './styles/globals';

import { userSession } from './utils/blockstack';
import { setUserData, getProfileData, getSettings } from './store/user/actions';

import LayoutContainer from './containers/LayoutContainer';
import Routes from './routes';
import SessionExpiredModal from './components/auth/SessionExpiredModal/SessionExpiredModal';
import Notifications from './components/shared/Notifications/Notifications';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      dispatch(getProfileData());
      dispatch(getSettings());
      dispatch(setUserData(userSession.loadUserData()));
    }
  }, []);

  return (
    <LayoutContainer>
      <Normalize />
      <Globals />
      <Routes />
      <SessionExpiredModal />
      <Notifications />
    </LayoutContainer>
  );
};

export default App;
