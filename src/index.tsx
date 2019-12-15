import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import './styles/index.scss';

import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

import App from './App';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById('root')
);

serviceWorker.unregister();
