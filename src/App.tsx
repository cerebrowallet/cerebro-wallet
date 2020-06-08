import React from 'react';

import Normalize from './styles/normalize';
import Globals from './styles/globals';

import LayoutContainer from './containers/LayoutContainer';
import Routes from './routes';
import SessionExpiredModal from './pages/signIn/SessionExpiredModal/SessionExpiredModal';
import Notifications from './components/shared/Notifications/Notifications';

const App: React.FC = () => {
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
