import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'
import { UserSession, AppConfig } from 'blockstack';

import Routes from './routes';

import { ApplicationState } from './store'

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });

interface Props {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<Props> = ({ store, history }) => {
  const [userData, setUserData] = useState<null | any>(null);

  // TODO enable authorization
  // useEffect(() => {
  //   if (userSession.isSignInPending()) {
  //     userSession.handlePendingSignIn().then((response) => {
  //       window.history.replaceState({}, document.title, "/");
  //       setUserData(response)
  //     });
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
