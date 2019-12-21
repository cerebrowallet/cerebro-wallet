import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';

import Normalize from './styles/normalize';
import Globals from './styles/globals';
import Routes from './routes';

import { ApplicationState } from './store';

import LayoutContainer from './containers/LayoutContainer';

interface Props {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<Props> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LayoutContainer>
          <Normalize />
          <Globals />
          <Routes />
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
