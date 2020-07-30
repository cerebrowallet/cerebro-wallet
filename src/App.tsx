import React from 'react';
import { Connect } from '@blockstack/connect';
import { userSession } from './utils/blockstack';
import { useDispatch } from 'react-redux';

import cerebroIcon from './images/cerebro-icon-auth.svg';

import Normalize from './styles/normalize';
import Globals from './styles/globals';
import { handleAuthCallback } from './store/user/actions';

import LayoutContainer from './containers/LayoutContainer';
import Routes from './routes';
import SessionExpiredModal from './pages/signIn/SessionExpiredModal/SessionExpiredModal';
import Notifications from './components/shared/Notifications/Notifications';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const authOptions = {
    finished: () => dispatch(handleAuthCallback()),
    appDetails: {
      name: 'Cerebro Wallet',
      icon: cerebroIcon,
    },
    userSession,
  };

  return (
    <Connect authOptions={authOptions}>
      <LayoutContainer>
        <Normalize />
        <Globals />
        <Routes />
        <SessionExpiredModal />
        <Notifications />
      </LayoutContainer>
    </Connect>
  );
};

export default App;
