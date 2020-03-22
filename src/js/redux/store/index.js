import { createStore, applyMiddleware, compose } from "redux";
import createReducer from "../reducer";
import logger from "redux-logger";
import sagaMiddleware from "redux-saga";
import { RootSaga } from "../saga/rootSaga";
import "regenerator-runtime/runtime";
const createSagaMiddleware = sagaMiddleware();
const store = createStore(
  createReducer(),
  {},
  compose(applyMiddleware(logger, createSagaMiddleware))
);
createSagaMiddleware.run(RootSaga);
store.asyncReducers = {};
export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};
export default store;
