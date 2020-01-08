import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Normalize from './styles/normalize';
import Globals from './styles/globals';

import { userSession } from './utils/blockstack';
import { setUserData } from './store/user/actions';

import LayoutContainer from './containers/LayoutContainer';
import Routes from './routes';
import SessionExpiredModal from './components/auth/SessionExpiredModal/SessionExpiredModal';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const {
        username,
        email,
        identityAddress,
        profile: { name, image },
      } = userSession.loadUserData();

      dispatch(
        setUserData({
          username,
          email,
          id: identityAddress,
          name,
          avatarUrl: image.length > 0 ? image[0].contentUrl : undefined,
        })
      );
    }
  }, []);

  return (
    <LayoutContainer>
      <Normalize />
      <Globals />
      <Routes />
      <SessionExpiredModal />
    </LayoutContainer>
  );
};

export default App;
