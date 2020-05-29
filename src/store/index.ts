import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { layoutReducer } from './layout/reducer';
import { LayoutState } from './layout/types';

import { userReducer } from './user/reducer';
import userSaga from './user/sagas/index';
import { UserState } from './user/types';

import { accountReducer } from './account/reducer';
import accountSaga from './account/sagas/index';
import { AccountState } from './account/types';

export interface ApplicationState {
  user: UserState;
  router: RouterState;
  layout: LayoutState;
  account: AccountState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    layout: layoutReducer,
    account: accountReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(userSaga), fork(accountSaga)]);
}
