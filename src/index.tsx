import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Connect } from '@blockstack/connect';

import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';
import cerebroIcon from '../src/images/cerebro-icon-auth.svg';
import { userSession } from './utils/blockstack';

import App from './App';

const history = createBrowserHistory();
const store = configureStore(history);

const authOptions = {
  finished: () => history.push('/auth-callback'),
  appDetails: {
    name: 'Cerebro Wallet',
    icon: cerebroIcon,
  },
  userSession,
};

ReactDOM.render(
  <Provider store={store}>
    <Connect authOptions={authOptions}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Connect>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
