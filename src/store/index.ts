import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { userReducer } from './user/reducer';
import userSaga from './user/sagas';
import { UserState } from './user/types';

export interface ApplicationState {
  user: UserState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
